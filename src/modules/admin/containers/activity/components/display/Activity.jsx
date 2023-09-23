import React, {useState} from "react"
import { injectIntl } from "react-intl"
import {
  DisplayItems,
  RenderItems
} from "./../../../../../../components/partials/controls"

import { activityFields, activityFieldsFr, activityFieldsAr } from "./fields/activityFields"
import {AR, FR} from "../../../../../../constants"
import {getLang} from "../../../../../../i18n"


const LANGUAGES = {
  [FR]: "french-version",
  [AR]: "arabic-version"
}


const Activity = ({ profile = {}, error, isFetching, intl }) => {

  const [tab, setTab] = useState(LANGUAGES[getLang()])

  const fields = activityFields({ intl })
  const fieldsFr = activityFieldsFr({ intl })
  const fieldsAr = activityFieldsAr({ intl })

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
      <DisplayItems
        error={error}
        isFetching={isFetching}
        object={profile}
      >
        <RenderItems fields={fieldsAr} show={tab === LANGUAGES[AR]} />
        <RenderItems fields={fieldsFr} show={tab === LANGUAGES[FR]} />
        <RenderItems fields={fields} />
      </DisplayItems>
    </>
  )
}

export default injectIntl(Activity)
