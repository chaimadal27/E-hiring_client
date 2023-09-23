import KanbanDeleteDialog from "./../../components/dialog/KanbanDeleteDialog"
import KanbanShowCVDialog from "./../../components/dialog/KanbanShowCVDialog"
import KanbanShareCvDialog from "../../components/dialog/KanbanShareCvDialog"
import OfferAppointmentDialog from "../../components/dialog/appointment/OfferAppointmentDialog"



import { MODULES_PERMISSIONS, ACTIVATE, DEACTIVATE, VIEW, CREATE } from "../../../../../../constants"


const { OFFER } = MODULES_PERMISSIONS


export const kanbanDelete = {
    path: "/delete-candidate",
    component: KanbanDeleteDialog,
    can: OFFER.permissions[DEACTIVATE]
}

export const kanbanShowCv = {
    path: "/show-cv/:cvParam",
    component: KanbanShowCVDialog,
    can: OFFER.permissions[VIEW]
}

export const shareCv = {
    path: "/share-cv/:cvParam",
    component: KanbanShareCvDialog,
    can: OFFER.permissions[VIEW]
}

export const offerCreateAppointmentDialog = {
    path: "/appointments/create",
    component: OfferAppointmentDialog,
    can: OFFER.permissions[CREATE]
}