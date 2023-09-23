import _ from "lodash"

import { HTTP_METHODS } from "./../../../../constants"
import { makeExternalCall, makeCall } from "./../../../../helpers"
import { store } from "./../../../../configureStore"
import { isRLTLang } from "../../../../i18n"

const FETCH_RECRUITERS_ENDPOINT = "/api/offers/recruiters/list?id=:param"


const formatRecruiters = (options) => options.map((option) => ({
    label: !isRLTLang() ? `${option.firstName} ${option.lastName}` : `${option.firstNameAr} ${option.lastNameAr}`,
    value: option.id,
}))

export const offerRecruitersUIHelper = async (callback, offer) => {
    try {
        let endpoint = FETCH_RECRUITERS_ENDPOINT
        if (_.isInteger(offer)) {
            endpoint = FETCH_RECRUITERS_ENDPOINT.replace(":param", offer)


            const { token } = store.getState().common.auth || {}
            let query = {}
            let result = []
            const resp = await makeCall(HTTP_METHODS.GET, endpoint, {}, { 'Authorization': `Bearer  ${token.access}` }, query)
            if (_.isPlainObject(resp.data)) {
                result = [resp.data]
                { console.log(result) }
            } else {
                result = resp.data
                { console.log(result) }
            }
            callback(formatRecruiters(result));
        }
    }
    catch (e) {
        console.log(e.err)
        return []
    }
}