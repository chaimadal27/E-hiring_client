/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector } from "react-redux"
import { Switch, Route, Redirect } from "react-router-dom"
import { isEmpty } from "lodash"
import { Col, Row } from "react-bootstrap"

import SchoolMenu from "./components/menu/SchoolEdit"
import { clearStore } from "./store/actions"
import formRoutes from "./routes/edit"
import routes from "./../../routes"
import { FlashMessages } from "../../../../components/partials"


const School = ({ history, match: { params }, intl }) => {

  const { error, success } = useSelector(
    (state) => ({
      error: state.admin.school.error,
      success: state.admin.school.success
    }),
    shallowEqual
  )

  const goBackToList = () => {
    history.push(routes.schoolList.path)
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
          { condition: success.isUpdated, label: intl.formatMessage({ id: "SCHOOL.EDIT.MSG" }) }
        ]}
        error={error}
        onClose={clearStore}
      />
      <Row>
        <Col xl="12" lg="7">
          <Switch>
            {Object.keys(formRoutes).map((key) => (
              <Route key={key} path={formRoutes[key].path.replace(":param", params.param)}>
                { ({ history, match }) => renderRoute({ component: formRoutes[key].component, match, history })}
              </Route>
            ))}
            <Redirect from="*" to={formRoutes.schoolForm.path.replace(":param", params.param)} />
          </Switch>
        </Col>
      </Row>
    </>
  )
}


export default injectIntl(School)
