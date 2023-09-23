/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ActionModal } from "../../../../../../components/partials/controls"
import { useSchoolsUIContext } from "../../context/SchoolsUIContext"
import { disableSchool, fetchSchools } from "../../store/actions"

const SchoolDisableDialog = ({ params, show, onHide }) => {
  // Schools UI Context
  const schoolsUIProps = useSchoolsUIContext()
  
  // Schools Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.school.isLoading, success: state.admin.school.success }),
    shallowEqual
  )

  const onDisableSchool = () => {
    // server request for deleting smsSkeleton by id
    dispatch(disableSchool(params))
  }

  const onRefresh = () => {
    dispatch(fetchSchools(schoolsUIProps.queryParams))
    schoolsUIProps.setIds([])
  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={onRefresh}
      onClick={onDisableSchool}
      isLoading={isLoading}
      success={success.isDeactivated}
      title={<FormattedMessage id="SCHOOL.DISABLE.TITLE" />}
      body={<FormattedMessage id="SCHOOL.DISABLE.MSG" />}
    />
  )
}


export default SchoolDisableDialog
