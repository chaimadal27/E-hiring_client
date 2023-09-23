import React, { useEffect, useState } from "react"
import _ from "lodash"
import { useFormikContext } from "formik"
import FieldError from "./FieldError"

const getFieldCSSClasses = (touched, errors, fieldName) => {
  const fieldError = _.get(errors, fieldName, false)
  const fieldTouched = _.get(touched, fieldName, false)

  const classes = ["form-control"]
  if (fieldTouched && fieldError) {
    classes.push("is-invalid")
  }

  if (fieldTouched && !fieldError) {
    classes.push("is-valid")
  }

  return classes.join(" ")
}

const Input = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  inputGroupClassName = "form-group",
  inputClassName = "form-control",
  type = "text",
  required = false,
  maxLength = 256,
  hide = false,
  hideOn,
  form,
  condition = true,
  ...props
}) => {

  const formik = useFormikContext()
  const [show, setShow] = useState(hide)

  useEffect(() => {
    const field = _.get(formik.values, hideOn, false)
    setShow(hide && field !== condition)

    // eslint-disable-next-line
  }, [formik])

  useEffect(() => {
    if (!show && formik.dirty) {
      form.setFieldValue(field.name, "")
    }

    // eslint-disable-next-line
  }, [show])

  return (
    <div className={inputGroupClassName + (show ? ' d-none' : ' ')}>
      {label && <label> {label} {(required && " *")}</label>}
      <input
        type={type}
        className={`${inputClassName} ${getFieldCSSClasses(touched, errors, field.name)}`}
        autoComplete="off"
        maxLength={maxLength}
        {...field}
        value={field.value || ''}
        {...props}
      />
      <FieldError fieldName={field.name} />
    </div>
  )
}


export default Input
