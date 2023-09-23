import { lazy } from "react"
import {MODULES_PERMISSIONS, CREATE, UPDATE, VIEW} from "../../../../constants"


const BusinessUnit = lazy(() => import("./../../containers/business-unit/BusinessUnit"))
const BusinessUnitEdit = lazy(() => import("./../../containers/business-unit/BusinessUnitEdit"))
const BusinessUnitShow = lazy(() => import("./../../containers/business-unit/BusinessUnitShow"))
const BusinessUnitPage = lazy(() => import("./../../containers/business-unit/BusinessUnitPage"))

const { BUSINESS_UNIT } = MODULES_PERMISSIONS

export const businessUnitCreate = {
    path:"/businessunits/new",
    component:BusinessUnit,
    can: BUSINESS_UNIT.permissions[CREATE],
}
export const businessUnitEdit = {
    path:"/businessunits/:param/edit",
    component:BusinessUnitEdit,
    can: BUSINESS_UNIT.permissions[UPDATE],
}
export const businessUnitShow = {
    path:"/businessunits/:param/show",
    component:BusinessUnitShow,
    can: BUSINESS_UNIT.permissions[VIEW],
}
export const businessUnitList = {
    path:"/businessunits",
    component:BusinessUnitPage,
    can: BUSINESS_UNIT.permissions[VIEW],
}
