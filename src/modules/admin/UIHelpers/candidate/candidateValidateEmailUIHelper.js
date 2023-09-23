import _ from "lodash"

import { HTTP_METHODS } from "./../../../../constants"
import { makeExternalCall, makeCall } from "./../../../../helpers"
import { store } from "./../../../../configureStore"

const FETCH_LIST_ENDPOINT = "/api/candidates/validate_email?email=:param"

const testEmail = (result) => {
    return result
}

export const candidateValidateEmailUIHelper = async (param) => {
    try {
        let endpoint = FETCH_LIST_ENDPOINT
        const { token } = store.getState().common.auth || {}
        let query = {}

        if (!_.isEmpty(param)) {
            endpoint = FETCH_LIST_ENDPOINT.replace(":param", param)
        }
        let result = []
        const resp = await makeCall(HTTP_METHODS.GET, endpoint, {}, { 'Authorization': `Bearer  ${token.access}` }, query)
        result = resp.data
        { console.log(result) }
        return result
        //callback(testEmail(result));
    }
    catch (e) {
        //console.log(e.err)
        return false
    }
}