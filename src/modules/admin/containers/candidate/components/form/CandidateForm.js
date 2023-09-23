import React, { useEffect, useState } from "react"
import { injectIntl, FormattedMessage } from "react-intl"
import _ from "lodash"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { FormRepeater, FormRepeaterFields, FormView, WizardFormView, LanguageTab, Wizard, WizardStep, FormRepeaterWizard, FormRepeaterWizardStep } from "../../../../../../components/partials/controls"

import { candidateFieldsAr, candidateFieldsFr, candidateFields, candidatePersonalInfosFields, candidateProfessionalInfosFields } from "./fields/candidateFields"
import { candidateLanguageDetailFieldsAr, candidateLanguageDetailFieldsFr, candidateLanguageDetailFields } from "./fields/candidateLanguageDetailsFields"
import { candidateDocumentFields } from "./fields/candidateDocumentFields"
import { DynamicForm, RenderFields } from "../../../../../../components/partials/controls"
import { editCandidate, createCandidate, fetchCandidateExtraData } from "../../store/actions"

import routes from "../../routes/display"
import { Col, Row, Button } from "react-bootstrap"
import { Card, CardBody, CardHeader, CardHeaderToolbar, ModalProgressBar, FlashMessages } from "../../../../../../components/partials/controls"
import { isRLTLang, getLang } from "./../../../../../../i18n";
import CandidatesActionsAccordion from "./CandidateActionsAccordion"
import CandidateShowCVDialog from "./../dialog/ShowData/CandidateShowCVDialog"
import { candidateGetCVUIHelper } from "../../../../UIHelpers"



const CandidateForm = (props) => {

    const { intl, history, goBackToList, params = undefined } = props
    const [showCVModal, setShowCVModal] = useState(false)
    //const [file, setFile] = useState("")

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
        history.push(routes.candidateDisplay.path.replace(":param", params.param))
    }

    const goToDisplay = !_.isEmpty(params) && goToShow

    const fieldsFr = candidateFieldsFr({ intl })
    const fieldsAr = candidateFieldsAr({ intl })
    const fields = candidateFields({ intl })
    const personalFields = candidatePersonalInfosFields({ intl })
    const professionalFields = candidateProfessionalInfosFields({ intl })

    const languageDetailFieldsFr = candidateLanguageDetailFieldsFr({ intl })
    const languageDetailFieldsAr = candidateLanguageDetailFieldsAr({ intl })
    const languageDetailFields = candidateLanguageDetailFields({ intl })

    const documentFields = candidateDocumentFields({ intl })

    return (
        <>
            <Card>
                {/* <FlashMessages successMsg={successMsg} error={error} onClose={onClose} /> */}
                {isLoading && <ModalProgressBar />}
                <CardHeader title={intl.formatMessage({ id: _.isEmpty(params) ? "CANDIDATE.NEW.TITLE" : "CANDIDATE.EDIT.TITLE" })}>
                    <CardHeaderToolbar>
                        {_.isFunction(goBackToList) && <Button
                            type="button"
                            onClick={goBackToList}
                            className="btn btn-sm btn-light mx-2"
                        >
                            {isRLTLang() ?
                                <>
                                    <FormattedMessage id="GENERAL.BACK" />
                                    <i className="fa fa-arrow-left" />
                                </>
                                : <>
                                    <i className="fa fa-arrow-left" />
                                    <FormattedMessage id="GENERAL.BACK" />
                                </>
                            }
                        </Button>
                        }
                        {!_.isEmpty(params) && <Button
                            type="button"
                            className="btn btn-sm btn-success btn-hover-success mx-3 my-1 "
                            onClick={() => setShowCVModal(true)}
                        >
                            <FormattedMessage id="CANDIDATE.DOCUMENT.SHOW" />
                        </Button>}
                        {_.isFunction(goToDisplay) && <Button
                            type="button"
                            className="btn btn-sm btn-warning btn-hover-warning mx-2"
                            onClick={goToShow}
                        >
                            <FormattedMessage id="GENERAL.SHOW" />
                        </Button>
                        }
                    </CardHeaderToolbar>
                </CardHeader>
                <CardBody>
                    <Wizard isLoading={isLoading} onSubmit={saveCandidate} initialValues={!_.isEmpty(params) ? candidateToEdit : {}}>

                        <WizardStep
                            label={intl.formatMessage({ id: "CANDIDATE_SOURCE_INFOS" })}
                            fields={fields}
                        />
                        <WizardStep
                            label={intl.formatMessage({
                                id: "CANDIDATE_PERSONAL_INFOS"
                            })}
                            fields={personalFields}
                        />
                        <WizardStep
                            label={intl.formatMessage({ id: "CANDIDATE_PROFESSIONAL_INFOS" })}
                            fields={professionalFields}
                        />
                        <FormRepeater max={10} min={1} label={intl.formatMessage({ id: "CANDIDATE.INPUT.LANGUAGES" })} labelbtn={intl.formatMessage({ id: "CANDIDATE.INPUT.CONTACT" })}>
                            <FormRepeaterFields fields={languageDetailFields} show={true} />
                        </FormRepeater>
                        <FormRepeater max={10} min={1} label={intl.formatMessage({ id: "CANDIDATE_DOCUMENTS" })} labelbtn={intl.formatMessage({ id: "CANDIDATE.INPUT.DOCUMENT" })}>
                            <FormRepeaterFields fields={documentFields} show={true} />
                        </FormRepeater>

                    </Wizard>

                </CardBody>
            </Card>
            <CandidateShowCVDialog params={params} id={params.param} type={'pdf'} show={showCVModal} onHide={() => setShowCVModal(false)}></CandidateShowCVDialog >
        </>

    )
}

export default injectIntl(CandidateForm)
