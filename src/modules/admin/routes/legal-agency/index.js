import { lazy } from "react"
import { UPDATE, MODULES_PERMISSIONS, VIEW, CREATE } from "../../../../constants"

const LegalAgency = lazy(()=> import("../../containers/legal-agency/LegalAgencyNew"))
const LegalAgencyEdit = lazy(()=> import("../../containers/legal-agency/LegalAgencyEdit"))
const LegalAgencyShow = lazy(()=> import("../../containers/legal-agency/LegalAgencyShow"))
const LegalAgencyPage = lazy(()=> import("../../containers/legal-agency/LegalAgencyPage"))


const { LEGAL_AGENCY } = MODULES_PERMISSIONS

export const legalAgencyCreate = {
    path:"/legalagencies/new",
    component: LegalAgency,
    can: LEGAL_AGENCY.permissions[CREATE],
    exact: true
}
export const legalAgencyEdit = {
    path:"/legalagencies/:param/edit",
    component: LegalAgencyEdit,
    can: LEGAL_AGENCY.permissions[UPDATE],
}
export const legalAgencyShow = {
    path:"/legalagencies/:param/show",
    component: LegalAgencyShow,
    can: LEGAL_AGENCY.permissions[VIEW],
}
export const legalAgencyList = {
    path:"/legalagencies",
    component: LegalAgencyPage,
    can: LEGAL_AGENCY.permissions[VIEW],
}

