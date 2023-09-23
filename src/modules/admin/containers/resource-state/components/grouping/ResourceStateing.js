import React from "react"
import { FormattedMessage } from "react-intl"
import SVG from "react-inlinesvg"
import { toAbsoluteUrl } from "./../../../../../../helpers"
import { useResourceStatesUIContext } from "../../context/ResourceStatesUIContext"
import {ProtectedLink} from "../../../../../../components/wrappers"
import {DataTableGrouping} from "../../../../../../components/partials"

const ResourceStateing = () => {
  // ResourceStates UI Context
  const resourceStatesUIProps = useResourceStatesUIContext()

  return (
    <DataTableGrouping rows={ resourceStatesUIProps.ids.length }>
      <ProtectedLink rule={resourceStatesUIProps.deleteResourceStatesRule}>
        <button
          type="button"
          className="btn btn-sm btn-danger font-weight-bolder font-size-sm mx-2"
          onClick={resourceStatesUIProps.openDeleteResourceStatesDialog}
        >
          <span className="svg-icon svg-icon-md svg-icon-light">
            <SVG src={toAbsoluteUrl("/media/svg/icons/General/Trash.svg")} />
          </span>
          <FormattedMessage id="GENERAL.DELETE" />
        </button>
      </ProtectedLink>
    </DataTableGrouping>
  )
}


export default ResourceStateing
