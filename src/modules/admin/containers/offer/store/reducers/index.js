import { ACTIONS } from "./../constants"
import {DELETE_APPOINTMENT_FAILED, DELETE_APPOINTMENT_INIT, DELETE_APPOINTMENT_SUCCEDED} from "../constants/actions";

const initialState = {
  offers: [],
  offer: {},
  offerExtraData: {},
  kanbanCandidates: [],
  appointment: {},
  //appointmentContent:{},
  appointments: [],
  kanbanCandidatesSize: 0,
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
    isClosed: false,
  },
  error: null,
}


export default (state = initialState, action) => {
  const { payload, type } = action
  switch (type) {
    case ACTIONS.CLEAR_OFFER: {
      return {
        ...state,
        success: initialState.success,
        error: null,
        isFetching: false,
        isLoading: false,
      }
    }

    case ACTIONS.FILTER_APPOINTMENT: {
      return {...state, appointmentFilterTerm: {...state.appointmentFilterTerm, ...payload}}
    }

    case ACTIONS.FETCH_OFFERS_INIT: {
      return {...state, isFetching: true, error: null}
    }
    case ACTIONS.FETCH_OFFERS_SUCCEDED: {
      const {count, results} = payload
      return {
        ...state,
        totalSize: count,
        offers: results,
        isFetching: false,
        error: null,
      }
    }
    case ACTIONS.FETCH_OFFERS_FAILED: {
      return {...state, isFetching: false, error: payload}
    }

    case ACTIONS.CREATE_OFFER_INIT: {
      return {...state, isLoading: true, error: null, success: initialState.success}
    }
    case ACTIONS.CREATE_OFFER_SUCCEDED: {
      return {
        ...state,
        success: {...state.success, isCreated: true},
        isLoading: false,
        error: null}
    }
    case ACTIONS.CREATE_OFFER_FAILED: {
      return {...state, error: payload, isLoading: false, success: false}
    }

    case ACTIONS.EDIT_OFFER_INIT: {
      return {...state, isLoading: true, error: null, success: initialState.success}
    }
    case ACTIONS.EDIT_OFFER_SUCCEDED: {
      return {
        ...state,
        offerContent: payload,
        offer: payload,
        success: {...state.success, isUpdated: true},
        isLoading: false,
        error: null,
      }
    }
    case ACTIONS.EDIT_OFFER_FAILED: {
      return {...state, error: payload, isLoading: false, success: false}
    }

    case ACTIONS.EDIT_OFFER_CONTENT_INIT: {
      return {...state, isLoading: true, error: null, success: initialState.success}
    }
    case ACTIONS.EDIT_OFFER_CONTENT_SUCCEDED: {
      return {
        ...state,
        offerContent: payload,
        success: {...state.success, isUpdated: true},
        isLoading: false,
        error: null,
      }
    }
    case ACTIONS.EDIT_OFFER_CONTENT_FAILED: {
      return {...state, error: payload, isLoading: false}
    }

    case ACTIONS.FETCH_OFFER_CONTENT_INIT: {
      return {...state, isFetching: true, offerContent: null, error: null}
    }
    case ACTIONS.FETCH_OFFER_CONTENT_SUCCEDED: {
      return {...state, offerContent: payload, isFetching: false, error: null}
    }
    case ACTIONS.FETCH_OFFER_CONTENT_FAILED: {
      return {...state, isFetching: false, error: payload}
    }

    case ACTIONS.FETCH_OFFER_INIT: {
      return {...state, isFetching: true, offer: null, error: null}
    }
    case ACTIONS.FETCH_OFFER_SUCCEDED: {
      return {...state, offer: payload, isLoading: false, isFetching: false, error: null}
    }
    case ACTIONS.FETCH_OFFER_FAILED: {
      return {...state, isFetching: false, isLoading: false, error: payload}
    }

    case ACTIONS.DISABLE_OFFER_INIT: {
      return {...state, isLoading: true, success: initialState.success, error: null}
    }
    case ACTIONS.DISABLE_OFFER_SUCCEDED: {
      return {...state, success: {...state.success, isDeactivated: true}, isLoading: false, error: null}
    }
    case ACTIONS.DISABLE_OFFER_FAILED: {
      return {...state, isLoading: false, error: payload}
    }

    case ACTIONS.CLOSE_OFFER_INIT: {
      return {...state, isLoading: true, success: initialState.success, error: null}
    }
    case ACTIONS.CLOSE_OFFER_SUCCEDED: {
      return {...state, success: {...state.success, isClosed: true}, isLoading: false, error: null}
    }
    case ACTIONS.CLOSE_OFFER_FAILED: {
      return {...state, isLoading: false, error: payload}
    }

    case ACTIONS.ENABLE_OFFER_INIT: {
      return {...state, isLoading: true, success: initialState.success, error: null}
    }
    case ACTIONS.ENABLE_OFFER_SUCCEDED: {
      return {...state, success: {...state.success, isActivated: true}, isLoading: false, error: null}
    }
    case ACTIONS.ENABLE_OFFER_FAILED: {
      return {...state, isLoading: false, error: payload}
    }

    case ACTIONS.CREATE_OFFER_EXTRA_DATA_INIT: {
      return {...state, isLoading: true, error: null, success: initialState.success}
    }
    case ACTIONS.CREATE_OFFER_EXTRA_DATA_SUCCEDED: {
      return {
        ...state,
        success: {...state.success, isCreated: true},
        offerExtraData: payload,
        isLoading: false,
        error: null
      }
    }
    case ACTIONS.CREATE_OFFER_EXTRA_DATA_FAILED: {
      return {...state, error: payload, isLoading: false}
    }

    case ACTIONS.EDIT_OFFER_EXTRA_DATA_INIT: {
      return {...state, isLoading: true, error: null, success: initialState.success}
    }
    case ACTIONS.EDIT_OFFER_EXTRA_DATA_SUCCEDED: {
      {
        console.log(payload)
      }
      return {
        ...state,
        offer: payload,
        offerExtraData: payload,
        success: {...state.success, isUpdated: true},
        isLoading: false,
        error: null,
      }
    }
    case ACTIONS.EDIT_OFFER_EXTRA_DATA_FAILED: {
      return {...state, error: payload, isLoading: false}
    }

    case ACTIONS.FETCH_OFFER_EXTRA_DATA_INIT: {
      return {...state, isFetching: true, offerExtraData: null, error: null}
    }
    case ACTIONS.FETCH_OFFER_EXTRA_DATA_SUCCEDED: {
      return {...state, offerExtraData: payload, isLoading: false, isFetching: false, error: null}
    }
    case ACTIONS.FETCH_OFFER_EXTRA_DATA_FAILED: {
      return {...state, isFetching: false, isLoading: false, error: payload}
    }

    case ACTIONS.VALIDATE_OFFER_INIT: {
      return {...state, isLoading: true, success: initialState.success, error: null}
    }
    case ACTIONS.VALIDATE_OFFER_SUCCEDED: {
      return {...state, success: {...state.success, isValidated: true}, isLoading: false, error: null}
    }
    case ACTIONS.VALIDATE_OFFER_FAILED: {
      return {...state, isLoading: false, error: payload}
    }
      // kanaban
    case ACTIONS.CLEAR_KANBAN: {
      return {
        ...state,
        candikanbanCandidates: [],
        kanbanCandidatesSize: 0,
        success: initialState.success,
        error: null,
        isFetching: false,
        isLoading: false,
      }
    }

    case ACTIONS.CREATE_KANBAN_INIT: {
      return {...state, isLoading: true, error: null, success: initialState.success}
    }
    case ACTIONS.CREATE_KANBAN_SUCCEDED: {
      return {...state, success: {...state.success, isCreated: true}, isLoading: false, error: null}
    }
    case ACTIONS.CREATE_KANBAN_FAILED: {
      return {...state, error: payload, isLoading: false, success: false}
    }

    case ACTIONS.FETCH_KANBAN_CANDIDATES_INIT: {
      return {...state, isFetching: true, error: null, kanbanCandidates: []}
    }
    case ACTIONS.FETCH_KANBAN_CANDIDATES_SUCCEDED: {
      return {
        ...state,
        //kanbanCandidatesSize: count,
        kanbanCandidates: payload,
        isFetching: false,
        error: null,
      }
    }
    case ACTIONS.FETCH_KANBAN_CANDIDATES_FAILED: {
      return {...state, isFetching: false, error: payload}
    }

    case ACTIONS.DELETE_KANBAN_INIT: {
      return {...state, isLoading: true, success: initialState.success, error: null}
    }
    case ACTIONS.DELETE_KANBAN_SUCCEDED: {
      return {...state, success: {...state.success, isClosed: true}, isLoading: false, error: null}
    }
    case ACTIONS.DELETE_KANBAN_FAILED: {
      return {...state, isLoading: false, error: payload}
    }

    case ACTIONS.SHARE_CV_INIT: {
      return {...state, isLoading: true, success: initialState.success, error: null}
    }
    case ACTIONS.SHARE_CV_SUCCEDED: {
      return {...state, success: {...state.success, isValidated: true}, isLoading: false, error: null}
    }
    case ACTIONS.SHARE_CV_FAILED: {
      return {...state, isLoading: false, error: payload}
    }


      // Appointments
    case ACTIONS.CREATE_APPOINTMENT_INIT: {
      return {...state, isLoading: true, error: null, success: initialState.success}
    }
    case ACTIONS.CREATE_APPOINTMENT_SUCCEDED: {
      return {
        ...state,
     //   appointment: payload,
        success: {...state.success, isCreated: true},
        isLoading: false,
        error: null
      }
    }
    case ACTIONS.CREATE_APPOINTMENT_FAILED: {
      return {...state, error: payload, isLoading: false, success: false}
    }
    case ACTIONS.EDIT_APPOINTMENT_INIT: {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.EDIT_APPOINTMENT_SUCCEDED: {
      return {
        ...state,
        appointmentContent: payload,
        appointment:payload,
        success: { ...state.success, isUpdated: true },
        isLoading: false,
        error: null,
      }
    }
    case ACTIONS.EDIT_APPOINTMENT_FAILED: {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.FETCH_APPOINTMENT_INIT: {
      return { ...state, isFetching: true, appointmentContent:null, error: null }
    }
    case ACTIONS.FETCH_APPOINTMENT_SUCCEDED: {
      return {
        ...state,
        appointmentContent: payload,
        isFetching: false,
        error: null }
    }
    case ACTIONS.FETCH_APPOINTMENT_FAILED: {
      return { ...state, isFetching: false, error: payload }
    }

    case ACTIONS.DELETE_APPOINTMENT_INIT: {
      return {...state, isLoading: true, success: initialState.success, error: null}
    }
    case ACTIONS.DELETE_APPOINTMENT_SUCCEDED: {
      return {...state, success: {...state.success, isClosed: true}, isLoading: false, error: null}
    }
    case ACTIONS.DELETE_APPOINTMENT_FAILED: {
      return {...state, isLoading: false, error: payload}
    }

    default: {
      return state
    }
  }


}
