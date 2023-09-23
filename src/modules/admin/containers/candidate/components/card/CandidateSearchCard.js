import React, { useState } from "react"
import { FormattedMessage } from "react-intl"
import {
    Card,
    CardBody,
    CardHeader,
    CardHeaderTitle,
    CardHeaderToolbar,
    FlashMessages,
    FilterFormView
} from "../../../../../../components/partials/controls"
import CandidatesFilter from "./../form/CandidatesFilter"
import CandidatesSearchTable from "./../table/CandidatesSearchTable"
import CandidatesGrouping from "./../grouping/CandidatesGrouping"
import { useCandidatesUIContext } from "./../../context/CandidatesUIContext"
import { useSelector, shallowEqual } from "react-redux"
import { clearStore } from "./../../store/actions"
import { Col, Row } from "react-bootstrap"


const CandidateSearchCard = () => {

    const candidatesUIProps = useCandidatesUIContext()

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
                <Col xl="4" lg="5">
                    <FilterFormView
                        title={<FormattedMessage id="CANDIDATE.FILTER.TITLE" />}
                    >
                        {
                            ({ searchRef, resetRef }) => (
                                <CandidatesFilter searchRef={searchRef} clearSearchRef={resetRef} />
                            )
                        }
                    </FilterFormView>
                </Col>
                <Col xl="8" lg="7">
                    <Card>
                        <CardHeader>
                            <div className="card-title">
                                <CardHeaderTitle>
                                    <FormattedMessage id="CANDIDATE.LIST.TITLE" />
                                </CardHeaderTitle>
                            </div>

                        </CardHeader>
                        <CardBody>
                            {candidatesUIProps.ids.length > 0 && <CandidatesGrouping />}
                            <CandidatesSearchTable />
                        </CardBody>
                    </Card>
                </Col>
                </Row>
        </>
    )
}


export default CandidateSearchCard
