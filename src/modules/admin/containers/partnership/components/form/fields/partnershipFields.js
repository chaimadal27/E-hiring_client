import * as Yup from "yup";
import _ from "lodash";
import {
  SELECT,
  TEXTAREA,
  UPLOAD,
  DATE_PICKER,
  INPUT,
  ASYNC_SELECT,
  INPUT_MASK
} from "./../../../../../../../components/partials";

import {
  legalFormUIHelper,
  listUIHelper,
  partnershipTypeUIHelper,
  partnershipThemesUIHelper,
} from "./../../../../../UIHelpers";

export const partnershipFieldsFr = ({ intl }) => [
  {
    name: "nameFr",
    component: INPUT,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.NAME_FR" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.NAME_FR" }),
    size: 6,
    validation: Yup.string().max(30).required(),
    required: true,
  },
  {
    name: "addressFr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.ADDRESS_FR" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.ADDRESS_FR" }),
    size: 6,
    validation: Yup.string().max(500).required(),
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
    validation: Yup.string().max(30),
  },
  {
    name: "addressAr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.ADDRESS_AR" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.ADDRESS_AR" }),
    size: 6,
    validation: Yup.string().max(500),
  },

];

// Validation schema
export const partnershipFields = _.memoize(({ intl }) => [
  {
    name: "webSite",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.SITEWEB_FR" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.SITEWEB_FR" }),
    size: 6,
    validation: Yup.string().max(500),
  },
  {
    name: "activity",
    component: SELECT,
    loadOptions: listUIHelper("Secteur d'activité"),
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.ACTIVITY_FR" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.ACTIVITY_FR" }),
    size: 6,
    validation: Yup.number().required(),
  },
  {
    name: "email",
    component: INPUT,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.EMAIL" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.EMAIL" }),
    size: 6,
    validation: Yup.string().email(),
  },
  {
    name: "telephone",
    component: INPUT_MASK,
    mask: "99999999",
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.PHONE" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.PHONE" }),
    size: 6,
    validation: Yup.string().max(8),
  },
  {
    name: "staff",
    component: ASYNC_SELECT,
    loadOptions: listUIHelper("Effectif"),
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.LEGAL_FORM" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.LEGAL_FORM" }),
    size: 6,
    validation: Yup.number().required(),
  },
  {
    name: "logo",
    component: UPLOAD,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.LOGO" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.LOGO" }),
    required: false,
    size: 6,
  },
]);

/*
{
  name: "signatureDate",
  component: DATE_PICKER,
  label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.DATE" }),
  placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.DATE" }),
  validation: Yup.string().required(),
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
  validation: Yup.number().required(),
},
{
  name: "legalForm",
  component: SELECT,
  options: legalFormUIHelper(intl),
  label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.LEGAL_FORM" }),
  placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.LEGAL_FORM" }),
  size: 3,
  validation: Yup.number().required(),
},
{
  name: "themeExternalId",
  component: ASYNC_SELECT,
  loadOptions: partnershipThemesUIHelper,
  label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.THEME" }),
  placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.THEME" }),
  size: 3,
  validation: Yup.number().required(),
},*/