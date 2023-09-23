import {ACTIONS, ENDPOINTS} from "./../constants"
import { CALL_API, HTTP_METHODS } from "../../../../../../constants"

export const clearStore = () => ({
    type: ACTIONS.CLEAR_BUSINESS_UNIT
})
// fetch business units
export const fetchBusinessUnits = (params) => ({
    type: CALL_API,
    meta: {
        actions: {
            init: ACTIONS.FETCH_BUSINESS_UNITS_INIT,
            success: ACTIONS.FETCH_BUSINESS_UNITS_SUCCEDED,
            fail: ACTIONS.FETCH_BUSINESS_UNITS_FAILED,
        },
        endpoint: ENDPOINTS.BUSINESS_UNITS,
        method: HTTP_METHODS.GET,
        params,
        auth: true
    }
})
// fetch business unit
export const fetchBusinessUnit = ({param}) => ({
    type: CALL_API,
    meta: {
        actions: {
            init: ACTIONS.FETCH_BUSINESS_UNIT_INIT,
            success: ACTIONS.FETCH_BUSINESS_UNIT_SUCCEDED,
            fail: ACTIONS.FETCH_BUSINESS_UNIT_FAILED,
        },
        endpoint: ENDPOINTS.BUSINESS_UNIT.replace(":param", param),
        method: HTTP_METHODS.GET,
        auth: true,
    }
})
// create business unit
export const createBusinessUnit = (payload) => ({
    type: CALL_API,
    payload,
    meta: {
        actions: {
            init: ACTIONS.CREATE_BUSINESS_UNIT_INIT,
            success: ACTIONS.CREATE_BUSINESS_UNIT_SUCCEDED,
            fail: ACTIONS.CREATE_BUSINESS_UNIT_FAILED,
        },
        endpoint: ENDPOINTS.BUSINESS_UNITS,
        method: HTTP_METHODS.POST,
        auth: true,
    }
})
// edit business unit
export const editBusinessUnit = ({param}, payload) => ({
    type: CALL_API,
    payload,
    meta: {
        actions: {
            init: ACTIONS.EDIT_BUSINESS_UNIT_INIT, 
            success: ACTIONS.EDIT_BUSINESS_UNIT_SUCCEDED, 
            fail: ACTIONS.EDIT_BUSINESS_UNIT_FAILED, 
        },
        endpoint: ENDPOINTS.BUSINESS_UNIT.replace(":param", param),
        method: HTTP_METHODS.PATCH,
        auth: true,
    }
})
// disable business unit
export const disableBusinessUnit = ({param}) => ({
    type: CALL_API,
    meta: {
        actions: {
            init: ACTIONS.DISABLE_BUSINESS_UNIT_INIT,
            success: ACTIONS.DISABLE_BUSINESS_UNIT_SUCCEDED,
            fail: ACTIONS.DISABLE_BUSINESS_UNIT_FAILED,
        },
        endpoint: ENDPOINTS.BUSINESS_UNIT_DEACTIVATE.replace(":param", param),
        method: HTTP_METHODS.DELETE,
        auth: true,
    }
})
// enable business unit
export const enableBusinessUnit = ({param}) => ({
    type: CALL_API,
    meta: {
        actions: {
            init: ACTIONS.ENABLE_BUSINESS_UNIT_INIT,
            success: ACTIONS.ENABLE_BUSINESS_UNIT_SUCCEDED,
            fail: ACTIONS.ENABLE_BUSINESS_UNIT_FAILED,
        },
        endpoint: ENDPOINTS.BUSINESS_UNIT_ACTIVATE.replace(":param", param),
        method: HTTP_METHODS.DELETE,
        auth: true
    }
})
// disable all business units
export const disableAllBusinessUnits = (params) => ({
    type: CALL_API,
    meta:{
        actions:{
            init: ACTIONS.DISABLE_ALL_BUSINESS_UNITS_INIT,
            success: ACTIONS.DISABLE_ALL_BUSINESS_UNITS_SUCCEDED,
            fail: ACTIONS.DISABLE_ALL_BUSINESS_UNITS_FAILED,
        },
        endpoint: ENDPOINTS.BUSINESS_UNITS_DEACTIVATE_ALL,
        method: HTTP_METHODS.DELETE,
        params,
        auth: true
    }
})
// enable all business units
export const enableAllBusinessUnits = (params) => ({
    type: CALL_API,
    meta: {
        actions: {
            init: ACTIONS.ENABLE_ALL_BUSINESS_UNITS_INIT,
            success: ACTIONS.ENABLE_ALL_BUSINESS_UNITS_SUCCEDED,
            fail: ACTIONS.ENABLE_ALL_BUSINESS_UNITS_FAILED,
        },
        endpoint: ENDPOINTS.BUSINESS_UNITS_ACTIVATE_ALL,
        method: HTTP_METHODS.DELETE,
        params,
        auth: true
    }
})
// delete business unit
export const deleteBusinessUnit = ({param}) => ({
    type: CALL_API,
    meta: {
        actions: {
            init: ACTIONS.DELETE_BUSINESS_UNIT_INIT,
            success: ACTIONS.DELETE_BUSINESS_UNIT_SUCCEDED,
            fail: ACTIONS.DELETE_BUSINESS_UNIT_FAILED,
        },
        endpoint: ENDPOINTS.BUSINESS_UNIT_DELETE.replace(":param", param),
        method: HTTP_METHODS.DELETE,
        auth: true,
    }
})
// delete all business units
export const deleteAllBusinessUnits = (params) => ({
    type: CALL_API,
    meta: {
        actions: {
            init: ACTIONS.DELETE_ALL_BUSINESS_UNITS_INIT,
            success: ACTIONS.DELETE_ALL_BUSINESS_UNITS_SUCCEDED,
            fail: ACTIONS.DELETE_ALL_BUSINESS_UNITS_FAILED,
        },
        endpoint: ENDPOINTS.BUSINESS_UNITS_DELETE_ALL,
        method: HTTP_METHODS.DELETE,
        params,
        auth: true,
    }
})
