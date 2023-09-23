/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ActionModal } from "../../../../../../components/partials"
import { useCandidatesUIContext } from "../../context/CandidatesUIContext"
import { disableCandidates, fetchCandidates } from "../../store/actions"


const CandidatesDisableDialog = ({ show, onHide }) => {
  // Candidates UI Context
  const candidatesUIProps = useCandidatesUIContext()

  // Candidates Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.candidate.isLoading, success: state.admin.candidate.success }),
    shallowEqual
  )

  const onDisableCandidates = () => {
    // server request for deleting smsSkeleton by seleted ids
    dispatch(disableCandidates(candidatesUIProps.ids))
  }

  const onRefresh = () => {
    candidatesUIProps.setIds([])
    dispatch(fetchCandidates(candidatesUIProps.queryParams))
  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={onRefresh}
      onClick={onDisableCandidates}
      isLoading={isLoading}
      success={success.isDeactivated}
      title={<FormattedMessage id="CANDIDATE.MULTIPLE_DISABLE.TITLE" />}
      body={<FormattedMessage id="CANDIDATE.MULTIPLE_DISABLE.MSG" />}
    />
  )
}


export default CandidatesDisableDialog
