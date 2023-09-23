/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useState } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector } from "react-redux"
import { Switch, Route, Redirect } from "react-router-dom"
import { isEmpty } from "lodash"
import { Col, Row, Card } from "react-bootstrap"

import OfferMenu from "./components/menu/OfferEdit"
import { clearStore } from "./store/actions"
import formRoutes from "./routes/edit"
import routes from "./../../routes"
import { FlashMessages } from "../../../../components/partials"


const Offer = ({ history, match: { params }, intl }) => {

  const { error, success } = useSelector(
    (state) => ({
      error: state.admin.offer.error,
      success: state.admin.offer.success
    }),
    shallowEqual
  )

  const goBackToList = () => {
    history.push(routes.offerList.path)
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
          { condition: success.isUpdated, label: intl.formatMessage({ id: "OFFER.EDIT.MSG" }) }
        ]}
        error={error}
        onClose={clearStore}
      />
      <Row>
        <Col xl="12">
          <Switch>
            {Object.keys(formRoutes).map((key) => (
              <Route key={key} path={formRoutes[key].path.replace(":param", params.param)}>
                { ({ history, match }) => renderRoute({ component: formRoutes[key].component, match, history })}
              </Route>
            ))}
            <Redirect from="*" to={formRoutes.offerForm.path.replace(":param", params.param)} />
          </Switch>
        </Col>
      </Row>
      {/* <Row><Col xl="12" lg="7"><Kanban /></Col></Row> */}
    </>
  )
}


export default injectIntl(Offer)
