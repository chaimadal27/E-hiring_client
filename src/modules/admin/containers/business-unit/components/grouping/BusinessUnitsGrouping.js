import React from 'react'
import { FormattedMessage } from "react-intl"
import SVG from "react-inlinesvg"
import { ENDPOINTS } from "./../../store/constants"
import { toAbsoluteUrl } from "./../../../../../../helpers"
import { useBusinessUnitsUIContext } from "../../context/BusinessUnitsContext"
import {DataTableGrouping} from "../../../../../../components/partials"
import useDownloader from "../../../../../../hooks/useDownloader"


const BusinessUnitsGrouping = () => {

    const businessUnitsUIProps = useBusinessUnitsUIContext()

    return (

        <DataTableGrouping rows={ businessUnitsUIProps.ids.length }>
        <button
          type="button"
          // disabled={isDownloding}
          className="btn btn-sm btn-primary font-weight-bolder font-size-sm mx-2"
          // onClick={ downloadTrigger }
        >
          <span className="svg-icon svg-icon-md svg-icon-light">
            <SVG src={toAbsoluteUrl("/media/svg/icons/Files/Export.svg")} />
          </span>
          <FormattedMessage id="GENERAL.EXPORT" />
        </button>
      </DataTableGrouping>
  )
}

export default BusinessUnitsGrouping