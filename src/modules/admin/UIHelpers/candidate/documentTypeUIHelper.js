export const DOCUMENT_TYPE = {
    1: "Curriculum vitae",
    2: "Lettre de motivation",
    3: "Certificat",
    4: "Autre",
}


export const documentTypeUIHelper = (intl) =>
    Object.keys(DOCUMENT_TYPE).map((key) => ({
        value: parseInt(key),
        label:  DOCUMENT_TYPE[key] ,

    }))
