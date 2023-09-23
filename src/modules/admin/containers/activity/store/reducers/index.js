import { ACTIONS } from "./../constants"

const initialState = {
  activities: [],
  activity: {},
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
    const {type, payload} = action

    switch(type){
	case ACTIONS.CLEAR_ACTIVITY:{
	    return {
		...state,
		success:initialState.success,
		error: null,
		isLoading: false,
		isFetching: false,
	    }
	}
	case ACTIONS.FETCH_ACTIVITIES_INIT:{
	    return {
		...state,
		isFetching: true,
		error: null,

	    }
	}
	case ACTIONS.FETCH_ACTIVITIES_SUCCEDED:{  
	    const {count, results} = payload
	    return {
		...state,
		isFetching: false,
		totalSize: count,
		activities: results,
		error: null,
	    }
	}
	case ACTIONS.FETCH_ACTIVITIES_FAILED:{
	    return {
		...state,
		isFetching: false,
		error: payload,
	    }
	}

	case ACTIONS.FETCH_ACTIVITY_INIT:{
	    return {
		...state,
		isFetching: true,
		error: null,

	    }
	}
	case ACTIONS.FETCH_ACTIVITY_SUCCEDED: {
	    return {
		...state,
		isFetching: false,
		activity: payload,
		error: null,
	    }
	}
	case ACTIONS.FETCH_ACTIVITY_FAILED: {
	    return {
		...state,
		isFetching: false,
		error: payload,
	    }
	}
	case ACTIONS.CREATE_ACTIVITY_INIT:{
	    return {
		...state,
		success: initialState.success,
		isLoading: true,
		error: null,
	    }
	}
	case ACTIONS.CREATE_ACTIVITY_SUCCEDED:{
	    return {
		...state,
		success: {...state.success, isCreated: true},
		error: null,
		isLoading: false,
	    }
	}
	case ACTIONS.CREATE_ACTIVITY_FAILED:{
	    return {
		...state,
		success: initialState.success,
		error: payload,
		isLoading: false,
	    }
	}
	case ACTIONS.DELETE_ACTIVITY_INIT:{
	    return {
		...state,
		success: initialState.success,
		isLoading: true,
		error: null,
	    }
	}
	case ACTIONS.EDIT_ACTIVITY_SUCCEDED: {
	    return {
		...state,
		success: {...state.success, isUpdated: true},
		isLoading: false,
		error: null,
		activity: payload,
	    }
	}
	case ACTIONS.DELETE_ACTIVITY_INIT: {
	    return {
		...state,
		success: initialState.success,
		error: null,
		isLoading: true,
	    }
	}
	case ACTIONS.DELETE_ACTIVITY_SUCCEDED: {
	    return {
		...state,
		success:{...state.success, isDeleted: true},
		error: null,
		isLoading: false,
	    }
	}
	case ACTIONS.DELETE_ACTIVITY_FAILED: {
	    return {
		...state,
		success: initialState.success,
		error: payload,
		isLoading: false,
	    }
	}
	case ACTIONS.DISABLE_ACTIVITY_INIT:{
	    return {
		...state,
		success: initialState.success,
		isLoading: true,
		error: null,
	    }
	}
	case ACTIONS.DISABLE_ACTIVITY_SUCCEDED: {
	    return {
		...state,
		success:{...state.success, isDeactivated: true},
		error: null,
		isLoading: false,
	    }
	}
	case ACTIONS.DISABLE_ACTIVITY_FAILED: {
	    return {
		...state,
		success: initialState.success,
		isLoading: false,
		error: payload,
	    }
	}
	case ACTIONS.ENABLE_ACTIVITY_INIT: {
	    return {
		...state,
		success: initialState.success,
		error: null,
		isLoading: true,

	    }
	}
	case ACTIONS.ENABLE_ACTIVITY_SUCCEDED:{
	    return {
		...state,
		success: {...state.success, isActivated: true},
		error: null,
		isLoading: false,
	    }
	}
	case ACTIONS.ENABLE_ACTIVITY_FAILED: {
	    return{
		...state,
		success: initialState.success,
		error: payload,
		isLoading: false,
	    }
	}
	case ACTIONS.DELETE_ALL_ACTIVITIES_INIT: {
	    return {
		...state,
		success: initialState.success,
		isLoading: true,
		error: null,
	    }
	}
	case ACTIONS.DELETE_ALL_ACTIVITIES_SUCCEDED:{
	    return {
		...state,
		success: {...state.success, isDeleted: true},
		isLoading: false,
		error: null,
	    }
	}
	case ACTIONS.DELETE_ALL_ACTIVITIES_FAILED: {
	    return {
		...state,
		success: initialState.success,
		isLoading: false,
		error: payload,
	    }
	}
	
	case ACTIONS.DISABLE_ALL_ACTIVITIES_INIT: {
	    return{
		...state,
		success: initialState.success,
		isLoading: true,
		error: null,
	    }
	}
	case ACTIONS.DISABLE_ALL_ACTIVITIES_SUCCEDED: {
	    return {
		...state,
		success: {...state.success, isDeactivated: true},
		isLoading: false,
		error: null
	    }
	}
	case ACTIONS.DISABLE_ALL_ACTIVITIES_FAILED: {
	    return {
		...state,
		success: initialState.success,
		isLoading: false,
		error: payload,
	    }
	}
	case ACTIONS.ENABLE_ALL_ACTIVITIES_INIT: {
	    return {
		...state,
		success: initialState.success,
		isLoading: true,
		error: null,
	    }
	}
	case ACTIONS.ENABLE_ALL_ACTIVITIES_SUCCEDED: {
	    return {
		...state,
		success: {...state.success, isActivated: true},
		isLoading: false,
		error: null,
	    }
	}
	case ACTIONS.ENABLE_ALL_ACTIVITIES_FAILED: {
	    return {
		...state,
		success: initialState.success,
		isLoading: false,
		error: payload,
	    }
	}
	default:{
	    return state
	}
    }
}
