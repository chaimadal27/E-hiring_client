import { ACTIONS } from "./../constants"
const initialState = {
    legalAgencies: [],
    legalAgency: {},
    legalAgencyContent: {},
    legalAgencyExtraData: {},
    totalSize: 0,
    isFetching: false,
    isLoading: false,
    hasMore: true,
    success: {
        isDeactivated: false,
        isActivated: false,
        isCreated: false,
        isUpdated: false,
    },
    error: null
}
export default (state = initialState, action) => {
    const { payload, type } = action
    switch(type) {
        case ACTIONS.CLEAR_LEGAL_AGENCY:{
            return {
                ...state,
                success: initialState.success,
                error: null,
                isFetching: false,
                isLoading: false
            }
        }
        // fetch legal agencies
        case ACTIONS.FETCH_LEGAL_AGENCIES_INIT:{
            return {
                ...state,
                isFetching: true,
                error: null
            }
        }
        case ACTIONS.FETCH_LEGAL_AGENCIES_SUCCEDED:{
            const {count, results} = payload
            return {
                ...state,
                totalSize: count,
                legalAgencies: results,
                isFetching: false,
                error: null
            }
        }
        case ACTIONS.FETCH_LEGAL_AGENCIES_FAILED:{
            return {
                ...state,
                error: payload,
                isFetching: false
            }
        }
        // fetch legal agency
        case ACTIONS.FETCH_LEGAL_AGENCY_INIT:{
            return {
                ...state,
                isFetching: true,
                error: null,
                legalAgency: null
            }
        }
        case ACTIONS.FETCH_LEGAL_AGENCY_SUCCEDED:{
            return {
                ...state,
                isFetching: false,
                legalAgency: payload,
                error: null
            }
        }
        case ACTIONS.FETCH_LEGAL_AGENCY_FAILED:{
            return {
                ...state,
                isFetching: false,
                error: payload,
            }
        }
        // create legal agency
        case ACTIONS.CREATE_LEGAL_AGENCY_INIT:{
            return {
                ...state,
                isLoading: true,
                success: initialState.success,
                error: null
            }
        }
        case ACTIONS.CREATE_LEGAL_AGENCY_SUCCEDED:{
            return {
                ...state,
                success: {...state.success, isCreated: true},
                error: null,
                isLoading: false
            }
        }
        case ACTIONS.CREATE_LEGAL_AGENCY_FAILED:{
            return {
                ...state,
                error: payload,
                success: initialState.success,
                isLoading: false,
            }
        }
        // edit legal agency
        case ACTIONS.EDIT_LEGAL_AGENCY_INIT:{
            return {
                ...state,
                success: initialState.success,
                isLoading: true,
                error: null
            }
        }
        case ACTIONS.EDIT_LEGAL_AGENCY_SUCCEDED:{
            return {
                ...state,
                legalAgency: payload,
                success: {...state.success, isUpdated: true},
                isLoading: false,
                error: null
            }
        }
        case ACTIONS.EDIT_LEGAL_AGENCY_FAILED:{
            return {
                ...state,
                error: payload,
                success: initialState.success,
                isLoading: false                
            }
        }
        // disable legal agency
        case ACTIONS.DISABLE_LEGAL_AGENCY_INIT:{
            return {
                ...state,
                success: initialState.success,
                isLoading: true,
                error: null
            }
        }
        case ACTIONS.DISABLE_LEGAL_AGENCY_SUCCEDED:{
            return {
                ...state,
                success: {...state.success, isDeactivated: true},
                error: null,
                isLoading: false
            }
        }
        case ACTIONS.DISABLE_LEGAL_AGENCY_FAILED:{
            return {
                ...state,
                error: payload,
                success: initialState.success,
                isLoading: false
            }
        }
        // enable legal agency
        case ACTIONS.ENABLE_LEGAL_AGENCY_INIT:{
            return {
                ...state,
                success: initialState.success,
                isLoading: true,
                error: null
            }
        }
        case ACTIONS.ENABLE_LEGAL_AGENCY_SUCCEDED:{
            return {
                ...state,
                success: {...state.success, isActivated: true},
                error: null,
                isLoading: false
            }
        }
        case ACTIONS.ENABLE_LEGAL_AGENCY_FAILED:{
            return {
                ...state,
                error: payload,
                success: initialState.success,
                isLoading: false
            }
        }
        // disable all legal agencies
        case ACTIONS.DISABLE_ALL_LEGAL_AGENCIES_INIT:{
            return {
                ...state,
                success: initialState.success,
                isLoading: true,
                error: null
            }
        }
        case ACTIONS.DISABLE_ALL_LEGAL_AGENCIES_SUCCEDED:{
            return {
                ...state,
                success: {...state.success, isDeactivated: true},
                isLoading: false,
                error: null
            }
        }
        case ACTIONS.DISABLE_ALL_LEGAL_AGENCIES_FAILED:{
            return {
                ...state,
                error: payload,
                success: initialState.success,
                isLoading: false
            }
        }
        // enable all legal agencies
        case ACTIONS.ENABLE_ALL_LEGAL_AGENCIES_INIT:{
            return {
                ...state,
                success: initialState.success,
                error: null,
                isLoading: true
            }
        }
        case ACTIONS.ENABLE_ALL_LEGAL_AGENCIES_SUCCEDED:{
            return {
                ...state,
                success: {...state.success, isActivated: true},
                error: null, 
                isLoading: false
            }
        }
        case ACTIONS.ENABLE_ALL_LEGAL_AGENCIES_FAILED:{
            return {
                ...state,
                error: payload,
                success: initialState.success,
                isLoading: false
            }
        }
        // fetch legal agency content data
        case ACTIONS.FETCH_LEGAL_AGENCY_CONTENT_INIT:{
            return {
                ...state,
                legalAgencyContent: null,
                isFetching: true,
                error: null
            }
        }
        case ACTIONS.FETCH_LEGAL_AGENCY_CONTENT_SUCCEDED:{
            return {
                ...state,
                legalAgencyContent: payload,
                isFetching: false,
                error: null
            }
        }
        case ACTIONS.FETCH_LEGAL_AGENCY_CONTENT_FAILED:{
            return {
                ...state,
                error: payload,
                isFetching: false,

            }
        }
        // edit legal agency content
        case ACTIONS.EDIT_LEGAL_AGENCY_CONTENT_INIT:{
            return {
                ...state,
                success: initialState.success,
                error: null,
                isLoading: true
            }
        }
        case ACTIONS.EDIT_LEGAL_AGENCY_CONTENT_SUCCEDED:{
            return {
                ...state,
                legalAgencyContent: payload,
                success: {...state.success, isUpdated: true},
                error: null,
                isLoading: false
            }
        }
        case ACTIONS.EDIT_LEGAL_AGENCY_CONTENT_FAILED:{
            return {
                ...state,
                error: payload,
                isLoading: false,
                success: initialState.success
            }
        }
        // fetch legal agency extra data
        case ACTIONS.FETCH_LEGAL_AGENCY_EXTRA_DATA_INIT:{
            return {
                ...state,
                legalAgencyExtraData: null,
                error: null,
                isFetching: true
            }
        }
        case ACTIONS.FETCH_LEGAL_AGENCY_EXTRA_DATA_SUCCEDED:{
            return {
                ...state,
                legalAgencyExtraData: payload,
                legalAgency: payload,
                error: null,
                isFetching: false
            }
        }
        case ACTIONS.FETCH_LEGAL_AGENCY_EXTRA_DATA_FAILED:{
            return {
                ...state,
                error: payload,
                isFetching: false,
            }
        }
        // create legal agency extra data
        case ACTIONS.CREATE_LEGAL_AGENCY_EXTRA_DATA_INIT:{
            return {
                ...state,
                success: initialState.success,
                isLoading: true,
                error: null
            }
        }
        case ACTIONS.CREATE_LEGAL_AGENCY_EXTRA_DATA_SUCCEDED:{
            return {
                ...state,
                success: {...state.success, isCreated: true},
                error: null,
                isLoading: false,
            }
        }
        case ACTIONS.CREATE_LEGAL_AGENCY_EXTRA_DATA_FAILED:{
            return {
                ...state,
                error: payload,
                success: initialState.success,
                isLoading: false
            }
        }
        // edit legal agency extra data
        case ACTIONS.EDIT_LEGAL_AGENCY_EXTRA_DATA_INIT:{
            return {
                ...state,
                success: initialState.success,
                isLoading: true,
                error: null
            }
        }
        case ACTIONS.EDIT_LEGAL_AGENCY_EXTRA_DATA_SUCCEDED:{
            return {
                ...state,
                success: {...state.success, isUpdated: true},
                legalAgencyExtraData: payload,
                isLoading: false,
                error: null
            }
        }
        case ACTIONS.EDIT_LEGAL_AGENCY_EXTRA_DATA_FAILED:{
            return {
                ...state,
                success: initialState.success,
                isLoading: false,
                error: payload
            } 
        }
        default: {
            return state
        }
    }
}
