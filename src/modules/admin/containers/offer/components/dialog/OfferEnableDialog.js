/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ActionModal } from "../../../../../../components/partials"
import { useOffersUIContext } from "../../context/OffersUIContext"
import { enableOffer, fetchOffers } from "../../store/actions"

const OfferEnableDialog = ({ params, show, onHide }) => {
  // Offers UI Context
  const offersUIProps = useOffersUIContext()

  // Offers Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.offer.isLoading, success: state.admin.offer.success }),
    shallowEqual
  )

  const onEnableoffer = () => {
    // server request for deleting Offers by id
    dispatch(enableOffer(params))
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
      onClick={onEnableoffer}
      isLoading={isLoading}
      success={success.isActivated}
      title={<FormattedMessage id="SCHOOL.ENABLE.TITLE" />}
      body={<FormattedMessage id="SCHOOL.ENABLE.MSG" />}
    />
  )
}


export default OfferEnableDialog
