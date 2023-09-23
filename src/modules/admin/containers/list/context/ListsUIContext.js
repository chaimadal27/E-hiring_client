import React, { createContext, useContext, useState, useCallback } from "react";
import { isEqual, isFunction } from "lodash";

const ListsUIContext = createContext();

export function useListsUIContext() {
  return useContext(ListsUIContext);
}

export const ListsUIConsumer = () => ListsUIContext.Consumer;

export function ListsUIProvider({ listsUIEvents, children }) {
  const [queryParams, setQueryParamsBase] = useState({});
  const [ids, setIds] = useState([]);
  const setQueryParams = useCallback((nextQueryParams) => {
    setQueryParamsBase((prevQueryParams) => {
      if (isFunction(nextQueryParams)) {
        nextQueryParams = nextQueryParams(prevQueryParams);
      }

      if (isEqual(prevQueryParams, nextQueryParams)) {
        return prevQueryParams;
      }

      return nextQueryParams;
    });
  }, []);

  const value = {
    queryParams,
    setQueryParamsBase,
    ids,
    setIds,
    setQueryParams,
    ...listsUIEvents,
  };

  return (
    <ListsUIContext.Provider value={value}>
      {children}
    </ListsUIContext.Provider>
  );
}
