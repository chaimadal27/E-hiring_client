import React, { createContext, useContext, useState, useCallback } from "react"
import { isEqual, isFunction } from "lodash"
import { IS_ACTIVATED, IS_ACTIVATED_INIT_VALUE } from "./../store/constants";

const ActivityTypesUIContext = createContext()

export function useActivityTypesUIContext() {
  return useContext(ActivityTypesUIContext)
}

export const ActivityTypesUIConsumer = () => ActivityTypesUIContext.Consumer

export function ActivityTypesUIProvider({ activityTypesUIEvents, children }) {

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
    ...activityTypesUIEvents
  }

  return (
    <ActivityTypesUIContext.Provider value={value}>
      {children}
    </ActivityTypesUIContext.Provider>
  )
}
