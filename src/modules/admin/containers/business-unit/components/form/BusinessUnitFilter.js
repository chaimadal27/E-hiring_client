import React from "react"
import { isEqual } from "lodash"
import { useBusinessUnitsUIContext } from "../../context/BusinessUnitsContext"
import { SearchFilter } from "./../../../../../../components/partials/controls"


const BusinessUnitsFilter = () => {
  const businessUnitsUIProps = useBusinessUnitsUIContext()
  
  const applyFilter = (values) => {
    const newQueryParams = { ...businessUnitsUIProps.queryParams, ...values }
    if (!isEqual(newQueryParams, businessUnitsUIProps.queryParams)) {
      newQueryParams.pageNumber = 1
      businessUnitsUIProps.setQueryParams(newQueryParams)
    }
  }

  return (
    <SearchFilter applyFilter={applyFilter} />
  )
}


export default BusinessUnitsFilter
