import OfferEnableDialog from "./../../components/dialog/OfferEnableDialog"
import OffersEnableDialog from "./../../components/dialog/OffersEnableDialog"
import OfferDisableDialog from "./../../components/dialog/OfferDisableDialog"
import OffersDisableDialog from "./../../components/dialog/OffersDisableDialog"
import OfferCloseDialog from "./../../components/dialog/OfferCloseDialog"
import OfferValidateDialog from "./../../components/dialog/OfferValidateDialog"



import { MODULES_PERMISSIONS, ACTIVATE, DEACTIVATE } from "../../../../../../constants"


const { OFFER } = MODULES_PERMISSIONS


export const offerEnable = {
  path: "/enable-offer/:param",
  component: OfferEnableDialog,
  can: OFFER.permissions[ACTIVATE]
}


export const offerDisable = {
  path: "/disable-offer/:param",
  component: OfferDisableDialog,
  can: OFFER.permissions[DEACTIVATE]
}
export const offerValidate = {
  path: "/validate-offer/:param",
  component: OfferValidateDialog,
  can: OFFER.permissions[ACTIVATE]
}
export const offersDisable = {
  path: "/disable-offers",
  component: OffersDisableDialog,
  can: OFFER.permissions[DEACTIVATE]
}

export const offersEnable = {
  path: "/enable-offers",
  component: OffersEnableDialog,
  can: OFFER.permissions[ACTIVATE]
}

export const offerClose = {
  path: "/cloturer-offer/:param",
  component: OfferCloseDialog,
  can: OFFER.permissions[DEACTIVATE]
}