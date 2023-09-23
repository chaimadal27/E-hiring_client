import React from "react"
import _ from "lodash"
import InputMaskBase from 'react-input-mask'
import MaterialInput from '@material-ui/core/Input';
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

const InputMask = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  inputGroupClassName = "form-group",
  inputClassName = "form-control",
  mask,
  type = "text",
  required = false,
  ...props
}) => {
  return (
    <div className={ inputGroupClassName }>
      {label && <label> { label} { (required && " *") }</label>}
      <InputMaskBase mask={mask} {...field}>
        {(inputProps) => <MaterialInput
          {...inputProps}
          className={`${inputClassName} ${getFieldCSSClasses(touched, errors, field.name)}` }
          autoComplete="off"
          disableUnderline
          {...props}
        />
        }
      </InputMaskBase>
      <FieldError fieldName={field.name} />
    </div>
  )
}


export default InputMask
