import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { DataTable } from "../../../../../../components/partials"
import { useSchoolsUIContext } from "../../context/SchoolsUIContext"
import { fetchSchools } from "../../store/actions"
import schoolFields from "./fields/schoolFields"
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { IS_ACTIVATED } from "../../store/constants";
const SchoolTable = ({ intl }) => {
  // Schools UI Context
  const schoolsUIProps = useSchoolsUIContext()

  const columns = schoolFields({ intl, schoolsUIProps })

  // Getting curret state of schools list from store (Redux)
  const { totalSize, schools: entities = [], isFetching = false } = useSelector(
    (state) => ({
      schools: state.admin.school.schools,
      isFetching: state.admin.school.isFetching,
      totalSize: state.admin.school.totalSize,
    }),
    shallowEqual
  )

  // Schools Redux state
  const dispatch = useDispatch()

  useEffect(() => {
    schoolsUIProps.setIds([])
    dispatch(fetchSchools(schoolsUIProps.queryParams))

    // eslint-disable-next-line
  }, [schoolsUIProps.queryParams, dispatch])

  const filterCompanyByDelete = () => {
    if (!schoolsUIProps.queryParams[IS_ACTIVATED]) {
      schoolsUIProps.setQueryParamsBase({ [IS_ACTIVATED]: 1 });
    } else {
      schoolsUIProps.setQueryParamsBase({ [IS_ACTIVATED]: 0 });
    }
  };

  return (
    <>
      {/* <div className="text-right pb-2 pt-2">
        <FormControlLabel
          control={
            <Switch
              checked={Boolean(!schoolsUIProps.queryParams[IS_ACTIVATED])}
              onChange={filterCompanyByDelete}
              name=""
            />
          }
          label={intl.formatMessage({ id: "school.FILTER.DELETE" })}
        />
      </div>  */}
      <DataTable
        isFetching={isFetching}
        entities={entities}
        columns={columns}
        totalSize={totalSize}
        queryParams={schoolsUIProps.queryParams}
        onQueryParamsChange={schoolsUIProps.setQueryParams}
        ids={schoolsUIProps.ids}
        setIds={schoolsUIProps.setIds}
        //filter={filterFactory()}
      />
    </>
  );
}

export default injectIntl(SchoolTable)
