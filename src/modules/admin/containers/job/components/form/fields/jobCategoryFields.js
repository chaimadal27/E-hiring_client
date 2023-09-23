import * as Yup from "yup";
import _ from "lodash";
import {
  TEXTAREA,
  INPUT,
} from "./../../../../../../../components/partials";



export const jobCategoryFieldsFr = ({ intl }) => [
  {
    name: "nameFr",
    component: INPUT,
    label: intl.formatMessage({ id: "JOB.INPUT.CATEGORY_FR" }),
    placeholder: intl.formatMessage({ id: "JOB.INPUT.CATEGORY_FR" }),
    size: 12,
    validation: Yup.string().max(30).required(),
    required: true,
  },
  {
    name: "descriptionFr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "JOB.INPUT.DESCRIPTION_FR" }),
    placeholder: intl.formatMessage({ id: "JOB.INPUT.DESCRIPTION_FR" }),
    size: 12,
    validation: Yup.string().max(500).required(),
    required: true,
  },

];

export const jobCategoryFieldsAr = ({ intl }) => [
  {
    name: "nameAr",
    component: INPUT,
    label: intl.formatMessage({ id: "JOB.INPUT.NAME_AR" }),
    placeholder: intl.formatMessage({ id: "JOB.INPUT.NAME_AR" }),
    size: 12,
    validation: Yup.string().max(30).required(),
    required: true,
  },
  {
    name: "descriptionAr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "JOB.INPUT.DESCRIPTION_FR" }),
    placeholder: intl.formatMessage({ id: "JOB.INPUT.DESCRIPTION_FR" }),
    size: 12,
    validation: Yup.string().max(500).required(),
    required: true,
  },

];
