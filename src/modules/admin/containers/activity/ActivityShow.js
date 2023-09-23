import React, { useEffect, useLayoutEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import Activity from "./components/display/Activity"

import { useSubheader } from "../../../../components/layout"
import routes from "./../../routes"
import { clearStore, fetchActivity } from "./store/actions"
import {ShowView} from "../../../../components/partials"


const ActivityShow = ({ history, match: { params }, intl }) => {
  // Subheader
  const suhbeader = useSubheader()

  // Tabs
  let title = intl.formatMessage({ id: "ACTIVITY.SHOW.TITLE" })
  const dispatch = useDispatch()
  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isFetching, activityForShow, error } = useSelector(
    (state) => ({
      isFetching: state.admin.activity.isFetching,
      activityForShow: state.admin.activity.activity,
      error: state.admin.activity.error
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(fetchActivity(params))
  }, [params, dispatch])

  useLayoutEffect(() => {
    suhbeader.setTitle(title)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const goBackToActivitiesList = () => {
    history.push(routes.activityList.path)
  }

  return (
    <ShowView
      title={title}
      goBackTo={goBackToActivitiesList}
      onClose={clearStore}
      error={error}
    >
      <Activity error={error} isFetching={isFetching} profile={activityForShow} />
    </ShowView>
  )
}


export default injectIntl(ActivityShow)
