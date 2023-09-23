/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ActionModal } from "../../../../../../components/partials/controls"
import { useCandidatesUIContext } from "../../context/CandidatesUIContext"
import { disableCandidate, fetchCandidates } from "../../store/actions"

const CandidateDisableDialog = ({ params, show, onHide }) => {
  // Candidates UI Context
  const candidatesUIProps = useCandidatesUIContext()

  // Candidates Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.candidate.isLoading, success: state.admin.candidate.success }),
    shallowEqual
  )

  const onDisableCandidate = () => {
    // server request for deleting smsSkeleton by id
    dispatch(disableCandidate(params))
  }

  const onRefresh = () => {
    dispatch(fetchCandidates(candidatesUIProps.queryParams))
    candidatesUIProps.setIds([])
  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={onRefresh}
      onClick={onDisableCandidate}
      isLoading={isLoading}
      success={success.isDeactivated}
      title={<FormattedMessage id="CANDIDATE.DISABLE.TITLE" />}
      body={<FormattedMessage id="CANDIDATE.DISABLE.MSG" />}
    />
  )
}


export default CandidateDisableDialog
