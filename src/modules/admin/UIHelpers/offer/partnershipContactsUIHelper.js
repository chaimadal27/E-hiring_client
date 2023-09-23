import _ from "lodash"

import { HTTP_METHODS } from "./../../../../constants"
import { makeExternalCall, makeCall } from "./../../../../helpers"
import { store } from "./../../../../configureStore"

const FETCH_COMPANY_CONTACTS_ENDPOINT = "/api/contacts/list?id=:param"
const FETCH_CONTACTS_ENDPOINT = "/api/contacts/list"

const responsable = (resp) => {
    return resp ? ' (Responsable)' : ''
}

const formatContacts = (options) => options.map((option) => ({
    label: option.firstNameFr + " " + option.lastNameFr + responsable(option.isPrincipal),
    value: option.id,
}))

export const partnershipContactsUIHelper = async (callback, client) => {
    try {
        let endpoint = FETCH_COMPANY_CONTACTS_ENDPOINT
        if (_.isInteger(client)) {
            console.log(client)
            endpoint = FETCH_COMPANY_CONTACTS_ENDPOINT.replace(":param", client)

            const { token } = store.getState().common.auth || {}
            let query = {}
            let result = []
            const resp = await makeCall(HTTP_METHODS.GET, endpoint, {}, { 'Authorization': `Bearer  ${token.access}` }, query)
            if (_.isPlainObject(resp.data)) {
                result = [resp.data]
            } else {
                result = resp.data
            }
            callback(formatContacts(result));
        }
    }
    catch (e) {
        console.log(e.err)
        return []
    }
}

export const partnershipContactsDisplayUIHelper = async (callback) => {
    try {
        let endpoint = FETCH_CONTACTS_ENDPOINT
        const { token } = store.getState().common.auth || {}
        let query = {}
        let result = []
        const resp = await makeCall(HTTP_METHODS.GET, endpoint, {}, { 'Authorization': `Bearer  ${token.access}` }, query)
        if (_.isPlainObject(resp.data)) {
            result = [resp.data]
        } else {
            result = resp.data
        }
        callback(formatContacts(result));
    }

    catch (e) {
        console.log(e.err)
        return []
    }
}