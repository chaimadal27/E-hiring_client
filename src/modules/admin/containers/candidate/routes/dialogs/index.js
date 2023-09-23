import * as actionsRoutes from "./actions"
import { CandidateCreateDialogs } from "./AddData"
import routes from "./../../../../routes"
import { combinePathRoutes } from "./../../../../../../helpers"


export default combinePathRoutes(
  {
    path: routes.candidateList.path
  },
  {
    ...actionsRoutes,
  }
)
