import routes from "./../../../../routes"
import { combinePathRoutes } from "./../../../../../../helpers"

import JobForm from "./../../components/form/JobForm"


import { MODULES_PERMISSIONS, ACTIVATE } from "../../../../../../constants"

const { JOB } = MODULES_PERMISSIONS


const jobForm = {
  path: "/job",
  component: JobForm,
  can: JOB.permissions[ACTIVATE]
}

export default combinePathRoutes(
  {
    path: routes.jobEdit.path
  },
  {
    jobForm,
  }
)
