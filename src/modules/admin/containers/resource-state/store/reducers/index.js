import { ACTIONS } from "./../constants";

const initialState = {
  resourceStates: [],
  resourceState: {},
  totalSize: 0,
  isFetching: false,
  isLoading: false,
  hasMore: true,
  success: {
    isCreated: false,
    isUpdated: false,
    isDeleted: false,
    isActivated: false,
    isDeactivated: false,
  },
  error: null,
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case ACTIONS.CLEAR_RESOURCE_STATE: {
      return {
        ...state,
        success: initialState.success,
        error: null,
        isLoading: false,
        isFetching: false,
      };
    }
    // fetch resource states
    case ACTIONS.FETCH_RESOURCE_STATES_INIT: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTIONS.FETCH_RESOURCE_STATES_SUCCEDED: {
      const { count, results } = payload;
      return {
        ...state,
        isFetching: false,
        error: null,
        totalSize: count,
        resourceStates: results,
      };
    }
    case ACTIONS.FETCH_RESOURCE_STATES_FAILED: {
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    }
    // fetch resource state
    case ACTIONS.FETCH_RESOURCE_STATE_INIT: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTIONS.FETCH_RESOURCE_STATE_SUCCEDED: {
      return {
        ...state,
        isFetching: false,
        error: null,
        resourceState: payload,
      };
    }
    case ACTIONS.FETCH_RESOURCE_STATE_FAILED: {
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    }
    // create resource state
    case ACTIONS.CREATE_RESOURCE_STATE_INIT: {
      return {
        ...state,
        success: initialState.success,
        isLoading: true,
        error: null,
      };
    }
    case ACTIONS.CREATE_RESOURCE_STATE_SUCCEDED: {
      return {
        ...state,
        success: { ...state.success, isCreated: true },
        isLoading: false,
        error: null,
      };
    }
    case ACTIONS.CREATE_RESOURCE_STATE_FAILED: {
      return {
        ...state,
        success: initialState.success,
        isLoading: false,
        error: payload,
      };
    }
    // update resource state
    case ACTIONS.EDIT_RESOURCE_STATE_INIT: {
      return {
        ...state,
        success: initialState.success,
        isLoading: true,
        error: null,
      };
    }
    case ACTIONS.EDIT_RESOURCE_STATE_SUCCEDED: {
      return {
        ...state,
        success: { ...state.success, isUpdated: true },
        isLoading: false,
        error: null,
        resourceState: payload,
      };
    }
    case ACTIONS.EDIT_RESOURCE_STATE_FAILED: {
      return {
        ...state,
        success: initialState.success,
        isLoading: false,
        error: null,
      };
    }
    // delete resource state
    case ACTIONS.DELETE_RESOURCE_STATE_INIT: {
      return {
        ...state,
        success: initialState.success,
        isLoading: true,
        error: null,
      };
    }
    case ACTIONS.DELETE_RESOURCE_STATE_SUCCEDED: {
      return {
        ...state,
        success: { ...state.success, isDeleted: true },
        isLoading: false,
        error: null,
      };
    }
    case ACTIONS.DELETE_RESOURCE_STATE_FAILED: {
      return {
        ...state,
        success: initialState.success,
        isLoading: false,
        error: payload,
      };
    }
    // deactivate resource state
    case ACTIONS.DEACTIVATE_RESOURCE_STATE_INIT: {
      return {
        ...state,
        success: initialState.success,
        isLoading: true,
        error: null,
      };
    }
    case ACTIONS.DEACTIVATE_RESOURCE_STATE_SUCCEDED: {
      return {
        ...state,
        success: { ...state.success, isDeactivated: true },
        error: null,
        isLoading: false,
      };
    }
    case ACTIONS.DEACTIVATE_RESOURCE_STATE_FAILED: {
      return {
        ...state,
        success: initialState.success,
        error: payload,
        isLoading: false,
      };
    }
    // activate resource state
    case ACTIONS.ACTIVATE_RESOURCE_STATE_INIT: {
      return {
        ...state,
        success: initialState.success,
        isLoading: true,
        error: null,
      };
    }
    case ACTIONS.ACTIVATE_RESOURCE_STATE_SUCCEDED: {
      return {
        ...state,
        success: { ...state.success, isActivated: true },
        isLoading: false,
        error: null,
      };
    }
    case ACTIONS.ACTIVATE_RESOURCE_STATE_FAILED: {
      return {
        ...state,
        success: initialState.success,
        isLoading: false,
        error: payload,
      };
    }
    // delete all resource states
    case ACTIONS.DELETE_ALL_RESOURCE_STATES_INIT: {
      return {
        ...state,
        success: initialState.success,
        isLoading: true,
        error: null,
      };
    }
    case ACTIONS.DELETE_ALL_RESOURCE_STATES_SUCCEDED: {
      return {
        ...state,
        success: { ...state.success, isDeleted: true },
        isLoading: false,
        error: null,
      };
    }
    case ACTIONS.DELETE_ALL_RESOURCE_STATES_FAILED: {
      return {
        ...state,
        success: initialState.success,
        isLoading: false,
        error: payload,
      };
    }
    // deactivate all resource states
    case ACTIONS.DEACTIVATE_ALL_RESOURCE_STATES_INIT: {
      return {
        ...state,
        success: initialState.success,
        isLoading: true,
        error: null,
      };
    }
    case ACTIONS.DEACTIVATE_ALL_RESOURCE_STATES_SUCCEDED: {
      return {
        ...state,
        success: { ...state.success, isDeactivated: true },
        isLoading: false,
        error: null,
      };
    }
    case ACTIONS.DEACTIVATE_ALL_RESOURCE_STATES_FAILED: {
      return {
        ...state,
        error: payload,
        isLoading: false,
        success: initialState.success,
      };
    }
    // activate all resource states
    case ACTIONS.ACTIVATE_ALL_RESOURCE_STATES_INIT: {
      return {
        ...state,
        success: initialState.success,
        isLoading: true,
        error: null,
      };
    }
    case ACTIONS.ACTIVATE_ALL_RESOURCE_STATES_SUCCEDED: {
      return {
        ...state,
        success: { ...state.success, isActivated: true },
        isLoading: false,
        error: null,
      };
    }
    case ACTIONS.ACTIVATE_ALL_RESOURCE_STATES_FAILED: {
      return {
        ...state,
        success: initialState.success,
        isLoading: false,
        error: payload,
      };
    }
    default: {
      return state;
    }
  }
};
