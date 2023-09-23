import React, { createContext, useContext, useState, useCallback } from "react"
import { isEqual, isFunction } from "lodash"
import { IS_ACTIVATED, IS_ACTIVATED_INIT_VALUE } from "./../store/constants";

const CandidatesUIContext = createContext()

export function useCandidatesUIContext() {
  return useContext(CandidatesUIContext)
}

export const CandidatesUIConsumer = () => CandidatesUIContext.Consumer

export function CandidatesUIProvider({ candidatesUIEvents, children }) {

  const [queryParams, setQueryParamsBase] = useState({
    [IS_ACTIVATED]: IS_ACTIVATED_INIT_VALUE,
  });
  const [ids, setIds] = useState([])
  const setQueryParams = useCallback((nextQueryParams) => {
    setQueryParamsBase((prevQueryParams) => {
      if (isFunction(nextQueryParams)) {
        nextQueryParams = nextQueryParams(prevQueryParams)
      }

      if (isEqual(prevQueryParams, nextQueryParams)) {
        return prevQueryParams
      }

      return nextQueryParams
    })
  }, [])

  const value = {
    queryParams,
    setQueryParamsBase,
    ids,
    setIds,
    setQueryParams,
    ...candidatesUIEvents
  }

  return (
    <CandidatesUIContext.Provider value={value}>
      {children}
    </CandidatesUIContext.Provider>
  )
}
