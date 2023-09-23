import routes from "./../../../../routes"
import { combinePathRoutes } from "./../../../../../../helpers"

import OfferDisplay from "./../../components/display/OfferDisplay"


import { MODULES_PERMISSIONS, ACTIVATE } from "../../../../../../constants"

const { SCHOOL } = MODULES_PERMISSIONS


const offerDisplay = {
  path: "/offer",
  component: OfferDisplay,
  can: SCHOOL.permissions[ACTIVATE]
}


export default combinePathRoutes(
  {
    path: routes.offerShow.path
  },
  {
    offerDisplay,
  }
)
