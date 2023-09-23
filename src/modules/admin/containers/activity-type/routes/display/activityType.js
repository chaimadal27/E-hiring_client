import routes from "./../../../../routes"
import { combinePathRoutes } from "./../../../../../../helpers"


import ActivityTypeDisplay from "./../../components/display/ActivityTypeDisplay"

import { MODULES_PERMISSIONS, VIEW } from "../../../../../../constants"


const { ACTIVITY_TYPE } = MODULES_PERMISSIONS

const activityTypeDisplay = {
    path:"/activityType",
    component: ActivityTypeDisplay,
    can: ACTIVITY_TYPE.permissions[VIEW]
}

export default combinePathRoutes(
    {
        path: routes.activityTypeShow.path
    },
    {
        activityTypeDisplay
    }   
)