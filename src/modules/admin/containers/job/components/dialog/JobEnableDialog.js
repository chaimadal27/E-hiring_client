/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ActionModal } from "../../../../../../components/partials"
import { useJobsUIContext } from "../../context/JobsUIContext"
import { enableJob, fetchJobs } from "../../store/actions"

const JobEnableDialog = ({ params, show, onHide }) => {
  // Jobs UI Context
  const jobsUIProps = useJobsUIContext()

  // Jobs Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.job.isLoading, success: state.admin.job.success }),
    shallowEqual
  )

  const onEnablejob = () => {
    // server request for deleting Jobs by id
    dispatch(enableJob(params))
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
      onClick={onEnablejob}
      isLoading={isLoading}
      success={success.isActivated}
      title={<FormattedMessage id="JOB.ENABLE.TITLE" />}
      body={<FormattedMessage id="JOB.ENABLE.MSG" />}
    />
  )
}


export default JobEnableDialog
