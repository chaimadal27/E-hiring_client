import routes from "./../../../../routes"
import { combinePathRoutes } from "./../../../../../../helpers"


import LegalAgencyDisplay from "./../../components/display/LegalAgencyDisplay"

import { MODULES_PERMISSIONS, VIEW } from "../../../../../../constants"


const { LEGAL_AGENCY } = MODULES_PERMISSIONS

const legalAgencyDisplay = {
    path:"/legal-agency",
    component: LegalAgencyDisplay,
    can: LEGAL_AGENCY.permissions[VIEW]
}

export default combinePathRoutes(
    {
        path: routes.legalAgencyShow.path
    },
    {
        legalAgencyDisplay
    }   
)