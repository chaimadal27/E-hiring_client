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
import ActivitiesTable from "./../table/ActivitiesTable"
import ActivitiesGrouping from "./../grouping/ActivitiesGrouping"
import { useActivitiesUIContext } from "./../../context/ActivitiesUIContext"
import { useSelector, shallowEqual } from "react-redux"
import { clearStore } from "./../../store/actions"
import {ProtectedLink} from "../../../../../../components/wrappers"

const ActivitiesCard = () => {
  const activitiesUIProps = useActivitiesUIContext()
  
  const { success, error } = useSelector(
    (state) => ({
      success: state.admin.activity.success,
      error: state.admin.activity.error
    }),
    shallowEqual
  )

  return (
    <>
      <FlashMessages
        error={error}
        onClose={clearStore}
        successMsg={[
          { condition: success.isDeleted, label: <FormattedMessage id="ACTIVITY.MSG.DELETE" /> },
          { condition: success.isUndeleted, label: <FormattedMessage id="ACTIVITY.MSG.UN_DELETE" /> },
          { condition: success.isActivated, label: <FormattedMessage id="ACTIVITY.MSG.ENABLE" /> },
          { condition: success.isDeactivated, label: <FormattedMessage id="ACTIVITY.MSG.DISABLE" /> }
        ]}
      />
      <Card>
        <CardHeader>
          <div className="card-title">
            <CardHeaderTitle>
              <FormattedMessage id="ACTIVITY.LIST.TITLE" />
            </CardHeaderTitle>
          </div>
          <CardHeaderToolbar>
            <ProtectedLink rule={activitiesUIProps.newActivityRule}>
            <button
              type="button"
              className="btn btn-sm btn-primary"
              onClick={activitiesUIProps.newActivityButtonClick}
            >
              <FormattedMessage id="ACTIVITY.NEW.TITLE" />
            </button>
            </ProtectedLink>
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          {activitiesUIProps.ids.length > 0 && <ActivitiesGrouping />}
          <ActivitiesTable />
        </CardBody>
      </Card>
    </>
  )
}


export default ActivitiesCard
