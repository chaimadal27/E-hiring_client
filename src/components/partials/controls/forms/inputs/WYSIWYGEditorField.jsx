import React from "react"
import _ from "lodash"
import FieldError from "./FieldError"
import { Editor } from "@tinymce/tinymce-react"

import {toAbsoluteUrl} from "../../../../../helpers"
import { getLang } from "./../../../../../i18n"
import {Card} from "react-bootstrap"


const getFieldCSSClasses = (touched, errors, fieldName) => {
  const fieldError = _.get(errors, fieldName, false)
  const fieldTouched = _.get(touched, fieldName, false)

  const classes = []
  if (fieldTouched && fieldError) {
    classes.push("is-invalid")
  }

  if (fieldTouched && !fieldError) {
    classes.push("is-valid")
  }

  return classes.join(" ")
}

const EmailEditorField = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors, setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  inputGroupClassName = "form-group",
  inputClassName = "form-control",
  ...props
}) => {

  return (
    <div className={ inputGroupClassName }>
      {label && <label> {label}</label>}
      <Card style={{ zIndex: 0 }} className={getFieldCSSClasses(touched, errors, field.name)}>
        <Editor
          value={field.value}
          textareaName={field.name}
          tinymceScriptSrc={toAbsoluteUrl("/plugins/tinymce/tinymce.min.js")}
          init={{
            height: 400,
            menubar: true,
            language: getLang(),
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount"
            ],
            toolbar: "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help"
          }}
          {...props}
          onEditorChange={(value) => setFieldValue(field.name, value) }
        />
      </Card>
      <FieldError fieldName={field.name} />
    </div>
  )
}


export default EmailEditorField
