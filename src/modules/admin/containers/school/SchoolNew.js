/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useRef } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector } from "react-redux"

import { clearStore } from "./store/actions"
import SchoolForm from "./components/form/SchoolForm"
import { useSubheader } from "../../../../components/layout"
import routes from "./../../routes"
import {FlashMessages} from "../../../../components/partials"


const School = ({ history, intl, match: { params } }) => {

  const saveRef = useRef()
  const suhbeader = useSubheader()
  suhbeader.setTitle(intl.formatMessage({ id: "SCHOOL.NEW.TITLE" }))

  const { success, error } = useSelector(
    (state) => ({
      success: state.admin.school.success,
      error: state.admin.school.error
    }),
    shallowEqual
  )

  const goBackToSchoolsList = () => {
    history.push(routes.schoolList.path)
  }

  return (
    <>
      <FlashMessages
        successMsg={[
          { condition: success.isCreated, label: intl.formatMessage({ id: "SCHOOL.NEW.MSG" }) }
        ]}
        error={error}
        onClose={clearStore}
      />
      <SchoolForm
        goBackToList={goBackToSchoolsList}
        params={params}
        saveRef={saveRef}
      />
    </>
  )
}


export default injectIntl(School)
