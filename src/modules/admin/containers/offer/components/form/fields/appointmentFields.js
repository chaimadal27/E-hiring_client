import * as Yup from "yup"
import _ from "lodash"
import {
    CREATABLE_SELECT,
    SELECT,
    TEXTAREA,
    DATE_PICKER,
    CHECKBOX,
    TIME_PICKER,
    INPUT, ASYNC_SELECT
} from "./../../../../../../../components/partials"

import {appointmentTypeUIHelper, listUIHelper, offersListUIHelper, userUIHelper} from "./../../../../../UIHelpers"
import {contactUIHelper} from "../../../../../UIHelpers/partnership/contactUIHelper";
import {candidateUIHelper} from "../../../../../UIHelpers/candidate/candidateUIHelper";

export const candidateFields = ({ intl }) => [
    {
        name: "firstNameAr",
        label: intl.formatMessage({ id: "FOLDER.INPUT.FIRST_NAME_AR" }),
        size: 6,
        placeholder: intl.formatMessage({ id: "FOLDER.INPUT.FIRST_NAME_AR" }),
    },
    {
        name: "lastNameAr",
        label: intl.formatMessage({ id: "FOLDER.INPUT.LAST_NAME_AR" }),
        placeholder: intl.formatMessage({ id: "FOLDER.INPUT.LAST_NAME_AR" }),
        size: 6,
    }
];


export const appointmentFieldsAr = ({ intl }) => [
    {
        name: "observationrAr",
        component: TEXTAREA,
        label: intl.formatMessage({ id: "FOLDER.INPUT.OBSERVATION_AR" }),
        placeholder: intl.formatMessage({ id: "FOLDER.INPUT.OBSERVATION_AR" }),
        size: 12,
        validation: Yup.string().min(2).max(200),
        required: true,
    },
];


export const appointmentFieldsFr = ({ intl }) => [
    {
        name: "observationFr",
        component: TEXTAREA,
        label: intl.formatMessage({ id: "FOLDER.INPUT.OBSERVATION_FR" }),
        placeholder: intl.formatMessage({ id: "FOLDER.INPUT.OBSERVATION_FR" }),
        validation: Yup.string().min(2).max(200),
        required: true,
        size: 12,
    }
];

export const appoinmentsInternParticipants = ({ intl }) => [
    {
        name: "participants",
        component: SELECT,
        loadOptions: userUIHelper,
        label: intl.formatMessage({ id: "OFFER.INPUT.INTERN_PARTICIPANTS" }),
        placeholder: intl.formatMessage({ id: "OFFER.INPUT.INTERN_PARTICIPANTS" }),
        size: 12,
        multiple: true,
        validation: Yup.string(),
    },
];

export const appoinmentsExternParticipants = ({ intl }) => [
    {
        name: "entreprises",
        component: SELECT,
        loadOptions: contactUIHelper,
        label: intl.formatMessage({ id: "OFFER.INPUT.CONTACT.ENTREPRISE" }),
        placeholder: intl.formatMessage({ id: "OFFER.INPUT.CONTACT.ENTREPRISE" }),
        multiple: true,
        size: 6,
        validation: Yup.string(),
    },
    {
        name: "candidates",
        component: SELECT,
        loadOptions: candidateUIHelper ,
        label: intl.formatMessage({ id: "OFFER.INPUT.CONTACT.CANDIDATE" }),
        placeholder: intl.formatMessage({ id: "OFFER.INPUT.CONTACT.CANDIDATE" }),
        multiple: true,
        size: 6,
        validation: Yup.string(),
    },
];
export const appoinmentsExternParticipantsAr = ({ intl }) => [

]

export const appoinmentsExternParticipantsFr = ({ intl }) => [

]

// Validation schema
export const appointmentFields = _.memoize(({ intl }) => [
    {
        name: "subject",
        component: INPUT,
        label: intl.formatMessage({ id: "FOLDER.INPUT.SUBJECT" }),
        placeholder: intl.formatMessage({ id: "FOLDER.INPUT.SUBJECT" }),
        validation: Yup.string().required(),
        required: true,
        size: 12,
    },
    {
        name: "date",
        component: DATE_PICKER,
        label: intl.formatMessage({ id: "FOLDER.INPUT.DATE" }),
        placeholder: intl.formatMessage({ id: "FOLDER.INPUT.DATE" }),
        validation: Yup.string().nullable().required(),
        required: true,
        size: 4,
    },
    {
        name: "startHour",
        component: TIME_PICKER,
        dateFormat: false,
        format: "HH:mm",
        label: intl.formatMessage({ id: "FOLDER.INPUT.START_DATE" }),
        placeholder: intl.formatMessage({ id: "FOLDER.INPUT.START_DATE" }),
        validation: Yup.string().required(),
        timeFormat: true,
        required: true,
        size: 4,
    },
    {
        name: "endHour",
        component: TIME_PICKER,
        dateFormat: false,
        format: "HH:mm",
        label: intl.formatMessage({ id: "FOLDER.INPUT.END_DATE" }),
        placeholder: intl.formatMessage({ id: "FOLDER.INPUT.END_DATE" }),
        validation: Yup.string().required(),
        required: true,
        timeFormat: true,
        size: 4
    },
    {
        name: "type",
        component: SELECT,
        options: appointmentTypeUIHelper(intl),
        label: intl.formatMessage({ id: "FOLDER.INPUT.THEME" }),
        placeholder: intl.formatMessage({ id: "FOLDER.INPUT.THEME" }),
        size: 12,
        validation: Yup.number().required(),
    },

]);
