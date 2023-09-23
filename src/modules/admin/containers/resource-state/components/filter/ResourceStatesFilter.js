import React, { useMemo } from "react"
import { isEqual } from "lodash"
import { useResourceStatesUIContext } from "../../context/ResourceStatesUIContext"
import {SearchFilter} from "../../../../../../components/partials"


const ResourceStatesFilter = () => {
  // ResourceStates UI Context
  const resourceStatesUIContext = useResourceStatesUIContext()
  const resourceStatesUIProps = useMemo(() => {
    return {
      ...resourceStatesUIContext
    }
  }, [resourceStatesUIContext])

  const applyFilter = (values) => {
    const newQueryParams = { ...resourceStatesUIProps.queryParams, ...values }
    if (!isEqual(newQueryParams, resourceStatesUIProps.queryParams)) {
      newQueryParams.pageNumber = 1
      resourceStatesUIProps.setQueryParams(newQueryParams)
    }
  }

  return (
    <SearchFilter applyFilter={applyFilter} />
  )
}


export default ResourceStatesFilter
