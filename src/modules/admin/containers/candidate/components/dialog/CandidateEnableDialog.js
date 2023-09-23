/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ActionModal } from "../../../../../../components/partials"
import { useCandidatesUIContext } from "../../context/CandidatesUIContext"
import { enableCandidate, fetchCandidates } from "../../store/actions"

const CandidateEnableDialog = ({ params, show, onHide }) => {
  // Candidates UI Context
  const candidatesUIProps = useCandidatesUIContext()

  // Candidates Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.candidate.isLoading, success: state.admin.candidate.success }),
    shallowEqual
  )

  const onEnablecandidate = () => {
    // server request for deleting Candidates by id
    dispatch(enableCandidate(params))
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
      onClick={onEnablecandidate}
      isLoading={isLoading}
      success={success.isActivated}
      title={<FormattedMessage id="CANDIDATE.ENABLE.TITLE" />}
      body={<FormattedMessage id="CANDIDATE.ENABLE.MSG" />}
    />
  )
}


export default CandidateEnableDialog
