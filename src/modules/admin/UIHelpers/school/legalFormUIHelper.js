export const LEGAL_FORM = {
  1: "SCHOOL.LEGAL_FORM.COMPANY_FORM",
  2: "SCHOOL.LEGAL_FORM.INDIVIDUAL_FORM",
  3: "SCHOOL.LEGAL_FORM.ASSOCIATION_FORM",
}


export const legalFormUIHelper = (intl) =>
  Object.keys(LEGAL_FORM).map((key) => ({
    value: parseInt(key),
    label: intl.formatMessage({ id: LEGAL_FORM[key] }),
  }))
