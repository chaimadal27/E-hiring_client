export const OFFERS = "/api/offers"
export const OFFER = "/api/offers/:param"

export const EXPORT_OFFERS = "/api/offers/export"
export const EXPORT_OFFER = "/api/offers/:param/print"
export const ROUTE_OF_JUSTFIED = "/api/offers/:param/justified"

export const OFFER_ACTIVATE = "/api/offers/:param/activate"
export const OFFER_DEACTIVATE = "/api/offers/:param/deactivate"
export const OFFER_CLOSE = "/api/offers/:param/close"
export const OFFER_VALIDATE = "/api/offers/:param/validate"

export const OFFER_DELETE = "/api/offers/:param/delete"
export const OFFER_UNDELETE = "/api/offers/:param/undelete"

export const OFFERS_ACTIVATE = "/api/offers/activate"
export const OFFERS_DEACTIVATE = "/api/offers/deactivate"

export const OFFERS_UNDELETE = "/api/offers/undelete"
export const OFFERS_DELETE = "/api/offers/delete"

//Appointments
export const OFFER_APPOINTMENTS_LIST = "/api/offers/:param/appointments"
export const OFFER_APPOINTMENTS = "/api/appointments"
export const OFFER_APPOINTMENT = "/api/appointments/:param"
export const DELETE_APPOINTEMENT = "/api/appointment/:param/deactivate"
export const APPOINTMENT = "/api/myself/appointments/2"


// kanban
export const OFFER_KANBAN = "/api/kanban"
export const KANBAN_CANDIDATES = "/api/kanban/candidates?offer=:param"
export const DELETE_KANBAN = "/api/kanban/delete?id=:param"
export const SHARE_CV = "/api/candidates/shareCv?id=:param"