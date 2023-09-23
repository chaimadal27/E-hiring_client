import React, { useLayoutEffect } from "react"
import { injectIntl } from "react-intl"
import { connect } from "react-redux"
import { Switch, Redirect, Route } from "react-router-dom"
import _ from "lodash"
import { Col, Row } from "react-bootstrap"

import { useSubheader } from "../../../../components/layout"
import ActivityTypeMenu from "./components/menu/ActivityTypeDisplay"
import routes from "./../../routes"
import detailsRoutes from "./routes/display"
import { clearStore } from "./store/actions"
import { ContentRoute } from "../../../../components/router"
import { FlashMessages } from "../../../../components/partials"


const ActivityTypeShow = ({ history, match: { params }, intl, clearStore, error }) => {

  const suhbeader = useSubheader()
  let title = intl.formatMessage({ id: "ACTIVITY_TYPE.SHOW.TITLE" })

  useLayoutEffect(() => {
    suhbeader.setTitle(title)
  }, [])

  const goBackToList = () => {
    history.push(routes.activityTypeList.path)
  }

  const renderRoute = ({ component, match, history }) => {
    const Component = component
    return <Component
      params={(match && !_.isEmpty(match.params)) ? { ...match.params, ...params } : params}
      goBackToList={goBackToList}
      history={history}
    />
  }

  return (
    <>
      <FlashMessages
        error={error}
        onClose={clearStore}
      />
      <Row>
        <Col xl="3" lg="5">
          {/* <ActivityTypeMenu history={history} param={params.param} /> */}
        </Col>
        <Col xl="9" lg="7">
          <Switch>

            <Route path={detailsRoutes.activityTypeDisplay.path.replace(":param", params.param)}>
              {({ history, match }) => renderRoute({ component: detailsRoutes.activityTypeDisplay.component, history, match })}
            </Route>

            <Redirect from="*" to={detailsRoutes.activityTypeDisplay.path.replace(":param", params.param)} />
          </Switch>
        </Col>
      </Row>
    </>
  )
}


const mapStateToProps = (state) => state.admin.activityType

export default connect(mapStateToProps, { clearStore })(injectIntl(ActivityTypeShow))
