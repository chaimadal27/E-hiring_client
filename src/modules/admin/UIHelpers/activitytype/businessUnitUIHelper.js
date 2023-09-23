import _ from "lodash"

import { HTTP_METHODS } from "./../../../../constants"
import { makeCall } from "./../../../../helpers"
import { store } from "./../../../../configureStore"

const FETCH_BUSINESS_UNITS_ENDPOINT = "/api/business-units/all"


const formatBusinessUnits = (businessUnits) => businessUnits.map((businessUnit) => ({ 
	label: businessUnit.businessUnitName, 
	value: businessUnit.id 
}))


export const businessUnitUIHelper = (callback=f=>f) => {

  const { token } = store.getState().common.auth || {}

  return new Promise((resolve, reject) =>
    makeCall(HTTP_METHODS.GET, FETCH_BUSINESS_UNITS_ENDPOINT, {}, {'Authorization': `Bearer  ${token.access}`}, {} )
    .then(resp => resolve(callback(formatBusinessUnits( resp.data ))))
    .catch(() => reject(callback([])))
  )
}
