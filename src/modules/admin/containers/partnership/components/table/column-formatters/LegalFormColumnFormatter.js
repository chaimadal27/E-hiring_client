/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react"
import { FormattedMessage } from "react-intl"
import { LEGAL_FORM } from "../../../../../UIHelpers";
import { listUIHelper, getOptions } from "../../../../../UIHelpers";

let options = {}
let loadoptions = getOptions("Effectif")
const Setoptions = (result) => { options = result }
loadoptions(Setoptions)
console.log(options)


const LegalFormColumnFormatter = (
  cellContent,
) => {

  return <div className={`label label-lg label-light-primary label-inline`}>
    {options[cellContent] || "GENERAL.EMPTY"}

  </div>
};

/* const LegalFormColumnFormatter = (
  cellContent,
) => {
  return <div className={`label label-lg label-light-primary label-inline`}>
    <FormattedMessage id={LEGAL_FORM[cellContent] || "GENERAL.EMPTY"} />
  </div>
}; */


export default LegalFormColumnFormatter
