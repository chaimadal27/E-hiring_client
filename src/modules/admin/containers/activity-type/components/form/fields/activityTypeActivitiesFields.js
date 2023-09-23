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


export const activityTypeActivityFields = ({intl}) => [
	{
        name:'activitySet[].activityName',
        component:INPUT,
		label: intl.formatMessage({id:'ACTIVITY_TYPE.ACTIVITY.NAME'}),
        placeholder: intl.formatMessage({id:'ACTIVITY_TYPE.ACTIVITY.NAME'}),
        size: 3,
        validation: Yup.string()
    },
	
]
