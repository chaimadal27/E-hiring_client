import { ACTIONS, ENDPOINTS } from "./../constants"
import { CALL_API, HTTP_METHODS } from "./../../../../../../constants"


export const clearStore = () =>
({
  type: ACTIONS.CLEAR_JOB
})


export const fetchJobs = (params) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.FETCH_JOBS_INIT,
      success: ACTIONS.FETCH_JOBS_SUCCEDED,
      fail: ACTIONS.FETCH_JOBS_FAILED
    },
    endpoint: ENDPOINTS.JOBS,
    method: HTTP_METHODS.GET,
    params,
    auth: true
  }
})

export const validateJob = ({ eventParam }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.VALIDATE_JOB_INIT,
      success: ACTIONS.VALIDATE_JOB_SUCCEDED,
      fail: ACTIONS.VALIDATE_JOB_FAILED
    },
    endpoint: ENDPOINTS.JOB_VALIDATE.replace(":param", eventParam),
    method: HTTP_METHODS.GET,
    auth: true
  }
})

export const rejectJob = ({ eventParam }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.REJECT_JOB_INIT,
      success: ACTIONS.REJECT_JOB_SUCCEDED,
      fail: ACTIONS.REJECT_JOB_FAILED
    },
    endpoint: ENDPOINTS.JOB_REJECT.replace(":param", eventParam),
    method: HTTP_METHODS.GET,
    auth: true
  }
})

export const disableJob = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.DISABLE_JOB_INIT,
      success: ACTIONS.DISABLE_JOB_SUCCEDED,
      fail: ACTIONS.DISABLE_JOB_FAILED
    },
    endpoint: ENDPOINTS.JOB_DEACTIVATE.replace(":param", param),
    method: HTTP_METHODS.DELETE,
    auth: true
  }
})


export const enableJob = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.ENABLE_JOB_INIT,
      success: ACTIONS.ENABLE_JOB_SUCCEDED,
      fail: ACTIONS.ENABLE_JOB_FAILED
    },
    endpoint: ENDPOINTS.JOB_ACTIVATE.replace(":param", param),
    method: HTTP_METHODS.DELETE,
    auth: true
  }
})


export const disableJobs = (params) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.DISABLE_JOBS_INIT,
      success: ACTIONS.DISABLE_JOBS_SUCCEDED,
      fail: ACTIONS.DISABLE_JOBS_FAILED
    },
    endpoint: ENDPOINTS.JOBS_DEACTIVATE,
    method: HTTP_METHODS.DELETE,
    params,
    auth: true
  }
})


export const enableJobs = (params) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.ENABLE_JOBS_INIT,
      success: ACTIONS.ENABLE_JOBS_SUCCEDED,
      fail: ACTIONS.ENABLE_JOBS_FAILED
    },
    endpoint: ENDPOINTS.JOBS_ACTIVATE,
    method: HTTP_METHODS.DELETE,
    params,
    auth: true
  }
})


export const createJob = (payload) =>
({
  type: CALL_API,
  payload,
  meta: {
    actions: {
      init: ACTIONS.CREATE_JOB_EXTRA_DATA_INIT,
      success: ACTIONS.CREATE_JOB_EXTRA_DATA_SUCCEDED,
      fail: ACTIONS.CREATE_JOB_EXTRA_DATA_FAILED
    },
    isFormData: true,
    endpoint: ENDPOINTS.JOBS,
    method: HTTP_METHODS.POST,
    auth: true
  }
})


export const editJob = ({ param }, payload) =>
({
  type: CALL_API,
  payload,
  meta: {
    actions: {
      init: ACTIONS.EDIT_JOB_EXTRA_DATA_INIT,
      success: ACTIONS.EDIT_JOB_EXTRA_DATA_SUCCEDED,
      fail: ACTIONS.EDIT_JOB_EXTRA_DATA_FAILED
    },
    isFormData: true,
    endpoint: ENDPOINTS.JOB.replace(":param", param),
    method: HTTP_METHODS.PUT,
    auth: true
  }
})

export const fetchJob = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.FETCH_JOB_INIT,
      success: ACTIONS.FETCH_JOB_SUCCEDED,
      fail: ACTIONS.FETCH_JOB_FAILED
    },
    endpoint: ENDPOINTS.JOB.replace(":param", param),
    method: HTTP_METHODS.GET,
    auth: true
  }
})


export const fetchJobExtraData = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.FETCH_JOB_EXTRA_DATA_INIT,
      success: ACTIONS.FETCH_JOB_EXTRA_DATA_SUCCEDED,
      fail: ACTIONS.FETCH_JOB_EXTRA_DATA_FAILED
    },
    endpoint: ENDPOINTS.JOB.replace(":param", param),
    method: HTTP_METHODS.GET,
    auth: true
  }
})
