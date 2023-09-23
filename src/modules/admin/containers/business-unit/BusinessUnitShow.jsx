import React, { useEffect, useLayoutEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import BusinessUnit from "./components/display/BusinessUnit"

import { useSubheader } from "../../../../components/layout"
import routes from "./../../routes"
import { clearStore, fetchBusinessUnit } from "./store/actions"
import {ShowView} from "../../../../components/partials"


const BusinessUnitShow = ({ history, match: { params }, intl }) => {
  const suhbeader = useSubheader()

  let title = intl.formatMessage({ id: "BUSINESS_UNIT.SHOW.TITLE" })
  const dispatch = useDispatch()
  const { isFetching, businessUnitForShow, error } = useSelector(
    (state) => ({
      isFetching: state.admin.businessUnit.isFetching,
      businessUnitForShow: state.admin.businessUnit.businessUnit,
      error: state.admin.businessUnit.error
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(fetchBusinessUnit(params))
  }, [params, dispatch])

  useLayoutEffect(() => {
    suhbeader.setTitle(title)
  }, [])

  const goBackToBusinessUnitsList = () => {
    history.push(routes.businessUnitList.path)
  }

  return (
    <ShowView
      title={title}
      goBackTo={goBackToBusinessUnitsList}
      onClose={clearStore}
      error={error}
    >
      <BusinessUnit error={error} isFetching={isFetching} businessUnit={businessUnitForShow} />
    </ShowView>
  )
}


export default injectIntl(BusinessUnitShow)
