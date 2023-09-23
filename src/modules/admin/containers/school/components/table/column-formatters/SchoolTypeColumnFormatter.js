/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"
import { LEGAL_FORM, getOptions } from "../../../../../UIHelpers";

let options = {}
let loadoptions = getOptions("Type de l'école")
const Setoptions = (result) => { options = result }
loadoptions(Setoptions)
console.log(options)

const SchoolTypeColumnFormatter = (
  cellContent,
) => {
  return <div className={`label label-lg label-light-primary label-inline`}>
    {options[cellContent] || <FormattedMessage id="GENERAL.EMPTY" />}
  </div>
};


export default SchoolTypeColumnFormatter
