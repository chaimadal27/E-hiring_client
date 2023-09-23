import { lazy } from "react"
import { UPDATE, MODULES_PERMISSIONS, VIEW, CREATE } from "../../../../constants"

const Offer = lazy(() => import("../../containers/offer/OfferNew"))
const OfferEdit = lazy(() => import("../../containers/offer/OfferEdit"))
const OfferShow = lazy(() => import("../../containers/offer/OfferShow"))
const OfferPage = lazy(() => import("../../containers/offer/OfferPage"))
const OfferKanban = lazy(() => import("../../containers/offer/OfferKanban"))
const OfferAppointments = lazy(() => import("../../containers/offer/OfferAppointment"))

const { OFFER } = MODULES_PERMISSIONS

export const offerCreate = {
    path: "/offers/new",
    component: Offer,
    can: OFFER.permissions[CREATE],
    exact: true,
}

export const offerEdit = {
    path: "/offers/:param/edit",
    component: OfferEdit,
    can: OFFER.permissions[UPDATE]
}

export const offerShow = {
    path: "/offers/:param/show",
    component: OfferShow,
    can: OFFER.permissions[VIEW]
}

export const offerKanban = {
    path: "/offers/:param/kanaban",
    component: OfferKanban,
    can: OFFER.permissions[VIEW]
}

export const offerList = {
    path: "/offers",
    component: OfferPage,
    can: OFFER.permissions[VIEW]
}

export const offerAppointments = {
    path: "/offers/:param/appointments",
    component: OfferAppointments,
    can: OFFER.permissions[VIEW]
}