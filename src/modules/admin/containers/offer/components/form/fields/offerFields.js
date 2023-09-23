import * as Yup from "yup";
import _ from "lodash";
import {
  SELECT,
  TEXTAREA,
  UPLOAD,
  DATE_PICKER,
  INPUT,
  ASYNC_SELECT,
  CREATABLE_SELECT
} from "./../../../../../../../components/partials";

import {

  listUIHelper,
  candidateCompanyUIHelper,
  candidateKeyWordsUIHelper,
  partnershipContactsUIHelper, usersUIHelper, userUIHelper
} from "./../../../../../UIHelpers";
import countryList from 'react-select-country-list'

export const offerFieldsFr = ({ intl }) => [
];

export const offerFieldsAr = ({ intl }) => [
];

// Validation schema
export const offerFields = _.memoize(({ intl }) => [
  {
    name: "title",
    component: INPUT,
    label: intl.formatMessage({ id: "OFFER.INPUT.TITLE_FR" }),
    placeholder: intl.formatMessage({ id: "OFFER.INPUT.TITLE_FR" }),
    size: 12,
    validation: Yup.string().required(),
  },
  /* {
    name: "status",
    component: SELECT,
    loadOptions: listUIHelper("Status offre"),
    label: intl.formatMessage({ id: "OFFER.INPUT.STATUS" }),
    placeholder: intl.formatMessage({ id: "OFFER.INPUT.STATUS" }),
    size: 4,
    validation: Yup.number().required(),
  }, */
  {
    name: "offerResponsible",
    component: SELECT,
    loadOptions: userUIHelper,
    label: intl.formatMessage({ id: "OFFER.INPUT.RESPONSIBLE" }),
    placeholder: intl.formatMessage({ id: "OFFER.INPUT.RESPONSIBLE" }),
    size: 12,
    validation: Yup.number(),
    required: true
  },
  {
    name: "recruiter",
    component: SELECT,
    loadOptions: userUIHelper,
    initialValue: [],
    label: intl.formatMessage({ id: "OFFER.INPUT.RECRUITER" }),
    placeholder: intl.formatMessage({ id: "OFFER.INPUT.RECRUITER" }),
    size: 12,
    multiple: true,
    validation: Yup.array(),
    required: true
  },
  {
    name: "startDate",
    component: DATE_PICKER,
    label: intl.formatMessage({ id: "OFFER.INPUT.START_DATE" }),
    placeholder: intl.formatMessage({ id: "OFFER.INPUT.START_DATE" }),
    validation: Yup.string().nullable(),
    size: 6,
  },
  {
    name: "endDate",
    component: DATE_PICKER,
    label: intl.formatMessage({ id: "OFFER.INPUT.END_DATE" }),
    placeholder: intl.formatMessage({ id: "OFFER.INPUT.END_DATE" }),
    validation: Yup.string().nullable(),
    size: 6,
  },
  {
    name: "positionsNumber",
    component: INPUT,
    label: intl.formatMessage({ id: "OFFER.INPUT.POSITIONS_NUMBER" }),
    placeholder: intl.formatMessage({ id: "OFFER.INPUT.POSITIONS_NUMBER" }),
    size: 6,
    validation: Yup.number().required(),
  },
  {
    name: "contractType",
    component: ASYNC_SELECT,
    loadOptions: listUIHelper('Type de contrat'),
    label: intl.formatMessage({ id: "OFFER.INPUT.CONTRACT_TYPE" }),
    placeholder: intl.formatMessage({ id: "OFFER.INPUT.CONTRACT_TYPE" }),
    size: 6,
    validation: Yup.number().required(),
  },
  {
    name: "country",
    component: SELECT,
    label: intl.formatMessage({ id: "OFFER.INPUT.COUNTRY" }),
    options: countryList().getData(),
    placeholder: intl.formatMessage({ id: "OFFER.INPUT.COUNTRY" }),
    size: 6,
    validation: Yup.string().required(),
  },
  /* {
    name: "country",
    component: SELECT,
    label: intl.formatMessage({ id: "OFFER.INPUT.COUNTRY" }),
    options: countryList().getData(),//countryUIHelper(intl),
    placeholder: intl.formatMessage({ id: "OFFER.INPUT.COUNTRY" }),
    size: 6,
    validation: Yup.string().required(),
  }, */
  {
    name: "region",
    component: INPUT,
    label: intl.formatMessage({ id: "OFFER.INPUT.REGION" }),
    placeholder: intl.formatMessage({ id: "OFFER.INPUT.REGION" }),
    size: 6,
    validation: Yup.string().required(),
  },
  {
    name: "client",
    component: SELECT,
    loadOptions: candidateCompanyUIHelper,
    label: intl.formatMessage({ id: "OFFER.INPUT.CLIENT" }),
    placeholder: intl.formatMessage({ id: "OFFER.INPUT.CLIENT" }),
    size: 6,
    validation: Yup.number().required(),
  },
  {
    name: "contact",
    component: SELECT,
    loadOptions: candidateCompanyUIHelper(),
    label: intl.formatMessage({ id: "OFFER.INPUT.CONTACT" }),
    placeholder: intl.formatMessage({ id: "OFFER.INPUT.CONTACT" }),
    hideOn: "client",
    initialValue: null,
    chainedOptions: (callback, { client = null }) => partnershipContactsUIHelper(callback, client),
    size: 6,
    validation: Yup.number(),
  },
  {
    name: "seniority",
    component: SELECT,
    loadOptions: listUIHelper("Séniorité"),
    label: intl.formatMessage({ id: "OFFER.INPUT.SENIORITY" }),
    placeholder: intl.formatMessage({ id: "OFFER.INPUT.SENIORITY" }),
    size: 6,
    validation: Yup.number().required(),
  },
  {
    name: "activitySector",
    component: SELECT,
    loadOptions: listUIHelper("Secteur d'activité"),
    label: intl.formatMessage({ id: "OFFER.INPUT.ACTIVITY" }),
    placeholder: intl.formatMessage({ id: "OFFER.INPUT.ACTIVITY" }),
    size: 6,
    validation: Yup.number().required(),
  },
  {
    name: "description",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "OFFER.INPUT.DESCRIPTION" }),
    placeholder: intl.formatMessage({ id: "OFFER.INPUT.DESCRIPTION" }),
    size: 12,
    validation: Yup.string().required(),
  },
  {
    name: "requirements",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "OFFER.INPUT.REQUIREMENTS" }),
    placeholder: intl.formatMessage({ id: "OFFER.INPUT.REQUIREMENTS" }),
    size: 12,
    validation: Yup.string().required(),
  },
  {
    name: "keyWords",
    component: CREATABLE_SELECT,
    loadOptions: candidateKeyWordsUIHelper,
    label: intl.formatMessage({ id: "OFFER.INPUT.KEY_WORDS" }),
    placeholder: intl.formatMessage({ id: "OFFER.INPUT.KEY_WORDS" }),
    size: 12,
    multiple: true,
    validation: Yup.string().required(),
  },
]);
