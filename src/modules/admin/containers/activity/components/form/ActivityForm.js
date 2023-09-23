import React, { useState } from "react"
import { injectIntl } from "react-intl"
import { DynamicForm, RenderFields } from "./../../../../../../components/partials/controls"
import { getLang } from "./../../../../../../i18n"
import { AR, FR } from "./../../../../../../constants"
import {activityFieldsAr, activityFields, activityFieldsFr} from "./fields/activityFields"

const LANGUAGES = {
  [FR]: "french-version",
  [AR]: "arabic-version"
}

const ActivityForm = (props) => {

  const { onSubmit, activity, success, saveRef, intl } = props
  const [tab, setTab] = useState(LANGUAGES[getLang()])

  const fields = activityFields({ intl })
  const fieldsAr = activityFieldsAr({ intl })
  const fieldsFr = activityFieldsFr({ intl })

  return (
    <>
      <ul className="nav nav-tabs nav-tabs-line " role="tablist">
        <li className="nav-item" onClick={() => setTab(LANGUAGES[FR])}>
          <span
            className={`nav-link ${tab === "french-version" && "active"}`}
            dataToggle="tab"
            role="button"
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
        clearValuesAfterSubmit={success}
        initialValues={activity}
        onSubmit={onSubmit}
      >
        <RenderFields fields={fieldsFr} show={tab === LANGUAGES[FR]} />
        <RenderFields fields={fieldsAr} show={tab === LANGUAGES[AR]} />
        <RenderFields fields={fields} />
        <button ref={saveRef} className="d-none" type="submit"></button>
      </DynamicForm>

    </>
  )
}

export default injectIntl(ActivityForm)
