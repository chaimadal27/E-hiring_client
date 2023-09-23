import { lazy } from "react"
import {UPDATE, MODULES_PERMISSIONS, VIEW, CREATE} from "../../../../constants"

const ResourceState = lazy(()=>import ("./../../containers/resource-state/ResourceStateNewEdit"))
const ResourceStateEdit = lazy(()=>import ("./../../containers/resource-state/ResourceStateNewEdit"))
const ResourceStateShow = lazy(()=> import("./../../containers/resource-state/ResourceStateShow"))
const ResourceStatePage = lazy(()=>import("./../../containers/resource-state/ResourceStatePage"))

const { RESOURCE_STATE } = MODULES_PERMISSIONS


export const resourceStateCreate = {
    path:"/resource-state/new",
    component: ResourceState,
    can: RESOURCE_STATE.permissions[CREATE],
    exact: true,
}

export const resourceStateEdit = {
    path:"/resource-state/:param/update",
    component: ResourceStateEdit,
    can: RESOURCE_STATE.permissions[UPDATE]
}

export const resourceStateShow = {
    path:"/resource-state/:param/show",
    component: ResourceStateShow,
    can: RESOURCE_STATE.permissions[VIEW],
}

export const resourceStateList = {
    path:"/resource-state",
    component: ResourceStatePage,
    can: RESOURCE_STATE.permissions[VIEW],
}
