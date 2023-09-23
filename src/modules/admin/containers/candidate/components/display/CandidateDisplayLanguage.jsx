import React, { useEffect } from "react"
import { injectIntl } from "react-intl"

import { ENDPOINTS } from "./../../store/constants"

import { shallowEqual, useSelector, useDispatch } from "react-redux"
import {fetchCandidateExtraData, fetchCandidateLanguage} from "./../../store/actions"
import { candidateLanguageDetailFields } from "./fields/candidateFields"

import routesForm from "./../../routes/edit"
import { DisplayItems, LanguageTab, RenderItems, ShowView } from "../../../../../../components/partials"
const CandidateDisplayLanguage = ({ params, history, goBackToList, intl }) => {

    const languageDetailFields = candidateLanguageDetailFields({ intl })
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
        history.push(routesForm.candidateFormLanguage.path.replace(":param", params.param))
    }

    useEffect(() => {
        dispatch(fetchCandidateLanguage(params))
        // eslint-disable-next-line
    }, [])

    return (
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
                        <RenderItems fields={languageDetailFields} show={isAr} />
                        <RenderItems fields={languageDetailFields} show={isFr} />

                    </DisplayItems>
                ) }
            </LanguageTab>
        </ShowView>
    )
}

export default injectIntl(CandidateDisplayLanguage)
