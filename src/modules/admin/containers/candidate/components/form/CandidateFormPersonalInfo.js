import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import _ from "lodash"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import {  FormView, LanguageTab } from "../../../../../../components/partials/controls"
import {  candidateFields, candidatePersonalInfosFields, candidateProfessionalInfosFields } from "./fields/candidateFields"
import { candidateLanguageDetailFieldsAr, candidateLanguageDetailFieldsFr, candidateLanguageDetailFields } from "./fields/candidateLanguageDetailsFields"
import { candidateDocumentFields } from "./fields/candidateDocumentFields"
import { DynamicForm, RenderFields } from "../../../../../../components/partials/controls"
import { editCandidate, createCandidate, fetchCandidateExtraData } from "../../store/actions"

import routes from "../../routes/display"

const CandidateFormPersonalInfo = (props) => {


    const { intl, history, goBackToList, params = undefined } = props


    const dispatch = useDispatch()
    const { candidateToEdit, success, isLoading } = useSelector(
        (state) => ({
            success: state.admin.candidate.success,
            candidateToEdit: state.admin.candidate.candidateExtraData,
            isLoading: state.admin.candidate.isLoading,
        }),
        shallowEqual
    )

    useEffect(() => {
        if (!_.isEmpty(params)) {
            console.log('params = ', params)
            dispatch(fetchCandidateExtraData(params))
        }
    }, [params])



    const saveCandidate = (values) => {
        if (_.isEmpty(params)) {
            dispatch(createCandidate(values))
        } else {
            dispatch(editCandidate(params, values))
        }
    }

    const goToShow = () => {
        history.push(routes.candidateDisplayPersonalInfo.path.replace(":param", params.param))
    }

    const goToDisplay = !_.isEmpty(params) && goToShow

    const personalFields = candidatePersonalInfosFields({ intl })


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
                                onSubmit={saveCandidate}
                            >
                                <RenderFields fields={personalFields} show={isFr}  />
                                <RenderFields fields={personalFields} show={isAr} />

                                <button ref={saveRef} className="d-none" type="submit"></button>
                            </DynamicForm>
                        )}
                    </LanguageTab>
                )}
            </FormView>
        </>
    )
}

export default injectIntl(CandidateFormPersonalInfo)
