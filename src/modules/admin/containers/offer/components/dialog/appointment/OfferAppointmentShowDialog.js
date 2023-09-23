/* eslint-disable no-restricted-imports */
import React, { useState, useEffect } from "react"
import { FormattedMessage } from "react-intl"
import {shallowEqual, useDispatch, useSelector} from "react-redux"
import { ShowModal } from "../../../../../../../components/partials/controls"
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import _ from "lodash"

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { pdfjs } from 'react-pdf';
import { candidateGetCVUIHelper } from "../../../../../UIHelpers";
import {GlobalWorkerOptions} from "pdfjs-dist";
import AppointmentDisplay from "../../display/AppointmentDisplay";
import {deleteAppointment} from "../../../store/actions";


const OfferAppoitmentShowDialog = ({ initialValues = {},params, show, onHide, id }) => {

    const dispatch= useDispatch()
    const { isLoading, success } = useSelector(
        (state) => ({
            isLoading: state.admin.offer.isLoading,
            success: state.admin.offer.success }),
        shallowEqual
    )

    const cancel = () => {
        if (!_.isNull(params)) {
        dispatch(deleteAppointment(params))}
    }

    return (
        <ShowModal
            title={<FormattedMessage id={"APPOINTMENT.SHOW"} />}
            show={show}
            success={success.isCreated}
            onHide={onHide}
            onCancel={cancel}
            isLoading={isLoading}
            size="lg"
        >
            <AppointmentDisplay params={params} initialValues={initialValues} />
        </ShowModal>
    )
}



export default OfferAppoitmentShowDialog
