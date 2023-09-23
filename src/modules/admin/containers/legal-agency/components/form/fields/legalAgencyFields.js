import * as Yup from "yup"
import _ from "lodash"

import {

    INPUT,
    INPUT_MASK,
    UPLOAD
} from "./../../../../../../../components/partials"


export const legalAgencyFields = _.memoize(({intl}) => [

       {
        name:"agencyName",
        component:INPUT,
        label: intl.formatMessage({id:'LEGAL_AGENCY_NAME'}),
        placeholder: intl.formatMessage({id:'LEGAL_AGENCY_NAME'}),
        size:6,
        validation: Yup.string().required(),
        required: true
    },
    {
        name:"agencyEmail",
        component:INPUT,
        label: intl.formatMessage({id:'LEGAL_AGENCY_EMAIL'}),
        placeholder: intl.formatMessage({id:'LEGAL_AGENCY_EMAIL'}),
        size:6,
        validation: Yup.string().email().required(),
        required: true
    },
    {
        name:"agencyAddress",
        component:INPUT,
        label: intl.formatMessage({id:'LEGAL_AGENCY_ADDRESS'}),
        placeholder: intl.formatMessage({id:'LEGAL_AGENCY_ADDRESS'}),
        size:6,
        validation: Yup.string().required(),
        required: true
    },
    {
        name:"agencyPostalCode",
        component:INPUT_MASK,
        mask:'9999',
        label: intl.formatMessage({id:'LEGAL_AGENCY_POSTAL_CODE'}),
        placeholder: intl.formatMessage({id:'LEGAL_AGENCY_POSTAL_CODE'}),
        size:6,
        validation: Yup.number().required(),
        required: true
    },
    {
        name:"agencyCity",
        component:INPUT,
        label: intl.formatMessage({id:'LEGAL_AGENCY_CITY'}),
        placeholder: intl.formatMessage({id:'LEGAL_AGENCY_CITY'}),
        size:6,
        validation: Yup.string().required(),
        required: true
    },
    {
        name:"agencyCountry",
        component: INPUT,
        label: intl.formatMessage({id:'LEGAL_AGENCY_COUNTRY'}),
        placeholder: intl.formatMessage({id:'LEGAL_AGENCY_COUNTRY'}),
        size:6,
        validation: Yup.string().required(),
        required: true
    },
    {
        name:"agencyLegalStatus",
        component:INPUT,
        label: intl.formatMessage({id:'LEGAL_AGENCY_LEGAL_STATUS'}),
        placeholder: intl.formatMessage({id:'LEGAL_AGENCY_LEGAL_STATUS'}),
        size:6,
        validation: Yup.string().required(),
        required: true
    },
    {
        name:"loadFactor",
        component:INPUT_MASK,
        mask:'9.99',
        label: intl.formatMessage({id:'LEGAL_AGENCY_LOAD_FACTOR'}),
        placeholder: intl.formatMessage({id:'LEGAL_AGENCY_LOAD_FACTOR'}),
        size:6,
        validation: Yup.number().required(),
        required: true
    },
    {
        name:"loadRate",
        component:INPUT_MASK,
        mask:'9.99',
        label: intl.formatMessage({id:'LEGAL_AGENCY_LOAD_RATE'}),
        placeholder: intl.formatMessage({id:'LEGAL_AGENCY_LOAD_RATE'}),
        size:6,
        validation: Yup.number().required(),
        required: true
    },
    {
        name:"numberOfDaysOpen",
        component:INPUT_MASK,
        mask:'999',
        label: intl.formatMessage({id:'LEGAL_AGENCY_NUMBER_OF_DAYS_OPEN'}),
        placeholder: intl.formatMessage({id:'LEGAL_AGENCY_NUMBER_OF_DAYS_OPEN'}),
        size:6,
        validation: Yup.number().required(),
        required: true
    },
])
