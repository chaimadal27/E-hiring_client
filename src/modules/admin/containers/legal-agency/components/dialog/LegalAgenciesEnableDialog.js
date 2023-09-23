import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import {ActionModal} from "../../../../../../components/partials"
import { useLegalAgenciesUIContext } from "../../context/LegalAgenciesUIContext"
import {enableAllLegalAgencies, fetchLegalAgencies} from "../../store/actions"


const LegalAgenciesEnableDialog = ({ show, onHide }) => {
  const legalAgenciesUIProps = useLegalAgenciesUIContext()
  
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.legalAgency.isLoading, success: state.admin.legalAgency.success }),
    shallowEqual
  )

  const onEnableLegalAgencies = () => {
    dispatch(enableAllLegalAgencies(legalAgenciesUIProps.ids))
  }

  const onRefresh = () => {
    legalAgenciesUIProps.setIds([])
    dispatch(fetchLegalAgencies(legalAgenciesUIProps.queryParams))

  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={onRefresh}
      onClick={onEnableLegalAgencies}
      isLoading={isLoading}
      success={success.isActivated}
      title={<FormattedMessage id="LEGAL_AGENCY.MULTIPLE_ENABLE.TITLE" />}
      body={<FormattedMessage id="LEGAL_AGENCY.MULTIPLE_ENABLE.MSG" />}
    />
  )
}


export default LegalAgenciesEnableDialog
