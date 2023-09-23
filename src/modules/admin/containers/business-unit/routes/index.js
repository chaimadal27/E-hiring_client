import routes from "./../../../routes"
import { combinePathRoutes } from "./../../../../../helpers"
import BusinessUnitDeleteDialog from "./../components/dialog/BusinessUnitDeleteDialog"
import BusinessUnitDisableDialog from "./../components/dialog/BusinessUnitDisableDialog"
import BusinessUnitEnableDialog from "./../components/dialog/BusinessUnitEnableDialog"
import BusinessUnitsDeleteDialog from "./../components/dialog/BusinessUnitsDeleteDialog"
import BusinessUnitsDisableDialog from "./../components/dialog/BusinessUnitsDisableDialog"
import BusinessUnitsEnableDialog from "./../components/dialog/BusinessUnitsEnableDialog"


import {MODULES_PERMISSIONS, ACTIVATE, DEACTIVATE , DELETE} from "../../../../../constants"



const { BUSINESS_UNIT } = MODULES_PERMISSIONS


const businessUnitDelete = {
    path:"/delete-businessunits/:param",
    component: BusinessUnitDeleteDialog,
    can: BUSINESS_UNIT.permissions[DELETE]
}
const businessUnitDisable = {
    path:"/disable-businessunits/:param",
    component: BusinessUnitDisableDialog,
    can: BUSINESS_UNIT.permissions[DEACTIVATE]
}
const businessUnitEnable = {
    path:"/enable-businessunits/:param",
    component: BusinessUnitEnableDialog,
    can: BUSINESS_UNIT.permissions[ACTIVATE]
}
const businessUnitsDelete = {
    path:"/delete/businessunits",
    component: BusinessUnitsDeleteDialog,
    can: BUSINESS_UNIT.permissions[DELETE]
}
const businessUnitsDisable = {
    path:"/disable-businessunits",
    component: BusinessUnitsDisableDialog,
    can: BUSINESS_UNIT.permissions[DEACTIVATE]
}
const businessUnitsEnable = {
    path:"/enable-businessunits",
    component: BusinessUnitsEnableDialog,
    can: BUSINESS_UNIT.permissions[ACTIVATE]
}

export default combinePathRoutes(
    {
        path: routes.businessUnitList
    },
    {
        businessUnitDelete,
        businessUnitDisable,
        businessUnitEnable,
        businessUnitsDelete,
        businessUnitsDisable,
        businessUnitsEnable
    }
)
