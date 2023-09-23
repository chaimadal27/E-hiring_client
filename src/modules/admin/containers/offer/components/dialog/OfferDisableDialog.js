/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ActionModal } from "../../../../../../components/partials/controls"
import { useOffersUIContext } from "../../context/OffersUIContext"
import { disableOffer, fetchOffers } from "../../store/actions"

const OfferDisableDialog = ({ params, show, onHide }) => {
  // Offers UI Context
  const offersUIProps = useOffersUIContext()

  // Offers Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.offer.isLoading, success: state.admin.offer.success }),
    shallowEqual
  )

  const onDisableOffer = () => {
    // server request for deleting smsSkeleton by id
    dispatch(disableOffer(params))
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
      onClick={onDisableOffer}
      isLoading={isLoading}
      success={success.isDeactivated}
      title={<FormattedMessage id="SCHOOL.DISABLE.TITLE" />}
      body={<FormattedMessage id="SCHOOL.DISABLE.MSG" />}
    />
  )
}


export default OfferDisableDialog
