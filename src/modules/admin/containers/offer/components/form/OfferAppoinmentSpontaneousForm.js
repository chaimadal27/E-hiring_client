import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import _ from "lodash"
import { shallowEqual, useSelector, useDispatch } from "react-redux"

import {
    appointmentEditFields,
    appointmentFields,
    candidateFields,
    appointmentFieldsFr,
    appointmentFieldsAr,
    appoinmentsInternParticipants,
    appoinmentsExternParticipantsFr,
    appoinmentsExternParticipantsAr,
    appoinmentsExternParticipants
} from "./fields/appointmentFields"
import { DisplayItems, DynamicForm, LanguageTab, RenderFields, RenderItems } from "./../../../../../../components/partials/controls"
import {createOfferAppointment} from "./../../store/actions"

import {editAppointment} from "../../store/actions/offer"
import { FormRepeater, FormRepeaterFields} from "../../../../../../components/partials/controls"



const AppointmentSpontaneousForm = (props) => {

    const { saveRef, intl, params, initialValues = {},
      //  params: { appointmentParam = undefined, param: offer }
    } = props

    const dispatch = useDispatch()
    //const layoutDispatch = useContext(LayoutContext.Dispatch)
    const { appointmentToEdit, folderForShow, isFetching } = useSelector(
        (state) => ({
            isFetching: state.admin.offer.isFetching,
            folderForShow: state.admin.offer.folder,
            appointmentToEdit: state.admin.offer.appointment
        }),
        shallowEqual
    )

    const saveAppointment = (fieldValues) => {
        const values = {
            ...fieldValues,
         //   offer,
        }
        if (params) {
            dispatch(editAppointment(params, values))
        } else {
            dispatch(createOfferAppointment(values))
        }
    }

    const fields = appointmentFields({ intl })
    const fieldsFr = appointmentFieldsFr({ intl })
    const fieldsAr = appointmentFieldsAr({ intl })


    const ExternParticipantsFields = appoinmentsExternParticipants({ intl })
    const InternParticipantsFields= appoinmentsInternParticipants({intl})



    return (
        <>
            <LanguageTab>
                {({ isFr, isAr }) => (
                    <DynamicForm
                        className="mt-5"
                        initialValues={!params ? appointmentToEdit : initialValues}
                        onSubmit={saveAppointment}
                    >
                        <RenderFields fields={fields} show={true} />
                        <RenderFields fields={fieldsFr} show={isFr} />
                        <RenderFields fields={fieldsAr} show={isAr} />
                        <RenderFields fields={InternParticipantsFields} show={true}  />
                        <RenderFields fields={ExternParticipantsFields} show={true}  />


                        <button ref={saveRef} className="d-none" type="submit"></button>
                    </DynamicForm>)}

            </LanguageTab>
        </>
    )
}

export default injectIntl(AppointmentSpontaneousForm)
