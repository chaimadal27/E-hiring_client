/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ActionModal } from "../../../../../../components/partials/controls"
import { useJobsUIContext } from "../../context/JobsUIContext"
import { disableJob, fetchJobs } from "../../store/actions"

const JobDisableDialog = ({ params, show, onHide }) => {
  // Jobs UI Context
  const jobsUIProps = useJobsUIContext()
  console.log(params)
  // Jobs Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.job.isLoading, success: state.admin.job.success }),
    shallowEqual
  )

  const onDisableJob = () => {
    // server request for deleting smsSkeleton by id
    dispatch(disableJob(params))
  }

  const onRefresh = () => {
    dispatch(fetchJobs(jobsUIProps.queryParams))
    jobsUIProps.setIds([])
  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={onRefresh}
      onClick={onDisableJob}
      isLoading={isLoading}
      success={success.isDeactivated}
      title={<FormattedMessage id="JOB.DISABLE.TITLE" />}
      body={<FormattedMessage id="JOB.DISABLE.MSG" />}
    />
  )
}


export default JobDisableDialog
