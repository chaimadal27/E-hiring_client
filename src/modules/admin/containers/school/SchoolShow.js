import React, { useLayoutEffect } from "react"
import { injectIntl } from "react-intl"
import { connect } from "react-redux"
import { Switch, Redirect } from "react-router-dom"
import _ from "lodash"
import { Col, Row } from "react-bootstrap"

import { useSubheader } from "../../../../components/layout"
import SchoolMenu from "./components/menu/SchoolDisplay"
import routes from "./../../routes"
import detailsRoutes from "./routes/display"
import { clearStore } from "./store/actions"
import { ContentRoute } from "../../../../components/router"
import { FlashMessages } from "../../../../components/partials"


const SchoolShow = ({ history, match: { params }, intl, clearStore, error }) => {

  const suhbeader = useSubheader()
  // Tabs
  let title = intl.formatMessage({ id: "SCHOOL.SHOW.TITLE" })

  useLayoutEffect(() => {
    suhbeader.setTitle(title)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const goBackToList = () => {
    history.push(routes.schoolList.path)
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
        <Col xl="12" >
          <Switch>
            {Object.keys(detailsRoutes).map((key, i) => (
              <ContentRoute key={i} path={detailsRoutes[key].path.replace(":param", params.param)}>
                {({ history, match }) => renderRoute({ component: detailsRoutes[key].component, history, match })}
              </ContentRoute>
            ))}
            <Redirect from="*" to={detailsRoutes.schoolDisplay.path.replace(":param", params.param)} />
          </Switch>
        </Col>
      </Row>
    </>
  )
}


const mapStateToProps = (state) => state.admin.school

export default connect(mapStateToProps, { clearStore })(injectIntl(SchoolShow))
