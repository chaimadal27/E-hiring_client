import React, { createContext, useContext, useState, useCallback } from "react"
import { isEqual, isFunction } from "lodash"
import {IS_DELETED, IS_DELETED_INIT_VALUE} from "./../store/constants"

const ActivitiesUIContext = createContext()

export function useActivitiesUIContext() {
  return useContext(ActivitiesUIContext)
}


export const ActivitiesUIConsumer = () => ActivitiesUIContext.Consumer

export function ActivitiesUIProvider({ activitiesUIEvents, children }) {

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
    ...activitiesUIEvents
  }

  return (
    <ActivitiesUIContext.Provider value={value}>
      {children}
    </ActivitiesUIContext.Provider>
  )
}
