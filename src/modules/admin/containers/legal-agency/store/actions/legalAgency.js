import { ACTIONS, ENDPOINTS } from "./../constants"
import { CALL_API, HTTP_METHODS } from "./../../../../../../constants"

export const clearStore = () => ({
    type: ACTIONS.CLEAR_LEGAL_AGENCY
})

export const fetchLegalAgencies = (params) => ({
    type: CALL_API,
    meta: {
        actions: {
            init: ACTIONS.FETCH_LEGAL_AGENCIES_INIT,
            success: ACTIONS.FETCH_LEGAL_AGENCIES_SUCCEDED,
            fail: ACTIONS.FETCH_LEGAL_AGENCIES_FAILED,
        },
        endpoint: ENDPOINTS.LEGAL_AGENCIES,
        method: HTTP_METHODS.GET,
        params,
        auth: true
    }
})
export const fetchLegalAgency = ({param}) => ({
    type: CALL_API,
    meta: {
        actions: {
            init: ACTIONS.FETCH_LEGAL_AGENCY_EXTRA_DATA_INIT,
            success: ACTIONS.FETCH_LEGAL_AGENCY_EXTRA_DATA_SUCCEDED,
            fail: ACTIONS.FETCH_LEGAL_AGENCY_EXTRA_DATA_FAILED,
        },
        endpoint: ENDPOINTS.LEGAL_AGENCY.replace(":param", param),
        method: HTTP_METHODS.GET,
        auth: true
    }
})
export const createLegalAgency = (payload) => ({
    type: CALL_API,
    payload,
    meta: {
        actions: {
            init: ACTIONS.CREATE_LEGAL_AGENCY_INIT,
            success: ACTIONS.CREATE_LEGAL_AGENCY_SUCCEDED,
            fail: ACTIONS.CREATE_LEGAL_AGENCY_FAILED,
        },
        endpoint: ENDPOINTS.LEGAL_AGENCIES,
        method: HTTP_METHODS.POST,
        auth: true
    }
})
export const editLegalAgency =({param}, payload) => ({
    type: CALL_API,
    payload,
    meta: {
        actions: {
            init: ACTIONS.EDIT_LEGAL_AGENCY_INIT,
            success: ACTIONS.EDIT_LEGAL_AGENCY_SUCCEDED,
            fail: ACTIONS.EDIT_LEGAL_AGENCY_FAILED,
        },
        endpoint: ENDPOINTS.LEGAL_AGENCY.replace(":param", param),
        method: HTTP_METHODS.PATCH,
        auth: true
    }
})
export const disableLegalAgency = ({param}) => ({
    type: CALL_API,
    meta: {
        init: ACTIONS.DISABLE_LEGAL_AGENCY_INIT,
        success: ACTIONS.DISABLE_LEGAL_AGENCY_SUCCEDED,
        fail: ACTIONS.DISABLE_LEGAL_AGENCY_FAILED,
    },
    endpoint: ENDPOINTS.LEGAL_AGENCY_DEACTIVATE.replace(":param", param),
    method: HTTP_METHODS.DELETE,
    auth: true
})
export const enableLegalAgency = ({param}) => ({
    type: CALL_API,
    meta: {
        actions: {
            init: ACTIONS.ENABLE_LEGAL_AGENCY_INIT,
            success: ACTIONS.ENABLE_LEGAL_AGENCY_SUCCEDED,
            fail: ACTIONS.ENABLE_LEGAL_AGENCY_FAILED,
        },
        endpoint: ENDPOINTS.LEGAL_AGENCY_ACTIVATE.replace(":param", param),
        method: HTTP_METHODS.DELETE,
        auth: true
    }
})
export const disableAllLegalAgencies = (params) => ({
    type: CALL_API,
    meta: {
        actions: {
            init: ACTIONS.DISABLE_ALL_LEGAL_AGENCIES_INIT,
            success: ACTIONS.DISABLE_ALL_LEGAL_AGENCIES_SUCCEDED,
            fail: ACTIONS.DISABLE_ALL_LEGAL_AGENCIES_FAILED,
        },
        endpoint: ENDPOINTS.LEGAL_AGENCIES_DEACTIVATE_ALL,
        method: HTTP_METHODS.DELETE,
        params,
        auth: true
    }
})
export const enableAllLegalAgencies = (params) => ({
    type: CALL_API,
    meta: {
        actions: {
            init: ACTIONS.ENABLE_ALL_LEGAL_AGENCIES_INIT,
            success: ACTIONS.ENABLE_ALL_LEGAL_AGENCIES_SUCCEDED,
            fail: ACTIONS.ENABLE_ALL_LEGAL_AGENCIES_FAILED,
        },
        endpoint: ENDPOINTS.LEGAL_AGENCIES_ACTIVATE_ALL,
        method: HTTP_METHODS.DELETE,
        params,
        auth: true
    }
})
export const fetchlegalAgencyExtraData = ({param}) => ({
    type: CALL_API,
    meta: {
        actions: {
            init: ACTIONS.FETCH_LEGAL_AGENCY_EXTRA_DATA_INIT,
            success: ACTIONS.FETCH_LEGAL_AGENCY_EXTRA_DATA_SUCCEDED,
            fail: ACTIONS.FETCH_LEGAL_AGENCY_EXTRA_DATA_FAILED,
        },
        endpoint: ENDPOINTS.LEGAL_AGENCY.replace(":param", param),
        method: HTTP_METHODS.GET,
        auth: true
    }
})
export const createLegalAgencyExtraData = (payload) => ({
    type: CALL_API,
    payload,
    meta: {
        actions: {
            init: ACTIONS.CREATE_LEGAL_AGENCY_EXTRA_DATA_INIT,
            success: ACTIONS.CREATE_LEGAL_AGENCY_EXTRA_DATA_SUCCEDED,
            fail: ACTIONS.CREATE_LEGAL_AGENCY_EXTRA_DATA_FAILED,
        },
        endpoint: ENDPOINTS.LEGAL_AGENCIES,
        method: HTTP_METHODS.POST,
        auth: true
    }
})
export const editLegalAgencyExtraData = ({param}, payload) => ({
    type: CALL_API,
    payload,
    meta: {
        actions: {
            init: ACTIONS.EDIT_LEGAL_AGENCY_EXTRA_DATA_INIT,
            success: ACTIONS.EDIT_LEGAL_AGENCY_EXTRA_DATA_SUCCEDED,
            fail: ACTIONS.EDIT_LEGAL_AGENCY_EXTRA_DATA_FAILED,
        },
        endpoint: ENDPOINTS.LEGAL_AGENCY.replace(":param", param),
        method: HTTP_METHODS.PATCH,
        auth: true
    }
})
