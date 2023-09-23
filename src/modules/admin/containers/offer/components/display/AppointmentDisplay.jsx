import React, {useEffect, useState} from "react"
import { injectIntl } from "react-intl"

import { ENDPOINTS } from "./../../store/constants"
import { isEmpty } from "lodash";
import {shallowEqual, useSelector, useDispatch, connect} from "react-redux"
import { offerFieldsAr, offerFieldsFr, offerFields } from "./fields/offerFields"
import routesForm from "./../../routes/edit"
import {DisplayItems, LanguageTab, RenderFields, RenderItems, ShowView} from "../../../../../../components/partials"
import {
    appoinmentsExternParticipants,
    appoinmentsInternParticipants,
    AppointmentFields, appointmentFieldsAr, appointmentFieldsFr
} from "./fields/AppointmentFields";
import {fetchCandidate} from "../../../candidate/store/actions";
import {Is_Done} from "../display/fields/AppointmentFields"
import OfferAppoinmentEditDialog from "../dialog/appointment/OfferAppoinmentEditDialog";
import OfferAppoitmentShowDialog from "../dialog/appointment/OfferAppointmentShowDialog";
import {fetchAppointment, fetchAppointmentExtraData} from "../../store/actions";
import OfferAppointmentEditDialog from "../dialog/appointment/OfferAppoinmentEditDialog";

const AppointmentDispaly = ({ params,  history, goBackToList, intl }) => {

    const InternParticipants = appoinmentsInternParticipants({ intl })
    const ExternParticipants = appoinmentsExternParticipants({ intl })
    const appointmentFields = AppointmentFields({ intl })
    const FieldsAr = appointmentFieldsAr({ intl })
    const FieldsFr = appointmentFieldsFr({ intl })
    const is_done = Is_Done({ intl })
    const dispatch = useDispatch()

    const { isFetching, error, item } = useSelector(
        (state) => ({
            isFetching: state.admin.offer.isFetching,
            item: state.admin.offer.appointmentContent,
            error: state.admin.offer.error,
        }),
        shallowEqual
    )

    const [showAppointmenteventModal, setShowAppointmenteventModal] = useState(false)
    const [showAppointmentEditModal, setShowAppointmentEditModal] =useState(false)

    const goToEdit = () => {
        setShowAppointmenteventModal(false)
        setShowAppointmentEditModal(true)

    }

    useEffect(() => {
        // console.log(params)
        dispatch(fetchAppointment(params))
    }, [])




    return (
        <ShowView
           // title={intl.formatMessage({ id: "OFFER.SHOW.TITLE" })}
          //  goBackTo={goBackToList}
            goToEdit={goToEdit}
        >
            <LanguageTab
                >
                {({ isFr, isAr }) => (
                    <DisplayItems
                        error={error}
                        isFetching={isFetching}
                        object={item}

                    >
                        <RenderItems fields={appointmentFields}  />
                        <RenderItems fields={InternParticipants}  />
                        <RenderItems fields={ExternParticipants} />
                        <RenderItems fields={FieldsAr} show={isAr}/>
                        <RenderItems fields={FieldsFr} show={isFr}/>
                    </DisplayItems>
                )}
            </LanguageTab>
            <OfferAppoitmentShowDialog show={showAppointmenteventModal} onHide={()=>setShowAppointmenteventModal(false)}></OfferAppoitmentShowDialog>
            <OfferAppointmentEditDialog show={showAppointmentEditModal} onHide={()=>setShowAppointmentEditModal(false)}></OfferAppointmentEditDialog>


        </ShowView>
    )
}

export default injectIntl(AppointmentDispaly)
