import * as actionRoutes from "./actions"
import routes from "./../../../../routes"
import { combinePathRoutes } from "./../../../../../../helpers"
export default combinePathRoutes(
    {
        path: routes.activityTypeList.path
    },
    {
        ...actionRoutes
    }
)