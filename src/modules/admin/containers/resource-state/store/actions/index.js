import { ACTIONS, ENDPOINTS } from "./../constants";
import { CALL_API, HTTP_METHODS } from "./../../../../../../constants";

export const clearStore = () => ({
  type: ACTIONS.CLEAR_RESOURCE_STATE,
});

export const fetchResourceStates = (params) => ({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.FETCH_RESOURCE_STATES_INIT,
      success: ACTIONS.FETCH_RESOURCE_STATES_SUCCEDED,
      fail: ACTIONS.FETCH_RESOURCE_STATES_FAILED,
    },
    endpoint: ENDPOINTS.RESOURCE_STATES,
    method: HTTP_METHODS.GET,
    params,
    auth: true,
  },
});

export const fetchResourceState = ({ param }) => ({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.FETCH_RESOURCE_STATE_INIT,
      success: ACTIONS.FETCH_RESOURCE_STATE_SUCCEDED,
      fail: ACTIONS.FETCH_RESOURCE_STATE_FAILED,
    },
    endpoint: ENDPOINTS.RESOURCE_STATE.replace(":param", param),
    method: HTTP_METHODS.GET,
    auth: true,
  },
});

export const createResourceState = (payload) => ({
  type: CALL_API,
  payload,
  meta: {
    actions: {
      init: ACTIONS.CREATE_RESOURCE_STATE_INIT,
      success: ACTIONS.CREATE_RESOURCE_STATE_SUCCEDED,
      fail: ACTIONS.CREATE_RESOURCE_STATE_FAILED,
    },
    endpoint: ENDPOINTS.RESOURCE_STATES,
    method: HTTP_METHODS.POST,
    auth: true,
  },
});

export const editResourceState = ({ param }, payload) => ({
  type: CALL_API,
  payload,
  meta: {
    actions: {
      init: ACTIONS.EDIT_RESOURCE_STATE_INIT,
      success: ACTIONS.EDIT_RESOURCE_STATE_SUCCEDED,
      fail: ACTIONS.EDIT_RESOURCE_STATE_FAILED,
    },
    endpoint: ENDPOINTS.RESOURCE_STATE.replace(":param", param),
    method: HTTP_METHODS.PATCH,
    auth: true,
  },
});

export const deleteResourceState = ({ param }) => ({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.DELETE_RESOURCE_STATE_INIT,
      success: ACTIONS.DELETE_RESOURCE_STATE_SUCCEDED,
      fail: ACTIONS.DELETE_RESOURCE_STATE_FAILED,
    },
    endpoint: ENDPOINTS.RESOURCE_STATE_DELETE.replace(":param", param),
    method: HTTP_METHODS.DELETE,
    auth: true,
  },
});

export const deleteResourceStates = (params) => ({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.DELETE_ALL_RESOURCE_STATES_INIT,
      success: ACTIONS.DELETE_ALL_RESOURCE_STATES_SUCCEDED,
      fail: ACTIONS.DELETE_ALL_RESOURCE_STATES_FAILED,
    },
    endpoint: ENDPOINTS.RESOURCE_STATE_DELETE_ALL,
    method: HTTP_METHODS.DELETE,
    params,
    auth: true,
  },
});
export const disableResourceState = ({ param }) => ({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.DEACTIVATE_RESOURCE_STATE_INIT,
      success: ACTIONS.DEACTIVATE_RESOURCE_STATE_SUCCEDED,
      fail: ACTIONS.DEACTIVATE_RESOURCE_STATE_FAILED,
    },
    endpoint: ENDPOINTS.RESOURCE_STATE_DEACTIVATE.replace(":param", param),
    method: HTTP_METHODS.DELETE,
    auth: true,
  },
});
export const disableResourceStates = (params) => ({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.DEACTIVATE_ALL_RESOURCE_STATES_INIT,
      success: ACTIONS.DEACTIVATE_ALL_RESOURCE_STATES_FAILED,
      fail: ACTIONS.DEACTIVATE_ALL_RESOURCE_STATES_FAILED,
    },
    endpoint: ENDPOINTS.RESOURCE_STATE_DEACTIVATE_ALL,
    method: HTTP_METHODS.DELETE,
    params,
    auth: true,
  },
});
export const enableResourceState = ({ param }) => ({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.ACTIVATE_RESOURCE_STATE_INIT,
      success: ACTIONS.ACTIVATE_RESOURCE_STATE_SUCCEDED,
      fail: ACTIONS.ACTIVATE_RESOURCE_STATE_FAILED,
    },
    endpoint: ENDPOINTS.RESOURCE_STATE_ACTIVATE.replace(":param", param),
    method: HTTP_METHODS.DELETE,
    auth: true,
  },
});

export const enableResourceStates = (params) => ({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.ACTIVATE_ALL_RESOURCE_STATES_INIT,
      success: ACTIONS.ACTIVATE_ALL_RESOURCE_STATES_SUCCEDED,
      fail: ACTIONS.ACTIVATE_ALL_RESOURCE_STATES_FAILED,
    },
    endpoint: ENDPOINTS.RESOURCE_STATE_ACTIVATE_ALL,
    method: HTTP_METHODS.DELETE,
    params,
    auth: true,
  },
});
