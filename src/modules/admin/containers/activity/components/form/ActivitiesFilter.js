import React from "react"
import { isEqual } from "lodash"
import { useActivitiesUIContext } from "../../context/ActivitiesUIContext"
import { SearchFilter } from "./../../../../../../components/partials/controls"


const ActivitiesFilter = () => {
  // Activities UI Context
  const activitiesUIProps = useActivitiesUIContext()
  
  const applyFilter = (values) => {
    const newQueryParams = { ...activitiesUIProps.queryParams, ...values }
    if (!isEqual(newQueryParams, activitiesUIProps.queryParams)) {
      newQueryParams.pageNumber = 1
      activitiesUIProps.setQueryParams(newQueryParams)
    }
  }

  return (
    <SearchFilter applyFilter={applyFilter} />
  )
}


export default ActivitiesFilter
