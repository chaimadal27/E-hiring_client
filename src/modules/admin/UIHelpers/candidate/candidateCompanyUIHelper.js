import _ from "lodash"

import { HTTP_METHODS } from "./../../../../constants"
import { makeExternalCall, makeCall } from "./../../../../helpers"
import { store } from "./../../../../configureStore"

const FETCH_LIST_ENDPOINT = "/api/partnerships/list"

const formatCompanies = (options) => options.map((option) => ({
    label: option.nameFr,
    value: option.id,
}))

export const candidateCompanyUIHelper = async (callback) => {
    try {
        let endpoint = FETCH_LIST_ENDPOINT
        const { token } = store.getState().common.auth || {}
        let query = {}
        let result = []
        const resp = await makeCall(HTTP_METHODS.GET, endpoint, {}, { 'Authorization': `Bearer  ${token.access}` }, query)
        if (_.isPlainObject(resp.data)) {
            result = [resp.data]
            //{ console.log(result) }
        } else {
            result = resp.data
            //{ console.log(result) }
        }
        callback(formatCompanies(result));
    }
    catch (e) {
        console.log(e.err)
        return []
    }
}


const formatOptions = (options) => {
    let values = {}
    options.map((option) => {
        values[option.id] = option.nameFr
    })
    return values;
}


export const candidateCompanyValuesUIHelper = (param) => async (callback) => {
    let endpoint = FETCH_LIST_ENDPOINT
    const { token } = store.getState().common.auth || {}
    let query = {}

    if (!_.isEmpty(param)) {
        endpoint = FETCH_LIST_ENDPOINT.replace(":param", param)
    }

    let result = []
    const resp = await makeCall(HTTP_METHODS.GET, endpoint, {}, { 'Authorization': `Bearer  ${token.access}` }, query)
    if (_.isPlainObject(resp.data)) {
        result = [resp.data]
        //{ console.log(result) }
    } else {
        result = resp.data
        //{ console.log(result) }
    }
    callback(formatOptions(result))

}