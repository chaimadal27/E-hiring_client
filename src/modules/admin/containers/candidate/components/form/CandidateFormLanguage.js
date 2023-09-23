import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import _ from "lodash"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import {  FormView, LanguageTab } from "../../../../../../components/partials/controls"
import {  candidateFields, candidatePersonalInfosFields, candidateProfessionalInfosFields } from "./fields/candidateFields"
import { candidateLanguageDetailFieldsAr, candidateLanguageDetailFieldsFr, candidateLanguageDetailFields } from "./fields/candidateLanguageDetailsFields"
import { DynamicForm, RenderFields } from "../../../../../../components/partials/controls"
import {
    editCandidateLanguage,
    createCandidate,
    fetchCandidateExtraData,
    fetchCandidateLanguage
} from "../../store/actions"
import { FormRepeater, FormRepeaterFields} from "../../../../../../components/partials/controls"

import routes from "../../routes/display"

const CandidateFormLanguage = (props) => {


    const { intl, history, goBackToList, params = undefined } = props

    const dispatch = useDispatch()

    const { candidateToEdit, success, isLoading } = useSelector(
        (state) => ({
            success: state.admin.candidate.success,
            candidateToEdit: state.admin.candidate.candidateContent,
            isLoading: state.admin.candidate.isLoading,
        }),
        shallowEqual
    )

    useEffect(() => {
        if (!_.isEmpty(params)) {
            console.log('params = ', params)
            dispatch(fetchCandidateLanguage(params))
        }
    }, [params])



    const saveCandidateLanguage = (values) => {
        if (_.isEmpty(params)) {
            dispatch(createCandidate(values))
        } else {
            dispatch(editCandidateLanguage(params, values))
        }
    }

    const goToShow = () => {
        history.push(routes.candidateDisplayLanguage.path.replace(":param", params.param))
    }

    const goToDisplay = !_.isEmpty(params) && goToShow


    const languageDetailFieldsFr = candidateLanguageDetailFieldsFr({ intl })
    const languageDetailFieldsAr = candidateLanguageDetailFieldsAr({ intl })
    const languageDetailFields = candidateLanguageDetailFields({ intl })

    return (
        <>
            <FormView
                goBackTo={goBackToList}
                goToDisplay={!_.isEmpty(params) && goToShow}
                title={
                    intl.formatMessage({ id: _.isEmpty(params) ? "CANDIDATE.NEW.TITLE" : "CANDIDATE.EDIT.TITLE" })
                }
                isLoading={isLoading}
            >
                { ({ saveRef }) => (
                    <LanguageTab>
                        { ({ isFr, isAr }) => (
                            <DynamicForm
                                className="mt-5"
                                clearValuesAfterSubmit={success.isCreated}
                                initialValues={!_.isEmpty(params) && candidateToEdit}
                                onSubmit={saveCandidateLanguage}
                            >
                                <FormRepeater max={10} min={1} labelbtn={intl.formatMessage({ id: "CANDIDATE.INPUT.CONTACT" })}>
                                  <FormRepeaterFields fields={languageDetailFieldsFr} show={isFr} />
                                  <FormRepeaterFields fields={languageDetailFieldsAr} show={isAr} />
                                  <FormRepeaterFields fields={languageDetailFields} show={true} />
                                </FormRepeater>

                                <button ref={saveRef} className="d-none" type="submit"></button>
                            </DynamicForm>
                        )}
                    </LanguageTab>
                )}
            </FormView>
        </>
    )
}

export default injectIntl(CandidateFormLanguage)
