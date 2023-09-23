import routes from "./../../../../../routes"
import { combinePathRoutes } from "./../../../../../../../helpers"

import OfferAppointmentDialog from "../../../offer/components/dialog/appointment/OfferAppointmentDialog";

import { MODULES_PERMISSIONS, CREATE } from "../../../../../../../constants"
import {myAppointments} from "../../../../routes/profile";

const { OFFER } = MODULES_PERMISSIONS

const OfferAppointmentDialog = {
    path: "/appointment_modal/create",
    component: OfferAppointmentDialog,
    can: OFFER.permissions[CREATE]
}



export default combinePathRoutes(
    { path: routes.myAppointments.path },
    {
        OfferAppointmentDialog,

    }
)