import * as Yup from "yup";

import {
  legalFormUIHelper,
  partnershipThemesUIHelper,
  partnershipTypeUIHelper, listUIHelper
} from "../../../../../UIHelpers";

import {
  ASYNC_SELECT,
  SELECT,
  INPUT,
  DATE_PICKER,
  INPUT_MASK
} from "./../../../../../../../components/partials";

// Validation schema
export const partnershipFieldsFr = ({ intl }) => [
  {
    name: "nameFr",
    component: INPUT,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.NAME_FR" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.NAME_FR" }),
    size: 6,
    validation: Yup.string(),
    required: true,
  },
  {
    name: "addressFr",
    component: INPUT,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.ADDRESS_FR" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.ADDRESS_FR" }),
    size: 6,
    validation: Yup.string(),
    required: true,
  },

];

export const partnershipFieldsAr = ({ intl }) => [
  {
    name: "nameAr",
    component: INPUT,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.NAME_AR" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.NAME_AR" }),
    size: 6,
    validation: Yup.string(),
    required: true,
  },
  {
    name: "addressAr",
    component: INPUT,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.ADDRESS_AR" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.ADDRESS_AR" }),
    size: 6,
    validation: Yup.string(),
    required: true,
  },
  {
    name: "webSite",
    component: INPUT,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.SITEWEB_AR" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.SITEWEB_AR" }),
    size: 6,
    validation: Yup.string(),
    required: true,
  },

];

// Validation schema
export const partnershipFields = ({ intl }) => [
  {
    name: "activity",
    component: SELECT,
    loadOptions: listUIHelper("Secteur d'activité"),
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.ACTIVITY_FR" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.ACTIVITY_FR" }),
    size: 6,
    validation: Yup.number(),
  },
  {
    name: "webSite",
    component: INPUT,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.SITEWEB_FR" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.SITEWEB_FR" }),
    size: 6,
    validation: Yup.string(),
    required: true,
  },
  {
    name: "email",
    component: INPUT,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.EMAIL" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.EMAIL" }),
    size: 4,
    validation: Yup.string().email(),
  },
  {
    name: "telephone",
    component: INPUT_MASK,
    mask: "99999999",
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.PHONE" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.PHONE" }),
    size: 4,
    validation: Yup.string().max(8),
  },
  {
    name: "staff",
    component: SELECT,
    loadOptions: listUIHelper("Effectif"),
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.LEGAL_FORM" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.LEGAL_FORM" }),
    size: 4,
    validation: Yup.number(),
  },
  /*
  {
    name: "signatureDate",
    component: DATE_PICKER,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.DATE" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.DATE" }),
    required: true,
    size: 3,
  },
  {
    name: "partnerTypeExternalId",
    component: ASYNC_SELECT,
    loadOptions: partnershipTypeUIHelper,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.PARTNER_TYPE" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.PARTNER_TYPE" }),
    size: 3,
    validation: Yup.number(),
  },
  {
    name: "legalForm",
    component: SELECT,
    options: legalFormUIHelper(intl),
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.LEGAL_FORM" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.LEGAL_FORM" }),
    size: 3,
    validation: Yup.number(),
  },
  {
    name: "themeExternalId",
    component: ASYNC_SELECT,
    loadOptions: partnershipThemesUIHelper,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.THEME" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.THEME" }),
    size: 3,
    validation: Yup.number(),
  },*/
];
