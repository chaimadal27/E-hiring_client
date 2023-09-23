import React from "react"
import { FormattedMessage } from "react-intl"
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderTitle,
  CardHeaderToolbar,
  FlashMessages,
  FilterFormView
} from "../../../../../../components/partials/controls"
import JobsFilter from "./../form/JobsFilter"
import JobsTable from "./../table/JobsTable"
import JobsGrouping from "./../grouping/JobsGrouping"
import { useJobsUIContext } from "./../../context/JobsUIContext"
import { useSelector, shallowEqual } from "react-redux"
import { clearStore } from "./../../store/actions"

import { ProtectedLink } from "../../../../../../components/wrappers"

const JobCard = () => {

  const jobsUIProps = useJobsUIContext()

  const { success, error } = useSelector(
    (state) => ({
      success: state.admin.job.success,
      error: state.admin.job.error
    }),
    shallowEqual
  )

  return (
    <>
      <FlashMessages
        error={error}
        onClose={clearStore}
        successMsg={[
          { condition: success.isActivated, label: <FormattedMessage id="JOB.MSG.ACTIVATED" /> },
          { condition: success.isDeactivated, label: <FormattedMessage id="JOB.MSG.DEACTIVATED" /> }
        ]}
      />
      {/*  <FilterFormView
        title={<FormattedMessage id="JOB.FILTER.TITLE" />}
      >
        {
          ({ searchRef, resetRef }) => (
            <JobsFilter searchRef={searchRef} clearSearchRef={resetRef} />
          )
        }
      </FilterFormView> */}
      <Card>
        <CardHeader>
          <div className="card-title">
            <CardHeaderTitle>
              <FormattedMessage id="JOB.LIST.TITLE" />
            </CardHeaderTitle>
          </div>
          <CardHeaderToolbar>
            <ProtectedLink rule={jobsUIProps.newJobRule}>
              <button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={jobsUIProps.newJobButtonClick}
              >
                <FormattedMessage id="JOB.NEW.TITLE" />
              </button>
            </ProtectedLink>
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          {jobsUIProps.ids.length > 0 && <JobsGrouping />}
          <JobsTable />
        </CardBody>
      </Card>
    </>
  )
}


export default JobCard
