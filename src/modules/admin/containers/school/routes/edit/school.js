import routes from "./../../../../routes"
import { combinePathRoutes } from "./../../../../../../helpers"

import SchoolForm from "./../../components/form/SchoolForm"


import {MODULES_PERMISSIONS, ACTIVATE} from "../../../../../../constants"

const { SCHOOL } = MODULES_PERMISSIONS


const schoolForm = {
  path: "/school",
  component: SchoolForm,
  can: SCHOOL.permissions[ACTIVATE]
}

export default combinePathRoutes(
  {
    path: routes.schoolEdit.path
  },
  {
    schoolForm,
  }
)
