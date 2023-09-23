import { useActivityTypesUIContext } from "../../context/ActivityTypesUIContext"
import { fetchActivityTypes } from "../../store/actions"
import activityTypeFields from "./fields/activityTypeFields"
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { IS_ACTIVATED } from "../../store/constants";
import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import {DataTable} from "../../../../../../components/partials"

const ActivityTypeTable = ({ intl }) => {
  const activityTypesUIProps = useActivityTypesUIContext()

  const columns = activityTypeFields({ intl, activityTypesUIProps })

  const { totalSize, activityTypes: entities = [], isFetching = false } = useSelector(
    (state) => ({
      activityTypes: state.admin.activityType.activityTypes,
      isFetching: state.admin.activityType.isFetching,
      totalSize: state.admin.activityType.totalSize,
    }),
    shallowEqual
  )


  const dispatch = useDispatch()

  useEffect(() => {
    activityTypesUIProps.setIds([])
    dispatch(fetchActivityTypes(activityTypesUIProps.queryParams))

  }, [activityTypesUIProps.queryParams, dispatch])

  const filterCompanyByDelete = () => {
    if (!activityTypesUIProps.queryParams[IS_ACTIVATED]) {
      activityTypesUIProps.setQueryParamsBase({ [IS_ACTIVATED]: 1 });
    } else {
      activityTypesUIProps.setQueryParamsBase({ [IS_ACTIVATED]: 0 });
    }
  };

  return (
    <>
      <div className="text-right pb-2 pt-2">
        <FormControlLabel
          control={
            <Switch
              checked={Boolean(activityTypesUIProps.queryParams[IS_ACTIVATED])}
              onChange={filterCompanyByDelete}
              name=""
            />
          }
          label={intl.formatMessage({ id: "ACTIVITY_TYPE.FILTER.DELETE" })}
        />
      </div>
      <DataTable
        isFetching={isFetching}
        entities={entities}
        columns={columns}
        totalSize={totalSize}
        queryParams={activityTypesUIProps.queryParams}
        onQueryParamsChange={activityTypesUIProps.setQueryParams}
        ids={activityTypesUIProps.ids}
        setIds={activityTypesUIProps.setIds}

      />

    </>
  );
}

export default injectIntl(ActivityTypeTable)
