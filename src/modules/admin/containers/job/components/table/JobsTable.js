import React, { useEffect, useState } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { DataTable } from "../../../../../../components/partials"
import { useJobsUIContext } from "../../context/JobsUIContext"
import { fetchJobs } from "../../store/actions"
import jobFields from "./fields/jobFields"
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { IS_ACTIVATED } from "../../store/constants";



const JobTable = ({ intl }) => {
  // Jobs UI Context
  const jobsUIProps = useJobsUIContext()

  const columns = jobFields({ intl, jobsUIProps })

  // Getting curret state of jobs list from store (Redux)
  const { totalSize, jobs: entities = [], isFetching = false } = useSelector(
    (state) => ({
      jobs: state.admin.job.jobs,
      isFetching: state.admin.job.isFetching,
      totalSize: state.admin.job.totalSize,
    }),
    shallowEqual
  )

  // Jobs Redux state
  const dispatch = useDispatch()

  useEffect(() => {
    jobsUIProps.setIds([])
    dispatch(fetchJobs(jobsUIProps.queryParams))

    // eslint-disable-next-line
  }, [jobsUIProps.queryParams, dispatch])

  const filterCompanyByDelete = () => {
    if (!jobsUIProps.queryParams[IS_ACTIVATED]) {
      jobsUIProps.setQueryParamsBase({ [IS_ACTIVATED]: 1 });
    } else {
      jobsUIProps.setQueryParamsBase({ [IS_ACTIVATED]: 0 });
    }
  };

  return (
    <>
      {/* <div className="text-right pb-2 pt-2">
        <FormControlLabel
          control={
            <Switch
              checked={Boolean(!jobsUIProps.queryParams[IS_ACTIVATED])}
              onChange={filterCompanyByDelete}
              name=""
            />
          }
          label={intl.formatMessage({ id: "JOB.FILTER.DELETE" })}
        />
      </div>  */}
      <DataTable
        isFetching={isFetching}
        entities={entities}
        columns={columns}
        totalSize={totalSize}
        queryParams={jobsUIProps.queryParams}
        onQueryParamsChange={jobsUIProps.setQueryParams}
        ids={jobsUIProps.ids}
        setIds={jobsUIProps.setIds}
       // filter={filterFactory()}
      />
    </>
  );
}

export default injectIntl(JobTable)
