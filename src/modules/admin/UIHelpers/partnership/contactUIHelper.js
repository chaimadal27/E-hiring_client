import { HTTP_METHODS } from "./../../../../constants"
import { makeCall } from "./../../../../helpers"
import { store } from "./../../../../configureStore"
import { isRLTLang } from "../../../../i18n"

const FETCH_CONTACTS_ENDPOINT = "/api/contacts/list"


const formatContacts= (contacts) => contacts.map((contact) => ({
    label: !isRLTLang() ? `${contact.firstNameFr} ${contact.lastNameFr}` : `${contact.firstNameFr} ${contact.lastNameFr}`,
    value: contact.id,
    ...contact
}))

export const contactUIHelper = (callback = f => f) => {

    const { token } = store.getState().common.auth || {}

    return new Promise((resolve, reject) =>
        makeCall(HTTP_METHODS.GET, FETCH_CONTACTS_ENDPOINT, {}, { 'Authorization': `Bearer ${token.access}` }, {})
            .then(resp => resolve(callback(formatContacts(resp.data))))
            .catch(() => reject(callback([])))
    )
}
