/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"
import { LEGAL_FORM, getOptions, candidateCompanyValuesUIHelper } from "../../../../../UIHelpers";


let options = {}
let loadoptions = getOptions("Statut candidat")
const Setoptions = (result) => { options = result }
loadoptions(Setoptions)

const StatusColumnFormatter = (
  cellContent,
) => {
  return (
    <div className={`label label-lg label-light-${cellContent == 1 ? 'primary' : 'success'} label-inline`}>
      {options[cellContent] || <FormattedMessage id="GENERAL.EMPTY" />}
    </div>
  )
};


export default StatusColumnFormatter
