/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useSelector } from "react-redux"
import { FormModal } from "../../../../../../../components/partials/controls"
import CandidateOffreAffectationFormModal from "../../form/CandidateOffreAffectationForm"
import { FlashMessages } from "../../../../../../../components/partials"
import { clearStore } from "../../../../offer/store/actions"

const CandidateAffectDialog = ({ params, show, onHide }) => {

    // Schools Redux state
    const { isLoading, success, error } = useSelector(
        (state) => ({
            isLoading: state.admin.offer.isLoading,
            success: state.admin.offer.success,
            error: state.admin.offer.error
        }),
        shallowEqual
    )

    return (
        <>
            <FlashMessages
                successMsg={[
                    { condition: success.isCreated, label: <FormattedMessage id={"CANDIDATE.AFFECT.OFFER.MSG"} /> }
                ]}
                error={error}
                onClose={clearStore}
            />
            <FormModal
                title={<FormattedMessage id={"CANDIDATE.AFFECT.OFFER"} />}
                show={show}
                success={success.isCreated}
                onHide={onHide}
                isLoading={isLoading}
                size='lg'
            >
                {({ saveRef }) => (
                    <CandidateOffreAffectationFormModal
                        params={params}
                        saveRef={saveRef}
                    />
                )}
            </FormModal>
        </>
    )
}


export default CandidateAffectDialog