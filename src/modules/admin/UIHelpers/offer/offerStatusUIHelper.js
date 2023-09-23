export const OFFER_STATUS = {
    1: "En cours de validation",
    2: "En traitement",
    3: "Clôturé/Gagné",
}

export const OFFER_STATUS_COLOR = {
    1: "primary",
    2: "success",
    3: "danger",
}

export const offerTypeUIHelper = (intl) =>
    Object.keys(OFFER_STATUS).map((key) => ({
        value: parseInt(key),
        label: intl.formatMessage({ id: OFFER_STATUS[key] }),
    }))
