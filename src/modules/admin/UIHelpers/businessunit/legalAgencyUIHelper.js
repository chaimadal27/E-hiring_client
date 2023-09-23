import _ from "lodash"
import { HTTP_METHODS } from "../../../../constants"
import { makeCall } from "../../../../helpers"
import { store } from "../../../../configureStore"

const FETCH_LEGAL_AGENCIES_ENDPOINT = "/api/legal-agencies/all"
const formatManagers = (legalAgencies) => legalAgencies.map((legalAgency) => ({
      label: legalAgency.agencyName,
      value: legalAgency.id 
  }))




export const legalAgencyUIHelper = (callback=f=>f) => {

  const { token } = store.getState().common.auth || {}

  return new Promise((resolve, reject) =>
    makeCall(HTTP_METHODS.GET, FETCH_LEGAL_AGENCIES_ENDPOINT, {}, {'Authorization': `Bearer  ${token.access}`}, {} )
    .then(resp => resolve(callback(formatManagers( resp.data.results ))))
    .catch(() => reject(callback([])))
  )
}