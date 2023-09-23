import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import _ from "lodash"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { FormView, LanguageTab } from "../../../../../../components/partials/controls"

import { schoolFieldsAr, schoolFieldsFr, schoolFields } from "./fields/schoolFields"

import { DynamicForm, RenderFields } from "../../../../../../components/partials/controls"
import { editSchool, createSchool, fetchSchoolExtraData } from "../../store/actions"

import routes from "../../routes/display"

const SchoolForm = (props) => {

  const { intl, history, goBackToList, params = undefined } = props

  const dispatch = useDispatch()
  const { schoolToEdit, success, isLoading } = useSelector(
    (state) => ({
      success: state.admin.school.success,
      schoolToEdit: state.admin.school.schoolExtraData,
      isLoading: state.admin.school.isLoading,
    }),
    shallowEqual
  )

  useEffect(() => {
    if (!_.isEmpty(params)) {
      dispatch(fetchSchoolExtraData(params))
    }
  }, [params, dispatch])

  const saveSchool = (values) => {
    if (_.isEmpty(params)) {
      dispatch(createSchool(values))
    } else {
      dispatch(editSchool(params, values))
    }
  }

  const goToShow = () => {
    history.push(routes.schoolDisplay.path.replace(":param", params.param))
  }

  const fieldsFr = schoolFieldsFr({ intl })
  const fieldsAr = schoolFieldsAr({ intl })
  const fields = schoolFields({ intl })

  return (
    <FormView
      goBackTo={goBackToList}
      goToDisplay={!_.isEmpty(params) && goToShow}
      title={
        intl.formatMessage({ id: _.isEmpty(params) ? "SCHOOL.NEW.TITLE" : "SCHOOL.EDIT.TITLE" })
      }
      isLoading={isLoading}
    >
      { ({ saveRef }) => (
        <LanguageTab>
          { ({ isFr, isAr }) => (
            <DynamicForm
              className="mt-5"
              clearValuesAfterSubmit={success.isCreated}
              initialValues={!_.isEmpty(params) && schoolToEdit}
              onSubmit={saveSchool}
            >
              <RenderFields fields={fieldsFr} show={isFr} />
              <RenderFields fields={fieldsAr} show={isAr} />
              <RenderFields fields={fields} show={true} />

              <button ref={saveRef} className="d-none" type="submit"></button>
            </DynamicForm>
          )}
        </LanguageTab>
      )}
    </FormView>
  )
}

export default injectIntl(SchoolForm)
