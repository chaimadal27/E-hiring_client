import * as Yup from "yup"
import { AR, FR } from "../../../../../../../constants";
import { getLang } from "../../../../../../../i18n";

import {
    INPUT, SELECT
} from "./../../../../../../../components/partials"

import {
    legalAgencyUIHelper,
    managerUIHelper
} from "./../../../../../UIHelpers"


const BUSINESS_UNIT_NAME_LP = {
    [FR]:"BUSINESS_UNIT_NAME"
}
const BUSINESS_UNIT_MANAGER_LP = {
    [FR]:"BUSINESS_UNIT_MANAGER"
}
const BUSINESS_UNIT_LEGAL_AGENCY_LP = {
    [FR]:"BUSINESS_UNIT_LEGAL_AGENCY"
}



export const businessUnitFields = ({intl}) => [

    {
        name:'businessUnitName',
        component: INPUT,
        label: intl.formatMessage({
            id: BUSINESS_UNIT_NAME_LP[getLang()]
        }),
        placeholder: intl.formatMessage({
            id: BUSINESS_UNIT_NAME_LP[getLang()]
        }),
        size: 6,
        validation: Yup.string().required(),
        required: true,
    },
    {
        name:'businessUnitManager',
        component:SELECT,
        multiple: true,
        loadOptions: managerUIHelper,
        saveOptions: {
            ref:"managers-save",
            attr:"managers"
        },
        label: intl.formatMessage({
            id: BUSINESS_UNIT_MANAGER_LP[getLang()]
        }),
        placeholder: intl.formatMessage({
            id: BUSINESS_UNIT_MANAGER_LP[getLang()]
        }),
        size: 6,
        validation: Yup.string().array().required(),
        required: true,
    },
    {
        name:'legalAgency',
        component:SELECT,
        multiple: false,
        loadOptions: legalAgencyUIHelper,
        saveOptions: {
            ref: "legalAgencies-save",
            attr: "legalAgencies"
        },
        label: intl.formatMessage({
            id: BUSINESS_UNIT_LEGAL_AGENCY_LP[getLang()]
        }),
        placeholder: intl.formatMessage({
            id: BUSINESS_UNIT_LEGAL_AGENCY_LP[getLang()]
        }),
        size: 6,
        validation: Yup.string().array().required(),
        required: true,
    },
]

export const businessUnitFieldsUpdate = ({intl}) => [
	{
        name:'businessUnitName',
        component: INPUT,
        label: intl.formatMessage({
            id: BUSINESS_UNIT_NAME_LP[getLang()]
        }),
        placeholder: intl.formatMessage({
            id: BUSINESS_UNIT_NAME_LP[getLang()]
        }),
        size: 6,
        validation: Yup.string().required(),
        required: true,
    },
    {
        name:'businessUnitManager',
        component:SELECT,
        multiple: true,
        loadOptions: managerUIHelper,
        saveOptions: {
            ref:"managers-save",
            attr:"managers"
        },
        label: intl.formatMessage({
            id: BUSINESS_UNIT_MANAGER_LP[getLang()]
        }),
        placeholder: intl.formatMessage({
            id: BUSINESS_UNIT_MANAGER_LP[getLang()]
        }),
        size: 6,
        validation: Yup.string().array().required(),
        required: true,
    },
]
