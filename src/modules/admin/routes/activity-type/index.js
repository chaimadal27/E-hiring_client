import { lazy } from "react"
import { UPDATE, MODULES_PERMISSIONS, VIEW, CREATE } from "../../../../constants"

const ActivityType = lazy(()=>import ("../../containers/activity-type/ActivityTypeNew"))
const ActivityTypeEdit = lazy(()=>import ("../../containers/activity-type/ActivityTypeEdit"))
const ActivityTypeShow = lazy(()=>import ("../../containers/activity-type/ActivityTypeShow"))
const ActivityTypePage = lazy(()=>import ("../../containers/activity-type/ActivityTypePage"))

const { ACTIVITY_TYPE } = MODULES_PERMISSIONS

export const activityTypeCreate = {
    path:"/activity-type/new",
    component: ActivityType,
    can: ACTIVITY_TYPE.permissions[CREATE],
    exact: true,
}

export const activityTypeEdit = {
    path:"/activity-type/:param/edit",
    component: ActivityTypeEdit,
    can: ACTIVITY_TYPE.permissions[UPDATE],
}

export const activityTypeShow = {
    path:"/activity-type/:param/show",
    component: ActivityTypeShow,
    can: ACTIVITY_TYPE.permissions[VIEW],
}

export const activityTypeList = {
    path:"/activity-type",
    component: ActivityTypePage,
    can: ACTIVITY_TYPE.permissions[VIEW],
}
