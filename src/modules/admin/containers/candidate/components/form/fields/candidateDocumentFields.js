import * as Yup from 'yup'

import {
    INPUT,
    CHECKBOX,
    UPLOAD,
    SELECT, TABLE_OF_ITEMS, ASYNC_SELECT
} from "../../../../../../../components/partials"
import {documentTypeUIHelper, listUIHelper, listUIHelper2} from "../../../../../UIHelpers";
import * as columnFormatters from "../../table/column-formatters";
// Validation schema
console.log(documentTypeUIHelper())
export const candidateDocumentFields = ({ intl }) => [

    {
        name: "documentSet[].name",
        component: INPUT,
        label: intl.formatMessage({ id: "CANDIDATE.INPUT.DOCUMENT.NAME" }),
        placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.DOCUMENT.NAME" }),
        size: 4,
        validation: Yup.string(),
    },
    {
        name: "documentSet[].type",
        component: SELECT,
        options: documentTypeUIHelper(intl),
        label: intl.formatMessage({ id: "CANDIDATE.INPUT.DOCUMENT.TYPE" }),
        placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.DOCUMENT.TYPE" }),
        size: 4,
        validation: Yup.number(),
    },
    {
        name: "documentSet[].file",
        component: UPLOAD,
        label: intl.formatMessage({ id: "DOCUMENT.INPUT.FILE" }),
        placeholder: intl.formatMessage({ id: "DOCUMENT.INPUT.FILE" }),
        validation: Yup.string(),
       // required: true,
        size: 4,
    },

];
export const candidateDocumentFieldsAr = ({ intl }) => [
]

export const candidateDocumentFieldsFr = ({ intl }) => [

]
