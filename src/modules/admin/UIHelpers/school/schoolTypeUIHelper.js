import _ from "lodash"

import { HTTP_METHODS } from "./../../../../constants"
import { makeExternalCall } from "./../../../../helpers"
import { isRLTLang } from "../../../../i18n"


const FETCH_SCHOOL_TYPEES_ENDPOINT = "/api/pa/Reference/PartnerTypes/all"
const FETCH_SCHOOL_TYPE_ENDPOINT = "/api/pa/Reference/PartnerType/:param"

const formatSchoolTypes = (schoolType) => schoolType.map((schoolType) =>
({
  label: isRLTLang() ? schoolType.labelAr : schoolType.labelFr,
  value: schoolType.id
}))


export const schoolTypeUIHelper = (keyword, callback, param) => {

  let endpoint = FETCH_SCHOOL_TYPEES_ENDPOINT
  let query = {}
  if (!_.isEmpty(keyword)) {
    query = { q: keyword }
  }

  if (_.isNumber(param)) {
    endpoint = FETCH_SCHOOL_TYPE_ENDPOINT.replace(":param", param)
  }

  return new Promise((resolve, reject) =>
    makeExternalCall(HTTP_METHODS.GET, endpoint, {}, {}, query)
      .then(resp => {
        let result = {}
        if (_.isPlainObject(resp.data)) {
          result = [resp.data]
        } else {
          result = resp.data
        }
        resolve(callback(formatSchoolTypes(result)))
      })
      .catch(err => reject(err.response))
  )
}
