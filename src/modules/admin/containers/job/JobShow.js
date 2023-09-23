import React, { useLayoutEffect, lazy, useEffect } from "react"
import { injectIntl } from "react-intl"
import { connect } from "react-redux"
import { Switch, Redirect } from "react-router-dom"
import _ from "lodash"
import { Col, Row } from "react-bootstrap"
import dialogRoutes from "./routes/dialogs"
import { useSubheader } from "../../../../components/layout"
import JobMenu from "./components/menu/JobDisplay"
import routes from "./../../routes"
import detailsRoutes from "./routes/display"
import { clearStore } from "./store/actions"
import { ProtectedRoute } from "../../../../components/routes"
import { FlashMessages } from "../../../../components/partials"
import JobsLoadingDialog from "./components/loading/JobsLoadingDialog"
import { ProtectedDialogRoute } from "../../../../components/routes"
import { jobReject, jobValidate } from "./routes/validation"


import { DisplayItems, LanguageTab, RenderItems, ShowView } from "./../../../../components/partials"
import { ENDPOINTS } from "./store/constants"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { fetchJobExtraData } from "./store/actions"
import routesForm from "./routes/edit"
import JobDisplay from "./components/display/JobDisplay"

const JobShow = ({ history, match: { params }, intl/* , clearStore, error */ }) => {

  const suhbeader = useSubheader()
  // Tabs
  let title = intl.formatMessage({ id: "JOB.SHOW.TITLE" })

  useLayoutEffect(() => {
    suhbeader.setTitle(title)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const goBackToList = () => {
    history.push(routes.jobList.path)
  }

  const renderRoute = ({ component, match, history }) => {
    const Component = component

    return <Component
      params={(match && !_.isEmpty(match.params)) ? { ...match.params, ...params } : params}
      goBackToList={goBackToList}
      history={history}
      show={match != null}
      onHide={() => { history.push(routes.jobShow.path.replace(":param", params.param)) }}
    />
  }
  /////////////////////////////////////////////////////
  const dispatch = useDispatch()

  const { isFetching, error, item } = useSelector(
    (state) => ({
      isFetching: state.admin.job.isFetching,
      item: state.admin.job.jobExtraData,
      error: state.admin.job.error,
    }),
    shallowEqual
  )

  const goToEdit = () => {
    history.push(routesForm.jobForm.path.replace(":param", params.param))
  }

  useEffect(() => {
    dispatch(fetchJobExtraData(params))
    // eslint-disable-next-line
  }, [params])
  ///////////////////////////////////////////////////////
  return (
    <><FlashMessages
      error={error}
      onClose={clearStore}
    />
      <Switch>
        {Object.keys(detailsRoutes).map((key, i) => (
          <ProtectedRoute key={i} path={detailsRoutes[key].path.replace(":param", params.param)}>
            {({ history, match }) => renderRoute({ component: detailsRoutes[key].component, history, match })}
          </ProtectedRoute>
        ))}</Switch>
      <ShowView
        title={intl.formatMessage({ id: "JOB.SHOW.TITLE" })}
        goBackTo={goBackToList}
        onClose={clearStore}
        error={error}
        goToEdit={goToEdit}
      >
        <JobDisplay error={error} isFetching={isFetching} item={item} />
      </ShowView>
      {/* <FlashMessages
        error={error}
        onClose={clearStore}
      />
      <Row>
        <Col xl="12" >
          <Switch>
            {Object.keys(detailsRoutes).map((key, i) => (
              <ProtectedRoute key={i} path={detailsRoutes[key].path.replace(":param", params.param)}>
                {({ history, match }) => renderRoute({ component: detailsRoutes[key].component, history, match })}
              </ProtectedRoute>
            ))}
            <Redirect from="*" to={detailsRoutes.jobDisplay.path.replace(":param", params.param)} />
          </Switch>
        </Col>
      </Row> */}
    </>
  )
}


const mapStateToProps = (state) => state.admin.job

export default connect(mapStateToProps, { clearStore })(injectIntl(JobShow))
