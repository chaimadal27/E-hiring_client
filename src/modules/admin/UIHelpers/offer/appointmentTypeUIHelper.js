export const APPOINTMENT_TYPE = {
    1: "Entretien Téléphonique",
    2: "Entretien physique",
    3: "Entretien Visio",
    4: "RDV Téléphonique",
}


export const appointmentTypeUIHelper = (intl) =>
    Object.keys(APPOINTMENT_TYPE).map((key) => ({
        value: parseInt(key),
        label: intl.formatMessage({ id: APPOINTMENT_TYPE[key] }),
    }))
