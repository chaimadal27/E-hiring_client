/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useRef } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector } from "react-redux"

import { clearStore } from "./store/actions"
import ActivityTypeForm from "./components/form/ActivityTypeForm"
import { useSubheader } from "../../../../components/layout"
import routes from "./../../routes"
import {FlashMessages} from "../../../../components/partials"


const ActivityTypeNew = ({ history, intl, match: { params } }) => {

  const saveRef = useRef()
  const suhbeader = useSubheader()
  suhbeader.setTitle(intl.formatMessage({ id: "ACTIVITY_TYPE.NEW.TITLE" }))

  const { success, error } = useSelector(
    (state) => ({
      success: state.admin.activityType.success,
      error: state.admin.activityType.error
    }),
    shallowEqual
  )

  const goBackToActivityTypesList = () => {
    history.push(routes.activityTypeList.path)
  }

  return (
    <>
      <FlashMessages
        successMsg={[
          { condition: success.isCreated, label: intl.formatMessage({ id: "ACTIVITY_TYPE.NEW.MSG" }) }
        ]}
        error={error}
        onClose={clearStore}
      />
      <ActivityTypeForm
        goBackToList={goBackToActivityTypesList}
        params={params}
        saveRef={saveRef}
      />
    </>
  )
}


export default injectIntl(ActivityTypeNew)
