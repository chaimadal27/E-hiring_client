import _ from "lodash"

import { HTTP_METHODS } from "./../../../../constants"
import { makeExternalCall } from "./../../../../helpers"
import { isRLTLang } from "../../../../i18n"


const FETCH_PARTNERSHIP_ACTIVITY_ENDPOINT = "/api/options/list?name=Activity entreprise"

const formatPartnershipActivity = (partnershipA) => partnershipType.map((partnershipType) =>
({
    label: partnershipType.labelFr,
    value: partnershipType.id
}))


const getOptions = async () => {
    var options = []
    let endpoint = FETCH_PARTNERSHIP_ACTIVITY_ENDPOINT
    const { token } = store.getState().common.auth || {}
    let query = {}

    await new Promise((resolve, reject) =>
        makeCall(HTTP_METHODS.GET, endpoint, {}, { 'Authorization': `Bearer  ${token.access}` }, query)
            .then(resp => {
                let result = {}
                if (_.isPlainObject(resp.data)) {
                    result = [resp.data]
                    //{ console.log(result) }
                } else {
                    result = resp.data
                    // { console.log(result) }
                }
                options = formatLists(result)
            })
            .catch(err => reject(err.response))
    )
    return options;
}


export const partnershipTypeUIHelper = (keyword, callback, param) => {

    let endpoint = FETCH_PARTNERSHIP_TYPEES_ENDPOINT
    let query = {}
    if (!_.isEmpty(keyword)) {
        query = { q: keyword }
    }

    if (_.isNumber(param)) {
        endpoint = FETCH_PARTNERSHIP_TYPE_ENDPOINT.replace(":param", param)
    }

    return new Promise((resolve, reject) =>
        makeExternalCall(HTTP_METHODS.GET, endpoint, {}, {}, query)
            .then(resp => {
                let result = {}
                if (_.isPlainObject(resp.data)) {
                    result = [resp.data]
                } else {
                    result = resp.data
                }
                resolve(callback(formatPartnershipActivity(result)))
            })
            .catch(err => reject(err.response))
    )
}
