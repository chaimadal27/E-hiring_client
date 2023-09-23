import { ACTIONS, ENDPOINTS } from "./../constants"
import { CALL_API, HTTP_METHODS } from "./../../../../../../constants"


export const clearStore = () =>
  ({
    type: ACTIONS.CLEAR_SCHOOL
  })


export const fetchSchools = (params) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_SCHOOLS_INIT,
        success: ACTIONS.FETCH_SCHOOLS_SUCCEDED,
        fail: ACTIONS.FETCH_SCHOOLS_FAILED
      },
      endpoint: ENDPOINTS.SCHOOLS,
      method: HTTP_METHODS.GET,
      params,
      auth: true
    }
  })

export const disableSchool = ({ param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.DISABLE_SCHOOL_INIT,
        success: ACTIONS.DISABLE_SCHOOL_SUCCEDED,
        fail: ACTIONS.DISABLE_SCHOOL_FAILED
      },
      endpoint: ENDPOINTS.SCHOOL_DEACTIVATE.replace(":param", param),
      method: HTTP_METHODS.DELETE,
      auth: true
    }
  })


export const enableSchool = ({ param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.ENABLE_SCHOOL_INIT,
        success: ACTIONS.ENABLE_SCHOOL_SUCCEDED,
        fail: ACTIONS.ENABLE_SCHOOL_FAILED
      },
      endpoint: ENDPOINTS.SCHOOL_ACTIVATE.replace(":param", param),
      method: HTTP_METHODS.DELETE,
      auth: true
    }
  })


export const disableSchools = (params) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.DISABLE_SCHOOLS_INIT,
        success: ACTIONS.DISABLE_SCHOOLS_SUCCEDED,
        fail: ACTIONS.DISABLE_SCHOOLS_FAILED
      },
      endpoint: ENDPOINTS.SCHOOLS_DEACTIVATE,
      method: HTTP_METHODS.DELETE,
      params,
      auth: true
    }
  })


export const enableSchools = (params) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.ENABLE_SCHOOLS_INIT,
        success: ACTIONS.ENABLE_SCHOOLS_SUCCEDED,
        fail: ACTIONS.ENABLE_SCHOOLS_FAILED
      },
      endpoint: ENDPOINTS.SCHOOLS_ACTIVATE,
      method: HTTP_METHODS.DELETE,
      params,
      auth: true
    }
  })


export const createSchool = (payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.CREATE_SCHOOL_EXTRA_DATA_INIT,
        success: ACTIONS.CREATE_SCHOOL_EXTRA_DATA_SUCCEDED,
        fail: ACTIONS.CREATE_SCHOOL_EXTRA_DATA_FAILED
      },
      isFormData: true,
      endpoint: ENDPOINTS.SCHOOLS,
      method: HTTP_METHODS.POST,
      auth: true
    }
  })


export const editSchool = ({ param }, payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.EDIT_SCHOOL_EXTRA_DATA_INIT,
        success: ACTIONS.EDIT_SCHOOL_EXTRA_DATA_SUCCEDED,
        fail: ACTIONS.EDIT_SCHOOL_EXTRA_DATA_FAILED
      },
      isFormData: true,
      endpoint: ENDPOINTS.SCHOOL.replace(":param", param),
      method: HTTP_METHODS.PUT,
      auth: true
    }
  })

export const fetchSchool = ({ param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_SCHOOL_INIT,
        success: ACTIONS.FETCH_SCHOOL_SUCCEDED,
        fail: ACTIONS.FETCH_SCHOOL_FAILED
      },
      endpoint: ENDPOINTS.SCHOOL.replace(":param", param),
      method: HTTP_METHODS.GET,
      auth: true
    }
  })


export const fetchSchoolExtraData = ({ param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_SCHOOL_EXTRA_DATA_INIT,
        success: ACTIONS.FETCH_SCHOOL_EXTRA_DATA_SUCCEDED,
        fail: ACTIONS.FETCH_SCHOOL_EXTRA_DATA_FAILED
      },
      endpoint: ENDPOINTS.SCHOOL.replace(":param", param),
      method: HTTP_METHODS.GET,
      auth: true
    }
  })
