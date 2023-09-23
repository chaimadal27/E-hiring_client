/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useLayoutEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector } from "react-redux"
import { Switch, Route, Redirect } from "react-router-dom"
import { isEmpty } from "lodash"
import { Col, Row } from "react-bootstrap"
import { useSubheader } from "../../../../components/layout"
import PartnershipMenu from "./components/menu/PartnershipEdit"
import { clearStore } from "./store/actions"
import formRoutes from "./routes/edit"
import routes from "./../../routes"
import { FlashMessages } from "../../../../components/partials"


const Partnership = ({ history, match: { params }, intl }) => {

  const suhbeader = useSubheader()
  // Tabs
  let title = intl.formatMessage({ id: "PARTNERSHIP.EDIT.TITLE" })

  useLayoutEffect(() => {
    suhbeader.setTitle(title)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { error, success } = useSelector(
    (state) => ({
      error: state.admin.partnership.error,
      success: state.admin.partnership.success
    }),
    shallowEqual
  )

  const goBackToList = () => {
    history.push(routes.partnershipList.path)
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
          { condition: success.isUpdated, label: intl.formatMessage({ id: "PARTNERSHIP.EDIT.MSG" }) }
        ]}
        error={error}
        onClose={clearStore}
      />
      <Row>
        <Col xl="3" lg="5">
          <PartnershipMenu history={history} param={params.param} />
        </Col>
        <Col xl="9" lg="7">
          <Switch>
            {Object.keys(formRoutes).map((key) => (
              <Route key={key} path={formRoutes[key].path.replace(":param", params.param)}>
                { ({ history, match }) => renderRoute({ component: formRoutes[key].component, match, history })}
              </Route>
            ))}
            <Redirect from="*" to={formRoutes.partnershipForm.path.replace(":param", params.param)} />
          </Switch>
        </Col>
      </Row>
    </>
  )
}


export default injectIntl(Partnership)
