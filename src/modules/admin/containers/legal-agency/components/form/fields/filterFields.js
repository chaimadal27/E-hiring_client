import * as Yup from "yup"
import {
    INPUT
} from "./../../../../../../../components/partials"

export const legalAgencyFields = ({intl}) => [
    // filter fields
    {
        name:"agencyName",
        component:INPUT,
        label: intl.formatMessage({id:'LEGAL_AGENCY_NAME'}),
        placeholder: intl.formatMessage({id:'LEGAL_AGENCY_NAME'}),
        size: 6,
        validation: Yup.string(),
    },
    {
        name:"agencyAddress",
        component:INPUT,
        label: intl.formatMessage({id:'LEGAL_AGENCY_ADDRESS'}),
        placeholder: intl.formatMessage({id:'LEGAL_AGENCY_ADDRESS'}),
        size: 6,
        validation: Yup.string(),
    },
    {
        name:"agencyLegalStatus",
        component:INPUT,
        label: intl.formatMessage({id:'LEGAL_AGENCY_LEGAL_STATUS'}),
        placeholder: intl.formatMessage({id:'LEGAL_AGENCY_LEGAL_STATUS'}),
        size: 6,
        validation: Yup.string(),
    },

]