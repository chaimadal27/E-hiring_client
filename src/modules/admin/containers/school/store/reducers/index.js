import { ACTIONS } from "./../constants"

const initialState = {
  schools: [],
  school: {},
  schoolExtraData: {},
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
  error: null,
}


export default (state = initialState, action) => {
  const { payload, type } = action
  switch (type) {
    case ACTIONS.CLEAR_SCHOOL: {
      return {
        ...state,
        success: initialState.success,
        error: null,
        isFetching: false,
        isLoading: false,
      }
    }

    case ACTIONS.FILTER_APPOINTMENT : {
      return { ...state, appointmentFilterTerm: { ...state.appointmentFilterTerm, ...payload } }
    }

    case ACTIONS.FETCH_SCHOOLS_INIT: {
      return { ...state, isFetching: true, error: null }
    }
    case ACTIONS.FETCH_SCHOOLS_SUCCEDED: {
      const { count, results } = payload
      return {
        ...state,
        totalSize: count,
        schools: results,
        isFetching: false,
        error: null,
      }
    }
    case ACTIONS.FETCH_SCHOOLS_FAILED: {
      return { ...state, isFetching: false, error: payload }
    }

    case ACTIONS.CREATE_SCHOOL_INIT: {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.CREATE_SCHOOL_SUCCEDED: {
      return { ...state, success: { ...state.success, isCreated: true }, isLoading: false, error: null }
    }
    case ACTIONS.CREATE_SCHOOL_FAILED: {
      return { ...state, error: payload, isLoading: false, success: false }
    }

    case ACTIONS.EDIT_SCHOOL_INIT: {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.EDIT_SCHOOL_SUCCEDED: {
      return {
        ...state,
        schoolContent: payload,
        school: payload,
        success: { ...state.success, isUpdated: true },
        isLoading: false,
        error: null,
      }
    }
    case ACTIONS.EDIT_SCHOOL_FAILED: {
      return { ...state, error: payload, isLoading: false, success: false }
    }

    case ACTIONS.EDIT_SCHOOL_CONTENT_INIT: {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.EDIT_SCHOOL_CONTENT_SUCCEDED: {
      return {
        ...state,
        schoolContent: payload,
        success: { ...state.success, isUpdated: true },
        isLoading: false,
        error: null,
      }
    }
    case ACTIONS.EDIT_SCHOOL_CONTENT_FAILED: {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.FETCH_SCHOOL_CONTENT_INIT: {
      return { ...state, isFetching: true, schoolContent: null, error: null }
    }
    case ACTIONS.FETCH_SCHOOL_CONTENT_SUCCEDED: {
      return { ...state, schoolContent: payload, isFetching: false, error: null }
    }
    case ACTIONS.FETCH_SCHOOL_CONTENT_FAILED: {
      return { ...state, isFetching: false, error: payload }
    }

    case ACTIONS.FETCH_SCHOOL_INIT: {
      return { ...state, isFetching: true, school: null, error: null }
    }
    case ACTIONS.FETCH_SCHOOL_SUCCEDED: {
      return { ...state, school: payload, isLoading: false, isFetching: false, error: null }
    }
    case ACTIONS.FETCH_SCHOOL_FAILED: {
      return { ...state, isFetching: false, isLoading: false, error: payload }
    }

    case ACTIONS.DISABLE_SCHOOL_INIT: {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.DISABLE_SCHOOL_SUCCEDED: {
      return { ...state, success: { ...state.success, isDeactivated: true }, isLoading: false, error: null }
    }
    case ACTIONS.DISABLE_SCHOOL_FAILED: {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.ENABLE_SCHOOL_INIT: {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.ENABLE_SCHOOL_SUCCEDED: {
      return { ...state, success: { ...state.success, isActivated: true }, isLoading: false, error: null }
    }
    case ACTIONS.ENABLE_SCHOOL_FAILED: {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.CREATE_SCHOOL_EXTRA_DATA_INIT: {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.CREATE_SCHOOL_EXTRA_DATA_SUCCEDED: {
      return { ...state, success: { ...state.success, isCreated: true }, schoolExtraData: payload, isLoading: false, error: null }
    }
    case ACTIONS.CREATE_SCHOOL_EXTRA_DATA_FAILED: {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.EDIT_SCHOOL_EXTRA_DATA_INIT: {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.EDIT_SCHOOL_EXTRA_DATA_SUCCEDED: {
      return {
        ...state,
        school: payload,
        schoolExtraData: payload,
        success: { ...state.success, isUpdated: true },
        isLoading: false,
        error: null,
      }
    }
    case ACTIONS.EDIT_SCHOOL_EXTRA_DATA_FAILED: {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.FETCH_SCHOOL_EXTRA_DATA_INIT: {
      return { ...state, isFetching: true, schoolExtraData: null, error: null }
    }
    case ACTIONS.FETCH_SCHOOL_EXTRA_DATA_SUCCEDED: {
      return { ...state, schoolExtraData: payload, isLoading: false, isFetching: false, error: null }
    }
    case ACTIONS.FETCH_SCHOOL_EXTRA_DATA_FAILED: {
      return { ...state, isFetching: false, isLoading: false, error: payload }
    }

    default: {
      return state
    }
  }
}
