import routes from "./../../../../routes"
import { combinePathRoutes } from "./../../../../../../helpers"

import { MODULES_PERMISSIONS, ACTIVATE } from "../../../../../../constants"
import CandidateDisplayProfessionalInfo from "../../components/display/CandidateDisplayProfessionalInfo";
const { CANDIDATE } = MODULES_PERMISSIONS


const candidateDisplayProfessionalInfo = {
    path: "/candidate/experience_professionelle",
    component: CandidateDisplayProfessionalInfo,
    can: CANDIDATE.permissions[ACTIVATE]
}


export default combinePathRoutes(
    {
        path: routes.candidateShow.path
    },
    {
        candidateDisplayProfessionalInfo,
    }
)
