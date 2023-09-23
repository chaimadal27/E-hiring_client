/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ActionModal } from "../../../../../../components/partials"
import { useOffersUIContext } from "../../context/OffersUIContext"
import { enableOffers, fetchOffers } from "../../store/actions"


const OffersDisableDialog = ({ show, onHide }) => {
  // Offers UI Context
  const offersUIProps = useOffersUIContext()

  // Offers Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.offer.isLoading, success: state.admin.offer.success }),
    shallowEqual
  )

  const onDisableOffers = () => {
    // server request for deleting smsSkeleton by seleted ids
    dispatch(enableOffers(offersUIProps.ids))
  }

  const onRefresh = () => {
    offersUIProps.setIds([])
    dispatch(fetchOffers(offersUIProps.queryParams))

  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={onRefresh}
      onClick={onDisableOffers}
      isLoading={isLoading}
      success={success.isActivated}
      title={<FormattedMessage id="SCHOOL.MULTIPLE_ENABLE.TITLE" />}
      body={<FormattedMessage id="SCHOOL.MULTIPLE_ENABLE.MSG" />}
    />
  )
}


export default OffersDisableDialog
