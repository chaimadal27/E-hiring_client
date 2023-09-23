import * as Yup from "yup";
import _ from "lodash";
import {
    SELECT,
    TEXTAREA,
    UPLOAD,
    DATE_PICKER,
    INPUT,
    WYSIWYG_EDITOR
} from "./../../../../../../../components/partials";

import {

    listUIHelper,
    offersListUIHelper,
    userUIHelper,
    offerRecruitersUIHelper,
} from "./../../../../../UIHelpers";

export const candidateFields = ({ intl }) => [
    {
        name: "firstNameFr",
        label: intl.formatMessage({ id: "CANDIDATE.INPUT.FIRST_NAME_FR" }),
        size: 6,
    },
    {
        name: "lastNameFr",
        label: intl.formatMessage({ id: "CANDIDATE.INPUT.LAST_NAME_FR" }),
        size: 6,
    },


];
// Validation schema
export const candidateOfferAffectationFields = ({ intl }) => [
    {
        name: "offer",
        component: SELECT,
        loadOptions: offersListUIHelper,
        label: intl.formatMessage({ id: "Candidate.INPUT.OFFER" }),
        placeholder: intl.formatMessage({ id: "Candidate.INPUT.OFFER" }),
        size: 12,
        required: true,
        validation: Yup.number(),
    },
    {
        name: "recruiters",
        component: SELECT,
        label: intl.formatMessage({ id: "Candidate.INPUT.KANBAN.RECRUITER" }),
        placeholder: intl.formatMessage({ id: "Candidate.INPUT.KANBAN.RECRUITER" }),
        hideOn: "offer",
        initialValue: null,
        loadOptions: userUIHelper,
        size: 12,
        multiple: true,
        validation: Yup.array().required(),
    },
    {
        name: "notes",
        component: WYSIWYG_EDITOR,
        label: intl.formatMessage({ id: "Candidate.INPUT.NOTES" }),
        placeholder: intl.formatMessage({ id: "Candidate.INPUT.NOTES" }),
        size: 12,
        validation: Yup.string(),
    },

];

