import React, { useEffect } from "react"
import { injectIntl } from "react-intl"

import { ENDPOINTS } from "./../../store/constants"

import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { fetchCandidateExtraData } from "./../../store/actions"

//import {  candidateFieldsAr, candidateFieldsFr, candidateFields } from "./fields/candidateFields"
import { candidateFieldsAr, candidateFieldsFr, candidateFields, candidatePersonalInfosFields, candidateProfessionalInfosFields, candidateLanguageDetailFields } from "./fields/candidateFields"

import routesForm from "./../../routes/edit"
import { DisplayItems, LanguageTab, RenderItems, ShowView } from "../../../../../../components/partials"
import { Col, Row, Card } from "react-bootstrap"



const CandidateDisplayProfessionalInfo = ({ params, history, goBackToList, intl }) => {


    const professionalFields = candidateProfessionalInfosFields({ intl })


    const dispatch = useDispatch()

    const { isFetching, error, item } = useSelector(
        (state) => ({
            isFetching: state.admin.candidate.isFetching,
            item: state.admin.candidate.candidateExtraData,
            error: state.admin.candidate.error,
        }),
        shallowEqual
    )

    const goToEdit = () => {
        history.push(routesForm.candidateFormProfessionalInfo.path.replace(":param", params.param))
    }

    useEffect(() => {
        dispatch(fetchCandidateExtraData(params))
        // eslint-disable-next-line
    }, [])

    return (
        <ShowView
            title={intl.formatMessage({ id: "CANDIDATE.SHOW.TITLE" })}
            goBackTo={goBackToList}
            printURL={ENDPOINTS.EXPORT_CANDIDATE.replace(":param", params.param)}
            goToEdit={goToEdit}
        >

            <Row>
                <Col>
                    <Card body>
                        <DisplayItems
                            error={error}
                            isFetching={isFetching}
                            object={item}
                        >
                            <RenderItems fields={professionalFields} /></DisplayItems>
                    </Card>
                </Col>

            </Row>
        </ShowView>
    )
}

export default injectIntl(CandidateDisplayProfessionalInfo)
