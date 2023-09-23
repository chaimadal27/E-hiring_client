import * as Yup from 'yup'

import {activityTypeUIHelper} from './../../../../../UIHelpers'

import {
  INPUT,
  SELECT,
} from './../../../../../../../components/partials'

// AR fields
export const activityFieldsAr = ({ intl }) => [
]





// FR fields
export const activityFieldsFr = ({ intl }) => [
    ]

export const activityFields = ({intl}) => [
	{
		name:'activityName',
		component: INPUT,
		label: intl.formatMessage({id:'ACTIVITY.INPUT.NAME'}),
		placeholder: intl.formatMessage({id:'ACTIVITY.INPUT.NAME'}),
		size: 6,
		validation: Yup.string().required(),
		required: true
	},
    {
	name:'activityType',
	component: SELECT,
	loadOptions: activityTypeUIHelper,
	multiple: false,
		saveOptions: {
			ref:'activityTypes-save',
			attr:'activityTypes'
		},
	label: intl.formatMessage({id:'ACTIVITY.INPUT.ACTIVITY_TYPE'}),
	placeholder: intl.formatMessage({id:'ACTIVITY.INPUT.ACTIVITY_TYPE'}),
	size: 6,
	validation: Yup.string().required(),
	required: true,
    }
]
