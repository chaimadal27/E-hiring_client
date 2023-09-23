import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import {ActionModal} from "../../../../../../components/partials"
import { useActivityTypesUIContext } from "../../context/ActivityTypesUIContext"
import {enableActivityType, fetchActivityTypes} from "../../store/actions"

const ActivityTypeEnableDialog = ({ params, show, onHide }) => {
  const activityTypesUIProps = useActivityTypesUIContext()
  
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.activityType.isLoading, success: state.admin.activityType.success }),
    shallowEqual
  )

  const onEnableActivityType = () => {
    dispatch(enableActivityType(params))
  }

  const onRefresh = () => {
    dispatch(fetchActivityTypes(activityTypesUIProps.queryParams))
    activityTypesUIProps.setIds([])
  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={onRefresh}
      onClick={onEnableActivityType}
      isLoading={isLoading}
      success={success.isActivated}
      title={<FormattedMessage id="ACTIVITY_TYPE.ENABLE.TITLE" />}
      body={<FormattedMessage id="ACTIVITY_TYPE.ENABLE.MSG" />}
    />
  )
}


export default ActivityTypeEnableDialog
