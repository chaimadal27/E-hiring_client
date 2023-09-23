import { ACTIONS } from "./../constants"
const initialState = {
    activityTypes: [],
    activityType: {},
    activityTypeContent: {},
    activityTypeExtraData: {},
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
    error: null
}
export default (state = initialState, action) => {
    const { payload, type } = action
    switch(type) {
        case ACTIONS.CLEAR_ACTIVITY_TYPE:{
            return {
                ...state,
                success: initialState.success,
                error: null,
                isFetching: false,
                isLoading: false
            }
        }
        // fetch legal agencies
        case ACTIONS.FETCH_ACTIVITY_TYPES_INIT:{
            return {
                ...state,
                isFetching: true,
                error: null
            }
        }
        case ACTIONS.FETCH_ACTIVITY_TYPES_SUCCEDED:{
            const {count, results} = payload
            return {
                ...state,
                totalSize: count,
                activityTypes: results,
                isFetching: false,
                error: null
            }
        }
        case ACTIONS.FETCH_ACTIVITY_TYPES_FAILED:{
            return {
                ...state,
                error: payload,
                isFetching: false
            }
        }
        // fetch legal agency
        case ACTIONS.FETCH_ACTIVITY_TYPE_INIT:{
            return {
                ...state,
                isFetching: true,
                error: null,
                activityType: null
            }
        }
        case ACTIONS.FETCH_ACTIVITY_TYPE_SUCCEDED:{
            return {
                ...state,
                isFetching: false,
                activityType: payload,
                error: null
            }
        }
        case ACTIONS.FETCH_ACTIVITY_TYPE_FAILED:{
            return {
                ...state,
                isFetching: false,
                error: payload,
            }
        }
        // create legal agency
        case ACTIONS.CREATE_ACTIVITY_TYPE_INIT:{
            return {
                ...state,
                isLoading: true,
                success: initialState.success,
                error: null
            }
        }
        case ACTIONS.CREATE_ACTIVITY_TYPE_SUCCEDED:{
            return {
                ...state,
                success: {...state.success, isCreated: true},
                error: null,
                isLoading: false
            }
        }
        case ACTIONS.CREATE_ACTIVITY_TYPE_FAILED:{
            return {
                ...state,
                error: payload,
                success: initialState.success,
                isLoading: false,
            }
        }
        // edit legal agency
        case ACTIONS.EDIT_ACTIVITY_TYPE_INIT:{
            return {
                ...state,
                success: initialState.success,
                isLoading: true,
                error: null
            }
        }
        case ACTIONS.EDIT_ACTIVITY_TYPE_SUCCEDED:{
            return {
                ...state,
                activityType: payload,
                success: {...state.success, isUpdated: true},
                isLoading: false,
                error: null
            }
        }
        case ACTIONS.EDIT_ACTIVITY_TYPE_FAILED:{
            return {
                ...state,
                error: payload,
                success: initialState.success,
                isLoading: false                
            }
        }
        // disable legal agency
        case ACTIONS.DISABLE_ACTIVITY_TYPE_INIT:{
            return {
                ...state,
                success: initialState.success,
                isLoading: true,
                error: null
            }
        }
        case ACTIONS.DISABLE_ACTIVITY_TYPE_SUCCEDED:{
            return {
                ...state,
                success: {...state.success, isDeactivated: true},
                error: null,
                isLoading: false
            }
        }
        case ACTIONS.DISABLE_ACTIVITY_TYPE_FAILED:{
            return {
                ...state,
                error: payload,
                success: initialState.success,
                isLoading: false
            }
        }
        // enable legal agency
        case ACTIONS.ENABLE_ACTIVITY_TYPE_INIT:{
            return {
                ...state,
                success: initialState.success,
                isLoading: true,
                error: null
            }
        }
        case ACTIONS.ENABLE_ACTIVITY_TYPE_SUCCEDED:{
            return {
                ...state,
                success: {...state.success, isActivated: true},
                error: null,
                isLoading: false
            }
        }
        case ACTIONS.ENABLE_ACTIVITY_TYPE_FAILED:{
            return {
                ...state,
                error: payload,
                success: initialState.success,
                isLoading: false
            }
        }
        // disable all legal agencies
        case ACTIONS.DISABLE_ALL_ACTIVITY_TYPES_INIT:{
            return {
                ...state,
                success: initialState.success,
                isLoading: true,
                error: null
            }
        }
        case ACTIONS.DISABLE_ALL_ACTIVITY_TYPES_SUCCEDED:{
            return {
                ...state,
                success: {...state.success, isDeactivated: true},
                isLoading: false,
                error: null
            }
        }
        case ACTIONS.DISABLE_ALL_ACTIVITY_TYPES_FAILED:{
            return {
                ...state,
                error: payload,
                success: initialState.success,
                isLoading: false
            }
        }
        // enable all legal agencies
        case ACTIONS.ENABLE_ALL_ACTIVITY_TYPES_INIT:{
            return {
                ...state,
                success: initialState.success,
                error: null,
                isLoading: true
            }
        }
        case ACTIONS.ENABLE_ALL_ACTIVITY_TYPES_SUCCEDED:{
            return {
                ...state,
                success: {...state.success, isActivated: true},
                error: null, 
                isLoading: false
            }
        }
        case ACTIONS.ENABLE_ALL_ACTIVITY_TYPES_FAILED:{
            return {
                ...state,
                error: payload,
                success: initialState.success,
                isLoading: false
            }
        }
        // fetch legal agency content data
        case ACTIONS.FETCH_ACTIVITY_TYPE_CONTENT_INIT:{
            return {
                ...state,
                activityTypeContent: null,
                isFetching: true,
                error: null
            }
        }
        case ACTIONS.FETCH_ACTIVITY_TYPE_CONTENT_SUCCEDED:{
            return {
                ...state,
                activityTypeContent: payload,
                isFetching: false,
                error: null
            }
        }
        case ACTIONS.FETCH_ACTIVITY_TYPE_CONTENT_FAILED:{
            return {
                ...state,
                error: payload,
                isFetching: false,

            }
        }
        // edit legal agency content
        case ACTIONS.EDIT_ACTIVITY_TYPE_CONTENT_INIT:{
            return {
                ...state,
                success: initialState.success,
                error: null,
                isLoading: true
            }
        }
        case ACTIONS.EDIT_ACTIVITY_TYPE_CONTENT_SUCCEDED:{
            return {
                ...state,
                activityTypeContent: payload,
                success: {...state.success, isUpdated: true},
                error: null,
                isLoading: false
            }
        }
        case ACTIONS.EDIT_ACTIVITY_TYPE_CONTENT_FAILED:{
            return {
                ...state,
                error: payload,
                isLoading: false,
                success: initialState.success
            }
        }
        // fetch legal agency extra data
        case ACTIONS.FETCH_ACTIVITY_TYPE_EXTRA_DATA_INIT:{
            return {
                ...state,
                activityTypeExtraData: null,
                error: null,
                isFetching: true
            }
        }
        case ACTIONS.FETCH_ACTIVITY_TYPE_EXTRA_DATA_SUCCEDED:{
            return {
                ...state,
                activityTypeExtraData: payload,
                activityType: payload,
                error: null,
                isFetching: false
            }
        }
        case ACTIONS.FETCH_ACTIVITY_TYPE_EXTRA_DATA_FAILED:{
            return {
                ...state,
                error: payload,
                isFetching: false,
            }
        }
        // create legal agency extra data
        case ACTIONS.CREATE_ACTIVITY_TYPE_EXTRA_DATA_INIT:{
            return {
                ...state,
                success: initialState.success,
                isLoading: true,
                error: null
            }
        }
        case ACTIONS.CREATE_ACTIVITY_TYPE_EXTRA_DATA_SUCCEDED:{
            return {
                ...state,
                success: {...state.success, isCreated: true},
                error: null,
                isLoading: false,
            }
        }
        case ACTIONS.CREATE_ACTIVITY_TYPE_EXTRA_DATA_FAILED:{
            return {
                ...state,
                error: payload,
                success: initialState.success,
                isLoading: false
            }
        }
        // edit legal agency extra data
        case ACTIONS.EDIT_ACTIVITY_TYPE_EXTRA_DATA_INIT:{
            return {
                ...state,
                success: initialState.success,
                isLoading: true,
                error: null
            }
        }
        case ACTIONS.EDIT_ACTIVITY_TYPE_EXTRA_DATA_SUCCEDED:{
            return {
                ...state,
                success: {...state.success, isUpdated: true},
                activityTypeExtraData: payload,
                isLoading: false,
                error: null
            }
        }
        case ACTIONS.EDIT_ACTIVITY_TYPE_EXTRA_DATA_FAILED:{
            return {
                ...state,
                success: initialState.success,
                isLoading: false,
                error: payload
            } 
        }
		// delete activity type
		case ACTIONS.DELETE_ACTIVITY_TYPE_INIT:{
			return {
				...state,
				success: initialState.success,
				error: null,
				isLoading: true,
			}
		}
		case ACTIONS.DELETE_ACTIVITY_TYPE_SUCCEDED: {
			return {
				...state,
				success: {...state.success, isDeleted: true},
				error: null,
				isLoading: false,
			}
		}
		case ACTIONS.DELETE_ACTIVITY_TYPE_FAILED: {
			return {
				...state,
				success: initialState.success,
				error: payload,
				isLoading: false
			}
		}

		// delete all activity types
		case ACTIONS.DELETE_ALL_ACTIVITY_TYPES_INIT: {
			return{
				...state,
				success: initialState.success,
				error: null,
				isLoading: true,
			}
		}
		case ACTIONS.DELETE_ALL_ACTIVITY_TYPES_SUCCEDED: {
			return {
				...state,
				success: {...state.success, isDeleted: true},
				error: null,
				isLoading: false,
			}
		}
		case ACTIONS.DELETE_ALL_ACTIVITY_TYPES_FAILED: {
			return {
				...state,
				success: initialState.success,
				error: payload,
				isLoading: false,
			}
		}
		
        default: {
            return state
        }
    }
}
