import routes from "./../../../../routes"
import { combinePathRoutes } from "./../../../../../../helpers"

import ListDisplay from "./../../components/display/ListDisplay"


import { MODULES_PERMISSIONS, ACTIVATE } from "../../../../../../constants"

const { LIST } = MODULES_PERMISSIONS


const listDisplay = {
  path: "/list",
  component: ListDisplay,
  can: LIST.permissions[ACTIVATE]
}


export default combinePathRoutes(
  {
    path: routes.listShow.path
  },
  {
    listDisplay,
  }
)
