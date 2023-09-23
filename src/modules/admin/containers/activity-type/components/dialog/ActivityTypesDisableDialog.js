import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import {ActionModal} from "../../../../../../components/partials"
import { useActivityTypesUIContext } from "../../context/ActivityTypesUIContext"
import {disableAllActivityTypes, fetchActivityTypes} from "../../store/actions"


const ActivityTypesDisableDialog = ({ show, onHide }) => {
  const activityTypesUIProps = useActivityTypesUIContext()

  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.activityType.isLoading, success: state.admin.activityType.success }),
    shallowEqual
  )

  const onDisableActivityTypes = () => {
    dispatch(disableAllActivityTypes(activityTypesUIProps.ids))
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
      onClick={onDisableActivityTypes}
      isLoading={isLoading}
      success={success.isDeactivated}
      title={<FormattedMessage id="ACTIVITY_TYPE.MULTIPLE_DISABLE.TITLE" />}
      body={<FormattedMessage id="ACTIVITY_TYPE.MULTIPLE_DISABLE.MSG" />}
    />
  )
}


export default ActivityTypesDisableDialog
