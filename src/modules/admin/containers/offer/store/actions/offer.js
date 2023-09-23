import { ACTIONS, ENDPOINTS } from "./../constants"
import { CALL_API, HTTP_METHODS } from "./../../../../../../constants"
import {
  DELETE_APPOINTMENT_FAILED,
  DELETE_APPOINTMENT_INIT,
  DELETE_APPOINTMENT_SUCCEDED,
  FETCH_APPOINTMENT_INIT
} from "../constants/actions";
import {DELETE_APPOINTEMENT, OFFER_APPOINTMENT, OFFER_APPOINTMENTS} from "../constants/endpoints";
import {APPOINTMENT} from "../../../profile/store/constants/endpoints"


export const clearStore = () =>
({
  type: ACTIONS.CLEAR_OFFER
})

export const fetchOffers = (params) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.FETCH_OFFERS_INIT,
      success: ACTIONS.FETCH_OFFERS_SUCCEDED,
      fail: ACTIONS.FETCH_OFFERS_FAILED
    },
    endpoint: ENDPOINTS.OFFERS,
    method: HTTP_METHODS.GET,
    params,
    auth: true
  }
})

export const disableOffer = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.DISABLE_OFFER_INIT,
      success: ACTIONS.DISABLE_OFFER_SUCCEDED,
      fail: ACTIONS.DISABLE_OFFER_FAILED
    },
    endpoint: ENDPOINTS.OFFER_DEACTIVATE.replace(":param", param),
    method: HTTP_METHODS.DELETE,
    auth: true
  }
})

export const validateOffer = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.VALIDATE_OFFER_INIT,
      success: ACTIONS.VALIDATE_OFFER_SUCCEDED,
      fail: ACTIONS.VALIDATE_OFFER_FAILED
    },
    endpoint: ENDPOINTS.OFFER_VALIDATE.replace(":param", param),
    method: HTTP_METHODS.GET,
    auth: true
  }
})

export const closeOffer = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.CLOSE_OFFER_INIT,
      success: ACTIONS.CLOSE_OFFER_SUCCEDED,
      fail: ACTIONS.CLOSE_OFFER_FAILED
    },
    endpoint: ENDPOINTS.OFFER_CLOSE.replace(":param", param),
    method: HTTP_METHODS.DELETE,
    auth: true
  }
})

export const enableOffer = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.ENABLE_OFFER_INIT,
      success: ACTIONS.ENABLE_OFFER_SUCCEDED,
      fail: ACTIONS.ENABLE_OFFER_FAILED
    },
    endpoint: ENDPOINTS.OFFER_ACTIVATE.replace(":param", param),
    method: HTTP_METHODS.DELETE,
    auth: true
  }
})


export const disableOffers = (params) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.DISABLE_OFFERS_INIT,
      success: ACTIONS.DISABLE_OFFERS_SUCCEDED,
      fail: ACTIONS.DISABLE_OFFERS_FAILED
    },
    endpoint: ENDPOINTS.OFFERS_DEACTIVATE,
    method: HTTP_METHODS.DELETE,
    params,
    auth: true
  }
})


export const enableOffers = (params) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.ENABLE_OFFERS_INIT,
      success: ACTIONS.ENABLE_OFFERS_SUCCEDED,
      fail: ACTIONS.ENABLE_OFFERS_FAILED
    },
    endpoint: ENDPOINTS.OFFERS_ACTIVATE,
    method: HTTP_METHODS.DELETE,
    params,
    auth: true
  }
})


export const createOffer = (payload) =>
({
  type: CALL_API,
  payload,
  meta: {
    actions: {
      init: ACTIONS.CREATE_OFFER_EXTRA_DATA_INIT,
      success: ACTIONS.CREATE_OFFER_EXTRA_DATA_SUCCEDED,
      fail: ACTIONS.CREATE_OFFER_EXTRA_DATA_FAILED
    },
    isFormData: true,
    endpoint: ENDPOINTS.OFFERS,
    method: HTTP_METHODS.POST,
    auth: true
  }
})


export const editOffer = ({ param }, payload) =>
({
  type: CALL_API,
  payload,
  meta: {
    actions: {
      init: ACTIONS.EDIT_OFFER_EXTRA_DATA_INIT,
      success: ACTIONS.EDIT_OFFER_EXTRA_DATA_SUCCEDED,
      fail: ACTIONS.EDIT_OFFER_EXTRA_DATA_FAILED
    },
    isFormData: true,
    endpoint: ENDPOINTS.OFFER.replace(":param", param),
    method: HTTP_METHODS.PUT,
    auth: true
  }
})

export const fetchOffer = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.FETCH_OFFER_INIT,
      success: ACTIONS.FETCH_OFFER_SUCCEDED,
      fail: ACTIONS.FETCH_OFFER_FAILED
    },
    endpoint: ENDPOINTS.OFFER.replace(":param", param),
    method: HTTP_METHODS.GET,
    auth: true
  }
})


export const fetchOfferExtraData = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.FETCH_OFFER_EXTRA_DATA_INIT,
      success: ACTIONS.FETCH_OFFER_EXTRA_DATA_SUCCEDED,
      fail: ACTIONS.FETCH_OFFER_EXTRA_DATA_FAILED
    },
    endpoint: ENDPOINTS.OFFER.replace(":param", param),
    method: HTTP_METHODS.GET,
    auth: true
  }
})

// kanaban
export const clearKanban = () =>
({
  type: ACTIONS.CLEAR_KANBAN
})

export const createKanabn = (payload) =>
({
  type: CALL_API,
  payload,
  meta: {
    actions: {
      init: ACTIONS.CREATE_KANBAN_INIT,
      success: ACTIONS.CREATE_KANBAN_SUCCEDED,
      fail: ACTIONS.CREATE_KANBAN_FAILED
    },
    isFormData: true,
    endpoint: ENDPOINTS.OFFER_KANBAN,
    method: HTTP_METHODS.POST,
    auth: true
  }
})

export const fetchKanbanCandidates = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.FETCH_KANBAN_CANDIDATES_INIT,
      success: ACTIONS.FETCH_KANBAN_CANDIDATES_SUCCEDED,
      fail: ACTIONS.FETCH_KANBAN_CANDIDATES_FAILED
    },
    endpoint: ENDPOINTS.KANBAN_CANDIDATES.replace(":param", param),
    method: HTTP_METHODS.GET,
    auth: true
  }
})

export const deleteKanban = (id) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.DELETE_KANBAN_INIT,
      success: ACTIONS.DELETE_KANBAN_SUCCEDED,
      fail: ACTIONS.DELETE_KANBAN_FAILED
    },
    endpoint: ENDPOINTS.DELETE_KANBAN.replace(":param", id),
    method: HTTP_METHODS.GET,
    auth: true
  }
})

export const shareCv = ({ cvParam }, payload) =>
({
  type: CALL_API,
  payload,
  meta: {
    actions: {
      init: ACTIONS.SHARE_CV_INIT,
      success: ACTIONS.SHARE_CV_SUCCEDED,
      fail: ACTIONS.SHARE_CV_FAILED
    },
    endpoint: ENDPOINTS.SHARE_CV.replace(":param", cvParam),
    method: HTTP_METHODS.POST,
    isFormData: true,
    auth: true
  }
})


//
export const createOfferAppointment = (payload) =>
({
  type: CALL_API,
  payload,
  meta: {
    actions: {
      init: ACTIONS.CREATE_APPOINTMENT_INIT,
      success: ACTIONS.CREATE_APPOINTMENT_SUCCEDED,
      fail: ACTIONS.CREATE_APPOINTMENT_FAILED
    },
    isFormData: true,
    endpoint: ENDPOINTS.OFFER_APPOINTMENTS,
    method: HTTP_METHODS.POST,
    auth: true
  }
})

export const fetchAppointment = (
    param
) =>
    ({
      type: CALL_API,
      meta: {
        actions: {
          init: ACTIONS.FETCH_APPOINTMENT_INIT,
          success: ACTIONS.FETCH_APPOINTMENT_SUCCEDED,
          fail: ACTIONS.FETCH_APPOINTMENT_FAILED
        },
        endpoint: ENDPOINTS.APPOINTMENT.replace(":param", param),
        method: HTTP_METHODS.GET,
        auth: true
      }
    })

export const fetchAppointmentExtraData = ( param ) =>
    ({
      type: CALL_API,
      meta: {
        actions: {
          init: ACTIONS.FETCH_APPOINTMENT_EXTRA_DATA_INIT,
          success: ACTIONS.FETCH_APPOINTMENT_EXTRA_DATA_SUCCEDED,
          fail: ACTIONS.FETCH_APPOINTMENT_EXTRA_DATA_FAILED
        },
        endpoint: ENDPOINTS.APPOINTMENT.replace(":param", param),
        method: HTTP_METHODS.GET,
        auth: true
      }
    })

export const editAppointment =({ param }, payload)=>
    ({
      type: CALL_API,
      payload,
      meta: {
        actions: {
          init: ACTIONS.EDIT_APPOINTMENT_INIT,
          success: ACTIONS.EDIT_APPOINTMENT_SUCCEDED,
          fail: ACTIONS.EDIT_APPOINTMENT_FAILED
        },
        isFormData: true,
        endpoint: ENDPOINTS.APPOINTMENT.replace(":param", param),
        method: HTTP_METHODS.PUT,
        auth: true
      }
    })

export const deleteAppointment = (param ) =>
    ({
      type: CALL_API,
      meta: {
        actions: {
          init: ACTIONS.DELETE_APPOINTMENT_INIT,
          success: ACTIONS.DELETE_APPOINTMENT_SUCCEDED,
          fail: ACTIONS.DELETE_APPOINTMENT_FAILED
        },
        endpoint: ENDPOINTS.DELETE_APPOINTEMENT.replace(":param", param),
        method: HTTP_METHODS.DELETE,
        auth: true
      }
    })

