import _ from "lodash"

import { HTTP_METHODS } from "./../../../../constants"
import { makeExternalCall, makeCall } from "./../../../../helpers"
import { store } from "./../../../../configureStore"

const FETCH_LIST_ENDPOINT = "/api/schools/list"

const formatSchools = (options) => options.map((option) => ({
    label: option.shortNameFr,
    value: option.id,
}))

export const candidateSchoolUIHelper = () => async (callback) => {
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
        callback(formatSchools(result));
    }
    catch (e) {
        console.log(e.err)
        return []
    }
}

