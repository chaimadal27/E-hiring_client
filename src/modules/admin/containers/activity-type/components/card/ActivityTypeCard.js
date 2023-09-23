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
import ActivityTypesFilter from "./../form/ActivityTypesFilter"
import ActivityTypesTable from "./../table/ActivityTypesTable"
import ActivityTypesGrouping from "./../grouping/ActivityTypesGrouping"
import { useActivityTypesUIContext } from "./../../context/ActivityTypesUIContext"
import { useSelector, shallowEqual } from "react-redux"
import { clearStore } from "./../../store/actions"

import { ProtectedLink } from "../../../../../../components/wrappers"

const ActivityTypeCard = () => {

  const activityTypesUIProps = useActivityTypesUIContext()

  const { success, error } = useSelector(
    (state) => ({
      success: state.admin.activityType.success,
      error: state.admin.activityType.error
    }),
    shallowEqual
  )

  return (
    <>
      <FlashMessages
        error={error}
        onClose={clearStore}
        successMsg={[
          { condition: success.isActivated, label: <FormattedMessage id="ACTIVITY_TYPE.MSG.ACTIVATED" /> },
          { condition: success.isDeactivated, label: <FormattedMessage id="ACTIVITY_TYPE.MSG.DEACTIVATED" /> }
        ]}
      />
      <FilterFormView
        title={<FormattedMessage id="ACTIVITY_TYPE.FILTER.TITLE" />}
      >
        {
          ({ searchRef, resetRef }) => (
            <ActivityTypesFilter searchRef={searchRef} clearSearchRef={resetRef} />
          )
        }
      </FilterFormView>
      <Card>
        <CardHeader>
          <div className="card-title">
            <CardHeaderTitle>
              <FormattedMessage id="ACTIVITY_TYPE.LIST.TITLE" />
            </CardHeaderTitle>
          </div>
          <CardHeaderToolbar>
            <ProtectedLink rule={activityTypesUIProps.newActivityTypeRule}>
              <button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={activityTypesUIProps.newActivityTypeButtonClick}
              >
                <FormattedMessage id="ACTIVITY_TYPE.NEW.TITLE" />
              </button>
            </ProtectedLink>
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          {activityTypesUIProps.ids.length > 0 && <ActivityTypesGrouping />}
          <ActivityTypesTable />
        </CardBody>
      </Card>
    </>
  )
}


export default ActivityTypeCard
