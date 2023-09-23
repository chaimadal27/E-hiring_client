import routes from "./../../../../routes"
import { combinePathRoutes } from "./../../../../../../helpers"

import SchoolDisplay from "./../../components/display/SchoolDisplay"


import { MODULES_PERMISSIONS, ACTIVATE } from "../../../../../../constants"

const { SCHOOL } = MODULES_PERMISSIONS


const schoolDisplay = {
  path: "/school",
  component: SchoolDisplay,
  can: SCHOOL.permissions[ACTIVATE]
}


export default combinePathRoutes(
  {
    path: routes.schoolShow.path
  },
  {
    schoolDisplay,
  }
)
