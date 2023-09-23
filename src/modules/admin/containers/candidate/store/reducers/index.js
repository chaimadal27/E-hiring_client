import { ACTIONS } from "./../constants"
import {CANDIDATE_LANGUAGE_DISPLAY_INIT} from "../constants/actions";

const initialState = {
  candidates: [],
  searchedCandidates: [],
  candidate: {},
  candidateExtraData: {},
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
    case ACTIONS.CLEAR_CANDIDATE: {
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

    case ACTIONS.FETCH_CANDIDATES_INIT: {
      return { ...state, isFetching: true, error: null }
    }
    case ACTIONS.FETCH_CANDIDATES_SUCCEDED: {
      const { count, results } = payload
      return {
        ...state,
        totalSize: count,
        candidates: results,
        isFetching: false,
        error: null,
      }
    }
    case ACTIONS.FETCH_CANDIDATES_FAILED: {
      return { ...state, isFetching: false, error: payload }
    }

    case ACTIONS.SEARCH_CANDIDATES_INIT: {
      return { ...state, isFetching: true, error: null }
    }
    case ACTIONS.SEARCH_CANDIDATES_SUCCEDED: {
      const { count, results } = payload
      return {
        ...state,
        totalSize: count,
        searchedCandidates: results,
        isFetching: false,
        error: null,
      }
    }
    case ACTIONS.SEARCH_CANDIDATES_FAILED: {
      return { ...state, isFetching: false, error: payload }
    }

    case ACTIONS.CREATE_CANDIDATE_INIT: {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.CREATE_CANDIDATE_SUCCEDED: {
      return { ...state, success: { ...state.success, isCreated: true }, isLoading: false, error: null }
    }
    case ACTIONS.CREATE_CANDIDATE_FAILED: {
      return { ...state, error: payload, isLoading: false, success: false }
    }

    case ACTIONS.EDIT_CANDIDATE_INIT: {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.EDIT_CANDIDATE_SUCCEDED: {
      return {
        ...state,
        candidateContent: payload,
        candidate: payload,
        success: { ...state.success, isUpdated: true },
        isLoading: false,
        error: null,
      }
    }
    case ACTIONS.EDIT_CANDIDATE_FAILED: {
      return { ...state, error: payload, isLoading: false, success: false }
    }

    case ACTIONS.EDIT_CANDIDATE_LANGUAGE_INIT:{
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.EDIT_CANDIDATE_LANGUAGE_SUCCEDED: {
      return {
        ...state,
        candidateContent: payload,
        candidate: payload,
        success: { ...state.success, isUpdated: true },
        isLoading: false,
        error: null,
      }
    }
    case ACTIONS.EDIT_CANDIDATE_LANGUAGE_FAILED: {
      return { ...state, error: payload, isLoading: false, success: false }
    }

    case ACTIONS.CANDIDATE_LANGUAGE_DISPLAY_INIT:{
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.CANDIDATE_LANGUAGE_DISPLAY_SUCCEDED: {
      return { ...state, candidateContent: payload, isFetching: false, error: null }
    }
    case ACTIONS.CANDIDATE_LANGUAGE_DISPLAY_FAILED: {
      return { ...state, error: payload, isLoading: false, success: false }
    }


    case ACTIONS.EDIT_CANDIDATE_DOCUMENT_INIT:{
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.EDIT_CANDIDATE_DOCUMENT_SUCCEDED: {
      return {
        ...state,
        candidateContent: payload,
        candidate: payload,
        success: { ...state.success, isUpdated: true },
        isLoading: false,
        error: null,
      }
    }
    case ACTIONS.EDIT_CANDIDATE_DOCUMENT_FAILED: {
      return { ...state, error: payload, isLoading: false, success: false }
    }

    case ACTIONS.CANDIDATE_DOCUMENT_DISPLAY_INIT:{
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.CANDIDATE_DOCUMENT_DISPLAY_SUCCEDED: {
      return { ...state, candidateContent: payload, isFetching: false, error: null }
    }
    case ACTIONS.CANDIDATE_DOCUMENT_DISPLAY_FAILED: {
      return { ...state, error: payload, isLoading: false, success: false }
    }


    case ACTIONS.EDIT_CANDIDATE_CONTENT_INIT: {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.EDIT_CANDIDATE_CONTENT_SUCCEDED: {
      return {
        ...state,
        candidateContent: payload,
        success: { ...state.success, isUpdated: true },
        isLoading: false,
        error: null,
      }
    }
    case ACTIONS.EDIT_CANDIDATE_CONTENT_FAILED: {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.FETCH_CANDIDATE_CONTENT_INIT: {
      return { ...state, isFetching: true, candidateContent: null, error: null }
    }
    case ACTIONS.FETCH_CANDIDATE_CONTENT_SUCCEDED: {
      return { ...state, candidateContent: payload, isFetching: false, error: null }
    }
    case ACTIONS.FETCH_CANDIDATE_CONTENT_FAILED: {
      return { ...state, isFetching: false, error: payload }
    }

    case ACTIONS.FETCH_CANDIDATE_INIT: {
      return { ...state, isFetching: true, candidate: null, error: null }
    }
    case ACTIONS.FETCH_CANDIDATE_SUCCEDED: {
      return { ...state, candidate: payload, isLoading: false, isFetching: false, error: null }
    }
    case ACTIONS.FETCH_CANDIDATE_FAILED: {
      return { ...state, isFetching: false, isLoading: false, error: payload }
    }

    case ACTIONS.DISABLE_CANDIDATE_INIT: {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.DISABLE_CANDIDATE_SUCCEDED: {
      return { ...state, success: { ...state.success, isDeactivated: true }, isLoading: false, error: null }
    }
    case ACTIONS.DISABLE_CANDIDATE_FAILED: {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.ENABLE_CANDIDATE_INIT: {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.ENABLE_CANDIDATE_SUCCEDED: {
      return { ...state, success: { ...state.success, isActivated: true }, isLoading: false, error: null }
    }
    case ACTIONS.ENABLE_CANDIDATE_FAILED: {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.CREATE_CANDIDATE_EXTRA_DATA_INIT: {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.CREATE_CANDIDATE_EXTRA_DATA_SUCCEDED: {
      return { ...state, success: { ...state.success, isCreated: true }, candidateExtraData: payload, isLoading: false, error: null }
    }
    case ACTIONS.CREATE_CANDIDATE_EXTRA_DATA_FAILED: {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.EDIT_CANDIDATE_EXTRA_DATA_INIT: {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.EDIT_CANDIDATE_EXTRA_DATA_SUCCEDED: {
      return {
        ...state,
        candidate: payload,
        candidateExtraData: payload,
        success: { ...state.success, isUpdated: true },
        isLoading: false,
        error: null,
      }
    }
    case ACTIONS.EDIT_CANDIDATE_EXTRA_DATA_FAILED: {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.FETCH_CANDIDATE_EXTRA_DATA_INIT: {
      return { ...state, isFetching: true, candidateExtraData: null, error: null }
    }
    case ACTIONS.FETCH_CANDIDATE_EXTRA_DATA_SUCCEDED: {
      return { ...state, candidateExtraData: payload, isLoading: false, isFetching: false, error: null }
    }
    case ACTIONS.FETCH_CANDIDATE_EXTRA_DATA_FAILED: {
      return { ...state, isFetching: false, isLoading: false, error: payload }
    }

    case ACTIONS.DOWNLOAD_DOCUMENT_INIT:{
      return {...state, isLoading: true
    };}
    case ACTIONS.DOWNLOAD_DOCUMENT_SUCCEDED:{
      return {...state, loaded: true
    };}
    case ACTIONS.DOWNLOAD_DOCUMENT_FAILED:{
      return { ...state, loaded: false
    };}

    default: {
      return state
    }
  }
}
