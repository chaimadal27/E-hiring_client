import React from "react"
import { FormattedMessage } from "react-intl"
import SVG from "react-inlinesvg"
import { toAbsoluteUrl } from "./../../../../../../helpers"
import { useSchoolsUIContext } from "../../context/SchoolsUIContext"
import { ENDPOINTS } from "./../../store/constants"
import useDownloader from "../../../../../../hooks/useDownloader"
import {DataTableGrouping} from "../../../../../../components/partials"

const SchoolsGrouping = () => {
  // Schools UI Context
  const SchoolsUIProps = useSchoolsUIContext()

  const [ isDownloding, downloadTrigger ] = useDownloader({
    endpoint: ENDPOINTS.EXPORT_SCHOOLS,
    params: { ids: SchoolsUIProps.ids },
    filename: "export.xlsx"
  })

  return (
    <DataTableGrouping rows={ SchoolsUIProps.ids.length }>
      <button
        type="button"
        disabled={isDownloding}
        className="btn btn-sm btn-primary font-weight-bolder font-size-sm mx-2"
        onClick={ downloadTrigger }
      >
        <span className="svg-icon svg-icon-md svg-icon-light">
          <SVG src={toAbsoluteUrl("/media/svg/icons/Files/Export.svg")} />
        </span>
        <FormattedMessage id="GENERAL.EXPORT" />
      </button>
    </DataTableGrouping>
  )
}


export default SchoolsGrouping
