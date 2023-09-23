import React, { createContext, useContext, useState, useCallback } from "react"
import { isEqual, isFunction } from "lodash"
import { IS_ACTIVATED, IS_ACTIVATED_INIT_VALUE } from "./../store/constants";

const AppointmentsUIContext = createContext()

export function useAppointmentUIContext() {
    return useContext(AppointmentsUIContext)
}

export const AppointementUIConsumer = () => AppointmentsUIContext.Consumer

export function AppointemntUIProvider({ appointmentsUIEvents, children }) {

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
        ...appointmentsUIEvents
    }

    return (
        <AppointmentsUIContext.Provider value={value}>
            {children}
        </AppointmentsUIContext.Provider>
    )
}
