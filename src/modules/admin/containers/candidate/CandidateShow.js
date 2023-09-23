import React, { useLayoutEffect } from "react"
import { injectIntl } from "react-intl"
import { connect } from "react-redux"
import { Switch, Redirect } from "react-router-dom"
import _ from "lodash"
import { Col, Row } from "react-bootstrap"

import { useSubheader } from "../../../../components/layout"
import CandidateMenu from "./components/menu/CandidateDisplay"
import routes from "./../../routes"
import detailsRoutes from "./routes/display"
import { clearStore } from "./store/actions"
import { ContentRoute } from "../../../../components/router"
import { FlashMessages } from "../../../../components/partials"


const CandidateShow = ({ history, match: { params }, intl, clearStore, error }) => {

  const suhbeader = useSubheader()
  // Tabs
  let title = intl.formatMessage({ id: "CANDIDATE.SHOW.TITLE" })

  useLayoutEffect(() => {
    suhbeader.setTitle(title)
  }, [])

  const goBackToList = () => {
    history.push(routes.candidateList.path)
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
          <CandidateMenu history={history} param={params.param} />
        </Col>
        <Col  xl="9" lg="7">
          <Switch>
            {Object.keys(detailsRoutes).map((key, i) => (
              <ContentRoute key={i} path={detailsRoutes[key].path.replace(":param", params.param)}>
                {({ history, match }) => renderRoute({ component: detailsRoutes[key].component, history, match })}
              </ContentRoute>
            ))}
            <Redirect from="*" to={detailsRoutes.candidateDisplayPersonalInfo.path.replace(":param", params.param)} />
          </Switch>
        </Col>
      </Row>
    </>
  )
}


const mapStateToProps = (state) => state.admin.candidate

export default connect(mapStateToProps, { clearStore })(injectIntl(CandidateShow))
