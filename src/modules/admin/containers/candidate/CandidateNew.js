/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useRef, useState } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector } from "react-redux"
import { clearStore } from "./store/actions"
import CandidateForm from "./components/form/CandidateForm"
import { useSubheader } from "../../../../components/layout"
import routes from "./../../routes"
import { FlashMessages, ShowModal } from "../../../../components/partials"
import formRoutes from "./routes/new"
import { Button } from "react-bootstrap"
import CandidateSchoolModalDialog from "../candidate/components/dialog/AddData/CandidateSchoolModalDialog"
import CandidatePartnershipModalDialog from "../candidate/components/dialog/AddData/CandidatePartnershipModalDialog"
import { AccordionShowView } from "../../../../components/partials/controls"
import CandidateFormDocument from "./components/form/CandidateFormDocument";
import CandidateFormPersonalInfo from "./components/form/CandidateFormPersonalInfo";
const Candidate = ({ history, intl, match: { params } }) => {

  const saveRef = useRef()
  const suhbeader = useSubheader()
  suhbeader.setTitle(intl.formatMessage({ id: "CANDIDATE.NEW.TITLE" }))
  const { success, error } = useSelector(
    (state) => ({
      success: state.admin.candidate.success,
      error: state.admin.candidate.error
    }),
    shallowEqual
  )

  const goBackToCandidatesList = () => {
    history.push(routes.candidateList.path)
  }


  const renderRoute = ({ component, history, match }) => {
    const Component = component
    const params = (match && match.params) ? { ...match.params } : {}
    return <Component params={params} show={match != null} onHide={() => { history.push(routes.candidateCreate.path) }} />
  }

  const candidatesUIActions = {
    openCreatePartnershipDialog: () => {
      history.push(formRoutes.CandidateCreatePartnershipDialog.path)
    },
    CreatePartnershipDialogRule: formRoutes.CandidateCreatePartnershipDialog,
    openCreateSchoolDialog: () => {
      history.push(formRoutes.CandidateCreateSchoolDialog.path)
    },
    CreateSchoolDialogRule: formRoutes.CandidateCreateSchoolDialog,
  }


  return (
    <>
      <FlashMessages
        successMsg={[
          { condition: success.isCreated, label: intl.formatMessage({ id: "CANDIDATE.NEW.MSG" }) }
        ]}
        error={error}
        onClose={clearStore}
      />
      <CandidateFormPersonalInfo
        goBackToList={goBackToCandidatesList}
        params={params}
        saveRef={saveRef}
      />
    </>
  )
}
export default injectIntl(Candidate)
