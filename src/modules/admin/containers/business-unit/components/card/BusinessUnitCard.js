import React from "react"
import { FormattedMessage } from "react-intl"
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderTitle,
  CardHeaderToolbar,
  FlashMessages
} from "../../../../../../components/partials"
import BusinessUnitTable from "./../table/BusinessUnitTable"
import BusinessUnitsGrouping from "./../grouping/BusinessUnitsGrouping"
import { useBusinessUnitsUIContext } from "./../../context/BusinessUnitsContext"
import { useSelector, shallowEqual } from "react-redux"
import { clearStore } from "./../../store/actions"
import {ProtectedLink} from "../../../../../../components/wrappers"

const BusinessUnitsCard = () => {
  const businessUnitsUIProps = useBusinessUnitsUIContext()
  
  const { success, error } = useSelector(
    (state) => ({
      success: state.admin.businessUnit.success,
      error: state.admin.businessUnit.error
    }),
    shallowEqual
  )

  return (
    <>
      <FlashMessages
        error={error}
        onClose={clearStore}
        successMsg={[
          { condition: success.isDeleted, label: <FormattedMessage id="BUSINESS_UNIT.MSG.DELETE" /> },
          { condition: success.isActivated, label: <FormattedMessage id="BUSINESS_UNIT.MSG.ENABLE" /> },
          { condition: success.isDeactivated, label: <FormattedMessage id="BUSINESS_UNIT.MSG.DISABLE" /> }
        ]}
      />
      <Card>
        <CardHeader>
          <div className="card-title">
            <CardHeaderTitle>
              <FormattedMessage id="BUSINESS_UNIT.LIST.TITLE" />
            </CardHeaderTitle>
          </div>
          <CardHeaderToolbar>
            <ProtectedLink rule={businessUnitsUIProps.newBusinessUnitRule}>
            <button
              type="button"
              className="btn btn-sm btn-primary"
              onClick={businessUnitsUIProps.newBusinessUnitButtonClick}
            >
              <FormattedMessage id="BUSINESS_UNIT.NEW.TITLE" />
            </button>
            </ProtectedLink>
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          {businessUnitsUIProps.ids.length > 0 && <BusinessUnitsGrouping />}
          <BusinessUnitTable />
        </CardBody>
      </Card>
    </>
  )
}


export default BusinessUnitsCard
