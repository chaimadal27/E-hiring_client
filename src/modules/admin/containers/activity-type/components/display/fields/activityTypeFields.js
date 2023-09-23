import { TABLE_OF_ITEMS } from "../../../../../../../components/partials";
import { AR, FR } from "../../../../../../../constants";
import { getLang } from "../../../../../../../i18n";
import { businessUnitUIHelper, managerUIHelper } from "../../../../../UIHelpers";
import {
    
    SELECT
} from "../../../../../../../components/partials"

export const activityTypeFields = ({intl}) => [
    
	{
		name:'activityTypeName',
		label: intl.formatMessage({id:'ACTIVITY_TYPE.NAME'}),
		size: 6
	},
	{
		name:'businessUnit',
		label: intl.formatMessage({id:'ACTIVITY_TYPE.BUSINESS_UNIT'}),
		loadOptions: businessUnitUIHelper,
		size: 6
	},
    {
        name:'activitySet',
        showActions: false,
        showSearch: true,
        columns: [
            {
                dataField: 'activityName',
                text: intl.formatMessage({
                    id: 'ACTIVITY_TYPE.ACTIVITY.NAME',
                })
            },
            
        ],
        component: TABLE_OF_ITEMS,
        label: intl.formatMessage({id:"ACTIVITY_TYPE.ACTIVITY.TITLE"})
    },
]
