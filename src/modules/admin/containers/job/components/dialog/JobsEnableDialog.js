/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ActionModal } from "../../../../../../components/partials"
import { useJobsUIContext } from "../../context/JobsUIContext"
import { enableJobs, fetchJobs } from "../../store/actions"


const JobsDisableDialog = ({ show, onHide }) => {
  // Jobs UI Context
  const jobsUIProps = useJobsUIContext()

  // Jobs Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.job.isLoading, success: state.admin.job.success }),
    shallowEqual
  )

  const onDisableJobs = () => {
    // server request for deleting smsSkeleton by seleted ids
    dispatch(enableJobs(jobsUIProps.ids))
  }

  const onRefresh = () => {
    jobsUIProps.setIds([])
    dispatch(fetchJobs(jobsUIProps.queryParams))

  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={onRefresh}
      onClick={onDisableJobs}
      isLoading={isLoading}
      success={success.isActivated}
      title={<FormattedMessage id="JOB.MULTIPLE_ENABLE.TITLE" />}
      body={<FormattedMessage id="JOB.MULTIPLE_ENABLE.MSG" />}
    />
  )
}


export default JobsDisableDialog
