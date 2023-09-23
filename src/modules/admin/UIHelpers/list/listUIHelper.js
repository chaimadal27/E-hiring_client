import _ from "lodash"

import { HTTP_METHODS } from "./../../../../constants"
import { makeExternalCall, makeCall } from "./../../../../helpers"
import { store } from "./../../../../configureStore"

const FETCH_LIST_ENDPOINT = "/api/options/list?name=:param"


const formatOptions = (options) => {
    let values = {}
    options.map((option) => {
        values[option.rank] = option.value
    })
    return values;
}


export const getOptions = (param) => async (callback) => {
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
         console.log(result)
    } else {
        result = resp.data
        //{ console.log(result) }
    }

    callback(formatOptions(result))

}
const formatLists = (options) => options.map((option) => ({
    label: option.value,
    value: option.rank,
}))


export const listUIHelper = (param) => async (callback) => {
    try {
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
        callback(formatLists(result));
    }
    catch (e) {
        console.log(e.err)
        return []
    }
}