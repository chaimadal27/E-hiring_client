import React from "react"
import _ from "lodash"
import { Button, Col, Row, ButtonGroup } from "react-bootstrap"
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useFormikContext, FieldArray, setFieldValue } from "formik"

const FormRepeater = (props) => {
  const { children, labelbtn, label, min = 1, max = 500, show = true, sortable = false } = props

  const formik = useFormikContext()

  const nestedFields = React.useMemo(() => {
    const formChildrens = [React.Children.toArray(children)]
    let fields = []

    while (formChildrens.length > 0) {
      const formChildren = formChildrens.pop()
      for (const child of formChildren) {
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


  const fieldArrayName = React.useMemo(() => {
    const field = nestedFields[0] || ""
    return field.name.substring(0, field.name.lastIndexOf("[]"))
  }, [nestedFields])

  const arrayFieldValues = React.useMemo(() => {
    return _.get(formik.values, fieldArrayName, [])
  }, [formik.values, fieldArrayName])

  const initialSnapshot = React.useMemo(() => {
    const snapshot = {}
    nestedFields.forEach(field => {
      _.set(snapshot, field.name.substring(field.name.lastIndexOf("[]") + 1), _.get(field, "initialValue", ""))
    })
    return snapshot
  }, [nestedFields])

  const MoveItemUp = (event) => {
    const index = parseInt(event.target.value);
    if (arrayFieldValues.length == 1 || index == 0) { }
    else {
      const option1 = formik.values.optionSet[index].value
      const option2 = formik.values.optionSet[index - 1].value
      formik.setFieldValue(`optionSet[${index}].value`, option2, false)
      formik.setFieldValue(`optionSet[${index - 1}].value`, option1, false)
    }
  }

  const MoveItemDown = (event) => {
    const index = parseInt(event.target.value);
    if (arrayFieldValues.length == 1 || index == arrayFieldValues.length - 1) { }
    else {
      const option1 = formik.values.optionSet[index].value
      const option2 = formik.values.optionSet[index + 1].value
      formik.setFieldValue(`optionSet[${index}].value`, option2, false)
      formik.setFieldValue(`optionSet[${index + 1}].value`, option1, false)
    }
  }

  /*   const AddRank = (index) => {
      console.log(index)
      formik.setFieldValue(`optionSet[${index - 1}].rank`, index, false)
    } */


  return (
    <div className={!show ? "d-none" : ""}>
      <FieldArray
        name={fieldArrayName}
        render={arrayHelpers => {

          if (_.isArray(arrayFieldValues) && arrayFieldValues.length < min) {
            for (let i = 0; i < min; i++) {
              arrayHelpers.push(initialSnapshot)
            }
          }
          return (
            <div>
              <Button
                disabled={_.isArray(arrayFieldValues) && arrayFieldValues.length >= max}
                className="btn btn-sm font-weight-bold btn-primary"
                onClick={() => _.isArray(arrayFieldValues) && arrayFieldValues.length < max && arrayHelpers.push(initialSnapshot)}
              >
                <i className="fas fa-plus" />
                {labelbtn}
              </Button>
              {(_.has(formik.values, fieldArrayName) && _.isArray(arrayFieldValues)) && arrayFieldValues.map((__, index) => (
                <>
                  <div className="mt-5 border-bottom" key={index}>
                    {/* {console.log(arrayFieldValues[0])} */}
                    <Row>
                      {sortable ? (
                        <Col lg="1" ><ButtonGroup vertical size="sm" className="d-flex align-items-center justify-content-center" >
                          <Button className="btn btn-icon btn-outline-primary" style={{ height: "19px", marginTop: "26px" }} value={index} onClick={MoveItemUp}>&#9650;</Button>
                          <Button className="btn btn-icon btn-outline-primary" style={{ height: "19px" }} value={index} onClick={MoveItemDown}>&#9660;</Button>
                        </ButtonGroup>
                        </Col>) : ""}
                      <Col lg={sortable ? "10" : "11"} >
                        <Row className="d-flex align-items-end">
                          {React.Children.map(children, child => React.cloneElement(child, { index }, null))}
                        </Row>
                      </Col>
                      <Col lg="1" className="d-flex align-items-center justify-content-center">
                        <Button
                          disabled={min > 0 ? _.isArray(arrayFieldValues) && arrayFieldValues.length === min : false}
                          className="btn btn-sm font-weight-bold btn-danger btn-icon"
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          <i className="fas fa-trash-alt" />
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </>))}
            </div>
          )
        }}
      />
    </div >
  )
}

export default FormRepeater
