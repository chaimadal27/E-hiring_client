import { lazy } from "react"
import {UPDATE, MODULES_PERMISSIONS, VIEW, CREATE} from "../../../../constants"

const Partnership = lazy(() => import("../../containers/partnership/PartnershipNew"))
const PartnershipEdit = lazy(() => import("../../containers/partnership/PartnershipEdit"))
const PartnershipShow = lazy(() => import("../../containers/partnership/PartnershipShow"))
const PartnershipPage = lazy(() => import("../../containers/partnership/PartnershipPage"))

const { PARTNERSHIP } = MODULES_PERMISSIONS

export const partnershipCreate = {
  path: "/partnerships/new",
  component: Partnership,
  can: PARTNERSHIP.permissions[CREATE],
  exact: true,
}

export const partnershipEdit = {
  path: "/partnerships/:param/edit",
  component: PartnershipEdit,
  can: PARTNERSHIP.permissions[UPDATE]
}

export const partnershipShow = {
  path: "/partnerships/:param/show",
  component: PartnershipShow,
  can: PARTNERSHIP.permissions[VIEW]
}

export const partnershipList = {
  path: "/partnerships",
  component: PartnershipPage,
  can: PARTNERSHIP.permissions[VIEW]
}
