import React, { useLayoutEffect } from "react"
import { injectIntl } from "react-intl"
import { connect } from "react-redux"
import { Switch, Redirect, Route } from "react-router-dom"
import _ from "lodash"
import { Col, Row } from "react-bootstrap"

import { useSubheader } from "../../../../components/layout"
import LegalAgencyMenu from "./components/menu/LegalAgencyDisplay"
import routes from "./../../routes"
import detailsRoutes from "./routes/display"
import { clearStore } from "./store/actions"
import { ContentRoute } from "../../../../components/router"
import { FlashMessages } from "../../../../components/partials"


const LegalAgencyShow = ({ history, match: { params }, intl, clearStore, error }) => {

  const suhbeader = useSubheader()
  let title = intl.formatMessage({ id: "LEGAL_AGENCY.SHOW.TITLE" })

  useLayoutEffect(() => {
    suhbeader.setTitle(title)
  }, [])

  const goBackToList = () => {
    history.push(routes.legalAgencyList.path)
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
          {/* <LegalAgencyMenu history={history} param={params.param} /> */}
        </Col>
        <Col xl="9" lg="7">
          <Switch>

            <Route path={detailsRoutes.legalAgencyDisplay.path.replace(":param", params.param)}>
              {({ history, match }) => renderRoute({ component: detailsRoutes.legalAgencyDisplay.component, history, match })}
            </Route>

            <Redirect from="*" to={detailsRoutes.legalAgencyDisplay.path.replace(":param", params.param)} />
          </Switch>
        </Col>
      </Row>
    </>
  )
}


const mapStateToProps = (state) => state.admin.legalAgency

export default connect(mapStateToProps, { clearStore })(injectIntl(LegalAgencyShow))
