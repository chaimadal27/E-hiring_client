import * as Yup from "yup";

import {
  listUIHelper,
  userUIHelper, candidateCompanyUIHelper, appointmentTypeUIHelper
} from "../../../../../UIHelpers";

import {
  ASYNC_SELECT,
  SELECT,
  INPUT,
  DATE_PICKER,
  INPUT_MASK, TIME_PICKER
} from "./../../../../../../../components/partials";

// Validation schema
export const offerFieldsFr = ({ intl }) => [

];

export const offerFieldsAr = ({ intl }) => [

];

// Validation schema
export const offerFields = ({ intl }) => [
  {
    name: "title",
    component: INPUT,
    label: intl.formatMessage({ id: "OFFER.INPUT.TITLE_FR" }),
    placeholder: intl.formatMessage({ id: "OFFER.INPUT.TITLE_FR" }),
    size: 8,
    validation: Yup.string(),
  },
  {
    name: "status",
    component: SELECT,
    loadOptions: listUIHelper("Status offre"),
    label: intl.formatMessage({ id: "OFFER.INPUT.STATUS" }),
    placeholder: intl.formatMessage({ id: "OFFER.INPUT.STATUS" }),
    size: 4,
    validation: Yup.number(),
  },
  {
    name: "client",
    component: SELECT,
    loadOptions: candidateCompanyUIHelper,
    label: intl.formatMessage({ id: "OFFER.INPUT.CLIENT" }),
    placeholder: intl.formatMessage({ id: "OFFER.INPUT.CLIENT" }),
    size: 6,
    validation: Yup.number(),
  },
  {
    name: "recruiter",
    component: SELECT,
    loadOptions: userUIHelper,
    label: intl.formatMessage({ id: "OFFER.INPUT.RECRUITER" }),
    placeholder: intl.formatMessage({ id: "OFFER.INPUT.RECRUITER" }),
    size: 6,
    multiple: true,
    validation: Yup.array(),
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


];

export const AppointmentFilterFields = ({ intl }) => [

  {
    name: "subject",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.SUBJECT" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.SUBJECT" }),
    validation: Yup.string(),
    required: true,
    size: 12,
  },
  {
    name: "type",
    component: SELECT,
    options: appointmentTypeUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.THEME" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.THEME" }),
    size: 12,
    validation: Yup.number(),
  },


]
