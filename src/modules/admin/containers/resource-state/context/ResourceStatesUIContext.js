import React, { createContext, useContext, useState, useCallback } from "react"
import { isEqual, isFunction } from "lodash"

const ResourceStatesUIContext = createContext()

export function useResourceStatesUIContext() {
  return useContext(ResourceStatesUIContext)
}

export const ResourceStatesUIConsumer = () => ResourceStatesUIContext.Consumer

export function ResourceStatesUIProvider({ resourceStatesUIEvents, children }) {
  const [queryParams, setQueryParamsBase] = useState({})
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
    ...resourceStatesUIEvents
  }

  return (
    <ResourceStatesUIContext.Provider value={value}>
      {children}
    </ResourceStatesUIContext.Provider>
  )
}
