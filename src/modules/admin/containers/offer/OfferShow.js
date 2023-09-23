import React, { useLayoutEffect } from "react"
import { injectIntl } from "react-intl"
import { connect } from "react-redux"
import { Switch, Redirect } from "react-router-dom"
import _ from "lodash"
import { Col, Row } from "react-bootstrap"

import { useSubheader } from "../../../../components/layout"
import OfferMenu from "./components/menu/OfferDisplay"
import routes from "./../../routes"
import detailsRoutes from "./routes/display"
import { clearStore } from "./store/actions"
import { ContentRoute } from "../../../../components/router"
import { FlashMessages } from "../../../../components/partials"


const OfferShow = ({ history, match: { params }, intl, clearStore, error }) => {

  const suhbeader = useSubheader()
  // Tabs
  let title = intl.formatMessage({ id: "OFFER.SHOW.TITLE" })

  useLayoutEffect(() => {
    suhbeader.setTitle(title)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const goBackToList = () => {
    history.push(routes.offerList.path)
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
        {/* <Col xl="3" lg="5">
          <OfferMenu history={history} param={params.param} />
        </Col> */}
        <Col xl="12" >
          <Switch>
            {Object.keys(detailsRoutes).map((key, i) => (
              <ContentRoute key={i} path={detailsRoutes[key].path.replace(":param", params.param)}>
                {({ history, match }) => renderRoute({ component: detailsRoutes[key].component, history, match })}
              </ContentRoute>
            ))}
            <Redirect from="*" to={detailsRoutes.offerDisplay.path.replace(":param", params.param)} />
          </Switch>
        </Col>
      </Row>
    </>
  )
}


const mapStateToProps = (state) => state.admin.offer

export default connect(mapStateToProps, { clearStore })(injectIntl(OfferShow))
