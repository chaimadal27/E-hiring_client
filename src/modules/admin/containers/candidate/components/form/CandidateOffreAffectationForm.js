import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import _ from "lodash"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { FormView, LanguageTab } from "../../../../../../components/partials/controls"

import { candidateOfferAffectationFields, candidateFields } from "./fields/CandidateOffreAffectationFields"

import { DynamicForm, RenderFields, RenderItems, DisplayItems } from "../../../../../../components/partials/controls"
import { fetchCandidateExtraData } from "./../../store/actions"
import routes from "../../routes/display"
import { createKanabn } from "../../../offer/store/actions"

const CandidateOffreAffectationForm = (props) => {

    const { intl, history, params = undefined, saveRef } = props

    const dispatch = useDispatch()
    const { success, isFetching, candidate } = useSelector(
        (state) => ({
            success: state.admin.candidate.success,
            isFetching: state.admin.candidate.isFetching,
            candidate: state.admin.candidate.candidateExtraData
        }),
        shallowEqual
    )

    useEffect(() => {
        dispatch(fetchCandidateExtraData(params))
        // eslint-disable-next-line
    }, [])

    const saveKanban = (values) => {
        values["candidate"] = parseInt(params.param)
        console.log(values)
        dispatch(createKanabn(values))
    }

    const fields = candidateOfferAffectationFields({ intl })
    const displayFields = candidateFields({ intl })


    return (
        <>
            <DisplayItems
                isFetching={isFetching}
                object={candidate}
                title={intl.formatMessage({ id: "CANDIDATE.AFFECTED" })}
            >
                <RenderItems fields={displayFields} show={true} />
            </DisplayItems>
            <DynamicForm
                className="mt-5"
                clearValuesAfterSubmit={success.isCreated}
                onSubmit={saveKanban}
            >
                <RenderFields fields={fields} show={true} />

                <button ref={saveRef} className="d-none" type="submit"></button>
            </DynamicForm>
        </>
    )
}

export default injectIntl(CandidateOffreAffectationForm)
