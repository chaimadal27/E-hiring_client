import * as Yup from 'yup'

import {
  INPUT,
} from "../../../../../../../components/partials"


// Validation schema
export const jobFieldsAr = ({ intl }) => [
  {
    name: 'jobSet[].nameAr',
    component: INPUT,
    label: intl.formatMessage({ id: "JOB.INPUT.FIRST_NAME_AR" }),
    placeholder: intl.formatMessage({ id: "JOB.INPUT.FIRST_NAME_AR" }),
    size: 12,
    validation: Yup.string().required(),
  },
]

export const jobFieldsFr = ({ intl }) => [
  {
    name: 'jobSet[].nameFr',
    component: INPUT,
    label: intl.formatMessage({ id: "JOB.INPUT.FIRST_NAME_FR" }),
    placeholder: intl.formatMessage({ id: "JOB.INPUT.FIRST_NAME_FR" }),
    size: 12,
    validation: Yup.string().required(),
  },
]
