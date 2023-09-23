import React from "react"
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
import OffersFilter from "./../form/OffersFilter"
import OffersTable from "./../table/OffersTable"
import OffersGrouping from "./../grouping/OffersGrouping"
import { useOffersUIContext } from "./../../context/OffersUIContext"
import { useSelector, shallowEqual } from "react-redux"
import { clearStore } from "./../../store/actions"

import { ProtectedLink } from "../../../../../../components/wrappers"

const OfferCard = () => {

  const offersUIProps = useOffersUIContext()

  const { success, error } = useSelector(
    (state) => ({
      success: state.admin.offer.success,
      error: state.admin.offer.error
    }),
    shallowEqual
  )

  return (
    <>
      <FlashMessages
        error={error}
        onClose={clearStore}
        successMsg={[
          { condition: success.isActivated, label: <FormattedMessage id="OFFER.MSG.ACTIVATED" /> },
          { condition: success.isDeactivated, label: <FormattedMessage id="OFFER.MSG.DEACTIVATED" /> },
          { condition: success.isClosed, label: <FormattedMessage id="OFFER.MSG.DEACTIVATED" /> }
        ]}
      />
      <FilterFormView
        title={<FormattedMessage id="OFFER.FILTER.TITLE" />}
      >
        {
          ({ searchRef, resetRef }) => (
            <OffersFilter searchRef={searchRef} clearSearchRef={resetRef} />
          )
        }
      </FilterFormView>
      <Card>
        <CardHeader>
          <div className="card-title">
            <CardHeaderTitle>
              <FormattedMessage id="OFFER.LIST.TITLE" />
            </CardHeaderTitle>
          </div>
          <CardHeaderToolbar>
            <ProtectedLink rule={offersUIProps.newOfferRule}>
              <button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={offersUIProps.newOfferButtonClick}
              >
                <FormattedMessage id="OFFER.NEW.TITLE" />
              </button>
            </ProtectedLink>
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          {offersUIProps.ids.length > 0 && <OffersGrouping />}
          <OffersTable />
        </CardBody>
      </Card>
    </>
  )
}


export default OfferCard
