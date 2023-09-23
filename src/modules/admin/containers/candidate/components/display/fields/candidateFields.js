import { TABLE_OF_ITEMS, LIST_OF_ITEMS } from "../../../../../../../components/partials";
import { AR, FR } from "../../../../../../../constants";
import { getLang } from "../../../../../../../i18n";
import CandidateLanguageDetailColumnFormatter from "../column-formatters/CandidateLanguageDetailColumnFormatter";
import CandidateLanguageColumnFormatter from "../column-formatters/CandidateLanguageColumnFormatter";

import {
  listUIHelper,
  candidateSchoolUIHelper,
  candidateCompanyUIHelper, countryUIHelper, documentTypeUIHelper
} from "./../../../../../UIHelpers";
import countryList from 'react-select-country-list'
import dialogRoutes from "../../../../job/routes/display";
import CandidateDocumentColumnFormatter from "../column-formatters/CandidateDocumentColumnFormatter";
import CandidateDocumentActionColumnFormatter from"../../display/column-formatters/CandidateDocumentActionColumnFormatter"
export const candidateFieldsFr = ({ intl }) => [

];

export const candidateFieldsAr = ({ intl }) => [

];

////////////////////////////////////
// Validation schema
export const candidateFields = (({ intl }) => [

]);

export const candidatePersonalInfosFields = (({ intl }) => [
  {
    name: "source",
    loadOptions: listUIHelper("Source"),
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.SOURCE" }),
    size: 6,
  },
  {
    name: "linkedinLink",
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.LINKEDIN_LINK" }),
    size: 6,
  },

  {
    name: "firstNameFr",
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.FIRST_NAME_FR" }),
    size: 6,
  },
  {
    name: "lastNameFr",
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.LAST_NAME_FR" }),
    size: 6,
  },
  {
    name: "civility",
    loadOptions: listUIHelper("Civilité"),
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.CIVILITY" }),
    size: 6,
  },
  {
    name: "status",
    loadOptions: listUIHelper("Statut candidat"),
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.TREATMENT_STATUS" }),
    size: 6,
  },
  {
    name: "email",
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.EMAIL" }),
    size: 6,
  },
  {
    name: "birthDate",
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.BIRTH_DATE" }),
    size: 6,
  },

  {
    name: "firstPhone",
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.FIRST_PHONE" }),
    size: 6,
  },
  {
    name: "secondPhone",
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.SECOND_PHONE" }),
    size: 6,
  },
  {
    name: "address",
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.ADDRESS" }),
    size: 6,
  },
  {
    name: "postalCode",
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.POSTAL_CODE" }),
    size: 6,
  },
  {
    name: "city",
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.CITY" }),
    size: 6,
  },
  {
    name: "country",
    options: countryList().getData(),//countryUIHelper(intl),
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.COUNTRY" }),
    size: 6,

  },
  {
    name: "familySituation",
    loadOptions: listUIHelper("Situation familiale"),
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.FAMILY_SITUATION" }),
    size: 6,
  },
  {
    name: "comment",
    label: intl.formatMessage({ id: "Candidate.INPUT.COMMENT" }),
    size: 6,

  },

]);

export const candidateProfessionalInfosFields = (({ intl }) => [
  {
    name: "educationLevel",
    loadOptions: listUIHelper("Niveau d'études"),
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.EDUCATION_LEVEL" }),
    size: 6,

  },
  {
    name: "school",
    loadOptions: candidateSchoolUIHelper(),
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.SCHOOL" }),
    size: 6,

  },
  {
    name: "speciality",
    loadOptions: listUIHelper("Spécialité"),
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.SPECIALITY" }),
    size: 6,

  },
  {
    name: "function",
    loadOptions: listUIHelper("Fonction"),
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.FUNCTION" }),
    size: 6,
  },
  {
    name: "keyWords",
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.KEY_WORDS" }),
    size: 10,
  },
  {
    name: "rating",
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.RATING" }),
    size: 2,
  },

  {
    name: "firstEmploymentDate",
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.FIRST_EMPLOYMENT_DATE" }),
    size: 6,
  },
  {
    name: "seniority",
    loadOptions: listUIHelper("Séniorité"),
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.SENIORITY" }),
    size: 6,

  },
  {
    name: "currentEmployer",
    loadOptions: candidateCompanyUIHelper,
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.CURRENT_EMPLOYER" }),
    size: 6,
  },
  {
    name: "contractType",
    loadOptions: listUIHelper("Type de contrat"),
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.CONTRACT_TYPE" }),
    size: 6,

  },
  {
    name: "currentSalary",
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.CURRENT_SALARY" }),
    size: 6,

  },
  {
    name: "currentDevise",
    loadOptions: listUIHelper("Devise"),
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.CURRENT_DEVISE" }),
    size: 6,

  },
  {
    name: "desiredSalary",
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.DESIRED_SALARY" }),
    size: 6,

  },
  {
    name: "desiredDevise",
    loadOptions: listUIHelper("Devise"),
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.DESIRED_DEVISE" }),
    size: 6,

  },
  {
    name: "currentBenefits",
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.CURRENT_BENEFITS" }),
    size: 6,
  },
  {
    name: "disponibility",
    loadOptions: listUIHelper("Disponibilité"),
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.DISPONIBILITY" }),
    size: 6,

  },
  {
    name: "yearsOfExperience",
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.YEARS_OF_EXPERIENCE" }),
    size: 6,

  },
  {
    name: "mobility",
    loadOptions: listUIHelper("Mobilité"),
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.MOBILITY" }),
    size: 6,

  },
]);

export const candidateLanguageDetailFields = ({ intl }) => [
  {
    name: "languagedetailSet",
    showActions: false,
    showSearch: false,
    columns: [
      {
        dataField: "language",
        text: intl.formatMessage({
          id: "CANDIDATE.INPUT.LANGUAGE",
        }),
        formatter: CandidateLanguageColumnFormatter,
      },
      {
        dataField: "level",
        text: intl.formatMessage({
          id: "CANDIDATE.INPUT.LANGUAGE_LEVEL",
        }),
        formatter: CandidateLanguageDetailColumnFormatter,
      },
    ],
    component: TABLE_OF_ITEMS,
    label: intl.formatMessage({ id: "CANDIDATE.INPUT.LANGUAGES" }),
    size: 12,
  },
];
export const commentsFields = (({ intl }) => [

]);
export const candidateDocumentFields = ({ intl , candidatesUIProps}) => [
  { name: "documentSet",
    showActions:false,
    showSearch: true,
    columns: [
      {
        dataField: "name",
        text: intl.formatMessage({
          id: "CANDIDATE.INPUT.DOCUMENT.NAME",
        }),
      },

      {
        dataField: "type",
        text: intl.formatMessage({
          id: "CANDIDATE.INPUT.DOCUMENT.TYPE",
        }),
        formatter: CandidateDocumentColumnFormatter,
      },
      {
        dataField: "action",
        text: intl.formatMessage({
          id: "GENERAL.ACTIONS",
        }),
        formatter: CandidateDocumentActionColumnFormatter,
        formatExtraData: candidatesUIProps,
        classes: "text-right pr-0",
        headerClasses: "text-right pr-3",
        style: {
          minWidth: "100px",
        },
      }

    ],
    component: TABLE_OF_ITEMS,
    label: intl.formatMessage({ id: "CANDIDATE.LIST.FILES" }),
    size: 12,
  },];
export const candidateDocumentFieldsAr = ({ intl }) => [
]

export const candidateDocumentFieldsFr = ({ intl }) => [

]