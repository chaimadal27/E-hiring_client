import React, { createContext, useContext, useState, useCallback } from "react"
import { isEqual, isFunction } from "lodash"
import {IS_DELETED, IS_DELETED_INIT_VALUE} from "./../store/constants"

const BusinessUnitsUIContext = createContext()

export function useBusinessUnitsUIContext() {
  return useContext(BusinessUnitsUIContext)
}


export const BusinessUnitsUIConsumer = () => BusinessUnitsUIContext.Consumer

export function BusinessUnitsUIProvider({ businessUnitsUIEvents, children }) {

  const [queryParams, setQueryParamsBase] = useState({[IS_DELETED]: IS_DELETED_INIT_VALUE})
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
    ...businessUnitsUIEvents
  }

  return (
    <BusinessUnitsUIContext.Provider value={value}>
      {children}
    </BusinessUnitsUIContext.Provider>
  )
}
