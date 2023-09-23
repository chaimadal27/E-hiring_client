/* eslint-close no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ActionModal } from "../../../../../../components/partials/controls"
import { useOffersUIContext } from "../../context/OffersUIContext"
import { closeOffer, fetchOffers } from "../../store/actions"

const OfferCloseDialog = ({ params, show, onHide }) => {
    // Offers UI Context
    const offersUIProps = useOffersUIContext()

    // Offers Redux state
    const dispatch = useDispatch()
    const { isLoading, success } = useSelector(
        (state) => ({ isLoading: state.admin.offer.isLoading, success: state.admin.offer.success }),
        shallowEqual
    )

    const onCloseOffer = () => {
        // server request for deleting smsSkeleton by id
        dispatch(closeOffer(params))
    }

    const onRefresh = () => {
        dispatch(fetchOffers(offersUIProps.queryParams))
        offersUIProps.setIds([])
    }

    return (
        <ActionModal
            show={show}
            onHide={onHide}
            onRefresh={onRefresh}
            onClick={onCloseOffer}
            isLoading={isLoading}
            success={success.isClosed}
            title={<FormattedMessage id="OFFER.CLOSE.TITLE" />}
            body={<FormattedMessage id="OFFER.CLOSE.MSG" />}
        />
    )
}


export default OfferCloseDialog
