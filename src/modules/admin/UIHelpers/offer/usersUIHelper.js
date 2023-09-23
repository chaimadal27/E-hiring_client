import _ from "lodash"

import { HTTP_METHODS } from "./../../../../constants"
import { makeCall } from "./../../../../helpers"
import { store } from "./../../../../configureStore"
import { isRLTLang } from "../../../../i18n"

const FETCH_USERS_ENDPOINT = "/api/users/all"

const formatUsers = (options) => options.map((option) => ({
    label: !isRLTLang() ? `${option.firstName} ${option.lastName}` : `${option.firstNameAr} ${option.lastNameAr}`,
    value: option.id,
}))

export const usersUIHelper = () => async (callback) => {
    try {
        let endpoint = FETCH_USERS_ENDPOINT
        const { token } = store.getState().common.auth || {}
        let query = {}
        let result = []
        const resp = await makeCall(HTTP_METHODS.GET, endpoint, {}, { 'Authorization': `Bearer  ${token.access}` }, query)
        if (_.isPlainObject(resp.data)) {
            result = [resp.data]
            //{ console.log(result) }
        } else {
            result = resp.data
            { console.log(result) }
        }
        callback(formatUsers(result));
    }
    catch (e) {
        console.log(e.err)
        return []
    }
}