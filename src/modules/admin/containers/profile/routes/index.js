import routes from "./../../../routes"

import { combinePathRoutes } from "./../../../../../helpers"

import ChangePassword from "./../components/card/ChangePassword"
import AccountInformation from "./../components/card/AccountInformation"
import PersonalInformation from "./../components/card/PersonalInformation"
import OfferAppointmentDialog from "../../offer/components/dialog/appointment/OfferAppointmentDialog";
import {CREATE, MODULES_PERMISSIONS} from "../../../../../constants";
const { OFFER } = MODULES_PERMISSIONS

const changePassword = {
  path: "/change-password",
  component: ChangePassword
}


const accountInformation = {
  path: "/account-information",
  component: AccountInformation
}

const personalInformation = {
  path: "/personal-information",
  component: PersonalInformation
}
export const offerCreateAppointmentDialog = {
    path: "/appointments_calendar/create",
    component: OfferAppointmentDialog,
    can: OFFER.permissions[CREATE]
}
export default combinePathRoutes(
    { path: routes.updateProfile.path },

    {
        changePassword,
      accountInformation,
      personalInformation, offerCreateAppointmentDialog
    })
