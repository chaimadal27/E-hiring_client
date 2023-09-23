import React, { createContext, useContext, useState, useCallback } from "react"
import { isEqual, isFunction } from "lodash"
import { IS_ACTIVATED, IS_ACTIVATED_INIT_VALUE } from "./../store/constants";

const PartnershipsUIContext = createContext()

export function usePartnershipsUIContext() {
  return useContext(PartnershipsUIContext)
}

export const PartnershipsUIConsumer = () => PartnershipsUIContext.Consumer

export function PartnershipsUIProvider({ partnershipsUIEvents, children }) {

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
    ...partnershipsUIEvents
  }

  return (
    <PartnershipsUIContext.Provider value={value}>
      {children}
    </PartnershipsUIContext.Provider>
  )
}
