import _ from "lodash"

import { HTTP_METHODS } from "./../../../../constants"
import { makeCall } from "./../../../../helpers"
import { store } from "./../../../../configureStore"

const FETCH_ACTIVITY_TYPES_ENDPOINT = "/api/activity-type/all"


const formatActivityTypes = (activityTypes) => activityTypes.map((activityType) => ({ 
	label: activityType.activityTypeName, 
	value: activityType.id 
}))


export const activityTypeUIHelper = (callback=f=>f) => {

  const { token } = store.getState().common.auth || {}

  return new Promise((resolve, reject) =>
    makeCall(HTTP_METHODS.GET, FETCH_ACTIVITY_TYPES_ENDPOINT, {}, {'Authorization': `Bearer  ${token.access}`}, {} )
    .then(resp => resolve(callback(formatActivityTypes( resp.data ))))
    .catch(() => reject(callback([])))
  )
}
