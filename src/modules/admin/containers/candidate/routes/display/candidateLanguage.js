import routes from "./../../../../routes"
import { combinePathRoutes } from "./../../../../../../helpers"

import { MODULES_PERMISSIONS, ACTIVATE } from "../../../../../../constants"
import CandidateDisplayLanguage from "../../components/display/CandidateDisplayLanguage";
const { CANDIDATE } = MODULES_PERMISSIONS


const candidateDisplayLanguage = {
    path: "/candidate/language",
    component: CandidateDisplayLanguage,
    can: CANDIDATE.permissions[ACTIVATE]
}


export default combinePathRoutes(
    {
        path: routes.candidateShow.path
    },
    {
        candidateDisplayLanguage,
    }
)
