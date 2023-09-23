import { TABLE_OF_ITEMS } from "../../../../../../../components/partials";
import { AR, FR } from "../../../../../../../constants";
import { getLang } from "../../../../../../../i18n";
import { managerUIHelper } from "../../../../../UIHelpers";
import {
    
    SELECT
} from "../../../../../../../components/partials"


const BUSINESS_UNIT_NAME_FIELD = {
    [FR]:"businessUnitName"
}
const BUSINESS_UNIT_NAME_LABEL = {
    [FR]:"BUSINESS_UNIT_NAME"
}

const BUSINESS_UNIT_MANAGER_FIELD = {
    [FR]:"businessUnitManager"
}

const BUSINESS_UNIT_MANAGER_LABEL = {
    [FR]:"BUSINESS_UNIT_MANAGER"
}

export const legalAgencyFields = ({intl}) => [
    {
        name:"agencyName",
        label: intl.formatMessage({id:'LEGAL_AGENCY_NAME'}),
        size: 6,
    },
    {
        name:"agencyEmail",
        label: intl.formatMessage({id:'LEGAL_AGENCY_EMAIL'}),
        size: 6,
    },
    {
        name:"agencyEmail",
        label: intl.formatMessage({id:'LEGAL_AGENCY_EMAIL'}),
        size: 6,
    },
    {
        name:"agencyAddress",
        label: intl.formatMessage({id:'LEGAL_AGENCY_ADDRESS'}),
        size: 6,
    },
    {
        name:"agencyPostalCode",
        label: intl.formatMessage({id:'LEGAL_AGENCY_POSTAL_CODE'}),
        size: 6,
    },
    {
        name:"agencyCity",
        label: intl.formatMessage({id:'LEGAL_AGENCY_CITY'}),
        size: 6,
    },
    {
        name:"agencyCountry",
        label: intl.formatMessage({id:'LEGAL_AGENCY_COUNTRY'}),
        size: 6,
    },
    {
        name:"agencyLegalStatus",
        label: intl.formatMessage({id:'LEGAL_AGENCY_LEGAL_STATUS'}),
        size: 6,
    },
    {
        name:"loadFactor",
        label: intl.formatMessage({id:'LEGAL_AGENCY_LOAD_FACTOR'}),
        size: 6,
    },
    {
        name:"loadRate",
        label: intl.formatMessage({id:'LEGAL_AGENCY_LOAD_RATE'}),
        size: 6,
    },
	{
		name:'businessUnitSet',
		showActions: false,
		showSearch: true,
		columns: [
			{
                dataField: BUSINESS_UNIT_NAME_FIELD[getLang()],
                text: intl.formatMessage({
                    id: BUSINESS_UNIT_NAME_LABEL[getLang()],
                })
            },
            {
                dataField: BUSINESS_UNIT_MANAGER_FIELD[getLang()],
				loadOptions: managerUIHelper,
                text: intl.formatMessage({
                    id: BUSINESS_UNIT_MANAGER_LABEL[getLang()],
                })
            },
		],
		component: TABLE_OF_ITEMS,
        label: intl.formatMessage({id:"LEGAL_AGENCY.BUSINESS_UNIT.TITLE"})

	}
]
