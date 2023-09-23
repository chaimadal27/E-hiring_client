/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import {ActionModal} from "../../../../../../components/partials"
import { useSchoolsUIContext } from "../../context/SchoolsUIContext"
import {enableSchool, fetchSchools} from "../../store/actions"

const SchoolEnableDialog = ({ params, show, onHide }) => {
  // Schools UI Context
  const schoolsUIProps = useSchoolsUIContext()
  
  // Schools Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.school.isLoading, success: state.admin.school.success }),
    shallowEqual
  )

  const onEnableschool = () => {
    // server request for deleting Schools by id
    dispatch(enableSchool(params))
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
      onClick={onEnableschool}
      isLoading={isLoading}
      success={success.isActivated}
      title={<FormattedMessage id="SCHOOL.ENABLE.TITLE" />}
      body={<FormattedMessage id="SCHOOL.ENABLE.MSG" />}
    />
  )
}


export default SchoolEnableDialog
