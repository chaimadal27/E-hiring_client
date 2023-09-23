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
    label: intl.formatMessage({ id: "JOB.INPUT.NAME_FR" }),
    placeholder: intl.formatMessage({ id: "JOB.INPUT.NAME_FR" }),
    size: 6,
    validation: Yup.string().max(30),
    required: true,
  },
  {
    name: "descriptionFr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "JOB.INPUT.DESCRIPTION_FR" }),
    placeholder: intl.formatMessage({ id: "JOB.INPUT.DESCRIPTION_FR" }),
    size: 6,
    validation: Yup.string().max(500),
    required: true,
  },

];

export const jobCategoryFieldsAr = ({ intl }) => [
  {
    name: "nameAr",
    component: INPUT,
    label: intl.formatMessage({ id: "JOB.INPUT.NAME_AR" }),
    placeholder: intl.formatMessage({ id: "JOB.INPUT.NAME_AR" }),
    size: 6,
    validation: Yup.string().max(30),
    required: true,
  },
  {
    name: "descriptionAr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "JOB.INPUT.DESCRIPTION_FR" }),
    placeholder: intl.formatMessage({ id: "JOB.INPUT.DESCRIPTION_FR" }),
    size: 6,
    validation: Yup.string().max(500),
    required: true,
  },

];
