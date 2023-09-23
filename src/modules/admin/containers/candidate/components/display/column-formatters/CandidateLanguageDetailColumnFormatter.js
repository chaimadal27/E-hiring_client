/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"

import { getOptions } from "../../../../../UIHelpers";

let options = {}
let loadoptions = getOptions("Niveau langue")
const Setoptions = (result) => { options = result }
loadoptions(Setoptions)

const CandidateLanguageDetailColumnFormatter = (
    cellContent,
) => {
    return <div className={`label label-lg  label-inline`}>
        {options[cellContent] || "GENERAL.EMPTY"}

    </div>
};


export default CandidateLanguageDetailColumnFormatter