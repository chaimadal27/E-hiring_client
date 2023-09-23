import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { useActivitiesUIContext } from "../../context/ActivitiesUIContext"
import { fetchActivities } from "../../store/actions"
import activityColumn from "./fields/activityFields"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Switch from "@material-ui/core/Switch"
import {IS_DELETED} from "../../store/constants"
import {DataTable} from "../../../../../../components/partials"

const ActivityTable = ({ intl }) => {
  // Activities UI Context
  const activitiesUIProps = useActivitiesUIContext()

  const columns = activityColumn({ intl, activitiesUIProps })

  // Getting curret state of activities list from store (Redux)
  const { totalSize, activities: entities = [], isFetching } = useSelector(
    (state) => ({
      activities: state.admin.activity.activities,
      isFetching: state.admin.activity.isFetching,
      totalSize: state.admin.activity.totalSize,
    }),
    shallowEqual
  )
  // Activities Redux state
  const dispatch = useDispatch()
  useEffect(() => {
    // clear selections list
    activitiesUIProps.setIds([])
    // server call by queryParams
    dispatch(fetchActivities(activitiesUIProps.queryParams))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activitiesUIProps.queryParams, dispatch])

  const filterActivityByDelete = () => {
    if (activitiesUIProps.queryParams[IS_DELETED]){
      activitiesUIProps.setQueryParamsBase({[IS_DELETED]: 0})
    }else {
      activitiesUIProps.setQueryParamsBase({[IS_DELETED]: 1})
    }
  }

  return (
    <>
      <div className="text-right pb-2 pt-2">
        <FormControlLabel
          control={<Switch checked={Boolean(activitiesUIProps.queryParams[IS_DELETED])} onChange={filterActivityByDelete} name="" />}
          label={ intl.formatMessage({ id: "ACTIVITY.FILTER.DELETE" }) }
        />
      </div>
      <DataTable
        isFetching={isFetching}
        entities={entities}
        columns={columns}
        totalSize={totalSize}
        queryParams={activitiesUIProps.queryParams}
        onQueryParamsChange={activitiesUIProps.setQueryParams}
        ids={activitiesUIProps.ids}
        setIds={activitiesUIProps.setIds}
      />
    </>
  )
}

export default injectIntl(ActivityTable)
