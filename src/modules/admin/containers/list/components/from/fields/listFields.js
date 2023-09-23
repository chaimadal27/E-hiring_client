import * as Yup from "yup";

import {
  INPUT,
  CHECKBOX,
  INPUT_MASK,
} from "../../../../../../../components/partials";

export const listNameFields = ({ intl }) => [
  {
    name: "name",
    component: INPUT,
    label: intl.formatMessage({ id: "LIST.INPUT.NAME" }),
    placeholder: intl.formatMessage({ id: "LIST.INPUT.NAME" }),
    size: 12,
    validation: Yup.string().required(),
    disabled : true
  },
];


// Validation schema
export const listFields = ({ intl }) => [
  /*  {
     name: "optionSet[].rank",
     component: INPUT,
     label: intl.formatMessage({ id: "LIST.INPUT.ORDRE" }),
     placeholder: intl.formatMessage({ id: "LIST.INPUT.ORDRE" }),
     size: 2,
     validation: Yup.number().required(),
     disabled: true,
   }, */
  {
    name: "optionSet[].value",
    component: INPUT,
    label: intl.formatMessage({ id: "LIST.INPUT.OPTION" }),
    placeholder: intl.formatMessage({ id: "LIST.INPUT.OPTION" }),
    size: 12,
    validation: Yup.string().required(),
  },
];
