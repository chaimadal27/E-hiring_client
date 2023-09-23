import ResourceStateDisableDialog from "../components/dialog/ResourceStateDisableDialog"
import ResourceStatesDisableDialog from "../components/dialog/ResourceStatesDisableDialog"
import ResourceStateEnableDialog from "../components/dialog/ResourceStateEnableDialog"
import ResourceStatesEnableDialog from "../components/dialog/ResourceStatesEnableDialog"
import ResourceStateDeleteDialog from "../components/dialog/ResourceStateDeleteDialog"
import ResourceStatesDeleteDialog from "../components/dialog/ResourceStatesDeleteDialog"


import {MODULES_PERMISSIONS, DEACTIVATE, ACTIVATE, DELETE} from "../../../../../constants"


const {RESOURCE_STATE} = MODULES_PERMISSIONS


export const resourceStateDelete = {
  path: "/delete/resource-state/:param",
  component: ResourceStateDeleteDialog,
  can: RESOURCE_STATE.permissions[DELETE]
}

export const resourceStatesDelete = {
  path: "/delete/resource-state",
  component: ResourceStatesDeleteDialog,
  can: RESOURCE_STATE.permissions[DELETE]
}

export const resourceStateDisable = {
    path:"/disable/resource-state/:param",
    component: ResourceStateDisableDialog,
    can: RESOURCE_STATE.permissions[DEACTIVATE]
}

export const resourceStatesDisable = {
    path:"/disable/resource-state",
    component: ResourceStatesDisableDialog,
    can: RESOURCE_STATE.permissions[DEACTIVATE]
}

export const resourceStateEnable = {
    path:"/enable/resource-state/:param",
    component: ResourceStateEnableDialog,
    can: RESOURCE_STATE.permissions[ACTIVATE],
}

export const resourceStatesEnable = {
    path:"/enable/resource-state",
    component: ResourceStatesEnableDialog,
    can: RESOURCE_STATE.permissions[ACTIVATE]
}
