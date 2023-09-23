/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useRef } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector } from "react-redux"

import { clearStore } from "./store/actions"
import OfferForm from "./components/form/OfferForm"

import { useSubheader } from "../../../../components/layout"
import routes from "./../../routes"
import { FlashMessages } from "../../../../components/partials"
import OfferAppointmentForm from "./components/form/OfferAppointmentForm"


const Offer = ({ history, intl, match: { params } }) => {

  const saveRef = useRef()
  const suhbeader = useSubheader()
  suhbeader.setTitle(intl.formatMessage({ id: "OFFER.NEW.TITLE" }))

  const { success, error } = useSelector(
    (state) => ({
      success: state.admin.offer.success,
      error: state.admin.offer.error
    }),
    shallowEqual
  )

  const goBackToOffersList = () => {
    history.push(routes.offerList.path)
  }

  return (
    <>
      <FlashMessages
        successMsg={[
          { condition: success.isCreated, label: intl.formatMessage({ id: "OFFER.NEW.MSG" }) }
        ]}
        error={error}
        onClose={clearStore}
      />
      <OfferForm
        goBackToList={goBackToOffersList}
        params={params}
        saveRef={saveRef}
      />
    </>
  )
}


export default injectIntl(Offer)
