import React, { useMemo, useState } from "react"
import _ from "lodash"
import { injectIntl } from "react-intl"
import { isEqual } from "lodash"
import { useOffersUIContext } from "../../context/OffersUIContext"

import {offerFieldsAr, offerFieldsFr, offerFields, AppointmentFilterFields} from "./fields/filterFields"

import { DynamicForm, RenderFields } from "./../../../../../../components/partials/controls"

import { getLang } from "./../../../../../../i18n"
import { AR, FR } from "./../../../../../../constants"
import {useAppointmentUIContext} from "../../context/AppointmentUIContext";

const LANGUAGES = {
    [FR]: "french-version",
    [AR]: "arabic-version"
}

const AppointmentFilter = ({ searchRef, clearSearchRef, intl }) => {

    const [tab, setTab] = useState(LANGUAGES[getLang()])

    const fieldsFr = offerFieldsFr({ intl })
    const fieldsAr = offerFieldsAr({ intl })
    const fields = AppointmentFilterFields({ intl })

    // Offers UI Context
    const appointmentsUIContext = useAppointmentUIContext()
    const appointmentsUIProps = useMemo(() => {
        return {
            ...appointmentsUIContext
        }
    }, [appointmentsUIContext])

    const applyFilter = (values) => {
        const newQueryParams = { ..._.pickBy({ ...appointmentsUIProps.queryParams, ...values }, _.identity) }
        if (!isEqual(newQueryParams, appointmentsUIProps.queryParams)) {
            newQueryParams.pageNumber = 1
            appointmentsUIProps.setQueryParams(newQueryParams)
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
                <RenderFields fields={fieldsFr} show={tab === LANGUAGES[FR]} />
                <RenderFields fields={fieldsAr} show={tab === LANGUAGES[AR]} />
                <RenderFields fields={fields} show={true} />
                <button ref={searchRef} className="d-none" type="submit"></button>
                <button ref={clearSearchRef} className="d-none" type="reset"></button>
            </DynamicForm>
        </>
    )
}


export default injectIntl(AppointmentFilter)
