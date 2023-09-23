import { lazy } from "react"
import {UPDATE, MODULES_PERMISSIONS, VIEW, CREATE} from "../../../../constants"

const School = lazy(() => import("../../containers/school/SchoolNew"))
const SchoolEdit = lazy(() => import("../../containers/school/SchoolEdit"))
const SchoolShow = lazy(() => import("../../containers/school/SchoolShow"))
const SchoolPage = lazy(() => import("../../containers/school/SchoolPage"))

const { SERVICE } = MODULES_PERMISSIONS

export const schoolCreate = {
  path: "/schools/new",
  component: School,
  can: SERVICE.permissions[CREATE],
  exact: true,
}

export const schoolEdit = {
  path: "/schools/:param/edit",
  component: SchoolEdit,
  can: SERVICE.permissions[UPDATE]
}

export const schoolShow = {
  path: "/schools/:param/show",
  component: SchoolShow,
  can: SERVICE.permissions[VIEW]
}

export const schoolList = {
  path: "/schools",
  component: SchoolPage,
  can: SERVICE.permissions[VIEW]
}
