import routes from "./../../../../routes"
import { combinePathRoutes } from "./../../../../../../helpers"
import { MODULES_PERMISSIONS, ACTIVATE } from "../../../../../../constants"
import CandidateDisplayPersonalInfo from "../../components/display/CandidateDisplayPersonalInfo";
const { CANDIDATE } = MODULES_PERMISSIONS


const candidateDisplayPersonalInfo = {
  path: "/candidate/Personal-Info",
  component: CandidateDisplayPersonalInfo,
  can: CANDIDATE.permissions[ACTIVATE]
}


export default combinePathRoutes(
  {
    path: routes.candidateShow.path
  },
  {
    candidateDisplayPersonalInfo,
  }
)
