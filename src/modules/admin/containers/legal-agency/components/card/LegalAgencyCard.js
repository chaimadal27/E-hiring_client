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
import LegalAgenciesFilter from "./../form/LegalAgenciesFilter"
import LegalAgenciesTable from "./../table/LegalAgenciesTable"
import LegalAgenciesGrouping from "./../grouping/LegalAgenciesGrouping"
import { useLegalAgenciesUIContext } from "./../../context/LegalAgenciesUIContext"
import { useSelector, shallowEqual } from "react-redux"
import { clearStore } from "./../../store/actions"

import { ProtectedLink } from "../../../../../../components/wrappers"

const LegalAgencyCard = () => {

  const legalAgenciesUIProps = useLegalAgenciesUIContext()

  const { success, error } = useSelector(
    (state) => ({
      success: state.admin.legalAgency.success,
      error: state.admin.legalAgency.error
    }),
    shallowEqual
  )

  return (
    <>
      <FlashMessages
        error={error}
        onClose={clearStore}
        successMsg={[
          { condition: success.isActivated, label: <FormattedMessage id="LEGAL_AGENCY.MSG.ACTIVATED" /> },
          { condition: success.isDeactivated, label: <FormattedMessage id="LEGAL_AGENCY.MSG.DEACTIVATED" /> }
        ]}
      />
      <FilterFormView
        title={<FormattedMessage id="LEGAL_AGENCY.FILTER.TITLE" />}
      >
        {
          ({ searchRef, resetRef }) => (
            <LegalAgenciesFilter searchRef={searchRef} clearSearchRef={resetRef} />
          )
        }
      </FilterFormView>
      <Card>
        <CardHeader>
          <div className="card-title">
            <CardHeaderTitle>
              <FormattedMessage id="LEGAL_AGENCY.LIST.TITLE" />
            </CardHeaderTitle>
          </div>
          <CardHeaderToolbar>
            <ProtectedLink rule={legalAgenciesUIProps.newLegalAgencyRule}>
              <button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={legalAgenciesUIProps.newLegalAgencyButtonClick}
              >
                <FormattedMessage id="LEGAL_AGENCY.NEW.TITLE" />
              </button>
            </ProtectedLink>
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          {legalAgenciesUIProps.ids.length > 0 && <LegalAgenciesGrouping />}
          <LegalAgenciesTable />
        </CardBody>
      </Card>
    </>
  )
}


export default LegalAgencyCard
