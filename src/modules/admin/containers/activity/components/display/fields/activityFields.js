import {
	activityTypeUIHelper,
 
} from './../../../../../UIHelpers'


export const activityFieldsAr = ({ intl }) => [
  ]

export const activityFieldsFr = ({ intl }) => [
  ]

export const activityFields = ({ intl }) => [
    {
	name:'activityName',
	label: intl.formatMessage({id:'ACTIVITY.INPUT.NAME'}),
	size: 6
    },
    {
	name:'activityType',
	loadOptions: activityTypeUIHelper,
	label: intl.formatMessage({id:'ACTIVITY.INPUT.ACTIVITY_TYPE'}),
	size: 6
    }
]
