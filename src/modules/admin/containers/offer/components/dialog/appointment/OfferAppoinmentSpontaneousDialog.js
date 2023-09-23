/* eslint-disable no-restricted-imports */
import React from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector } from "react-redux"
import { FormModal } from "../../../../../../../components/partials/controls"

import AppointmentSpontaneousForm from "./../../form/OfferAppoinmentSpontaneousForm"

const OfferAppointmentSpontaneousDialog = ({ initialValues = {},params, show, onHide, intl }) => {

    // Offers Redux state
    const { isLoading, success, error } = useSelector(
        (state) => ({
            isLoading: state.admin.offer.isLoading,
            success: state.admin.offer.success,
            error: state.admin.offer.error
        }),
        shallowEqual
    )

    return (
        <FormModal
            size="lg"
            error={error}
            title={intl.formatMessage({ id:
                   // !params ?
                        "FOLDER.APPOINTMENT.CREATE"
                      //  : "FOLDER.APPOINTMENT.EDIT"
            })}
            show={show}
            success={success.isCreated || success.isUpdated}
            onHide={onHide}
            isLoading={isLoading}
        >
            { ({ saveRef }) => (
                <AppointmentSpontaneousForm params={params} saveRef={saveRef} initialValues={initialValues} />
            )}
        </FormModal>
    )
}


export default React.memo(injectIntl(OfferAppointmentSpontaneousDialog))
