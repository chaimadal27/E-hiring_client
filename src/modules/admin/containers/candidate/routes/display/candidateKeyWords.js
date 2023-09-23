import routes from "./../../../../routes"
import { combinePathRoutes } from "./../../../../../../helpers"

import CandidateDisplay from "../../components/display/CandidateDisplayPersonalInfo"


import { MODULES_PERMISSIONS, ACTIVATE } from "../../../../../../constants"
import CandidateDisplayPersonalInfo from "../../components/display/CandidateDisplayPersonalInfo";
import CandidateDisplayKeyWords from "../../components/display/CandidateDisplayKeyWords";

const { CANDIDATE } = MODULES_PERMISSIONS


const candidateDisplayKeyWords = {
    path: "/candidate/source&keywords",
    component: CandidateDisplayKeyWords,
    can: CANDIDATE.permissions[ACTIVATE]
}


export default combinePathRoutes(
    {
        path: routes.candidateShow.path
    },
    {
        candidateDisplayKeyWords,
    }
)
