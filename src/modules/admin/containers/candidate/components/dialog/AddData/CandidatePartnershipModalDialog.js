/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useSelector } from "react-redux"
import { FormModal } from "../../../../../../../components/partials/controls"
import PartnershipFormModal from "../../../../partnership/components/form/PartnershipFormModal"
import { clearStore } from "../../../../partnership/store/actions"
import { FlashMessages } from "../../../../../../../components/partials"

const CandidatePartnershipModalDialog = ({ params, show, onHide }) => {

    // Schools Redux state
    const { isLoading, success, error } = useSelector(
        (state) => ({
            isLoading: state.admin.partnership.isLoading,
            success: state.admin.partnership.success,
            error: state.admin.partnership.error,
        }),
        shallowEqual
    )

    return (
        <>
            <FlashMessages
                successMsg={[
                    { condition: success.isCreated, label: <FormattedMessage id={"PARTNERSHIP.NEW.MSG"} /> }
                ]}
                error={error}
                onClose={clearStore}
            />
            <FormModal
                title={<FormattedMessage id={"PARTNERSHIP.NEW.TITLE"} />}
                show={show}
                success={success.isCreated}
                onHide={onHide}
                isLoading={isLoading}
                size='xl'
            >
                {({ saveRef }) => (
                    <PartnershipFormModal
                        params={params}
                        saveRef={saveRef}
                    />
                )}
            </FormModal>
        </>
    )
}


export default CandidatePartnershipModalDialog