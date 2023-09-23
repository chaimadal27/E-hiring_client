import _ from "lodash"

import { HTTP_METHODS } from "./../../../../constants"
import { makeExternalCall, makeCall } from "./../../../../helpers"
import { store } from "./../../../../configureStore"

const FETCH_LIST_ENDPOINT = "/api/offers/list"

const formatOffers = (options) => options.map((option) => ({
    label: option.title + " (" + option.clientDetails.nameFr + ")",
    value: option.id,
}))

export const offersListUIHelper = async (callback) => {
    try {
        let endpoint = FETCH_LIST_ENDPOINT
        const { token } = store.getState().common.auth || {}
        let query = {}
        let result = []
        const resp = await makeCall(HTTP_METHODS.GET, endpoint, {}, { 'Authorization': `Bearer  ${token.access}` }, query)
        if (_.isPlainObject(resp.data)) {
            result = [resp.data]
            { console.log(result) }
        } else {
            result = resp.data
            //{ console.log(result) }
        }
        callback(formatOffers(result));
    }
    catch (e) {
        console.log(e.err)
        return []
    }
}

