import React from "react"
import _ from "lodash"
import FieldError from "./FieldError"


const getFieldCSSClasses = (touched, errors, fieldName) => {
  const fieldError = _.get(errors, fieldName, false)
  const fieldTouched = _.get(touched, fieldName, false)

  const classes = ["form-control"]
  if (fieldError && fieldTouched) {
    classes.push("is-invalid")
  }

  if (fieldTouched && !fieldError) {
    classes.push("is-valid")
  }

  return classes.join(" ")
}


const Textarea = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  inputGroupClassName = "form-group",
  inputClassName = "form-control",
  withFeedbackLabel = true,
  customFeedbackLabel,
  required = false,
  ...props
}) => {


  return (
    <div className={ inputGroupClassName }>
      {label && <label>{label} { (required && " *") }</label>}
      <textarea
        className={`${inputClassName} ${getFieldCSSClasses(touched, errors, field.name)}` }
        {...field}
        {...props}
      />
      <FieldError fieldName={field.name} />
    </div>
  )
}


export default Textarea
