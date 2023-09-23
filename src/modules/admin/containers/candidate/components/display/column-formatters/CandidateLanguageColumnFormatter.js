/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"

import { getOptions } from "../../../../../UIHelpers";

let options = {}
let loadoptions = getOptions("Langues")
const Setoptions = (result) => { options = result }
loadoptions(Setoptions)

const CandidateLanguageColumnFormatter = (
    cellContent,
) => {

    return <div className={`label label-lg label-light-primary label-inline`}>
        {options[cellContent] || "GENERAL.EMPTY"}

    </div>
};


export default CandidateLanguageColumnFormatter