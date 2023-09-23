import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import _ from "lodash"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { FormView, LanguageTab } from "../../../../../../components/partials/controls"

import { offerFieldsAr, offerFieldsFr, offerFields } from "./fields/offerFields"

import { DynamicForm, RenderFields } from "../../../../../../components/partials/controls"
import { editOffer, createOffer, fetchOfferExtraData } from "../../store/actions"

import routes from "../../routes/display"

const OfferForm = (props) => {

    const { intl, history, params = undefined, saveRef } = props

    const dispatch = useDispatch()
    const { success, isLoading } = useSelector(
        (state) => ({
            success: state.admin.offer.success,
            isLoading: state.admin.offer.isLoading,
        }),
        shallowEqual
    )



    const saveOffer = (values) => {
        dispatch(createOffer(values))
    }

    const fieldsFr = offerFieldsFr({ intl })
    const fieldsAr = offerFieldsAr({ intl })
    const fields = offerFields({ intl })

    return (
        <LanguageTab>
            { ({ isFr, isAr }) => (
                <DynamicForm
                    className="mt-5"
                    clearValuesAfterSubmit={success.isCreated}
                    onSubmit={saveOffer}
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

export default injectIntl(OfferForm)
