import { lazy } from "react"
import { UPDATE, MODULES_PERMISSIONS, VIEW, CREATE } from "../../../../constants"

const Job = lazy(() => import("../../containers/job/JobNew"))
const JobEdit = lazy(() => import("../../containers/job/JobEdit"))
const JobShow = lazy(() => import("../../containers/job/JobShow"))
const JobPage = lazy(() => import("../../containers/job/JobPage"))

const { JOB } = MODULES_PERMISSIONS

export const jobCreate = {
    path: "/jobs/new",
    component: Job,
    can: JOB.permissions[CREATE],
    exact: true,
}

export const jobEdit = {
    path: "/jobs/:param/edit",
    component: JobEdit,
    can: JOB.permissions[UPDATE]
}

export const jobShow = {
    path: "/jobs/:param/show",
    component: JobShow,
    can: JOB.permissions[VIEW]
}

export const jobList = {
    path: "/jobs",
    component: JobPage,
    can: JOB.permissions[VIEW]
}
