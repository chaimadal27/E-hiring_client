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
  listUIHelper,
  schoolTypeUIHelper,
  schoolThemesUIHelper,
  listUIHelper2,
} from "./../../../../../UIHelpers";

export const schoolFieldsFr = ({ intl }) => [
  {
    name: "shortNameFr",
    component: INPUT,
    label: intl.formatMessage({ id: "SCHOOL.INPUT.SHORT_NAME_FR" }),
    placeholder: intl.formatMessage({ id: "SCHOOL.INPUT.SHORT_NAME_FR" }),
    size: 6,
    validation: Yup.string().max(30).required(),
    required: true,
  },
  {
    name: "longNameFr",
    component: INPUT,
    label: intl.formatMessage({ id: "SCHOOL.INPUT.LONG_NAME_FR" }),
    placeholder: intl.formatMessage({ id: "SCHOOL.INPUT.LONG_NAME_FR" }),
    size: 6,
    validation: Yup.string().max(500).required(),
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
    validation: Yup.string().max(30).required(),
    required: true,
  },
  {
    name: "longNameAr",
    component: INPUT,
    label: intl.formatMessage({ id: "SCHOOL.INPUT.LONG_NAME_AR" }),
    placeholder: intl.formatMessage({ id: "SCHOOL.INPUT.LONG_NAME_AR" }),
    size: 6,
    validation: Yup.string().max(500).required(),
    required: true,
  },
];

// Validation schema
export const schoolFields = _.memoize(({ intl }) => [

  {
    name: "type",
    component: ASYNC_SELECT,
    loadOptions: listUIHelper("Type de l'école"),
    label: intl.formatMessage({ id: "SCHOOL.INPUT.TYPE" }),
    placeholder: intl.formatMessage({ id: "SCHOOL.INPUT.TYPE" }),
    size: 4,
    validation: Yup.number().required(),
  },
  {
    name: "country",
    component: INPUT,
    label: intl.formatMessage({ id: "SCHOOL.INPUT.ADDRESS_FR" }),
    placeholder: intl.formatMessage({ id: "SCHOOL.INPUT.ADDRESS_FR" }),
    size: 4,
    validation: Yup.string().required(),
  },
  {
    name: "webSite",
    component: INPUT,
    label: intl.formatMessage({ id: "SCHOOL.INPUT.SITEWEB_FR" }),
    placeholder: intl.formatMessage({ id: "SCHOOL.INPUT.SITEWEB_FR" }),
    size: 4,
    validation: Yup.string().max(500),
    required: true,
  },
]);
