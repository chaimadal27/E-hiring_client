/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"
import { LEGAL_FORM, getOptions } from "../../../../../UIHelpers";

let options = {}
let loadoptions = getOptions("Secteur d'activité")
const Setoptions = (result) => { options = result }
loadoptions(Setoptions)
console.log(options)

const ActivityColumnFormatter = (
    cellContent,
) => {

    return <div className={`label label-lg label-light-primary label-inline`}>
        {options[cellContent] || "GENERAL.EMPTY"}

    </div>
};


export default ActivityColumnFormatter