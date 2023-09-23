import { ACTIONS, ENDPOINTS } from "./../constants";
import { CALL_API, HTTP_METHODS } from "./../../../../../../constants";

export const clearStore = () => ({
  type: ACTIONS.CLEAR_LIST,
});

export const fetchLists = (params) => ({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.FETCH_LISTS_INIT,
      success: ACTIONS.FETCH_LISTS_SUCCEDED,
      fail: ACTIONS.FETCH_LISTS_FAILED,
    },
    endpoint: ENDPOINTS.LISTS,
    method: HTTP_METHODS.GET,
    params,
    auth: true,
  },
});

export const createList = (payload) =>
({
  type: CALL_API,
  payload,
  meta: {
    actions: {
      init: ACTIONS.CREATE_LIST_EXTRA_DATA_INIT,
      success: ACTIONS.CREATE_LIST_EXTRA_DATA_SUCCEDED,
      fail: ACTIONS.CREATE_LIST_EXTRA_DATA_FAILED
    },
    isFormData: true,
    endpoint: ENDPOINTS.LISTS,
    method: HTTP_METHODS.POST,
    auth: true
  }
})

export const editList = ({ param }, payload) => ({
  type: CALL_API,
  payload,
  meta: {
    actions: {
      init: ACTIONS.EDIT_LIST_EXTRA_DATA_INIT,
      success: ACTIONS.EDIT_LIST_EXTRA_DATA_SUCCEDED,
      fail: ACTIONS.EDIT_LIST_EXTRA_DATA_FAILED,
    },
    isFormData: true,
    endpoint: ENDPOINTS.LIST.replace(":param", param),
    method: HTTP_METHODS.PUT,
    auth: true,
  },
});

export const fetchList = ({ param }) => ({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.FETCH_LIST_INIT,
      success: ACTIONS.FETCH_LIST_SUCCEDED,
      fail: ACTIONS.FETCH_LIST_FAILED,
    },
    endpoint: ENDPOINTS.LIST.replace(":param", param),
    method: HTTP_METHODS.GET,
    auth: true,
  },
});

export const fetchListExtraData = ({ param }) => ({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.FETCH_LIST_EXTRA_DATA_INIT,
      success: ACTIONS.FETCH_LIST_EXTRA_DATA_SUCCEDED,
      fail: ACTIONS.FETCH_LIST_EXTRA_DATA_FAILED,
    },
    endpoint: ENDPOINTS.LIST.replace(":param", param),
    method: HTTP_METHODS.GET,
    auth: true,
  },
});
