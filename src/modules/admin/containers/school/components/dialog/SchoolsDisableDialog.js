/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import {ActionModal} from "../../../../../../components/partials"
import { useSchoolsUIContext } from "../../context/SchoolsUIContext"
import {disableSchools, fetchSchools} from "../../store/actions"


const SchoolsDisableDialog = ({ show, onHide }) => {
  // Schools UI Context
  const schoolsUIProps = useSchoolsUIContext()

  // Schools Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.school.isLoading, success: state.admin.school.success }),
    shallowEqual
  )

  const onDisableSchools = () => {
    // server request for deleting smsSkeleton by seleted ids
    dispatch(disableSchools(schoolsUIProps.ids))
  }

  const onRefresh = () => {
    schoolsUIProps.setIds([])
    dispatch(fetchSchools(schoolsUIProps.queryParams))
  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={onRefresh}
      onClick={onDisableSchools}
      isLoading={isLoading}
      success={success.isDeactivated}
      title={<FormattedMessage id="SCHOOL.MULTIPLE_DISABLE.TITLE" />}
      body={<FormattedMessage id="SCHOOL.MULTIPLE_DISABLE.MSG" />}
    />
  )
}


export default SchoolsDisableDialog
