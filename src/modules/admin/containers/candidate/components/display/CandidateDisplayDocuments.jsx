import React, { useEffect, useState } from "react"
import { injectIntl } from "react-intl"

import { ENDPOINTS } from "./../../store/constants"

import { shallowEqual, useSelector, useDispatch } from "react-redux"
import {fetchCandidateDocument, fetchCandidateExtraData} from "./../../store/actions"
import routesForm from "./../../routes/edit"
import {
    CardBody,
    DisplayItems,
    FormRepeater, FormRepeaterFields,
    LanguageTab,
    RenderItems,
    ShowView
} from "../../../../../../components/partials"

import {candidateDocumentFields} from "./fields/candidateFields";
import CandidateShowCVDialog from "../dialog/ShowData/CandidateShowCVDialog";
const CandidateDisplayDocuments = ({ params, history, goBackToList, intl }) => {

    const documentFields = candidateDocumentFields({ intl })

   // console.log(documentFields)
    const dispatch = useDispatch()

    const { isFetching, error, item } = useSelector(

        (state) => ({
            isFetching: state.admin.candidate.isFetching,
            item: state.admin.candidate.candidateContent,
            error: state.admin.candidate.error,
        }),

        shallowEqual
    )

    const goToEdit = () => {
        console.log(params)
        history.push(routesForm.candidateFormDocument.path.replace(":param", params.param))
    }
    const [showCVModal, setShowCVModal] = useState(false)
    //const [file, setFile] = useState("")

    //{ !isFetching && setFile(item.documentSet.file) }

    useEffect(() => {
        dispatch(fetchCandidateDocument(params))
        //console.log(dispatch(fetchCandidateDocument(params)))
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

                            <RenderItems fields={documentFields} show={isAr} />
                            <RenderItems fields={documentFields} show={isFr} />

                        </DisplayItems>
                    ) }
                </LanguageTab>
            </ShowView>
        </>
    )
}

export default injectIntl(CandidateDisplayDocuments)
