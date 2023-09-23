import JobEnableDialog from "./../../components/dialog/JobEnableDialog"
import JobsEnableDialog from "./../../components/dialog/JobsEnableDialog"
import JobDisableDialog from "./../../components/dialog/JobDisableDialog"
import JobsDisableDialog from "./../../components/dialog/JobsDisableDialog"
import JobValidateDialog from "./../../components/dialog/JobValidateDialog"
import JobRejectDialog from "./../../components/dialog/JobRejectDialog"


import { MODULES_PERMISSIONS, ACTIVATE, DEACTIVATE, VALIDATE, REJECT } from "../../../../../../constants"


const { JOB } = MODULES_PERMISSIONS


export const jobEnable = {
  path: "/enable-job/:param",
  component: JobEnableDialog,
  can: JOB.permissions[ACTIVATE]
}


export const jobDisable = {
  path: "/disable-job/:param",
  component: JobDisableDialog,
  can: JOB.permissions[DEACTIVATE]
}

export const jobsDisable = {
  path: "/disable-jobs",
  component: JobsDisableDialog,
  can: JOB.permissions[DEACTIVATE]
}

export const jobsEnable = {
  path: "/enable-jobs",
  component: JobsEnableDialog,
  can: JOB.permissions[ACTIVATE]
}

export const jobValidate = {
  path: "/validate-job/:eventParam",
  component: JobValidateDialog,
  can: JOB.permissions[VALIDATE]
}

export const jobReject = {
  path: "/reject-job/:eventParam",
  component: JobRejectDialog,
  can: JOB.permissions[REJECT]
}
