import * as Yup from "yup";

import {
  listUIHelper,
  schoolThemesUIHelper,
  schoolTypeUIHelper,
} from "../../../../../UIHelpers";

import {
  ASYNC_SELECT,
  SELECT,
  INPUT,
  DATE_PICKER,
  INPUT_MASK
} from "./../../../../../../../components/partials";

// Validation schema
export const schoolFieldsFr = ({ intl }) => [
  {
    name: "shortNameFr",
    component: INPUT,
    label: intl.formatMessage({ id: "SCHOOL.INPUT.SHORT_NAME_FR" }),
    placeholder: intl.formatMessage({ id: "SCHOOL.INPUT.SHORT_NAME_FR" }),
    size: 6,
    validation: Yup.string().max(30),
    required: true,
  },
  {
    name: "longNameFr",
    component: INPUT,
    label: intl.formatMessage({ id: "SCHOOL.INPUT.LONG_NAME_FR" }),
    placeholder: intl.formatMessage({ id: "SCHOOL.INPUT.LONG_NAME_FR" }),
    size: 6,
    validation: Yup.string().max(500),
    required: true,
  },
];

export const schoolFieldsAr = ({ intl }) => [
  {
    name: "shortNameAr",
    component: INPUT,
    label: intl.formatMessage({ id: "SCHOOL.INPUT.SHORT_NAME_AR" }),
    placeholder: intl.formatMessage({ id: "SCHOOL.INPUT.SHORT_NAME_AR" }),
    size: 6,
    validation: Yup.string().max(30),
    required: true,
  },
  {
    name: "longNameAr",
    component: INPUT,
    label: intl.formatMessage({ id: "SCHOOL.INPUT.LONG_NAME_AR" }),
    placeholder: intl.formatMessage({ id: "SCHOOL.INPUT.LONG_NAME_AR" }),
    size: 6,
    validation: Yup.string().max(500),
    required: true,
  },
];

// Validation schema
export const schoolFields = ({ intl }) => [
  {
    name: "type",
    component: ASYNC_SELECT,
    loadOptions: listUIHelper("Type de l'école"),
    label: intl.formatMessage({ id: "SCHOOL.INPUT.TYPE" }),
    placeholder: intl.formatMessage({ id: "SCHOOL.INPUT.TYPE" }),
    size: 4,
    validation: Yup.number(),
  },
  {
    name: "country",
    component: INPUT,
    label: intl.formatMessage({ id: "SCHOOL.INPUT.ADDRESS_FR" }),
    placeholder: intl.formatMessage({ id: "SCHOOL.INPUT.ADDRESS_FR" }),
    size: 4,
    validation: Yup.string(),
  },
  {
    name: "webSite",
    component: INPUT,
    label: intl.formatMessage({ id: "SCHOOL.INPUT.SITEWEB_AR" }),
    placeholder: intl.formatMessage({ id: "SCHOOL.INPUT.SITEWEB_AR" }),
    size: 4,
    validation: Yup.string().max(500),
    required: true,
  },
];
