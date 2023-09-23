import routes from "./../../../routes"
import { combinePathRoutes } from "./../../../../../helpers"
import {MODULES_PERMISSIONS, ACTIVATE, DEACTIVATE , DELETE } from "../../../../../constants"
import ActivityDeleteDialog from "../components/dialog/ActivityDeleteDialog"
import ActivitiesDeleteDialog from "../components/dialog/ActivitiesDeleteDialog"
import ActivityEnableDialog from "../components/dialog/ActivityEnableDialog"
import ActivitiesEnableDialog from "../components/dialog/ActivitiesEnableDialog"
import ActivityDisableDialog from "../components/dialog/ActivityDisableDialog"
import ActivitiesDisableDialog from "../components/dialog/ActivitiesDisableDialog"
const { ACTIVITY } = MODULES_PERMISSIONS


const activityDelete = {
    path:"/delete-activity/:param",
    component: ActivityDeleteDialog,
    can: ACTIVITY.permissions[DELETE],
}

const activitiesDelete = {
    path:"/delete-activity",
    component: ActivitiesDeleteDialog,
    can: ACTIVITY.permissions[DELETE],
}

const activityDisable = {
    path:"/disable-activity/:param",
    component: ActivityDisableDialog,
    can: ACTIVITY.permissions[DEACTIVATE],
}

const activitiesDisable = {
    path:"/disable-activity",
    component: ActivitiesDisableDialog,
    can: ACTIVITY.permissions[DEACTIVATE],
}

const activityEnable = {
    path:"/enable-activity/:param",
    component: ActivityEnableDialog,
    can: ACTIVITY.permissions[ACTIVATE],
}

const activitiesEnable = {
    path:"/enable-activity",
    component: ActivitiesEnableDialog,
    can: ACTIVITY.permissions[ACTIVATE]
}


export default combinePathRoutes(
  {
    path: routes.activityList.path
  },
  {
      activityDelete,
      activitiesDelete,
      activityEnable,
      activitiesEnable,
      activityDisable,
      activitiesDisable,
  }
)
