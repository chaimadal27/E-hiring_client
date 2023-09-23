import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import {ActionModal} from "../../../../../../components/partials"
import { useLegalAgenciesUIContext } from "../../context/LegalAgenciesUIContext"
import {disableAllLegalAgencies, fetchLegalAgencies} from "../../store/actions"


const LegalAgenciesDisableDialog = ({ show, onHide }) => {
  const legalAgenciesUIProps = useLegalAgenciesUIContext()

  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.legalAgency.isLoading, success: state.admin.legalAgency.success }),
    shallowEqual
  )

  const onDisableLegalAgencies = () => {
    dispatch(disableAllLegalAgencies(legalAgenciesUIProps.ids))
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
      onClick={onDisableLegalAgencies}
      isLoading={isLoading}
      success={success.isDeactivated}
      title={<FormattedMessage id="LEGAL_AGENCY.MULTIPLE_DISABLE.TITLE" />}
      body={<FormattedMessage id="LEGAL_AGENCY.MULTIPLE_DISABLE.MSG" />}
    />
  )
}


export default LegalAgenciesDisableDialog
