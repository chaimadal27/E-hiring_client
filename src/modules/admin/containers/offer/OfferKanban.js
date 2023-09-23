import React, { useLayoutEffect, useEffect } from "react"
import { injectIntl, FormattedMessage } from "react-intl"
import { connect } from "react-redux"
import { Switch, Redirect } from "react-router-dom"
import _ from "lodash"
import { Col, Row } from "react-bootstrap"
import dialogRoutes from "./routes/kanban"

import { useSubheader } from "../../../../components/layout"
import OfferMenu from "./components/menu/OfferDisplay"
import routes from "./../../routes"
import detailsRoutes from "./routes/display"
import { clearStore, fetchKanbanCandidates, clearKanban } from "./store/actions"
import { ContentRoute } from "../../../../components/router"
import { FlashMessages } from "../../../../components/partials"
import Kanban from "./components/kanaban/OfferKanban"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ProtectedDialogRoute } from "../../../../components/routes"




const OfferKanban = ({ history, match: { params }, intl }) => {

    const dispatch = useDispatch()

    const { candidates, success, error } = useSelector(
        (state) => ({
            candidates: state.admin.offer.kanbanCandidates,
            success: state.admin.offer.success,
            error: state.admin.offer.error
        }),
        shallowEqual
    )

    useEffect(() => {
        dispatch(fetchKanbanCandidates(params))
        // eslint-disable-next-line
    }, [params, dispatch])
    const suhbeader = useSubheader()
    // Tabs
    let title = intl.formatMessage({ id: "OFFER.KANBAN.TITLE" })

    useLayoutEffect(() => {
        suhbeader.setTitle(title)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const goBackToList = () => {
        history.push(routes.offerList.path)
    }

    /*  const renderRoute = ({ component, history, match }) => {
         const Component = component
         const params = (match && match.params) ? { ...match.params } : {}
         return <Component params={params} show={match != null} onHide={() => { history.push(routes.offerKanban.path.replace(":param", params.param)) }} />
     } */

    const renderRoute = ({ component, match, history }) => {
        const Component = component

        return <Component
            params={(match && !_.isEmpty(match.params)) ? { ...match.params, ...params } : params}
            history={history}
            show={match != null}
            onHide={() => { history.push(routes.offerKanban.path.replace(":param", params.param)) }}
        />
    }


    return (
        <>
            <FlashMessages
                error={error}
                onClose={clearStore}
                successMsg={[
                    { condition: success.isClosed, label: <FormattedMessage id="OFFER.MSG.DEACTIVATED" /> },
                    { condition: success.isActivated, label: <FormattedMessage id="OFFER.MSG.SHARE_CV" /> }
                ]}
            /><Switch>
                {Object.keys(dialogRoutes).map((key, i) => (
                    <ProtectedDialogRoute key={i} path={dialogRoutes[key].path.replace(":param", params.param)}>
                        {({ history, match }) => renderRoute({ component: dialogRoutes[key].component, history, match })}
                    </ProtectedDialogRoute>
                ))}</Switch>
            {/* { Object.keys(dialogRoutes).map(key => (
                <ProtectedDialogRoute key={key} path={dialogRoutes[key].path}>
                    {({ history, match }) => renderRoute({ component: dialogRoutes[key].component, history, match })}
                </ProtectedDialogRoute>
            ))} */}
            <Row>
                <Col xl="12"><Kanban candidates={candidates} params={params} history={history} /></Col>
                {/* <Col xl="3" lg="5">
                    <OfferMenu history={history} param={params.param} />
                </Col>
                <Col xl="9" >
                    <Switch>
                        {Object.keys(detailsRoutes).map((key, i) => (
                            <ContentRoute key={i} path={detailsRoutes[key].path.replace(":param", params.param)}>
                                {({ history, match }) => renderRoute({ component: detailsRoutes[key].component, history, match })}
                            </ContentRoute>
                        ))}
                        <Redirect from="*" to={detailsRoutes.offerDisplay.path.replace(":param", params.param)} />
                    </Switch>
                </Col> */}
            </Row>
        </>
    )
}


export default injectIntl(OfferKanban)
