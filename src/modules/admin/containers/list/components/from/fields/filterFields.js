import * as Yup from "yup";

import {
} from "../../../../../UIHelpers";

import {
  ASYNC_SELECT,
  SELECT,
  INPUT,
  DATE_PICKER,
  INPUT_MASK,
} from "./../../../../../../../components/partials";

// Validation schema
export const listFields = ({ intl }) => [
  {
    name: "name",
    component: INPUT,
    label: intl.formatMessage({ id: "LIST.MENU.EDIT.TITLE" }),
    placeholder: intl.formatMessage({ id: "LIST.MENU.EDIT.TITLE" }),
    size: 6,
    validation: Yup.string(),
    required: true,
  },
];
