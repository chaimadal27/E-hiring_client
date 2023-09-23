import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import _ from "lodash"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { FormView, LanguageTab } from "../../../../../../components/partials/controls"

import { schoolFieldsAr, schoolFieldsFr, schoolFields } from "./fields/schoolFields"

import { DynamicForm, RenderFields } from "../../../../../../components/partials/controls"
import { editSchool, createSchool, fetchSchoolExtraData } from "../../store/actions"

import routes from "../../routes/display"

const SchoolForm = (props) => {

    const { intl, history, params = undefined, saveRef } = props

    const dispatch = useDispatch()
    const { success, isLoading } = useSelector(
        (state) => ({
            success: state.admin.school.success,
            isLoading: state.admin.school.isLoading,
        }),
        shallowEqual
    )



    const saveSchool = (values) => {
        dispatch(createSchool(values))
    }

    const fieldsFr = schoolFieldsFr({ intl })
    const fieldsAr = schoolFieldsAr({ intl })
    const fields = schoolFields({ intl })

    return (
        <LanguageTab>
            { ({ isFr, isAr }) => (
                <DynamicForm
                    className="mt-5"
                    clearValuesAfterSubmit={success.isCreated}
                    onSubmit={saveSchool}
                >
                    <RenderFields fields={fieldsFr} show={isFr} />
                    <RenderFields fields={fieldsAr} show={isAr} />
                    <RenderFields fields={fields} show={true} />

                    <button ref={saveRef} className="d-none" type="submit"></button>
                </DynamicForm>
            )}
        </LanguageTab>
    )
}

export default injectIntl(SchoolForm)
