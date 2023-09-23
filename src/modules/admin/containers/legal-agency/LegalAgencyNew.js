/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useRef } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector } from "react-redux"

import { clearStore } from "./store/actions"
import LegalAgencyForm from "./components/form/LegalAgencyForm"
import { useSubheader } from "../../../../components/layout"
import routes from "./../../routes"
import {FlashMessages} from "../../../../components/partials"


const LegalAgencyNew = ({ history, intl, match: { params } }) => {

  const saveRef = useRef()
  const suhbeader = useSubheader()
  suhbeader.setTitle(intl.formatMessage({ id: "LEGAL_AGENCY.NEW.TITLE" }))

  const { success, error } = useSelector(
    (state) => ({
      success: state.admin.legalAgency.success,
      error: state.admin.legalAgency.error
    }),
    shallowEqual
  )

  const goBackToLegalAgenciesList = () => {
    history.push(routes.legalAgencyList.path)
  }

  return (
    <>
      <FlashMessages
        successMsg={[
          { condition: success.isCreated, label: intl.formatMessage({ id: "LEGAL_AGENCY.NEW.MSG" }) }
        ]}
        error={error}
        onClose={clearStore}
      />
      <LegalAgencyForm
        goBackToList={goBackToLegalAgenciesList}
        params={params}
        saveRef={saveRef}
      />
    </>
  )
}


export default injectIntl(LegalAgencyNew)
