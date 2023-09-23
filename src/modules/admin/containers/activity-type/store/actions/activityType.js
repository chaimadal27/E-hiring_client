import {ACTIONS, ENDPOINTS} from "./../constants";
import {CALL_API, HTTP_METHODS} from "./../../../../../../constants";

export const clearStore = () => ({
	type: ACTIONS.CLEAR_ACTIVITY_TYPE,
});

export const fetchActivityTypes = (params) => ({
	type: CALL_API,
	meta: {
		actions: {
			init: ACTIONS.FETCH_ACTIVITY_TYPES_INIT,
			success: ACTIONS.FETCH_ACTIVITY_TYPES_SUCCEDED,
			fail: ACTIONS.FETCH_ACTIVITY_TYPES_FAILED,
		},
		endpoint: ENDPOINTS.ACTIVITY_TYPES,
		method: HTTP_METHODS.GET,
		params,
		auth: true,
	},
});
export const fetchActivityType = ({param}) => ({
	type: CALL_API,
	meta: {
		actions: {
			init: ACTIONS.FETCH_ACTIVITY_TYPE_EXTRA_DATA_INIT,
			success: ACTIONS.FETCH_ACTIVITY_TYPE_EXTRA_DATA_SUCCEDED,
			fail: ACTIONS.FETCH_ACTIVITY_TYPE_EXTRA_DATA_FAILED,
		},
		endpoint: ENDPOINTS.ACTIVITY_TYPE.replace(":param", param),
		method: HTTP_METHODS.GET,
		auth: true,
	},
});
export const createActivityType = (payload) => ({
	type: CALL_API,
	payload,
	meta: {
		actions: {
			init: ACTIONS.CREATE_ACTIVITY_TYPE_INIT,
			success: ACTIONS.CREATE_ACTIVITY_TYPE_SUCCEDED,
			fail: ACTIONS.CREATE_ACTIVITY_TYPE_FAILED,
		},
		endpoint: ENDPOINTS.ACTIVITY_TYPES,
		method: HTTP_METHODS.POST,
		auth: true,
	},
});
export const editActivityType = ({param}, payload) => ({
	type: CALL_API,
	payload,
	meta: {
		actions: {
			init: ACTIONS.EDIT_ACTIVITY_TYPE_INIT,
			success: ACTIONS.EDIT_ACTIVITY_TYPE_SUCCEDED,
			fail: ACTIONS.EDIT_ACTIVITY_TYPE_FAILED,
		},
		endpoint: ENDPOINTS.ACTIVITY_TYPE.replace(":param", param),
		method: HTTP_METHODS.PATCH,
		auth: true,
	},
});
export const disableActivityType = ({param}) => ({
	type: CALL_API,
	meta: {
		init: ACTIONS.DISABLE_ACTIVITY_TYPE_INIT,
		success: ACTIONS.DISABLE_ACTIVITY_TYPE_SUCCEDED,
		fail: ACTIONS.DISABLE_ACTIVITY_TYPE_FAILED,
	},
	endpoint: ENDPOINTS.ACTIVITY_TYPE_DEACTIVATE.replace(":param", param),
	method: HTTP_METHODS.DELETE,
	auth: true,
});
export const enableActivityType = ({param}) => ({
	type: CALL_API,
	meta: {
		actions: {
			init: ACTIONS.ENABLE_ACTIVITY_TYPE_INIT,
			success: ACTIONS.ENABLE_ACTIVITY_TYPE_SUCCEDED,
			fail: ACTIONS.ENABLE_ACTIVITY_TYPE_FAILED,
		},
		endpoint: ENDPOINTS.ACTIVITY_TYPE_ACTIVATE.replace(":param", param),
		method: HTTP_METHODS.DELETE,
		auth: true,
	},
});
export const disableAllActivityTypes = (params) => ({
	type: CALL_API,
	meta: {
		actions: {
			init: ACTIONS.DISABLE_ALL_ACTIVITY_TYPES_INIT,
			success: ACTIONS.DISABLE_ALL_ACTIVITY_TYPES_SUCCEDED,
			fail: ACTIONS.DISABLE_ALL_ACTIVITY_TYPES_FAILED,
		},
		endpoint: ENDPOINTS.ACTIVITY_TYPES_DEACTIVATE_ALL,
		method: HTTP_METHODS.DELETE,
		params,
		auth: true,
	},
});
export const enableAllActivityTypes = (params) => ({
	type: CALL_API,
	meta: {
		actions: {
			init: ACTIONS.ENABLE_ALL_ACTIVITY_TYPES_INIT,
			success: ACTIONS.ENABLE_ALL_ACTIVITY_TYPES_SUCCEDED,
			fail: ACTIONS.ENABLE_ALL_ACTIVITY_TYPES_FAILED,
		},
		endpoint: ENDPOINTS.ACTIVITY_TYPES_ACTIVATE_ALL,
		method: HTTP_METHODS.DELETE,
		params,
		auth: true,
	},
});
export const fetchactivityTypeExtraData = ({param}) => ({
	type: CALL_API,
	meta: {
		actions: {
			init: ACTIONS.FETCH_ACTIVITY_TYPE_EXTRA_DATA_INIT,
			success: ACTIONS.FETCH_ACTIVITY_TYPE_EXTRA_DATA_SUCCEDED,
			fail: ACTIONS.FETCH_ACTIVITY_TYPE_EXTRA_DATA_FAILED,
		},
		endpoint: ENDPOINTS.ACTIVITY_TYPE.replace(":param", param),
		method: HTTP_METHODS.GET,
		auth: true,
	},
});
export const createActivityTypeExtraData = (payload) => ({
	type: CALL_API,
	payload,
	meta: {
		actions: {
			init: ACTIONS.CREATE_ACTIVITY_TYPE_EXTRA_DATA_INIT,
			success: ACTIONS.CREATE_ACTIVITY_TYPE_EXTRA_DATA_SUCCEDED,
			fail: ACTIONS.CREATE_ACTIVITY_TYPE_EXTRA_DATA_FAILED,
		},
		endpoint: ENDPOINTS.ACTIVITY_TYPES,
		method: HTTP_METHODS.POST,
		auth: true,
	},
});
export const editActivityTypeExtraData = ({param}, payload) => ({
	type: CALL_API,
	payload,
	meta: {
		actions: {
			init: ACTIONS.EDIT_ACTIVITY_TYPE_EXTRA_DATA_INIT,
			success: ACTIONS.EDIT_ACTIVITY_TYPE_EXTRA_DATA_SUCCEDED,
			fail: ACTIONS.EDIT_ACTIVITY_TYPE_EXTRA_DATA_FAILED,
		},
		endpoint: ENDPOINTS.ACTIVITY_TYPE.replace(":param", param),
		method: HTTP_METHODS.PATCH,
		auth: true,
	},
});

export const deleteActivityType = ({param}) => ({
	type: CALL_API,
	meta: {
		actions: {
			init: ACTIONS.DELETE_ACTIVITY_TYPE_INIT,
			success: ACTIONS.DELETE_ACTIVITY_TYPE_SUCCEDED,
			fail: ACTIONS.DELETE_ACTIVITY_TYPE_FAILED,
		},
		endpoint: ENDPOINTS.ACTIVITY_TYPE_DELETE.replace(":param", param),
		method: HTTP_METHODS.DELETE,
		auth: true,
	}
})


export const deleteActivityTypes = () => ({
	type: CALL_API,
	meta: {
		actions: {
			init: ACTIONS.DELETE_ALL_ACTIVITY_TYPES_INIT,
			success: ACTIONS.DELETE_ALL_ACTIVITY_TYPES_SUCCEDED,
			fail: ACTIONS.DELETE_ALL_ACTIVITY_TYPES_FAILED,
		},
		endpoint: ENDPOINTS.ACTIVITY_TYPEs_DELETE_ALL,
		method: HTTP_METHODS.DELETE,
		auth: true,
	}

})



























