/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ActionModal } from "../../../../../../components/partials"
import { useOffersUIContext } from "../../context/OffersUIContext"
import { validateOffer, fetchOffers } from "../../store/actions"

const OfferValidateDialog = ({ params, show, onHide }) => {
    // Offers UI Context
    const offersUIProps = useOffersUIContext()
    // Offers Redux state
    const dispatch = useDispatch()
    const { isLoading, success } = useSelector(
        (state) => ({ isLoading: state.admin.offer.isLoading, success: state.admin.offer.success }),
        shallowEqual
    )

    const onValidateoffer = () => {
        // server request for deleting Offers by id
        dispatch(validateOffer(params))
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
            onClick={onValidateoffer}
            isLoading={isLoading}
            success={success.isValidated}
            title={<FormattedMessage id="OFFER.VALIDATE.TITLE" />}
            body={<FormattedMessage id="OFFER.VALIDATE.MSG" />}
        />
    )
}


export default OfferValidateDialog