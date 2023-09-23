import _ from "lodash"

import { HTTP_METHODS } from "./../../../../constants"
import { makeExternalCall } from "./../../../../helpers"
import { isRLTLang } from "../../../../i18n"


const FETCH_SCHOOL_THEMESES_ENDPOINT = "/api/pa/Convention-contract-Types/all"
const FETCH_SCHOOL_THEMES_ENDPOINT = "/api/pa/Convention-contract-Type/:param"

const formatSchoolThemes = (schoolThemes) => schoolThemes.map((schoolTheme) =>
({
  label: isRLTLang() ? schoolTheme.thematicAr : schoolTheme.thematicFr,
  value: schoolTheme.id
})
)


export const schoolThemesUIHelper = (keyword, callback, param) => {

  let endpoint = FETCH_SCHOOL_THEMESES_ENDPOINT
  let query = {}
  if (!_.isEmpty(keyword)) {
    query = { q: keyword }
  }

  if (_.isNumber(param)) {
    endpoint = FETCH_SCHOOL_THEMES_ENDPOINT.replace(":param", param)
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
        resolve(callback(formatSchoolThemes(result)))
      })
      .catch(err => reject(err.response))
  )
}
