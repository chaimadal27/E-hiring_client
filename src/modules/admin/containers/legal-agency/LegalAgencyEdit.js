import React, { useLayoutEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector } from "react-redux"
import { Switch, Route, Redirect } from "react-router-dom"
import { isEmpty } from "lodash"
import { Col, Row } from "react-bootstrap"
import { useSubheader } from "../../../../components/layout"
// import LegalAgencyMenu from "./components/menu/LegalAgencyEdit"
import { clearStore } from "./store/actions"
import formRoutes from "./routes/edit"
import routes from "./../../routes"
import { FlashMessages } from "../../../../components/partials"


const LegalAgencyEdit = ({ history, match: { params }, intl }) => {

  const suhbeader = useSubheader()
  let title = intl.formatMessage({ id: "LEGAL_AGENCY.EDIT.TITLE" })

  useLayoutEffect(() => {
    suhbeader.setTitle(title)
  }, [])

  const { error, success } = useSelector(
    (state) => ({
      error: state.admin.legalAgency.error,
      success: state.admin.legalAgency.success
    }),
    shallowEqual
  )

  const goBackToList = () => {
    history.push(routes.legalAgencyList.path)
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
          { condition: success.isUpdated, label: intl.formatMessage({ id: "LEGAL_AGENCY.EDIT.MSG" }) }
        ]}
        error={error}
        onClose={clearStore}
      />
      <Row>
        <Col xl="3" lg="5">
          {/* <LegalAgencyMenu history={history} param={params.param} /> */}
        </Col>
        <Col xl="9" lg="7">
          <Switch>
            {Object.keys(formRoutes).map((key) => (
              <Route key={key} path={formRoutes[key].path.replace(":param", params.param)}>
                { ({ history, match }) => renderRoute({ component: formRoutes[key].component, match, history })}
              </Route>
            ))}
            <Redirect from="*" to={formRoutes.legalAgencyForm.path.replace(":param", params.param)} />
          </Switch>
        </Col>
      </Row>
    </>
  )
}


export default injectIntl(LegalAgencyEdit)
