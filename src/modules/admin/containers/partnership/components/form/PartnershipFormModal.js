import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import _ from "lodash"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { FormRepeater, FormRepeaterFields, FormView, LanguageTab } from "../../../../../../components/partials/controls"

import { partnershipFieldsAr, partnershipFieldsFr, partnershipFields } from "./fields/partnershipFields"
import { partnershipContactFieldsAr, partnershipContactFieldsFr, partnershipContactFields } from "./fields/partnershipContactsFields"

import { DynamicForm, RenderFields } from "../../../../../../components/partials/controls"
import { editPartnership, createPartnership, fetchPartnershipExtraData } from "../../store/actions"



const PartnershipFormModal = (props) => {

    const { intl, history, goBackToList, params = undefined, saveRef } = props

    const dispatch = useDispatch()
    const { success, isLoading } = useSelector(
        (state) => ({
            success: state.admin.partnership.success,
            isLoading: state.admin.partnership.isLoading,
        }),
        shallowEqual
    )

    const savePartnership = (values) => {
        dispatch(createPartnership(values))
    }



    const fieldsFr = partnershipFieldsFr({ intl })
    const fieldsAr = partnershipFieldsAr({ intl })
    const fields = partnershipFields({ intl })

    const contactFieldsFr = partnershipContactFieldsFr({ intl })
    const contactFieldsAr = partnershipContactFieldsAr({ intl })
    const contactFields = partnershipContactFields({ intl })

    return (
        <LanguageTab>
            { ({ isFr, isAr }) => (
                <DynamicForm
                    className="mt-5"
                    clearValuesAfterSubmit={success.isCreated}
                    onSubmit={savePartnership}
                >
                    <RenderFields fields={fieldsFr} show={isFr} />
                    <RenderFields fields={fieldsAr} show={isAr} />
                    <RenderFields fields={fields} show={true} />

                    <FormRepeater max={10} min={1} labelbtn={intl.formatMessage({ id: "PARTNERSHIP.INPUT.CONTACT" })}>
                        <FormRepeaterFields fields={contactFieldsFr} show={isFr} />
                        <FormRepeaterFields fields={contactFieldsAr} show={isAr} />
                        <FormRepeaterFields fields={contactFields} show={true} />
                    </FormRepeater>

                    <button ref={saveRef} className="d-none" type="submit"></button>
                </DynamicForm>
            )}
        </LanguageTab>
    )
}

export default injectIntl(PartnershipFormModal)
