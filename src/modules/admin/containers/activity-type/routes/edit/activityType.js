import routes from "./../../../../routes"
import { combinePathRoutes } from "./../../../../../../helpers"

import ActivityTypeForm from "./../../components/form/ActivityTypeForm"

import {MODULES_PERMISSIONS, UPDATE} from "../../../../../../constants"

const { ACTIVITY_TYPE } = MODULES_PERMISSIONS


const activityTypeForm = {
    path:"/activityType",
    component: ActivityTypeForm,
    can: ACTIVITY_TYPE.permissions[UPDATE]
}

export default combinePathRoutes(
    {
        path: routes.activityTypeEdit.path
    },
    {
        activityTypeForm,
    }
)