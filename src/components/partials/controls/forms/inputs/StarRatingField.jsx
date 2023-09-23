import React, { useState } from 'react'
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Box from '@material-ui/core/Box';
import FieldError from "./FieldError"
import { useFormikContext } from "formik"


const StarRating = ({
  field,
  form,
  label,
  required = false,
  defaultValue = 0,
  precision = 0.5,
  disabled = false,
  inputGroupClassName = "form-group",
}) => {
  const formik = useFormikContext()
  const [value, setValue] = React.useState(defaultValue);

  const onChange = (event, newValue) => {
    console.log(newValue, field.name)
    setValue(newValue)
    form.setFieldValue(field.name, newValue)
    console.log(field.value)
  }

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        {label && <label>{label} {required && "*"}</label>}
        <br></br>
        <Rating
          name="customized-empty"
          defaultValue={defaultValue}
          value={value}
          precision={precision}
          disabled={disabled}
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
          size="large"
          onChange={onChange}
        />
      </Box>
      <FieldError fieldName={field.name} />
    </div>
  );
}


export default StarRating
