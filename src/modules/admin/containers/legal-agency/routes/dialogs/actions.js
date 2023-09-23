import LegalAgencyEnableDialog from "./../../components/dialog/LegalAgencyEnableDialog"
import LegalAgencyDisableDialog from "./../../components/dialog/LegalAgencyDisableDialog"
import LegalAgenciesEnableDialog from "./../../components/dialog/LegalAgenciesEnableDialog"
import LegalAgenciesDisableDialog from "./../../components/dialog/LegalAgenciesDisableDialog"
import { MODULES_PERMISSIONS, ACTIVATE, DEACTIVATE } from "../../../../../../constants"
const {LEGAL_AGENCY} = MODULES_PERMISSIONS


export const legalAgencyEnable = {
    path:"/enable-legalagency/:param",
    component: LegalAgencyEnableDialog,
    can: LEGAL_AGENCY.permissions[ACTIVATE],
    exact: true
}
export const legalAgencyDisable = {
    path:"/disable-legalagency/:param",
    component: LegalAgencyDisableDialog,
    can: LEGAL_AGENCY.permissions[DEACTIVATE]
}
export const legalAgenciesEnable = {
    path:"/enable-legalagencies",
    component: LegalAgenciesEnableDialog,
    can: LEGAL_AGENCY.permissions[ACTIVATE]
}
export const legalAgenciesDisable = {
    path:"/disable-legalagencies",
    component: LegalAgenciesDisableDialog,
    can: LEGAL_AGENCY.permissions[DEACTIVATE]
}