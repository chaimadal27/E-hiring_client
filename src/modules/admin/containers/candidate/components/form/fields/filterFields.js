import * as Yup from "yup";
import _ from "lodash";
import {
  SELECT,
  TEXTAREA,
  UPLOAD,
  DATE_PICKER,
  INPUT,
  ASYNC_SELECT,
  INPUT_MASK,
  INPUT_TAGS, CREATABLE_SELECT
} from "./../../../../../../../components/partials";

import {
  listUIHelper,
  candidateKeyWordsUIHelper,
  candidateSchoolUIHelper
} from "./../../../../../UIHelpers";

import countryList from 'react-select-country-list'

export const candidateFieldsFr = ({ intl }) => [
];

export const candidateFieldsAr = ({ intl }) => [

];

// Validation schema
export const candidateFields = ({ intl }) => [
  {
    name: "source",
    component: SELECT,
    loadOptions: listUIHelper("Source"),
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.SOURCE" }),
    placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.SOURCE" }),
    size: 6,
    validation: Yup.number(),
  },
  {
    name: "status",
    component: SELECT,
    loadOptions: listUIHelper("Statut candidat"),
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.TREATMENT_STATUS" }),
    placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.TREATMENT_STATUS" }),
    size: 6,
    validation: Yup.number(),
  },
  {
    name: "keyWords",
    component: SELECT,
    loadOptions: candidateKeyWordsUIHelper,
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.KEY_WORDS" }),
    placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.KEY_WORDS" }),
    size: 12,
    multiple: true,
    validation: Yup.string(),
  },
];

export const candidatePersonalInfosFields = ({ intl }) => [

  {
    name: "firstNameFr",
    component: INPUT,
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.FIRST_NAME_FR" }),
    placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.FIRST_NAME_FR" }),
    size: 6,
    validation: Yup.string(),
    required: true
  },
  {
    name: "lastNameFr",
    component: INPUT,
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.LAST_NAME_FR" }),
    placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.LAST_NAME_FR" }),
    size: 6,
    validation: Yup.string(),
  },
  {
    name: "email",
    component: INPUT,
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.EMAIL" }),
    placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.EMAIL" }),
    size: 6,
    validation: Yup.string().email()
  },

  /*  {
     name: "address",
     component: INPUT,
     label: intl.formatMessage({ id: "CANDIDATE.INPUT.ADDRESS" }),
     placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.ADDRESS" }),
     size: 12,
     validation: Yup.string().required(),
   },
   {
     name: "city",
     component: INPUT,
     label: intl.formatMessage({ id: "CANDIDATE.INPUT.CITY" }),
     placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.CITY" }),
     size: 12,
     validation: Yup.string().required(),
   },*/
  {
    name: "country",
    component: SELECT,
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.COUNTRY" }),
    options: countryList().getData(),//countryUIHelper(intl),
    placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.COUNTRY" }),
    size: 6,
    validation: Yup.string(),
  },

];

export const candidateProfessionalInfosFields = ({ intl }) => [
  {
    name: "educationLevel",
    component: SELECT,
    loadOptions: listUIHelper("Niveau d'études"),
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.EDUCATION_LEVEL" }),
    placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.EDUCATION_LEVEL" }),
    size: 6,
    validation: Yup.number(),
  },
  {
    name: "school",
    component: SELECT,
    loadOptions: candidateSchoolUIHelper(),
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.SCHOOL" }),
    placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.SCHOOL" }),
    size: 6,
    validation: Yup.number(),
  },
  {
    name: "function",
    component: SELECT,
    loadOptions: listUIHelper("Fonction"),
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.FUNCTION" }),
    placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.FUNCTION" }),
    size: 6,
    validation: Yup.string(),
  },
  {
    name: "contractType",
    component: SELECT,
    loadOptions: listUIHelper("Type de contrat"),
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.CONTRACT_TYPE" }),
    placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.CONTRACT_TYPE" }),
    size: 6,
    validation: Yup.number(),
  },
  {
    name: "seniority",
    component: SELECT,
    loadOptions: listUIHelper("Séniorité"),
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.SENIORITY" }),
    placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.SENIORITY" }),
    size: 6,
    validation: Yup.number(),
  },


  /* {
    name: "yearsOfExperience",
    component: INPUT,
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.YEARS_OF_EXPERIENCE" }),
    placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.YEARS_OF_EXPERIENCE" }),
    size: 12,
    validation: Yup.number().positive().required(),
  },*/
  {
    name: "mobility",
    component: SELECT,
    loadOptions: listUIHelper("Mobilité"),
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.MOBILITY" }),
    placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.MOBILITY" }),
    size: 6,
    validation: Yup.number(),
  },
];