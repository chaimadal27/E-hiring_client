import { lazy } from "react"
import {MODULES_PERMISSIONS, CREATE, UPDATE, VIEW} from "../../../../constants"

const Activity = lazy(()=>import("./../../containers/activity/Activity"))
const ActivityEdit = lazy(()=>import("./../../containers/activity/Activity"))
const ActivityShow = lazy(()=>import("./../../containers/activity/ActivityShow"))
const ActivityPage = lazy(()=>import("./../../containers/activity/ActivityPage"))

const {ACTIVITY} = MODULES_PERMISSIONS

export const activityCreate = {
    path:"/activity/new",
    component: Activity,
    can: ACTIVITY.permissions[CREATE],
    exact: true,
}

export const activityEdit = {
    path:"/activity/:param/edit",
    component: ActivityEdit,
    can: ACTIVITY.permissions[UPDATE]
}

export const activityShow = {
    path:"/activity/:param/show",
    component: ActivityShow,
    can: ACTIVITY.permissions[VIEW],
}

export const activityList = {
    path:"/activity",
    component: ActivityPage,
    can: ACTIVITY.permissions[VIEW],
}
