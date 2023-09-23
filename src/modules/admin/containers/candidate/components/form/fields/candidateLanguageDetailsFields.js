import * as Yup from 'yup'

import {
  INPUT,
  CHECKBOX,
  INPUT_MASK,
  ASYNC_SELECT
} from "../../../../../../../components/partials"
import { listUIHelper } from "../../../../../UIHelpers/list/listUIHelper"


// Validation schema
export const candidateLanguageDetailFields = ({ intl }) => [
  {
    name: "languagedetailSet[].language",
    component: ASYNC_SELECT,
    loadOptions: listUIHelper("Langues"),
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.LANGUAGE" }),
    placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.LANGUAGE" }),
    size: 6,
    validation: Yup.number(),
  },
  {
    name: "languagedetailSet[].level",
    component: ASYNC_SELECT,
    loadOptions: listUIHelper("Niveau langue"),
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.LANGUAGE_LEVEL" }),
    placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.LANGUAGE_LEVEL" }),
    size: 6,
    validation: Yup.number(),
  },
];

// Validation schema
export const candidateLanguageDetailFieldsAr = ({ intl }) => [
]

export const candidateLanguageDetailFieldsFr = ({ intl }) => [

]
