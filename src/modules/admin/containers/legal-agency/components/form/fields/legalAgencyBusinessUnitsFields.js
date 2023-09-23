import * as Yup from "yup"

import {
    INPUT,
    SELECT
} from "../../../../../../../components/partials"


import {
    managerUIHelper
} from "./../../../../../UIHelpers"

import { AR, FR } from "../../../../../../../constants";
import { getLang } from "../../../../../../../i18n";



const LEGAL_AGENCY_BUSINESS_UNIT_NAME_LABEL = {
    [FR]:"BUSINESS_UNIT_NAME",
    [AR]:""
}
const LEGAL_AGENCY_BUSINESS_UNIT_MANAGER_LABEL = {
    [FR]:"BUSINESS_UNIT_MANAGER",
    [AR]:""
}
const LEGAL_AGENCY_BUSINESS_UNIT_NAME_PLACE = {
    [FR]:"BUSINESS_UNIT_NAME",
    [AR]:""
}
const LEGAL_AGENCY_BUSINESS_UNIT_MANAGER_PLACE = {
    [FR]:"BUSINESS_UNIT_MANAGER",
    [AR]:""
}


export const legalAgencyBusinessUnitsFields = ({intl}) => [

    {
        name:'businessUnitSet[].businessUnitName',
        component:INPUT,
        label: intl.formatMessage({
            id: LEGAL_AGENCY_BUSINESS_UNIT_NAME_LABEL[getLang()]
        }),
        placeholder: intl.formatMessage({
            id: LEGAL_AGENCY_BUSINESS_UNIT_NAME_PLACE[getLang()]
        }),
        size: 3,
        validation: Yup.string()
    },
    {
        name:'businessUnitSet[].businessUnitManager',
        component: SELECT,
        multiple: true,
        loadOptions: managerUIHelper,
        saveOptions: {
            ref: "managers-save",
            attr: "managers"
        },
        label: intl.formatMessage({
            id: LEGAL_AGENCY_BUSINESS_UNIT_MANAGER_LABEL[getLang()]
        }),
        placeholder: intl.formatMessage({
            id: LEGAL_AGENCY_BUSINESS_UNIT_MANAGER_PLACE[getLang()]
        }),
        size: 3,
        validation: Yup.string().array()
    },
]
