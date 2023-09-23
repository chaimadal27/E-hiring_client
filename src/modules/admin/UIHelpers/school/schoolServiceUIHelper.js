import _ from "lodash"

import { HTTP_METHODS } from "./../../../../constants"
import { makeCall } from "./../../../../helpers"
import { isRLTLang } from "../../../../i18n"
import { store } from "./../../../../configureStore"


const FETCH_SCHOOL_SERVICES_ENDPOINT = "/api/services/all"
//const FETCH_SCHOOL_SERVICE_ENDPOINT = "/api/services/:param"

const formatSchoolServices = (schoolServices) => schoolServices.map((schoolService) =>
({
  label: isRLTLang() ? schoolService.labelAr : schoolService.labelFr,
  value: schoolService.id
})
)


export const schoolServicesUIHelper = (callback) => {

  let endpoint = FETCH_SCHOOL_SERVICES_ENDPOINT
  const { token } = store.getState().common.auth || {}

  let query = {}
  /*if (!_.isEmpty(keyword)){
    query = { q: keyword }
  }
  
  if (_.isNumber(param)){
    endpoint = FETCH_SCHOOL_SERVICE_ENDPOINT.replace(":param", param)
  }*/

  return new Promise((resolve, reject) =>
    makeCall(HTTP_METHODS.GET, endpoint, {}, { 'Authorization': `Bearer  ${token.access}` }, query)
      .then(resp => {
        let result = {}
        if (_.isPlainObject(resp.data)) {
          result = [resp.data]
        } else {
          result = resp.data
        }
        resolve(callback(formatSchoolServices(result)))
      })
      .catch(err => reject(err.response))
  )
}
