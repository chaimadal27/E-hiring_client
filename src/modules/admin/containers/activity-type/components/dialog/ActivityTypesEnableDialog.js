import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import {ActionModal} from "../../../../../../components/partials"
import { useActivityTypesUIContext } from "../../context/ActivityTypesUIContext"
import {enableAllActivityTypes, fetchActivityTypes} from "../../store/actions"


const ActivityTypesEnableDialog = ({ show, onHide }) => {
  const activityTypesUIProps = useActivityTypesUIContext()
  
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.activityType.isLoading, success: state.admin.activityType.success }),
    shallowEqual
  )

  const onEnableActivityTypes = () => {
    dispatch(enableAllActivityTypes(activityTypesUIProps.ids))
  }

  const onRefresh = () => {
    activityTypesUIProps.setIds([])
    dispatch(fetchActivityTypes(activityTypesUIProps.queryParams))

  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={onRefresh}
      onClick={onEnableActivityTypes}
      isLoading={isLoading}
      success={success.isActivated}
      title={<FormattedMessage id="ACTIVITY_TYPE.MULTIPLE_ENABLE.TITLE" />}
      body={<FormattedMessage id="ACTIVITY_TYPE.MULTIPLE_ENABLE.MSG" />}
    />
  )
}


export default ActivityTypesEnableDialog
