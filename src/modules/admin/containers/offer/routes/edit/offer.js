import routes from "./../../../../routes"
import { combinePathRoutes } from "./../../../../../../helpers"

import OfferForm from "./../../components/form/OfferForm"


import { MODULES_PERMISSIONS, ACTIVATE } from "../../../../../../constants"

const { SCHOOL } = MODULES_PERMISSIONS


const offerForm = {
  path: "/offer",
  component: OfferForm,
  can: SCHOOL.permissions[ACTIVATE]
}

export default combinePathRoutes(
  {
    path: routes.offerEdit.path
  },
  {
    offerForm,
  }
)
