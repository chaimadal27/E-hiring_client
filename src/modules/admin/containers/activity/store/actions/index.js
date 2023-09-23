import { ACTIONS, ENDPOINTS } from "./../constants"
import { CALL_API, HTTP_METHODS } from "./../../../../../../constants"


export const clearStore = () =>
({
  type: ACTIONS.CLEAR_ACTIVITY
})


export const fetchActivities = (params) => ({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.FETCH_ACTIVITIES_INIT,
      success: ACTIONS.FETCH_ACTIVITIES_SUCCEDED,
      fail: ACTIONS.FETCH_ACTIVITIES_FAILED,
    },
    endpoint: ENDPOINTS.ACTIVITIES,
    params,
    method: HTTP_METHODS.GET,
    auth: true,
  }
})

export const fetchActivity = ({ param }) => ({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.FETCH_ACTIVITY_INIT,
      success: ACTIONS.FETCH_ACTIVITY_SUCCEDED,
      fail: ACTIONS.FETCH_ACTIVITY_FAILED,
    },
    endpoint: ENDPOINTS.ACTIVITY.replace(":param", param),
    method: HTTP_METHODS.GET,
    auth: true,
  }
})

export const createActivity = (payload) => ({
  type: CALL_API,
  payload,
  meta: {
    actions: {
      init: ACTIONS.CREATE_ACTIVITY_INIT,
      success: ACTIONS.CREATE_ACTIVITY_SUCCEDED,
      fail: ACTIONS.CREATE_ACTIVITY_FAILED,
    },
    endpoint: ENDPOINTS.ACTIVITIES,
    method: HTTP_METHODS.POST,
    auth: true,
  }
})

export const editActivity = ({ param }, payload) => ({
  type: CALL_API,
  payload,
  meta: {
    actions: {
      init: ACTIONS.EDIT_ACTIVITY_INIT,
      success: ACTIONS.EDIT_ACTIVITY_SUCCEDED,
      fail: ACTIONS.EDIT_ACTIVITY_FAILED,
    },
    endpoint: ENDPOINTS.ACTIVITY.replace(":param", param),
    method: HTTP_METHODS.PATCH,
    auth: true,
  }
})

export const deleteActivity = ({ param }) => ({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.DELETE_ACTIVITY_INIT,
      success: ACTIONS.DELETE_ACTIVITY_SUCCEDED,
      fail: ACTIONS.DELETE_ACTIVITY_FAILED,
    },
    endpoint: ENDPOINTS.ACTIVITY_DELETE.replace(":param", param),
    method: HTTP_METHODS.DELETE,
    auth: true,
  }
})

export const disableActivity = ({ param }) => ({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.DISABLE_ACTIVITY_INIT,
      success: ACTIONS.DISABLE_ACTIVITY_SUCCEDED,
      fail: ACTIONS.DISABLE_ACTIVITY_FAILED,
    },
    endpoint: ENDPOINTS.ACTIVITY_DISABLE.replace(":param", param),
    method: HTTP_METHODS.DELETE,
    auth: true,
  }
})

export const enableActivity = ({ param }) => ({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.ENABLE_ACTIVITY_INIT,
      success: ACTIONS.ENABLE_ACTIVITY_SUCCEDED,
      fail: ACTIONS.ENABLE_ACTIVITY_FAILED,
    },
    endpoint: ENDPOINTS.ACTIVITY_ENABLE.replace(":param", param),
    method: HTTP_METHODS.DELETE,
    auth: true,
  }
})
export const deleteActivities = () => ({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.DELETE_ALL_ACTIVITIES_INIT,
      success: ACTIONS.DELETE_ALL_ACTIVITIES_SUCCEDED,
      fail: ACTIONS.DELETE_ALL_ACTIVITIES_FAILED,
    },
    endpoint: ENDPOINTS.ACTIVITIES_DELETE_ALL,
    method: HTTP_METHODS.DELETE,
    auth: true,
  }
})
export const disableActivities = () => ({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.DISABLE_ALL_ACTIVITIES_INIT,
      success: ACTIONS.DISABLE_ALL_ACTIVITIES_SUCCEDED,
      fail: ACTIONS.DISABLE_ALL_ACTIVITIES_FAILED,
    },
    endpoint: ENDPOINTS.ACTIVITIES_DELETE_ALL,
    method: HTTP_METHODS.DELETE,
    auth: true,
  }
})
export const enableActivities = () => ({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.ENABLE_ALL_ACTIVITIES_INIT,
      success: ACTIONS.ENABLE_ALL_ACTIVITIES_SUCCEDED,
      fail: ACTIONS.ENABLE_ALL_ACTIVITIES_FAILED,
    },
    endpoint: ENDPOINTS.ACTIVITIES_ENABLE_ALL,
    method: HTTP_METHODS.DELETE,
    auth: true,
  }
}) 
