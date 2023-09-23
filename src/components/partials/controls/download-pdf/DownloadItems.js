import React, { memo } from "react"
import { injectIntl } from "react-intl"
import PrintIcon from "@material-ui/icons/Print"
import BlockIcon from "@material-ui/icons/Block";
import _ from "lodash"
import { PDFDownloadLink } from "@react-pdf/renderer";
import {useDisplayUIContext} from "../display/context/DisplayUIContext";
import PdfDocument from "./PdfDocument";


const DownloadItems = ({ title, intl }) => {

  const displayUiProps = useDisplayUIContext()

  if (_.isEmpty(displayUiProps.object) || displayUiProps.isFetching){
    return  <></>
  }

  return (
    <PDFDownloadLink
      document={ <PdfDocument fields={displayUiProps.fields} object={displayUiProps.object} title={title} intl={intl} /> }
      fileName={`${title.replace(/\s/g, "-")}.pdf`}
      className="btn btn-sm btn-icon btn-light btn-hover-success mx-3 my-1 ">
      {({ blob, url, loading, error }) => (
        (loading ? <BlockIcon /> : <PrintIcon />)
      )}
    </PDFDownloadLink>
  )
}


export default injectIntl(memo(DownloadItems))
