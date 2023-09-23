import React from "react"
import { FormattedMessage } from "react-intl"
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderTitle,
  CardHeaderToolbar,
  FlashMessages,
} from "../../../../../../components/partials/controls"

import ResourceStatesTable from "./../table/ResourceStatesTable"
import ResourceStateing from "./../grouping/ResourceStateing"
import { useResourceStatesUIContext } from "./../../context/ResourceStatesUIContext"
import {Button} from "react-bootstrap"
import {ProtectedLink} from "../../../../../../components/wrappers"
import {clearStore} from "../../store/actions"
import {shallowEqual, useSelector} from "react-redux"


const ResourceStateCard = () => {

  const resourceStatesUIProps = useResourceStatesUIContext()

  const { success, error } = useSelector(
    (state) => ({
      success: state.admin.resourceState.success,
      error: state.admin.resourceState.error
    }),
    shallowEqual
  )

  return (
    <>
      <FlashMessages
        error={error}
        onClose={clearStore}
        successMsg={[
          { condition: success.isDeleted, label: <FormattedMessage id="RESOURCE_STATE.MSG.DELETE" /> },
        ]}
      />
      <Card>
        <CardHeader>
          <div className="card-title">
            <CardHeaderTitle>
              <FormattedMessage id="RESOURCE_STATE.LIST.TITLE" />
            </CardHeaderTitle>
          </div>
          <CardHeaderToolbar>
            <ProtectedLink rule={resourceStatesUIProps.newResourceStateRule}>
              <Button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={resourceStatesUIProps.newResourceStateButtonClick}
              >
                <FormattedMessage id="RESOURCE_STATE.NEW.TITLE" />
              </Button>
            </ProtectedLink>
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          {resourceStatesUIProps.ids.length > 0 && <ResourceStateing />}
          <ResourceStatesTable />
        </CardBody>
      </Card>
    </>
  )
}


export default ResourceStateCard
