
import routes from "./../../../../routes"
import { combinePathRoutes } from "./../../../../../../helpers"

import * as validationRoutes from "./../validation"
import * as jobRoutes from "./job"

//export default { ...jobValidationRoutes, ...jobRoutes }


export default combinePathRoutes(
    {
        path: routes.jobShow.path
    },
    {
        ...validationRoutes,
        //...jobRoutes,

    }
)








