import { ACTIONS } from "./../constants"

const initialState = {
  jobs: [],
  job: {},
  jobExtraData: {},
  totalSize: 0,
  isFetching: false,
  isLoading: false,
  hasMore: true,
  success: {
    isDeactivated: false,
    isActivated: false,
    isCreated: false,
    isUpdated: false,
    isValidated: false,
    isRejected: false,
  },
  error: null,
}


export default (state = initialState, action) => {
  const { payload, type } = action
  switch (type) {
    case ACTIONS.CLEAR_JOB: {
      return {
        ...state,
        success: initialState.success,
        error: null,
        isFetching: false,
        isLoading: false,
      }
    }

    case ACTIONS.FILTER_APPOINTMENT: {
      return { ...state, appointmentFilterTerm: { ...state.appointmentFilterTerm, ...payload } }
    }

    case ACTIONS.FETCH_JOBS_INIT: {
      return { ...state, isFetching: true, error: null }
    }
    case ACTIONS.FETCH_JOBS_SUCCEDED: {
      const { count, results } = payload
      return {
        ...state,
        totalSize: count,
        jobs: results,
        isFetching: false,
        error: null,
      }
    }
    case ACTIONS.FETCH_JOBS_FAILED: {
      return { ...state, isFetching: false, error: payload }
    }

    case ACTIONS.CREATE_JOB_INIT: {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.CREATE_JOB_SUCCEDED: {
      return { ...state, success: { ...state.success, isCreated: true }, isLoading: false, error: null }
    }
    case ACTIONS.CREATE_JOB_FAILED: {
      return { ...state, error: payload, isLoading: false, success: false }
    }

    case ACTIONS.EDIT_JOB_INIT: {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.EDIT_JOB_SUCCEDED: {
      return {
        ...state,
        jobContent: payload,
        job: payload,
        success: { ...state.success, isUpdated: true },
        isLoading: false,
        error: null,
      }
    }
    case ACTIONS.EDIT_JOB_FAILED: {
      return { ...state, error: payload, isLoading: false, success: false }
    }

    case ACTIONS.EDIT_JOB_CONTENT_INIT: {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.EDIT_JOB_CONTENT_SUCCEDED: {
      return {
        ...state,
        jobContent: payload,
        success: { ...state.success, isUpdated: true },
        isLoading: false,
        error: null,
      }
    }
    case ACTIONS.EDIT_JOB_CONTENT_FAILED: {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.FETCH_JOB_CONTENT_INIT: {
      return { ...state, isFetching: true, jobContent: null, error: null }
    }
    case ACTIONS.FETCH_JOB_CONTENT_SUCCEDED: {
      return { ...state, jobContent: payload, isFetching: false, error: null }
    }
    case ACTIONS.FETCH_JOB_CONTENT_FAILED: {
      return { ...state, isFetching: false, error: payload }
    }

    case ACTIONS.FETCH_JOB_INIT: {
      return { ...state, isFetching: true, job: null, error: null }
    }
    case ACTIONS.FETCH_JOB_SUCCEDED: {
      return { ...state, job: payload, isLoading: false, isFetching: false, error: null }
    }
    case ACTIONS.FETCH_JOB_FAILED: {
      return { ...state, isFetching: false, isLoading: false, error: payload }
    }

    case ACTIONS.DISABLE_JOB_INIT: {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.DISABLE_JOB_SUCCEDED: {
      return { ...state, success: { ...state.success, isDeactivated: true }, isLoading: false, error: null }
    }
    case ACTIONS.DISABLE_JOB_FAILED: {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.VALIDATE_JOB_INIT: {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.VALIDATE_JOB_SUCCEDED: {
      return { ...state, success: { ...state.success, isValidated: true }, isLoading: false, error: null }
    }
    case ACTIONS.VALIDATE_JOB_FAILED: {
      return { ...state, isLoading: false, error: payload }
    }
    case ACTIONS.REJECT_JOB_INIT: {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.REJECT_JOB_SUCCEDED: {
      return { ...state, success: { ...state.success, isRejected: true }, isLoading: false, error: null }
    }
    case ACTIONS.REJECT_JOB_FAILED: {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.ENABLE_JOB_INIT: {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.ENABLE_JOB_SUCCEDED: {
      return { ...state, success: { ...state.success, isActivated: true }, isLoading: false, error: null }
    }
    case ACTIONS.ENABLE_JOB_FAILED: {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.CREATE_JOB_EXTRA_DATA_INIT: {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.CREATE_JOB_EXTRA_DATA_SUCCEDED: {
      return { ...state, success: { ...state.success, isCreated: true }, jobExtraData: payload, isLoading: false, error: null }
    }
    case ACTIONS.CREATE_JOB_EXTRA_DATA_FAILED: {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.EDIT_JOB_EXTRA_DATA_INIT: {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.EDIT_JOB_EXTRA_DATA_SUCCEDED: {
      return {
        ...state,
        job: payload,
        jobExtraData: payload,
        success: { ...state.success, isUpdated: true },
        isLoading: false,
        error: null,
      }
    }
    case ACTIONS.EDIT_JOB_EXTRA_DATA_FAILED: {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.FETCH_JOB_EXTRA_DATA_INIT: {
      return { ...state, isFetching: true, jobExtraData: null, error: null }
    }
    case ACTIONS.FETCH_JOB_EXTRA_DATA_SUCCEDED: {
      return { ...state, jobExtraData: payload, isLoading: false, isFetching: false, error: null }
    }
    case ACTIONS.FETCH_JOB_EXTRA_DATA_FAILED: {
      return { ...state, isFetching: false, isLoading: false, error: payload }
    }

    default: {
      return state
    }
  }
}
