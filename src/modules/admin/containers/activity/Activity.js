import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import _ from "lodash"

import ActivityForm from "./components/form/ActivityForm"
import { createActivity, clearStore, fetchActivity, editActivity } from "./store/actions"
import { useSubheader } from "../../../../components/layout"
import routes from "./../../routes"
import {FormView} from "../../../../components/partials"


const Activity = ({ history, intl, match: { params } }) => {
  // Subheader
  const suhbeader = useSubheader()

  const _title = intl.formatMessage({ id: (_.isEmpty(params) ? "ACTIVITY.NEW.TITLE" : "ACTIVITY.EDIT.TITLE") })

  const dispatch = useDispatch()
  
  const { isLoading, success, error, activityToEdit } = useSelector(
    (state) => ({
      isLoading: state.admin.activity.isLoading,
      success: state.admin.activity.success,
      activityToEdit: state.admin.activity.activity,
      error: state.admin.activity.error
    }),
    shallowEqual
  )

  const saveActivity = (fieldValues) => {
    const values = _.cloneDeep(fieldValues)
    if (!_.isEmpty(params)){
      dispatch(editActivity(params, values))
    }else {
      dispatch(createActivity(values))
    }
  }

  const goBackToActivitiesList = () => {
    history.push(routes.activityList.path)
  }

  useEffect(() => {
    suhbeader.setTitle(_title)
    if (!_.isEmpty(params)){
      dispatch(fetchActivity(params))
    }
  }, [params, intl, dispatch, suhbeader, _title])

  return (
    <FormView
      goBackTo={goBackToActivitiesList}
      title={_title}
      onClose={clearStore}
      error={error}
      isLoading={isLoading}
      successMsg={[
        { condition: success.isUpdated, label: intl.formatMessage({ id: "ACTIVITY.EDIT.MSG" }) },
        { condition: success.isCreated, label: intl.formatMessage({ id: "ACTIVITY.NEW.MSG" }) }
      ]}
    >
      { ({ saveRef }) => (<ActivityForm
        isLoading={isLoading}
        success={success.isCreated}
        onSubmit={saveActivity}
        activity={!_.isEmpty(params) && activityToEdit}
        saveRef={saveRef}
      />
      ) }
    </FormView>
  )
}


export default injectIntl(Activity)
