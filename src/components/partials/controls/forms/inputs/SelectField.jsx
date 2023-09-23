import React, { useEffect, useState, useMemo } from "react"
import { FormattedMessage } from "react-intl"
import _ from "lodash"
import ReactSelect from "react-select"
import { useFormikContext } from "formik"
import FieldError from "./FieldError"

const getFieldCSSClasses = (touched, errors, fieldName) => {

  const errorField = _.get(errors, fieldName, false)
  const touchedField = _.get(touched, fieldName, false)

  const classes = [] //["form-control", "form-control-solid"]
  if (touchedField && errorField) {
    classes.push("is-invalid-select")
  }

  if (touchedField && !errorField) {
    classes.push("is-valid-select")
  }

  return classes.join(" ")
}

const Select = ({
  label,
  placeholder,
  onInputChange,
  options = [],
  multiple = false,
  chainedOptions,
  loadOptions,
  initialValue = undefined,
  saveOptions,
  required = false,
  field,
  form,
  hide = false,
  hideOn,
  condition = true,
  inputGroupClassName = "form-group",
}) => {

  const formik = useFormikContext()
  const [selectedOptions, setSelectedOptions] = useState([])
  const [show, setShow] = useState(hide)

  const onSelectChange = (option) => {
    let choices = ""
    if (!_.isArray(option) && _.has(option, "value")) {
      choices = option.value
    } else if (_.isArray(option)) {
      choices = option.map((choice) => choice.value)
    }
    form.setFieldValue(field.name, choices)
  }

  useEffect(() => {
    let choices = []
    if (!_.isArray(field.value) && field.value && _.isArray(selectedOptions)) {
      choices.push(selectedOptions.find(option => option.value === field.value))
    }
    if (_.isArray(field.value) && _.isArray(selectedOptions)) {
      choices = selectedOptions.filter(option => field.value.includes(option.value))
    }
    if (!_.isEmpty(saveOptions) && !_.isEmpty(choices) && formik.dirty && _.isPlainObject(saveOptions)) {
      form.setFieldValue(
        saveOptions.ref,
        _.flatten(_.map(choices, saveOptions.attr))
      )
    }
    if (!_.isEmpty(saveOptions) && !_.isEmpty(choices) && formik.dirty && _.isArray(saveOptions)) {
      saveOptions.forEach((field) => {
        let value = _.map(choices, field.attr)
        if (!_.every(value, _.isEmpty)) {
          value = _.flatten(value)
          form.setFieldValue(field.ref, _.isFunction(field.formatter) ? field.formatter(value) : value)
        }
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [field.value])

  useEffect(() => {
    if (_.isPlainObject(field.value) && _.has(field.value, "id")) {
      form.setFieldValue(field.name, _.get(field.value, "id", ""))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_.isPlainObject(field.value)])

  useEffect(() => {
    if (_.isFunction(loadOptions) && _.isEmpty(selectedOptions)) {
      loadOptions(setSelectedOptions)
    }
    if (options && _.isEmpty(selectedOptions)) {
      setSelectedOptions(options)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (_.isString(hideOn) && hide) {
      const field = _.get(formik.values, hideOn, false)
      setShow(hide && _.isArray(condition) ? !condition.includes(field) : field !== condition)
    }

    //  eslint-disable-next-line
  }, [formik, show])

  useEffect(() => {
    if (!show && (form.dirty || field.value !== initialValue)) {
      form.setFieldValue(field.name, initialValue)
    }
    //  eslint-disable-next-line
  }, [show])

  useEffect(() => {

    if (!show && _.isFunction(chainedOptions)) {
      chainedOptions(setSelectedOptions, formik.values)
    }

    //  eslint-disable-next-line
  }, [formik.values, chainedOptions, show])

  const selectedValues = useMemo(() => {
    //console.log(selectedOptions)
    if (!_.isArray(field.value) && _.isArray(selectedOptions)) {
      return selectedOptions.find(option => option.value === field.value)
    }
    if (_.isArray(field.value) && _.isArray(selectedOptions)) {
      return selectedOptions.filter(option => field.value.includes(option.value))
    }
    return field.value || (multiple ? [] : "")
  }, [field.value, selectedOptions, multiple])

  onInputChange = () => {
    if (_.isFunction(loadOptions)) {
      loadOptions(setSelectedOptions)
    }
  }

  //   <div className={inputGroupClassName}>
  return (
    <div className={inputGroupClassName + (show ? " d-none" : " ")}>
      { label && <label>{label} {required && "*"}</label>}
      <ReactSelect
        className={getFieldCSSClasses(form.touched, form.errors, field.name)}
        placeholder={placeholder}
        options={selectedOptions}
        name={field.name}
        value={selectedValues || ""}
        onChange={onSelectChange}
        onBlur={field.onBlur}
        onInputChange={onInputChange}
        isMulti={multiple}
        noOptionsMessage={() => <FormattedMessage id="GENERAL.SELECT.NO_OPTIONS" />}
        isSearchable
        isClearable
      />
      <FieldError fieldName={field.name} />
    </div>
  )
}


export default Select
