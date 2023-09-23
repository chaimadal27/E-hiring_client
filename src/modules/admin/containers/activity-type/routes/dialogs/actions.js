import ActivityTypeEnableDialog from "./../../components/dialog/ActivityTypeEnableDialog"
import ActivityTypeDisableDialog from "./../../components/dialog/ActivityTypeDisableDialog"
import ActivityTypesEnableDialog from "./../../components/dialog/ActivityTypesEnableDialog"
import ActivityTypesDisableDialog from "./../../components/dialog/ActivityTypesDisableDialog"
import ActivityTypeDeleteDialog from "./../../components/dialog/ActivityTypeDeleteDialog"
import ActivityTypesDeleteDialog from "./../../components/dialog/ActivityTypesDeleteDialog"
import { MODULES_PERMISSIONS, ACTIVATE, DEACTIVATE, DELETE } from "../../../../../../constants"
const {ACTIVITY_TYPE} = MODULES_PERMISSIONS


export const activityTypeEnable = {
    path:"/enable-activity-type/:param",
    component: ActivityTypeEnableDialog,
    can: ACTIVITY_TYPE.permissions[ACTIVATE],
}
export const activityTypeDisable = {
    path:"/disable-activity-type/:param",
    component: ActivityTypeDisableDialog,
    can: ACTIVITY_TYPE.permissions[DEACTIVATE]
}
export const activityTypesEnable = {
    path:"/enable-activity-type",
    component: ActivityTypesEnableDialog,
    can: ACTIVITY_TYPE.permissions[ACTIVATE]
}
export const activityTypesDisable = {
    path:"/disable-activity-type",
    component: ActivityTypesDisableDialog,
    can: ACTIVITY_TYPE.permissions[DEACTIVATE]
}

export const activityTypesDelete = {
	path: "/delete-activity-type/:param",
	component:ActivityTypeDeleteDialog,
	can: ACTIVITY_TYPE.permissions[DELETE]
}
