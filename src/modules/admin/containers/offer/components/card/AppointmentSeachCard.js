import React, { useState } from "react"
import { FormattedMessage } from "react-intl"
import {
    FilterFormView
} from "../../../../../../components/partials/controls"
import { useSelector, shallowEqual } from "react-redux"
import { Col, Row } from "react-bootstrap"
import CandidatesFilter from "../../../candidate/components/form/CandidatesFilter";
import AppointmentFilter from "../form/AppointmentFilter";


const AppointmentSearchCard = () => {

    const { success, error } = useSelector(
        (state) => ({
            success: state.admin.candidate.success,
            error: state.admin.candidate.error
        }),
        shallowEqual
    )
    return (
        <>
            <Row>

                    <FilterFormView
                        title={<FormattedMessage id="CANDIDATE.FILTER.TITLE" />}
                    >
                        {
                            ({ searchRef, resetRef }) => (
                                <AppointmentFilter searchRef={searchRef} clearSearchRef={resetRef} />
                            )
                        }
                    </FilterFormView>

            </Row>
        </>
    )
}


export default AppointmentSearchCard
