import React, { createContext, useContext, useState, useCallback } from "react"
import { isEqual, isFunction } from "lodash"
import { IS_ACTIVATED, IS_ACTIVATED_INIT_VALUE } from "./../store/constants";

const OffersUIContext = createContext()

export function useOffersUIContext() {
  return useContext(OffersUIContext)
}

export const OffersUIConsumer = () => OffersUIContext.Consumer

export function OffersUIProvider({ offersUIEvents, children }) {

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
    ...offersUIEvents
  }

  return (
    <OffersUIContext.Provider value={value}>
      {children}
    </OffersUIContext.Provider>
  )
}
