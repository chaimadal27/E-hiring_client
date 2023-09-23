import { ACTIONS, ENDPOINTS } from "./../constants"
import { CALL_API, HTTP_METHODS } from "./../../../../../../constants"
import {CANDIDATE_LANGUAGE_DISPLAY, CANDIDATE_LANGUAGES, DOCUMENT_DOWNLOAD} from "../constants/endpoints";
import {CANDIDATE_DOCUMENT_DISPLAY_INIT} from "../constants/actions";


export const clearStore = () =>
({
  type: ACTIONS.CLEAR_CANDIDATE
})


export const fetchCandidates = (params) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.FETCH_CANDIDATES_INIT,
      success: ACTIONS.FETCH_CANDIDATES_SUCCEDED,
      fail: ACTIONS.FETCH_CANDIDATES_FAILED
    },
    endpoint: ENDPOINTS.CANDIDATES,
    method: HTTP_METHODS.GET,
    params,
    auth: true
  }
})

export const searchCandidates = (params) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.SEARCH_CANDIDATES_INIT,
      success: ACTIONS.SEARCH_CANDIDATES_SUCCEDED,
      fail: ACTIONS.SEARCH_CANDIDATES_FAILED
    },
    endpoint: ENDPOINTS.CANDIDATES,
    method: HTTP_METHODS.GET,
    params,
    auth: true
  }
})

export const disableCandidate = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.DISABLE_CANDIDATE_INIT,
      success: ACTIONS.DISABLE_CANDIDATE_SUCCEDED,
      fail: ACTIONS.DISABLE_CANDIDATE_FAILED
    },
    endpoint: ENDPOINTS.CANDIDATE_DEACTIVATE.replace(":param", param),
    method: HTTP_METHODS.DELETE,
    auth: true
  }
})


export const enableCandidate = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.ENABLE_CANDIDATE_INIT,
      success: ACTIONS.ENABLE_CANDIDATE_SUCCEDED,
      fail: ACTIONS.ENABLE_CANDIDATE_FAILED
    },
    endpoint: ENDPOINTS.CANDIDATE_ACTIVATE.replace(":param", param),
    method: HTTP_METHODS.DELETE,
    auth: true
  }
})


export const disableCandidates = (params) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.DISABLE_CANDIDATES_INIT,
      success: ACTIONS.DISABLE_CANDIDATES_SUCCEDED,
      fail: ACTIONS.DISABLE_CANDIDATES_FAILED
    },
    endpoint: ENDPOINTS.CANDIDATES_DEACTIVATE,
    method: HTTP_METHODS.DELETE,
    params,
    auth: true
  }
})


export const enableCandidates = (params) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.ENABLE_CANDIDATES_INIT,
      success: ACTIONS.ENABLE_CANDIDATES_SUCCEDED,
      fail: ACTIONS.ENABLE_CANDIDATES_FAILED
    },
    endpoint: ENDPOINTS.CANDIDATES_ACTIVATE,
    method: HTTP_METHODS.DELETE,
    params,
    auth: true
  }
})


export const createCandidate = (payload) =>
({
  type: CALL_API,
  payload,
  meta: {
    actions: {
      init: ACTIONS.CREATE_CANDIDATE_EXTRA_DATA_INIT,
      success: ACTIONS.CREATE_CANDIDATE_EXTRA_DATA_SUCCEDED,
      fail: ACTIONS.CREATE_CANDIDATE_EXTRA_DATA_FAILED
    },
    isFormData: true,
    endpoint: ENDPOINTS.CANDIDATES,
    method: HTTP_METHODS.POST,
    auth: true
  }
})


export const editCandidate = ({ param }, payload) =>
({
  type: CALL_API,
  payload,
  meta: {
    actions: {
      init: ACTIONS.EDIT_CANDIDATE_EXTRA_DATA_INIT,
      success: ACTIONS.EDIT_CANDIDATE_EXTRA_DATA_SUCCEDED,
      fail: ACTIONS.EDIT_CANDIDATE_EXTRA_DATA_FAILED
    },
    isFormData: true,
    endpoint: ENDPOINTS.CANDIDATE.replace(":param", param),
    method: HTTP_METHODS.PUT,
    auth: true
  }
})
export const editCandidateLanguage = ({ param }, payload) =>
    ({
      type: CALL_API,
      payload,
      meta: {
        actions: {
          init: ACTIONS.EDIT_CANDIDATE_LANGUAGE_INIT,
          success: ACTIONS.EDIT_CANDIDATE_LANGUAGE_SUCCEDED,
          fail: ACTIONS.EDIT_CANDIDATE_LANGUAGE_FAILED
        },
        isFormData: true,
        endpoint: ENDPOINTS.CANDIDATE_LANGUAGES.replace(":param", param),
        method: HTTP_METHODS.PUT,
        auth: true
      }
    })
export const editCandidateDocument = ({ param }, payload) =>
    ({
      type: CALL_API,
      payload,
      meta: {
        actions: {
          init: ACTIONS.EDIT_CANDIDATE_DOCUMENT_INIT,
          success: ACTIONS.EDIT_CANDIDATE_DOCUMENT_SUCCEDED,
          fail: ACTIONS.EDIT_CANDIDATE_DOCUMENT_FAILED
        },
        isFormData: true,
        endpoint: ENDPOINTS.DOCUMENT.replace(":param", param),
        method: HTTP_METHODS.PUT,
        auth: true
      }
    })

export const fetchCandidate = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.FETCH_CANDIDATE_INIT,
      success: ACTIONS.FETCH_CANDIDATE_SUCCEDED,
      fail: ACTIONS.FETCH_CANDIDATE_FAILED
    },
    endpoint: ENDPOINTS.CANDIDATE.replace(":param", param),
    method: HTTP_METHODS.GET,
    auth: true
  }
})
export const fetchCandidateExtraData = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.FETCH_CANDIDATE_EXTRA_DATA_INIT,
      success: ACTIONS.FETCH_CANDIDATE_EXTRA_DATA_SUCCEDED,
      fail: ACTIONS.FETCH_CANDIDATE_EXTRA_DATA_FAILED
    },
    endpoint: ENDPOINTS.CANDIDATE.replace(":param", param),
    method: HTTP_METHODS.GET,
    auth: true
  }
})

export const fetchCandidateLanguage =({param})=>
    ({
      type: CALL_API,
      meta: {
        actions: {
          init: ACTIONS.CANDIDATE_LANGUAGE_DISPLAY_INIT,
          success: ACTIONS.CANDIDATE_LANGUAGE_DISPLAY_SUCCEDED,
          fail: ACTIONS.CANDIDATE_LANGUAGE_DISPLAY_FAILED
        },
        endpoint: ENDPOINTS.CANDIDATE_LANGUAGES.replace(":param", param),
        method: HTTP_METHODS.GET,
        auth: true
      }

    })

export const fetchCandidateDocument =({param})=>
    ({
      type: CALL_API,
      meta: {
        actions: {
          init: ACTIONS.CANDIDATE_DOCUMENT_DISPLAY_INIT,
          success: ACTIONS.CANDIDATE_DOCUMENT_DISPLAY_SUCCEDED,
          fail: ACTIONS.CANDIDATE_DOCUMENT_DISPLAY_FAILED
        },
        endpoint: ENDPOINTS.DOCUMENT.replace(":param", param),
        method: HTTP_METHODS.GET,
        isFormData: true,
        auth: true
      }

    })

export const downloadDocument = () =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.DOWNLOAD_DOCUMENT_INIT,
        success: ACTIONS.DOWNLOAD_DOCUMENT_SUCCEDED,
        fail: ACTIONS.DOWNLOAD_DOCUMENT_FAILED
      },
      endpoint: ENDPOINTS.DOCUMENT_DOWNLOAD,
      method: HTTP_METHODS.GET,
      isFormData: true,
      auth: true
    }
  });

