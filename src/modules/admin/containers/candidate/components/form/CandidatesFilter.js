import React, { useMemo, useState } from "react"
import _ from "lodash"
import { injectIntl } from "react-intl"
import { isEqual } from "lodash"
import { useCandidatesUIContext } from "../../context/CandidatesUIContext"

import { candidateFieldsAr, candidateFieldsFr, candidateFields, candidatePersonalInfosFields, candidateProfessionalInfosFields } from "./fields/filterFields"

import { DynamicForm, RenderFields } from "./../../../../../../components/partials/controls"

import { getLang } from "./../../../../../../i18n"
import { AR, FR } from "./../../../../../../constants"

const LANGUAGES = {
  [FR]: "french-version",
  [AR]: "arabic-version"
}

const CandidatesFilter = ({ searchRef, clearSearchRef, intl }) => {

  const [tab, setTab] = useState(LANGUAGES[getLang()])

  const fieldsFr = candidateFieldsFr({ intl })
  const fieldsAr = candidateFieldsAr({ intl })
  const fields = candidateFields({ intl })
  const personalFields = candidatePersonalInfosFields({ intl })
  const professionalFields = candidateProfessionalInfosFields({ intl })

  // Candidates UI Context
  const candidatesUIContext = useCandidatesUIContext()
  const candidatesUIProps = useMemo(() => {
    return {
      ...candidatesUIContext
    }
  }, [candidatesUIContext])

  const applyFilter = (values) => {
    const newQueryParams = { ..._.pickBy({ ...candidatesUIProps.queryParams, ...values }, _.identity) }
    if (!isEqual(newQueryParams, candidatesUIProps.queryParams)) {
      newQueryParams.pageNumber = 1
      candidatesUIProps.setQueryParams(newQueryParams)
    }
  }

  return (
    <>
      <ul className="nav nav-tabs nav-tabs-line " role="tablist">
        <li className="nav-item" onClick={() => setTab(LANGUAGES[FR])}>
          <span
            className={`nav-link ${tab === "french-version" && "active"}`}
            dataToggle="tab"
            role="tab"
            ariaSelected={(tab === "french-version").toString()}
          >
            {intl.formatMessage({ id: "GENERAL.FRENCH_VERSION" })}
          </span>
        </li>
        <li className="nav-item" onClick={() => setTab(LANGUAGES[AR])}>
          <span
            className={`nav-link ${tab === "arabic-version" && "active"}`}
            dataToggle="tab"
            role="button"
            ariaSelected={(tab === "arabic-version").toString()}
          >
            {intl.formatMessage({ id: "GENERAL.ARABIC_VERSION" })}
          </span>
        </li>
      </ul>
      <DynamicForm
        className="mt-5"
        onSubmit={applyFilter}
        reset={true}
      >
        <RenderFields fields={fields} show={true} />
        <RenderFields fields={personalFields} show={true} />
        <RenderFields fields={professionalFields} show={true} />
        {/* <RenderFields fields={fieldsFr} show={tab === LANGUAGES[FR]} />
        <RenderFields fields={fieldsAr} show={tab === LANGUAGES[AR]} />
        <RenderFields fields={fields} show={true} /> */}
        <button ref={searchRef} className="d-none" type="submit"></button>
        <button ref={clearSearchRef} className="d-none" type="reset"></button>
      </DynamicForm>
    </>
  )
}


export default injectIntl(CandidatesFilter)
