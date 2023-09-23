import routes from "./../../../../routes"
import { combinePathRoutes } from "./../../../../../../helpers"

import { MODULES_PERMISSIONS, ACTIVATE } from "../../../../../../constants"
import CandidateDisplayDocuments from "../../components/display/CandidateDisplayDocuments";
const { CANDIDATE } = MODULES_PERMISSIONS


const candidateDisplayDocuments = {
    path: "/candidate/documents",
    component: CandidateDisplayDocuments,
    can: CANDIDATE.permissions[ACTIVATE]
}


export default combinePathRoutes(
    {
        path: routes.candidateShow.path
    },
    {
        candidateDisplayDocuments,
    }
)
