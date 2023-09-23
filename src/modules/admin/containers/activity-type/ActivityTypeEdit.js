import React, { useLayoutEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector } from "react-redux"
import { Switch, Route, Redirect } from "react-router-dom"
import { isEmpty } from "lodash"
import { Col, Row } from "react-bootstrap"
import { useSubheader } from "../../../../components/layout"
// import ActivityTypeMenu from "./components/menu/ActivityTypeEdit"
import { clearStore } from "./store/actions"
import formRoutes from "./routes/edit"
import routes from "./../../routes"
import { FlashMessages } from "../../../../components/partials"


const ActivityTypeEdit = ({ history, match: { params }, intl }) => {

  const suhbeader = useSubheader()
  let title = intl.formatMessage({ id: "ACTIVITY_TYPE.EDIT.TITLE" })

  useLayoutEffect(() => {
    suhbeader.setTitle(title)
  }, [])

  const { error, success } = useSelector(
    (state) => ({
      error: state.admin.activityType.error,
      success: state.admin.activityType.success
    }),
    shallowEqual
  )

  const goBackToList = () => {
    history.push(routes.activityTypeList.path)
  }

  const renderRoute = ({ component, match, history }) => {
    const Component = component
    return <Component
      params={(match && !isEmpty(match.params)) ? { ...match.params, ...params } : params}
      goBackToList={goBackToList}
      history={history}
    />
  }

  return (
    <>
      <FlashMessages
        successMsg={[
          { condition: success.isUpdated, label: intl.formatMessage({ id: "ACTIVITY_TYPE.EDIT.MSG" }) }
        ]}
        error={error}
        onClose={clearStore}
      />
      <Row>
        <Col xl="3" lg="5">
          {/* <ActivityTypeMenu history={history} param={params.param} /> */}
        </Col>
        <Col xl="9" lg="7">
          <Switch>
            {Object.keys(formRoutes).map((key) => (
              <Route key={key} path={formRoutes[key].path.replace(":param", params.param)}>
                { ({ history, match }) => renderRoute({ component: formRoutes[key].component, match, history })}
              </Route>
            ))}
            <Redirect from="*" to={formRoutes.activityTypeForm.path.replace(":param", params.param)} />
          </Switch>
        </Col>
      </Row>
    </>
  )
}


export default injectIntl(ActivityTypeEdit)
