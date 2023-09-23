import { ACTIONS } from "./../constants";

const initialState = {
  lists: [],
  list: {},
  listExtraData: {},
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
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case ACTIONS.CLEAR_LIST: {
      return {
        ...state,
        success: initialState.success,
        error: null,
        isFetching: false,
        isLoading: false,
      };
    }

    case ACTIONS.FETCH_LISTS_INIT: {
      return { ...state, isFetching: true, error: null };
    }
    case ACTIONS.FETCH_LISTS_SUCCEDED: {
      const { count, results } = payload;
      return {
        ...state,
        totalSize: count,
        lists: results,
        isFetching: false,
        error: null,
      };
    }
    case ACTIONS.FETCH_LISTS_FAILED: {
      return { ...state, isFetching: false, error: payload };
    }

    case ACTIONS.EDIT_LIST_INIT: {
      return {
        ...state,
        isLoading: true,
        error: null,
        success: initialState.success,
      };
    }
    case ACTIONS.EDIT_LIST_SUCCEDED: {
      return {
        ...state,
        listContent: payload,
        list: payload,
        success: { ...state.success, isUpdated: true },
        isLoading: false,
        error: null,
      };
    }
    case ACTIONS.EDIT_LIST_FAILED: {
      return { ...state, error: payload, isLoading: false, success: false };
    }

    case ACTIONS.EDIT_LIST_CONTENT_INIT: {
      return {
        ...state,
        isLoading: true,
        error: null,
        success: initialState.success,
      };
    }
    case ACTIONS.EDIT_LIST_CONTENT_SUCCEDED: {
      return {
        ...state,
        listContent: payload,
        success: { ...state.success, isUpdated: true },
        isLoading: false,
        error: null,
      };
    }
    case ACTIONS.EDIT_LIST_CONTENT_FAILED: {
      return { ...state, error: payload, isLoading: false };
    }

    case ACTIONS.CREATE_LIST_EXTRA_DATA_INIT: {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.CREATE_LIST_EXTRA_DATA_SUCCEDED: {
      return { ...state, success: { ...state.success, isCreated: true }, isLoading: false, error: null }
    }
    case ACTIONS.CREATE_LIST_EXTRA_DATA_FAILED: {
      return { ...state, error: payload, isLoading: false, success: false }
    }
    case ACTIONS.FETCH_LIST_CONTENT_INIT: {
      return {
        ...state,
        isFetching: true,
        listContent: null,
        error: null,
      };
    }
    case ACTIONS.FETCH_LIST_CONTENT_SUCCEDED: {
      return {
        ...state,
        listContent: payload,
        isFetching: false,
        error: null,
      };
    }
    case ACTIONS.FETCH_LIST_CONTENT_FAILED: {
      return { ...state, isFetching: false, error: payload };
    }

    case ACTIONS.FETCH_LIST_INIT: {
      return { ...state, isFetching: true, list: null, error: null };
    }
    case ACTIONS.FETCH_LIST_SUCCEDED: {
      return {
        ...state,
        list: payload,
        isLoading: false,
        isFetching: false,
        error: null,
      };
    }
    case ACTIONS.FETCH_LIST_FAILED: {
      return { ...state, isFetching: false, isLoading: false, error: payload };
    }

    case ACTIONS.EDIT_LIST_EXTRA_DATA_INIT: {
      return {
        ...state,
        isLoading: true,
        error: null,
        success: initialState.success,
      };
    }
    case ACTIONS.EDIT_LIST_EXTRA_DATA_SUCCEDED: {
      return {
        ...state,
        list: payload,
        listExtraData: payload,
        success: { ...state.success, isUpdated: true },
        isLoading: false,
        error: null,
      };
    }
    case ACTIONS.EDIT_LIST_EXTRA_DATA_FAILED: {
      return { ...state, error: payload, isLoading: false };
    }

    case ACTIONS.FETCH_LIST_EXTRA_DATA_INIT: {
      return {
        ...state,
        isFetching: true,
        listExtraData: null,
        error: null,
      };
    }
    case ACTIONS.FETCH_LIST_EXTRA_DATA_SUCCEDED: {
      return {
        ...state,
        listExtraData: payload,
        isLoading: false,
        isFetching: false,
        error: null,
      };
    }
    case ACTIONS.FETCH_LIST_EXTRA_DATA_FAILED: {
      return { ...state, isFetching: false, isLoading: false, error: payload };
    }

    default: {
      return state;
    }
  }
};
