import _ from "lodash"
import { AR, FR } from "../../../../../../../constants"
import { sortCaret } from '../../../../../../../helpers'
import { getLang } from '../../../../../../../i18n'
import * as columnFormatters from "./../column-formatters"

// const ACTIVITY_TYPE_NAME_VALUE = {
//     [FR]:"agencyName"
// }
// const ACTIVITY_TYPE_NAME_LABEL = {
//     [FR]:"ACTIVITY_TYPE_NAME"
// }

// const ACTIVITY_TYPE_EMAIL_VALUE = {
//     [FR]:"agencyEmail"
// }
// const ACTIVITY_TYPE_EMAIL_LABEL = {
//     [FR]:"ACTIVITY_TYPE_EMAIL"
// }

// const ACTIVITY_TYPE_ADDRESS_VALUE = {
//     [FR]:"agencyAddress"
// }
// const ACTIVITY_TYPE_ADDRESS_LABEL = {
//     [FR]:"ACTIVITY_TYPE_ADDRESS"
// }

// const ACTIVITY_TYPE_LEGAL_STATUS_VALUE = {
//     [FR]:"agencyLegalStatus"
// }
// const ACTIVITY_TYPE_LEGAL_STATUS_LABEL = {
//     [FR]:"ACTIVITY_TYPE_LEGAL_STATUS"
// }

const columns = ({intl, activityTypesUIProps}) => [
	{
		dataField: 'activityTypeName',
		text: intl.formatMessage({id:'ACTIVITY_TYPE.NAME'}),
		sort: true,
		sortCaret: sortCaret

	},

        {
        dataField: "action",
        text: intl.formatMessage({
            id:"GENERAL.ACTIONS",
        }),
        formatter: columnFormatters.ActivityTypeActionsColumnFormatter,
        formatExtraData: activityTypesUIProps,
        classes: "text-right pr-0",
        headerClasses: "text-right pr-3",
        style: {
            minWidth: "200px",
        },
    }
]

export default _.memoize(columns)
