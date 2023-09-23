import { ACTIONS } from "./../constants"


const initialState = {
    businessUnits: [],
    businessUnit: {},
    totalSize: 0,
    isFetching: false,
    isLoading: false,
    hasMore: true,
    success: {
        isDeactivated: false,
        isActivated: false,
        isCreated: false,
        isUpdated: false,
        isDeleted: false,
    },
    error: null,
}

export default (state = initialState, action) => {
    const { payload, type } = action
    switch(type){
        case ACTIONS.CLEAR_BUSINESS_UNIT:{
            return {
                ...state,
                success: initialState.success,
                error: null,
                isFetching: false,
                isLoading: false
            }
        }
        // fetch business units 
        case ACTIONS.FETCH_BUSINESS_UNITS_INIT:{
            return {
                ...state,
                isFetching: true,
                error: null
            }
        }
        case ACTIONS.FETCH_BUSINESS_UNITS_SUCCEDED:{
            const { count, results } = payload
            return {
                ...state,
                totalSize: count,
                businessUnits: results,
                isFetching: false,
                // error: payload
            }
        }
        case ACTIONS.FETCH_BUSINESS_UNITS_FAILED:{
            return {
                ...state,
                isFetching: false,
                error: payload
            }
        }
        // fetch business unit
        case ACTIONS.FETCH_BUSINESS_UNIT_INIT:{
            return {
                ...state,
                isFetching: true,
                error: null
            }
        }
        case ACTIONS.FETCH_BUSINESS_UNIT_SUCCEDED:{
            return {
                ...state,
                isFetching: false,
                businessUnit: payload,
                error: null
            }
        }
        case ACTIONS.FETCH_BUSINESS_UNIT_FAILED:{
            return {
                ...state,
                isFetching: false,
                error: payload,
            }
        }
        // create business unit
        case ACTIONS.CREATE_BUSINESS_UNIT_INIT:{
            return {
                ...state,
                success: initialState.success,
                isLoading: true,
                error: null
            }
        }
        case ACTIONS.CREATE_BUSINESS_UNIT_SUCCEDED:{
            return {
                ...state,
                success: {...state.success, isCreated: true},
                error: null,
                isLoading: false
            }
        }
        case ACTIONS.CREATE_BUSINESS_UNIT_FAILED:{
            return {
                ...state,
                error: payload,
                isLoading: false,
                success: initialState.success
            }
        }
        // edit business unit
        case ACTIONS.EDIT_BUSINESS_UNIT_INIT:{
            return {
                ...state,
                success: initialState.success,
                isLoading: true,
                error: null 
            }  
        }
        case ACTIONS.EDIT_BUSINESS_UNIT_SUCCEDED:{
            return {
                ...state,
                businessUnit: payload,
                success:{...state.success, isUpdated: true},
                error: payload,
                isLoading: false
            }
        }
        case ACTIONS.EDIT_BUSINESS_UNIT_FAILED:{
            return {
                ...state,
                error: payload,
                success: initialState.success,
                isLoading: false
            }
        }
        // disable business unit
        case ACTIONS.DISABLE_BUSINESS_UNIT_INIT:{
            return {
                ...state,
                success: initialState.success,
                error: null,
                isLoading: true,
            }
        }
        case ACTIONS.DISABLE_BUSINESS_UNIT_SUCCEDED:{
            return {
                ...state,
                success: {...state.success, isDeactivated: true},
                error: null,
                isLoading: false
            }
        }
        case ACTIONS.DISABLE_BUSINESS_UNIT_FAILED:{
            return {
                ...state,
                success: false,
                error: payload,
                isLoading: false
            }
        }
        // enable business unit
        case ACTIONS.ENABLE_BUSINESS_UNIT_INIT:{
            return {
                ...state,
                success: initialState.success,
                isLoading: true,
                error: null
            }
        }
        case ACTIONS.ENABLE_BUSINESS_UNIT_SUCCEDED:{
            return {
                ...state,
                success: {...state.success, isActivated: true},
                error: null,
                isLoading: false
            }
        }
        case ACTIONS.ENABLE_BUSINESS_UNIT_FAILED:{
            return {
                ...state,
                error: payload,
                success: initialState.success,
                isLoading: false
            }
        }
        // disable all business units
        case ACTIONS.DISABLE_ALL_BUSINESS_UNITS_INIT:{
            return {
                ...state,
                isLoading: true,
                success: initialState.success,
                error: null
            }
        }
        case ACTIONS.DISABLE_ALL_BUSINESS_UNITS_SUCCEDED:{
            return {
                ...state,
                isLoading: false,
                success: {...state.success, isDeactivated: true},
                error: null
            }
        }
        case ACTIONS.DISABLE_ALL_BUSINESS_UNITS_FAILED:{
            return {
                ...state,
                isLoading: false,
                error: payload,
                success: initialState.success
            }
        }
        // enable all business units
        case ACTIONS.ENABLE_ALL_BUSINESS_UNITS_INIT:{
            return {
                ...state,
                success: initialState.success,
                isLoading: true,
                error: null
            }
        }
        case ACTIONS.ENABLE_ALL_BUSINESS_UNITS_SUCCEDED:{
            return {
                ...state,
                success: {...state.success, isActivated:true},
                error: null,
                isLoading: false
            }
        }
        case ACTIONS.ENABLE_ALL_BUSINESS_UNITS_FAILED:{
            return {
                ...state,
                success: initialState.success,
                error: payload,
                isLoading: false
            }
        }
        // delete business unit
        case ACTIONS.DELETE_BUSINESS_UNIT_INIT:{
            return {
                ...state,
                isLoading: true,
                success: initialState.success,
                error: null
            }
        }
        case ACTIONS.DELETE_BUSINESS_UNIT_SUCCEDED:{
            return {
                ...state,
                success: {...state.success, isDeleted: true},
                isLoading: false,
                error: null
            }
        }
        case ACTIONS.DELETE_BUSINESS_UNIT_FAILED:{
            return {
                ...state,
                error: payload,
                success: initialState.success,
                isLoading: false
            }
        }
        // delete all business unit
        case ACTIONS.DELETE_ALL_BUSINESS_UNITS_INIT:{
            return {
                ...state,
                success: initialState.success,
                error: null,
                isLoading: true
            }
        }
        case ACTIONS.DELETE_ALL_BUSINESS_UNITS_SUCCEDED:{
            return {
                ...state,
                success: {...state.success, isDeleted: true},
                isLoading: false,
                error: null
            }
        }
        case ACTIONS.DELETE_ALL_BUSINESS_UNITS_FAILED:{
            return {
                ...state,
                error: payload,
                isLoading: false,
                success: initialState.success
            }
        }
        default: {
            return state
        }
    }
}
