import * as dashboardRoutes from "./dashboard"
import * as homeRoutes from "./home"
import * as profileRoutes from "./profile"
import * as userRoutes from "./user"
import * as userGroupRoutes from "./user-group"
import * as partnershipRoutes from "./partnership"
import * as jobRoutes from "./job"
import * as schoolRoutes from "./school"
import * as listRoutes from "./list"
import * as candidateRoutes from "./candidate"
import * as offerRoutes from "./offer"


// added routes
import * as legalAgencyRoutes from './legal-agency'
import * as businessUnitRoutes from "./business-unit"
import * as activityRoutes from "./activity"
import * as resourceState from "./resource-state"
import * as activityTypeRoutes from "./activity-type"
/* import * as sheetRoutes from "./sheet" */
import { combinePathRoutes } from "./../../../helpers"
import baseRoutes from "./../../../routes"
//import * as candidateSearchRoutes from "./candidateSearch"

const objectProps = { path: baseRoutes.admin.path, anonymous: true }

// Combined routes
export default combinePathRoutes(
  objectProps,
  homeRoutes,
  profileRoutes,
  dashboardRoutes,
  userRoutes,
  userGroupRoutes,
  partnershipRoutes,
  jobRoutes,
  schoolRoutes,
  listRoutes,
  candidateRoutes,
  offerRoutes,
  businessUnitRoutes,
  legalAgencyRoutes,
  activityRoutes,
  resourceState,
  activityTypeRoutes,
  /* sheetRoutes, */
  // candidateSearchRoutes,
)
