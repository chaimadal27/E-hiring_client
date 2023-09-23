import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ActionModal } from "../../../../../../components/partials/controls"
import { useLegalAgenciesUIContext } from "../../context/LegalAgenciesUIContext"
import { disableLegalAgency, fetchLegalAgencies } from "../../store/actions"

const LegalAgencyDisableDialog = ({ params, show, onHide }) => {
  const legalAgenciesUIProps = useLegalAgenciesUIContext()
  
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.legalAgency.isLoading, success: state.admin.legalAgency.success }),
    shallowEqual
  )

  const onDisableLegalAgency = () => {
    dispatch(disableLegalAgency(params))
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
      onClick={onDisableLegalAgency}
      isLoading={isLoading}
      success={success.isDeactivated}
      title={<FormattedMessage id="LEGAL_AGENCY.DISABLE.TITLE" />}
      body={<FormattedMessage id="LEGAL_AGENCY.DISABLE.MSG" />}
    />
  )
}


export default LegalAgencyDisableDialog
