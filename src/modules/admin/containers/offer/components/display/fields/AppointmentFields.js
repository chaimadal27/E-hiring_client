import {

    listUIHelper,
    candidateCompanyUIHelper,
    userUIHelper, partnershipContactsDisplayUIHelper, candidateKeyWordsUIHelper, appointmentTypeUIHelper
} from "./../../../../../UIHelpers";
import countryList from 'react-select-country-list'
import {CHECKBOX, SELECT, TEXTAREA} from "../../../../../../../components/partials";
import {contactUIHelper} from "../../../../../UIHelpers/partnership/contactUIHelper";
import * as Yup from "yup";
import {candidateUIHelper} from "../../../../../UIHelpers/candidate/candidateUIHelper";

export const AppointmentFields = ({ intl }) => [
    {
        name: "subject",
        label: intl.formatMessage({ id: "FOLDER.INPUT.SUBJECT" }),
        size: 12,

    },
    {
        name: "date",
        label: intl.formatMessage({ id: "FOLDER.INPUT.DATE" }),
        size: 4,
    },
    {
        name: "startHour",
        label: intl.formatMessage({ id: "FOLDER.INPUT.START_DATE" }),
        size: 4,
    },
    {
        name: "endHour",
        label: intl.formatMessage({ id: "FOLDER.INPUT.END_DATE" }),
        size: 4,
    },
    {
        name: "type",
        options: appointmentTypeUIHelper(intl),
        label: intl.formatMessage({ id: "FOLDER.INPUT.THEME" }),
        size: 12,
    },


];
export const appoinmentsExternParticipants = ({ intl }) => [
    {
        name: "entreprises",
        loadOptions: contactUIHelper,
        label: intl.formatMessage({ id: "OFFER.INPUT.CONTACT.ENTREPRISE" }),
        size: 6,

    },
    {
        name: "candidates",
        loadOptions: candidateUIHelper ,
        label: intl.formatMessage({ id: "OFFER.INPUT.CONTACT.CANDIDATE" }),
        size: 6,
    },
];
export const appoinmentsInternParticipants = ({ intl }) => [
    {
        name: "participants",
        loadOptions: userUIHelper,
        label: intl.formatMessage({ id: "OFFER.INPUT.INTERN_PARTICIPANTS" }),
        size: 12,
    },
];
export const appointmentFieldsAr = ({ intl }) => [
    {
        name: "observationrAr",
        label: intl.formatMessage({ id: "FOLDER.INPUT.OBSERVATION_AR" }),
        size: 6,
    },
];
export const Is_Done = ({ intl }) => [
    {
        name: "is_done",
        component: CHECKBOX,
        options: [
            {
                value: true,
                label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.IS_PRINCIPAL" }),
            },
        ],
        initialValue: false,
        checkboxSize: "sm",
        size: 2,
    },
];


export const appointmentFieldsFr = ({ intl }) => [
    {
        name: "observationFr",
        label: intl.formatMessage({ id: "FOLDER.INPUT.OBSERVATION_FR" }),
        size: 6,
    },
];