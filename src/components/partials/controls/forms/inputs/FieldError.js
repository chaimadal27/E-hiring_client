import React from "react"
import { FormattedMessage } from "react-intl"
import { ErrorMessage } from "formik"


const FieldError = ({ fieldName }) => {

  return <ErrorMessage name={fieldName}>
    {(msg) =>
      <div className="invalid-feedback"><FormattedMessage { ...JSON.parse(msg) } /></div>
    }
  </ErrorMessage>
}

export default FieldError
