import { AR, FR } from "../../../../../../../constants";
import { getLang } from "../../../../../../../i18n";
import { legalAgencyUIHelper, managerUIHelper } from "../../../../../UIHelpers";

const BUSINESS_UNIT_NAME_LABEL = {
    [FR]:"BUSINESS_UNIT_NAME"
}
const BUSINESS_UNIT_MANAGER_LABEL = {
    [FR]:"BUSINESS_UNIT_MANAGER"
}
const BUSINESS_UNIT_LEGAL_AGENCY_LABEL = {
    [FR]:"BUSINESS_UNIT_LEGAL_AGENCY"
}



export const businessUnitFields = ({intl}) => [
    {
        name:'businessUnitName',
        label: intl.formatMessage({
            id: BUSINESS_UNIT_NAME_LABEL[getLang()],
        }),
        size: 6,
    },
    {
        name:'businessUnitManager',
        loadOptions: managerUIHelper,
        label: intl.formatMessage({
            id: BUSINESS_UNIT_MANAGER_LABEL[getLang()],
        }),
        size: 6,
    },
    {
        name:'legalAgency',
        loadOptions: legalAgencyUIHelper,
        label: intl.formatMessage({
            id: BUSINESS_UNIT_LEGAL_AGENCY_LABEL[getLang()],
        }),
        size: 6,
    },
]
