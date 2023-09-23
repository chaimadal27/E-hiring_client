import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ActionModal } from "../../../../../../components/partials/controls"
import { useActivityTypesUIContext } from "../../context/ActivityTypesUIContext"
import { disableActivityType, fetchActivityTypes } from "../../store/actions"

const ActivityTypeDisableDialog = ({ params, show, onHide }) => {
  const activityTypesUIProps = useActivityTypesUIContext()
  
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.activityType.isLoading, success: state.admin.activityType.success }),
    shallowEqual
  )

  const onDisableActivityType = () => {
    dispatch(disableActivityType(params))
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
      onClick={onDisableActivityType}
      isLoading={isLoading}
      success={success.isDeactivated}
      title={<FormattedMessage id="ACTIVITY_TYPE.DISABLE.TITLE" />}
      body={<FormattedMessage id="ACTIVITY_TYPE.DISABLE.MSG" />}
    />
  )
}


export default ActivityTypeDisableDialog
