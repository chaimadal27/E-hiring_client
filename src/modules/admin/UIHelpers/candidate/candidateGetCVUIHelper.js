import _ from "lodash"

import { HTTP_METHODS } from "./../../../../constants"
import { makeExternalCall, makeCall } from "./../../../../helpers"
import { store } from "./../../../../configureStore"

const FETCH_CV_ENDPOINT = "/api/candidates/getCV/:param"



export const candidateGetCVUIHelper = async (param) => {
    try {
        let endpoint = FETCH_CV_ENDPOINT
        const { token } = store.getState().common.auth || {}
        let query = {}

        if (!_.isEmpty(param)) {
            endpoint = FETCH_CV_ENDPOINT.replace(":param", param)
        }
        let result = []
        const resp = await makeCall(HTTP_METHODS.GET, endpoint, {}, { 'Authorization': `Bearer  ${token.access}` }, query)
        result = resp.data
        const documents = result.documentSet
        let cv = ""
        documents.map((document) => {
            if (document.type == 1) {
                cv = document.file
            }
        })
        return cv
        //callback(testEmail(result));
    }
    catch (e) {
        //console.log(e.err)
        return ""
    }
}