/* eslint-disable no-restricted-imports */
import React from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector } from "react-redux"
import { FormModal } from "../../../../../../components/partials/controls"
import { FormattedMessage } from "react-intl"
import { FlashMessages, } from "../../../../../../components/partials/controls"
import { clearStore } from "./../../store/actions"
import ShareCvForm from "./../form/ShareCvForm"

const KanbanShareCvDialog = ({ initialValues = {}, params, show, onHide, intl }) => {

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
        <>
            < FlashMessages
                error={error}
                onClose={clearStore}
                successMsg={
                    [
                        { condition: success.isValidated, label: <FormattedMessage id="OFFER.MSG.ACTIVATED" /> }
                    ]}
            />
            <FormModal
                size="lg"
                error={error}
                title={intl.formatMessage({ id: "OFFER.SHARE.CV" })}
                show={show}
                success={success.isValidated}
                onHide={onHide}
                isLoading={isLoading}
                share={true}
            >
                {({ saveRef }) => (
                    <ShareCvForm params={params} saveRef={saveRef} />
                )}
            </FormModal>
        </>
    )
}


export default React.memo(injectIntl(KanbanShareCvDialog))