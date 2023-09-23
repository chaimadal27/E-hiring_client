import React from "react"
import { injectIntl } from "react-intl"

import resourceStateFields from "./fields/resourceStateFields"
import { DynamicForm } from "./../../../../../../components/partials/controls"

const ResourceStateForm = (props) => {

  const { onSubmit, resourceState, success, saveRef, intl } = props

  const fields = resourceStateFields({ intl })

  return (
    <>
      <DynamicForm
        initialValues={resourceState}
        onSubmit={onSubmit}
        clearValuesAfterSubmit={success}
        fields={fields}
      >
        <button ref={saveRef} className="d-none" type="submit"></button>
      </DynamicForm>
    </>
  )
}

export default injectIntl(ResourceStateForm)
