/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"
import { LEGAL_FORM, getOptions, candidateCompanyValuesUIHelper } from "../../../../../UIHelpers";

let options = {}
let loadoptions = candidateCompanyValuesUIHelper()
const Setoptions = (result) => { options = result }
loadoptions(Setoptions)
console.log(options)

const OfferClientColumnFormatter = (
  cellContent,
) => {
  return <div className={`label label-lg label-light-primary label-inline`}>
    {options[cellContent] || <FormattedMessage id="GENERAL.EMPTY" />}
  </div>
};


export default OfferClientColumnFormatter
