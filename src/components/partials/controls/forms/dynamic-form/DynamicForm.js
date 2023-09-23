import React, { useEffect, useState } from "react"
import _ from "lodash"
import * as Yup from "yup"
import { Formik, Form, FastField } from "formik"
import { Row, Col } from "react-bootstrap"

import { FORM_COMPONENT, DEFAULT_TYPE } from "./../types/inputTypes"
import { createYupSchema, getStorage, setStorage } from "../../../../../helpers"


const DynamicForm = (props) => {

  const {
    children,
    fields = [],
    className,
    saveForm = false,
    clearValuesAfterSubmit,
    saveFormName = "",
    validationSchema,
    reset = false,
    onChange,
    onSubmit,
    initialValues = {}
  } = props

  const [savedValues, setSavedValues] = useState([])
  const [formikForm, setFormikForm] = useState(null)

  useEffect(() => {
    if (saveForm) {
      setSavedValues(getStorage(saveFormName))
    }

    // eslint-disable-next-line
  }, [])

  const nestedFields = React.useMemo(() => {
    const formChildrens = [React.Children.toArray(children)]
    let fields = []

    while (formChildrens.length > 0) {
      const formChildren = formChildrens.pop()
      for (let child of formChildren) {
        if (!_.isEmpty(child) && _.isArray(_.get(child, "props.fields", false))) {
          fields = [...fields, ..._.get(child, "props.fields", [])]
        }
        if (!_.isEmpty(child) && _.isArray(_.get(child, "props.children", false))) {
          formChildrens.push(_.get(child, "props.children", []))
        }
      }
    }
    return fields
  }, [children])

  const saveFormValues = (values) => {
    setStorage(saveFormName, values)
    setSavedValues(values)
  }

  const fieldConstraints = React.useMemo(() => {
    const formChildrens = [React.Children.toArray(children)]
    let fields = []

    while (formChildrens.length > 0) {
      const formChildren = formChildrens.pop()
      for (let child of formChildren) {
        if (!_.isEmpty(child) && _.isArray(_.get(child, "props.fields", false)) && _.get(child, "props.show", false)) {
          fields = [...fields, ..._.get(child, "props.fields", [])]
        }
        if (!_.isEmpty(child) && _.isArray(_.get(child, "props.children", false))) {
          formChildrens.push(_.get(child, "props.children", []))
        }
      }
    }
    return fields
  }, [children])

  const renderField = _.memoize(({ name, component, ...props }) => (
    <FastField
      name={name}
      component={FORM_COMPONENT[component] || DEFAULT_TYPE}
      {...props}
    />
  ))

  const fieldsValidation = React.useMemo(() => {
    const allFields = [...fields, ...fieldConstraints]
    return createYupSchema(allFields)
  }, [fields, fieldConstraints])

  const renderFields = React.useMemo(() => !_.isEmpty(fields) && (<Row>
    {fields.map((input, i) => {
      const { size = "12", validation, ...field } = input
      return (
        <Col key={i} lg={size}>
          { renderField(field)}
        </Col>
      )
    })}
  </Row>), [fields, renderField])

  const initialSnapshot = React.useMemo(() => {
    const snapshot = {}
    const allFields = [...fields, ...nestedFields]
    //let arrayIndex = 0
    allFields.forEach(field => {
      if (!field.name.includes("[]")) {
        //console.log(field, _.get(field, "initialValue", ""))
        _.set(snapshot, field.name, _.get(initialValues, field.name, _.get(field, "initialValue", "")))
      }/*else {
        //const snapshotArray = _.get(initialValues, field.name.substr(0, field.name.indexOf([])), [])
        const fieldName = field.name.replace("[]", `[${arrayIndex}]`)
        _.set(snapshot, fieldName, _.get(initialValues, fieldName, _.get(field, "initialValue", "")) )
        //arrayIndex++
      }*/
    })

    if (saveForm && _.isEmpty(initialValues)) {
      return { ...snapshot, ...savedValues }
    }
    return { ...snapshot, ...initialValues }

    // eslint-disable-next-line
  }, [fields, initialValues, savedValues, nestedFields])

  const handleSubmit = (values) => {
    console.log(values)
    onSubmit(values)
  }

  //console.log(initialSnapshot)

  useEffect(() => {
    if (formikForm && clearValuesAfterSubmit && !reset) {
      if (saveForm) {
        saveFormValues({})
      }
      formikForm.resetForm(initialSnapshot)
    }
    // eslint-disable-next-line
  }, [clearValuesAfterSubmit, reset, formikForm])

  return (
    <>
      <Formik
        enableReinitialize={true}
        onSubmit={handleSubmit}
        onChange={onChange}
        onReset={reset && handleSubmit}
        validationSchema={Yup.isSchema(validationSchema) ? validationSchema : fieldsValidation}
        initialValues={initialSnapshot}
        enableReinitialize={true}
      >
        {(form) => {
          if (saveForm && _.isEmpty(initialValues) && form.dirty) {
            saveFormValues(form.values)
          }
          if (_.isEmpty(formikForm) && !form.dirty) {
            setFormikForm(form)
          }
          return (
            <Form className={className} onSubmit={form.handleSubmit}>
              { renderFields}
              { children}
            </Form>
          )
        }}
      </Formik>
    </>
  )
}

export default DynamicForm
