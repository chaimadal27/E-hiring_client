/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useRef } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector } from "react-redux"

import { clearStore } from "./store/actions"
import JobForm from "./components/form/JobForm"
import { useSubheader } from "../../../../components/layout"
import routes from "./../../routes"
import { FlashMessages } from "../../../../components/partials"


const Job = ({ history, intl, match: { params } }) => {

  const saveRef = useRef()
  const suhbeader = useSubheader()
  suhbeader.setTitle(intl.formatMessage({ id: "JOB.NEW.TITLE" }))

  const { success, error } = useSelector(
    (state) => ({
      success: state.admin.job.success,
      error: state.admin.job.error
    }),
    shallowEqual
  )

  const goBackToJobsList = () => {
    history.push(routes.jobList.path)
  }

  return (
    <>
      <FlashMessages
        successMsg={[
          { condition: success.isCreated, label: intl.formatMessage({ id: "JOB.NEW.MSG" }) }
        ]}
        error={error}
        onClose={clearStore}
      />
      <JobForm
        goBackToList={goBackToJobsList}
        params={params}
        saveRef={saveRef}
      />
    </>
  )
}


export default injectIntl(Job)
