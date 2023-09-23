import React, { createContext, useContext, useState, useCallback } from "react"
import { isEqual, isFunction } from "lodash"
import { IS_ACTIVATED, IS_ACTIVATED_INIT_VALUE } from "./../store/constants";

const LegalAgenciesUIContext = createContext()

export function useLegalAgenciesUIContext() {
  return useContext(LegalAgenciesUIContext)
}

export const LegalAgenciesUIConsumer = () => LegalAgenciesUIContext.Consumer

export function LegalAgenciesUIProvider({ legalAgenciesUIEvents, children }) {

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
    ...legalAgenciesUIEvents
  }

  return (
    <LegalAgenciesUIContext.Provider value={value}>
      {children}
    </LegalAgenciesUIContext.Provider>
  )
}
