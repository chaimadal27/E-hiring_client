import React, { useEffect, useState } from "react"
import { injectIntl } from "react-intl"

import { ENDPOINTS } from "./../../store/constants"

import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { fetchCandidateExtraData } from "./../../store/actions"

//import {  candidateFieldsAr, candidateFieldsFr, candidateFields } from "./fields/candidateFields"
import { candidateFieldsAr, candidateFieldsFr, candidateFields, candidatePersonalInfosFields, candidateProfessionalInfosFields, candidateLanguageDetailFields, commentsFields } from "./fields/candidateFields"

import routesForm from "./../../routes/edit"
import { CardBody, DisplayItems, LanguageTab, RenderItems, ShowView } from "../../../../../../components/partials"




const CandidateKeyWords = ({ params, history, goBackToList, intl }) => {

    const fieldsFr = candidateFieldsFr({ intl })
    const fieldsAr = candidateFieldsAr({ intl })


    const fields = candidateFields({ intl })
    const commentFields = commentsFields({ intl })

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
        history.push(routesForm.candidateForm1.path.replace(":param", params.param))
    }
    const [showCVModal, setShowCVModal] = useState(false)
    //const [file, setFile] = useState("")

    //{ !isFetching && setFile(item.documentSet.file) }

    useEffect(() => {
        dispatch(fetchCandidateExtraData(params))
        // eslint-disable-next-line
    }, [])



    return (
        <>
            <ShowView
            title={ intl.formatMessage({ id: "CANDIDATE.SHOW.TITLE" }) }
            goBackTo={goBackToList}
            printURL={ENDPOINTS.EXPORT_CANDIDATE.replace(":param", params.param)}
            goToEdit={goToEdit}
        >
            <LanguageTab>

                { ({ isFr, isAr }) => (
                    <DisplayItems
                        error={error}
                        isFetching={isFetching}
                        object={item}
                    >
                        <RenderItems fields={fieldsFr} show={isAr} />
                        <RenderItems fields={fieldsAr} show={isFr} />
                        <RenderItems fields={fields} show={true} />
                        <RenderItems fields={commentFields} show={isFr} />
                        <RenderItems fields={commentFields} show={isAr} />
                    </DisplayItems>
                ) }
            </LanguageTab>
        </ShowView>
        </>
    )
}

export default injectIntl(CandidateKeyWords)
