/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useRef } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector } from "react-redux"

import { clearStore } from "./store/actions"
import PartnershipForm from "./components/form/PartnershipForm"
import { useSubheader } from "../../../../components/layout"
import routes from "./../../routes"
import {FlashMessages} from "../../../../components/partials"


const Partnership = ({ history, intl, match: { params } }) => {

  const saveRef = useRef()
  const suhbeader = useSubheader()
  suhbeader.setTitle(intl.formatMessage({ id: "PARTNERSHIP.NEW.TITLE" }))

  const { success, error } = useSelector(
    (state) => ({
      success: state.admin.partnership.success,
      error: state.admin.partnership.error
    }),
    shallowEqual
  )

  const goBackToPartnershipsList = () => {
    history.push(routes.partnershipList.path)
  }

  return (
    <>
      <FlashMessages
        successMsg={[
          { condition: success.isCreated, label: intl.formatMessage({ id: "PARTNERSHIP.NEW.MSG" }) }
        ]}
        error={error}
        onClose={clearStore}
      />
      <PartnershipForm
        goBackToList={goBackToPartnershipsList}
        params={params}
        saveRef={saveRef}
      />
    </>
  )
}


export default injectIntl(Partnership)
