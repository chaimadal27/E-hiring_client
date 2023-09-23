/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"

import {DOCUMENT_TYPE, getOptions} from "../../../../../UIHelpers";
import {documentTypeUIHelper} from "../../../../../UIHelpers";



const CandidateDocumentColumnFormatter =(intl,cellContent) =>{

    let loadoptions = documentTypeUIHelper
    let options=loadoptions()[cellContent.type-1].label


    return <div className={`label label-lg  label-inline`}>
        {options|| "GENERAL.EMPTY"}

    </div>
};


export default CandidateDocumentColumnFormatter