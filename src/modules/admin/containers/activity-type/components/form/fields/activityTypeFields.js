import * as Yup from "yup"
import _ from "lodash"

import {
    INPUT,
	SELECT
} from "./../../../../../../../components/partials"
import {businessUnitUIHelper} from "../../../../../UIHelpers"


export const activityTypeFields = _.memoize(({intl}) => [
    {
        name:"activityTypeName",
        component:INPUT,
		label:intl.formatMessage({id:'ACTIVITY_TYPE.NAME'}),
        placeholder: intl.formatMessage({id:'ACTIVITY_TYPE.NAME'}),
        size:6,
        validation: Yup.string().required(),
        required: true
    },
	{
		name:'businessUnit',
		component: SELECT,
		multiple: true,
		loadOptions: businessUnitUIHelper,
		saveOptions: {
			ref:'businessUnits-save',
			attr:'businessUnits'
		},
		label: intl.formatMessage({id:'ACTIVITY_TYPE.BUSINESS_UNIT'}),
		placeholder: intl.formatMessage({id:'ACTIVITY_TYPE.BUSINESS_UNIT'}),
		size:6,
		validation: Yup.string().array().required(),
		required: true
	},
])
