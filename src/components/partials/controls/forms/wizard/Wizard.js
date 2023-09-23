import React, { useState } from "react"
import { FormattedMessage } from "react-intl"
import { Form, Formik, FastField } from "formik"
import _ from "lodash"
import * as Yup from "yup";
import { isRLTLang } from "./../../../../../i18n"
import { makeStyles, withStyles } from "@material-ui/core/styles"
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepConnector from '@material-ui/core/StepConnector'
import StepLabel from "@material-ui/core/StepLabel"

import { Button } from "react-bootstrap"
import { createYupSchema } from "../../../../../helpers"
import { Row, Col } from "react-bootstrap"
import { FORM_COMPONENT, DEFAULT_TYPE } from "./../types/inputTypes"


const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: `calc(${!isRLTLang() ? '-' : ''}50% + 20px)`,
    right: `calc(${isRLTLang() ? '-' : ''}50% + 20px)`
  },
  active: {
    '& $line': {
      borderColor: '#27c191',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#27c191',
    },
  },
  line: {
    borderColor: '#3699FF',
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector)

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  iconContainer: { // define styles for icon container
    transform: 'scale(1.7)',
  },
  icon: {
    color: "rgb(125, 129, 153)"
  },
  completed: {
    color: "lightgreen",
    display: 'inline-block'
  },
  active: {
    color: "#3699FF !important"
  },
  text: {
    fill: "white",
    fontWeight: "bold"
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}))

const Wizard = ({ children, initialValues = {}, onSubmit, fields = [] }) => {

  const steps = React.Children.toArray(children)
  const classes = useStyles()
  const [stepNumber, setStepNumber] = useState(0)


  const step = steps[stepNumber]
  const totalSteps = steps.length
  const isLastStep = stepNumber === totalSteps - 1

  const next = values => {
    console.log(values)
    setSnapshot({ ...values, ...snapshot })
    setStepNumber(Math.min(stepNumber + 1, totalSteps - 1))
  }

  const previous = values => {
    console.log(values)
    setSnapshot({ ...values, ...snapshot })
    setStepNumber(Math.max(stepNumber - 1, 0))
  }

  const handleSubmit = async (values, bag) => {
    if (step.props.onSubmit) {
      await step.props.onSubmit(values, bag)
    }
    if (isLastStep) {
      return onSubmit(values, bag)
    } else {
      bag.setTouched({})
      next(values)
    }
  }
  const renderField = _.memoize(({ name, component, ...props }) => (
    <FastField
      name={name}
      component={FORM_COMPONENT[component] || DEFAULT_TYPE}
      {...props}
    />
  ))

  const renderFields = React.useMemo(() => !_.isEmpty(fields) && (<Row>
    {fields.map((input, i) => {
      const { size = "12", validation, ...field } = input
      return (
        <Col key={i} lg={size}>
          { renderField(field)}
        </Col>
      )
    })}
  </Row>), [fields, renderField, step])

  /* const fieldsValidation = React.useMemo(() => {
    const allFields = [...fields, ...fieldConstraints]
    return createYupSchema(allFields)
  }, [fields, fieldConstraints]) */

  ///////////////////////////////////////////////
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
  }, [children, step])

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
  const initialSnapshot = React.useMemo(() => {
    const snapshot = {}
    const allFields = [...fields, ...nestedFields]
    console.log(allFields)
    //let arrayIndex = 0
    allFields.forEach(field => {
      if (!field.name.includes("[]")) {
        _.set(snapshot, field.name, _.get(initialValues, field.name, _.get(field, "initialValue", "")))
      }/*else {
        //const snapshotArray = _.get(initialValues, field.name.substr(0, field.name.indexOf([])), [])
        const fieldName = field.name.replace("[]", `[${arrayIndex}]`)
        _.set(snapshot, fieldName, _.get(initialValues, fieldName, _.get(field, "initialValue", "")) )
        //arrayIndex++
      }*/
    })
    return { ...snapshot, ...initialValues }
    // eslint-disable-next-line
  }, [fields, initialValues, nestedFields, step])
  const [snapshot, setSnapshot] = useState(initialSnapshot)
  console.log(snapshot, initialSnapshot)

  /////////////////////////////////////////////

  const fieldsValidation = React.useMemo(() => {
    //console.log(_.isArray(step.props.chidren.props))
    if (_.isArray(_.get(step, "props.fields"))) {
      return createYupSchema(step.props.fields)
    }
    else {
      return createYupSchema(step.props.children.props.fields)
    }
  }, [step])

  return (
    <Formik
      initialValues={initialSnapshot}
      enableReinitialize={true}
      onSubmit={handleSubmit}
      //validationSchema={Yup.isSchema(validationSchema) ? validationSchema : fieldsValidation}
      validationSchema={fieldsValidation}
    >
      {formik => (
        <Form>
          <div className={classes.root}>
            <Stepper alternativeLabel className={classes.root} activeStep={stepNumber} connector={<QontoConnector />}>
              {steps.map(({ props: { label } }, i) => (
                <Step key={i} completed={isLastStep || stepNumber > i}>
                  <StepLabel classes={{ iconContainer: classes.iconContainer }} StepIconProps={{
                    classes: {
                      root: classes.icon,
                      completed: classes.completed,
                      active: classes.active,
                      text: classes.text
                    }
                  }} > {label} </StepLabel>
                </Step>
              ))}
            </Stepper>
            <div>
            </div>
          </div>
          {step}
          <div className="d-flex justify-content-between pt-4">
            <div>
              {stepNumber > 0 && (
                <Button
                  color="danger"
                  onClick={() => previous(formik.values)}
                >
                  <FormattedMessage id="GENERAL.BACK" />
                </Button>
              )}
            </div>
            <div>
              <Button
                disabled={formik.isSubmitting}
                type="submit"
                color="primary"
              >
                {isLastStep ? <FormattedMessage id="GENERAL.SAVE" /> : <FormattedMessage id="GENERAL.NEXT" />}
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}


export default Wizard
