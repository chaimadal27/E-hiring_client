import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import resourceStateColumn from "./fields/resourceStateFields"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { fetchResourceStates }  from "../../store/actions"
import { DataTable } from "../../../../../../components/partials/controls"
import { useResourceStatesUIContext } from "../../context/ResourceStatesUIContext"

const ResourceStateTable = ({ intl }) => {
  // ResourceStates UI Context
  const resourceStatesUIProps = useResourceStatesUIContext()
  
  const columns = resourceStateColumn({ intl, resourceStatesUIProps })

  // Getting curret state of resourceStates list from store (Redux)
  const { totalSize, resourceStates: entities = [], isFetching } = useSelector(
    (state) => ({ ...state.admin.resourceState }),
    shallowEqual
  )
  // ResourceStates Redux state
  const dispatch = useDispatch()

  useEffect(() => {
    // clear selections list
    resourceStatesUIProps.setIds([])
    // server call by queryParams
    dispatch(fetchResourceStates({ ...(resourceStatesUIProps.queryParams || {}) }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resourceStatesUIProps.queryParams, dispatch])

  return (
    <>
      <DataTable 
        isFetching={isFetching}
        entities={entities}
        columns={columns}
        totalSize={totalSize}
        queryParams={resourceStatesUIProps.queryParams}
        onQueryParamsChange={resourceStatesUIProps.setQueryParams}
        ids={resourceStatesUIProps.ids}
        setIds={resourceStatesUIProps.setIds}
      />
    </>
  )
}


export default injectIntl(ResourceStateTable)
