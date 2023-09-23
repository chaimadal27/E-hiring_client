import routes from "./../../../../routes"
import { combinePathRoutes } from "./../../../../../../helpers"

import LegalAgencyForm from "./../../components/form/LegalAgencyForm"

import {MODULES_PERMISSIONS, UPDATE} from "../../../../../../constants"

const { LEGAL_AGENCY } = MODULES_PERMISSIONS


const legalAgencyForm = {
    path:"/legal-agency",
    component: LegalAgencyForm,
    can: LEGAL_AGENCY.permissions[UPDATE]
}

export default combinePathRoutes(
    {
        path: routes.legalAgencyEdit.path
    },
    {
        legalAgencyForm,
    }
)