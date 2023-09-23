import { lazy } from "react"
//import JobValidateDialog from "./../../components/dialog/JobValidateDialog"
//import JobRejectDialog from "./../../components/dialog/JobRejectDialog"



import { MODULES_PERMISSIONS, ACTIVATE, VALIDATE, REJECT } from "../../../../../../constants"
const JobValidateDialog = lazy(() => import("./../../components/dialog/JobValidateDialog"))
const JobRejectDialog = lazy(() => import("./../../components/dialog/JobRejectDialog"))

const { JOB } = MODULES_PERMISSIONS

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