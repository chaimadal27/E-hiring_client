export const SCHOOL_ASSOCIATE_SERVICE_STATE = {
  1: "SCHOOL.ASSOCIATE_SERVICE_STATE.IN_PROGRESS",
  2: "SCHOOL.ASSOCIATE_SERVICE_STATE.SUSPENDED",
  3: "SCHOOL.ASSOCIATE_SERVICE_STATE.FINISHED",
  4: "SCHOOL.ASSOCIATE_SERVICE_STATE.PERMANENT"
}

export const SCHOOL_ASSOCIATE_SERVICE_STATE_COLOR = {
  1: "success",
  2: "danger",
  3: "warning",
  4: "primary"
}

export const schoolServiceStateUIHelper = (intl) =>
  Object.keys(SCHOOL_ASSOCIATE_SERVICE_STATE).map((key) => ({
    value: parseInt(key),
    label: intl.formatMessage({ id: SCHOOL_ASSOCIATE_SERVICE_STATE[key] }),
  }))
