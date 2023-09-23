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
  BUTTON,
  INPUT_TAGS, CREATABLE_SELECT, STAR_RATING, WYSIWYG_EDITOR,
  BUTTONSCHOOL,BUTTONPARTNERSHIP
} from "./../../../../../../../components/partials";

import {

  listUIHelper,
  candidateSchoolUIHelper,
  candidateCompanyUIHelper,
  candidateValidateEmailUIHelper,
  countryUIHelper, candidateKeyWordsUIHelper
} from "./../../../../../UIHelpers";

import countryList from 'react-select-country-list'

const returnfct = (test) => { return test }
const testEmail = (value) => {
  //let test = true
  const SetTest = (result) => { console.log(result); return result }
  candidateValidateEmailUIHelper(value).then((result) => { return result, console.log(result) })
  //console.log(test)
  //return test
}


export const candidateFieldsFr = ({ intl }) => [
];

export const candidateFieldsAr = ({ intl }) => [

];

// Validation schema
export const candidateFields = ({ intl }) => [

];

export const candidatePersonalInfosFields = ({ intl }) => [
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
    name: "linkedinLink",
    component: INPUT,
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.LINKEDIN_LINK" }),
    placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.LINKEDIN_LINK" }),
    size: 6,
    validation: Yup.string(),
  },
  {
    name: "firstNameFr",
    component: INPUT,
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.FIRST_NAME_FR" }),
    placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.FIRST_NAME_FR" }),
    size: 6,
    validation: Yup.string().required(),
    required: true,
    autocapitalize: true
  },
  {
    name: "lastNameFr",
    component: INPUT,
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.LAST_NAME_FR" }),
    placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.LAST_NAME_FR" }),
    size: 6,
    validation: Yup.string().required(),
  },
  {
    name: "civility",
    component: SELECT,
    loadOptions: listUIHelper("Civilité"),
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.CIVILITY" }),
    placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.CIVILITY" }),
    size: 6,
    validation: Yup.number().required(),
  },
  {
    name: "status",
    component: SELECT,
    loadOptions: listUIHelper("Statut candidat"),
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.TREATMENT_STATUS" }),
    placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.TREATMENT_STATUS" }),
    size: 6,
    validation: Yup.number().required(),
  },
  {
    name: "email",
    component: INPUT,
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.EMAIL" }),
    placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.EMAIL" }),
    size: 6,
    validation: Yup.string().email().required()
  },
  {
    name: "birthDate",
    component: DATE_PICKER,
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.BIRTH_DATE" }),
    placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.BIRTH_DATE" }),
    validation: Yup.string().nullable(),
    size: 6,
  },

  {
    name: "firstPhone",
    component: INPUT_MASK,
    mask: "999999999999999",
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.FIRST_PHONE" }),
    placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.FIRST_PHONE" }),
    size: 6,
    validation: Yup.string().max(15),
  },
  {
    name: "secondPhone",
    component: INPUT_MASK,
    mask: "99999999",
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.SECOND_PHONE" }),
    placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.SECOND_PHONE" }),
    size: 6,
    validation: Yup.string().max(15),
  },
  {
    name: "address",
    component: INPUT,
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.ADDRESS" }),
    placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.ADDRESS" }),
    size: 6,
    validation: Yup.string(),
  },
  {
    name: "postalCode",
    component: INPUT,
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.POSTAL_CODE" }),
    placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.POSTAL_CODE" }),
    size: 6,
    validation: Yup.string(),
  },
  {
    name: "city",
    component: INPUT,
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.CITY" }),
    placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.CITY" }),
    size: 6,
    validation: Yup.string().required(),
  },
  {
    name: "country",
    component: SELECT,
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.COUNTRY" }),
    options: countryList().getData(),
    placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.COUNTRY" }),
    size: 6,
    validation: Yup.string().required(),
  },
  {
    name: "familySituation",
    component: SELECT,
    loadOptions: listUIHelper("Situation familiale"),
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.FAMILY_SITUATION" }),
    placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.FAMILY_SITUATION" }),
    size: 6,
    validation: Yup.number(),
  },
  {
    name: "comment",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "Candidate.INPUT.COMMENT" }),
    placeholder: intl.formatMessage({ id: "Candidate.INPUT.COMMENT" }),
    size: 6,
    validation: Yup.string().nullable(),
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
    size: 5,
    extraAction: true,
    validation: Yup.number(),
  },
  {
    name: "Button school",
    component: BUTTONSCHOOL,
    contenu: "+",
    size: 1,
  },
  {
    name: "speciality",
    component: SELECT,
    loadOptions: listUIHelper("Spécialité"),
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.SPECIALITY" }),
    placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.SPECIALITY" }),
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
    name: "keyWords",
    component: CREATABLE_SELECT,
    loadOptions: candidateKeyWordsUIHelper,
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.KEY_WORDS" }),
    placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.KEY_WORDS" }),
    size: 10,
    multiple: true,
    validation: Yup.string(),
  },
  {
    name: "rating",
    component: STAR_RATING,
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.RATING" }),
    size: 2,
    validation: Yup.number().nullable(),
  },
  {
    name: "firstEmploymentDate",
    component: DATE_PICKER,
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.FIRST_EMPLOYMENT_DATE" }),
    placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.FIRST_EMPLOYMENT_DATE" }),
    validation: Yup.string().nullable(),
    required: false,
    size: 6,
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
    name: "currentEmployer",
    component: SELECT,
    loadOptions: candidateCompanyUIHelper,
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.CURRENT_EMPLOYER" }),
    placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.CURRENT_EMPLOYER" }),
    size: 5,
    validation: Yup.number(),
  },
  {
    name: "Button Employer",
    component: BUTTONPARTNERSHIP,
    contenu: "+",
    size: 1,
  },
  {
    name: "currentSalary",
    component: INPUT,
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.CURRENT_SALARY" }),
    placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.CURRENT_SALARY" }),
    size: 3,
    validation: Yup.number().integer(),
  },
  {
    name: "currentDevise",
    component: SELECT,
    loadOptions: listUIHelper("Devise"),
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.CURRENT_DEVISE" }),
    placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.CURRENT_DEVISE" }),
    size: 3,
    validation: Yup.number(),
  },
  {
    name: "currentBenefits",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.CURRENT_BENEFITS" }),
    placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.CURRENT_BENEFITS" }),
    size: 6,
    validation: Yup.string(),
  },
  {
    name: "desiredSalary",
    component: INPUT,
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.DESIRED_SALARY" }),
    placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.DESIRED_SALARY" }),
    size: 3,
    validation: Yup.number().integer(),
  },
  {
    name: "desiredDevise",
    component: SELECT,
    loadOptions: listUIHelper("Devise"),
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.DESIRED_DEVISE" }),
    placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.DESIRED_DEVISE" }),
    size: 3,
    validation: Yup.number(),
  },
  {
    name: "disponibility",
    component: SELECT,
    loadOptions: listUIHelper("Disponibilité"),
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.DISPONIBILITY" }),
    placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.DISPONIBILITY" }),
    size: 6,
    validation: Yup.number(),
  },
  {
    name: "yearsOfExperience",
    component: INPUT,
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.YEARS_OF_EXPERIENCE" }),
    placeholder: intl.formatMessage({ id: "CANDIDATE.INPUT.YEARS_OF_EXPERIENCE" }),
    size: 6,
    validation: Yup.number().integer(),
  },
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