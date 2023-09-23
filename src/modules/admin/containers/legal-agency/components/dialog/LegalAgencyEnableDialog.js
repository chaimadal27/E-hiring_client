import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import {ActionModal} from "../../../../../../components/partials"
import { useLegalAgenciesUIContext } from "../../context/LegalAgenciesUIContext"
import {enableLegalAgency, fetchLegalAgencies} from "../../store/actions"

const LegalAgencyEnableDialog = ({ params, show, onHide }) => {
  const legalAgenciesUIProps = useLegalAgenciesUIContext()
  
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.legalAgency.isLoading, success: state.admin.legalAgency.success }),
    shallowEqual
  )

  const onEnableLegalAgency = () => {
    dispatch(enableLegalAgency(params))
  }

  const onRefresh = () => {
    dispatch(fetchLegalAgencies(legalAgenciesUIProps.queryParams))
    legalAgenciesUIProps.setIds([])
  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={onRefresh}
      onClick={onEnableLegalAgency}
      isLoading={isLoading}
      success={success.isActivated}
      title={<FormattedMessage id="LEGAL_AGENCY.ENABLE.TITLE" />}
      body={<FormattedMessage id="LEGAL_AGENCY.ENABLE.MSG" />}
    />
  )
}


export default LegalAgencyEnableDialog
