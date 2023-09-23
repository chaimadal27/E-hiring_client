import React, { createContext, useContext, useState, useCallback } from "react"
import { isEqual, isFunction } from "lodash"
import { IS_ACTIVATED, IS_ACTIVATED_INIT_VALUE } from "./../store/constants";

const SchoolsUIContext = createContext()

export function useSchoolsUIContext() {
  return useContext(SchoolsUIContext)
}

export const SchoolsUIConsumer = () => SchoolsUIContext.Consumer

export function SchoolsUIProvider({ schoolsUIEvents, children }) {

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
    ...schoolsUIEvents
  }

  return (
    <SchoolsUIContext.Provider value={value}>
      {children}
    </SchoolsUIContext.Provider>
  )
}
