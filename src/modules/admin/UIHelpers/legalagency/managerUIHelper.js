import _ from "lodash"
import { HTTP_METHODS } from "../../../../constants"
import { makeCall } from "../../../../helpers"
import { store } from "../../../../configureStore"

const FETCH_USERS_ENDPOINT = "/api/manager"
const formatManagers = (managers) => managers.map((manager) => ({
      label: manager.user.firstName,
      value: manager.user.id 
  }))




export const managerUIHelper = (callback=f=>f) => {

  const { token } = store.getState().common.auth || {}

  return new Promise((resolve, reject) =>
    makeCall(HTTP_METHODS.GET, FETCH_USERS_ENDPOINT, {}, {'Authorization': `Bearer  ${token.access}`}, {} )
    .then(resp => resolve(callback(formatManagers( resp.data.results ))))
    .catch(() => reject(callback([])))
  )
}