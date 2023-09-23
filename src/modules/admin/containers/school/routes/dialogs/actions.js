import SchoolEnableDialog from "./../../components/dialog/SchoolEnableDialog"
import SchoolsEnableDialog from "./../../components/dialog/SchoolsEnableDialog"
import SchoolDisableDialog from "./../../components/dialog/SchoolDisableDialog"
import SchoolsDisableDialog from "./../../components/dialog/SchoolsDisableDialog"


import {MODULES_PERMISSIONS, ACTIVATE, DEACTIVATE} from "../../../../../../constants"


const { SCHOOL } = MODULES_PERMISSIONS


export const schoolEnable = {
  path: "/enable-school/:param",
  component: SchoolEnableDialog,
  can: SCHOOL.permissions[ACTIVATE]
}


export const schoolDisable = {
  path: "/disable-school/:param",
  component: SchoolDisableDialog,
  can: SCHOOL.permissions[DEACTIVATE]
}

export const schoolsDisable = {
  path: "/disable-schools",
  component: SchoolsDisableDialog,
  can: SCHOOL.permissions[DEACTIVATE]
}

export const schoolsEnable = {
  path: "/enable-schools",
  component: SchoolsEnableDialog,
  can: SCHOOL.permissions[ACTIVATE]
}
