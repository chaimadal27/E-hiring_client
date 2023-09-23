import { lazy } from "react"


//import JobDisplay  from "./../../components/display/JobDisplay"
//import JobValidateDialog from "./../../components/dialog/JobValidateDialog"
//import JobRejectDialog from "./../../components/dialog/JobRejectDialog"

import { MODULES_PERMISSIONS, ACTIVATE, VALIDATE, REJECT } from "../../../../../../constants"

const JobDisplay = lazy(() => import("./../../components/display/JobDisplay"))

const { JOB } = MODULES_PERMISSIONS


export const jobDisplay = {
  path: "/job",
  component: JobDisplay,
  can: JOB.permissions[ACTIVATE]
}

/* const jobValidate = {
  path: "/validate-job/:eventParam",
  component: JobValidateDialog,
  can: JOB.permissions[VALIDATE]
}

const jobReject = {
  path: "/reject-job/:eventParam",
  component: JobRejectDialog,
  can: JOB.permissions[REJECT]
} */

/* export default combinePathRoutes(
  {
    path: routes.jobShow.path
  },
  {
    jobDisplay,
  }
)
 */