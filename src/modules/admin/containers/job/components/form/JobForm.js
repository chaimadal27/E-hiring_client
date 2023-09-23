import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import _ from "lodash"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { FormRepeater, FormRepeaterFields, FormView, LanguageTab } from "../../../../../../components/partials/controls"

import { jobCategoryFieldsAr, jobCategoryFieldsFr } from "./fields/jobCategoryFields"
import { jobFieldsAr, jobFieldsFr } from "./fields/jobFields"

import { DynamicForm, RenderFields } from "../../../../../../components/partials/controls"
import { editJob, createJob, fetchJobExtraData } from "../../store/actions"

import routes from "../../../../routes"

const JobForm = (props) => {

  const { intl, history, goBackToList, params = undefined } = props

  const dispatch = useDispatch()
  const { jobToEdit, success, isLoading } = useSelector(
    (state) => ({
      success: state.admin.job.success,
      jobToEdit: state.admin.job.jobExtraData,
      isLoading: state.admin.job.isLoading,
    }),
    shallowEqual
  )

  useEffect(() => {
    if (!_.isEmpty(params)) {
      dispatch(fetchJobExtraData(params))
    }
  }, [params, dispatch])

  const saveJob = (values) => {
    if (_.isEmpty(params)) {
      dispatch(createJob(values))
    } else {
      dispatch(editJob(params, values))
    }
  }

  const goToShow = () => {
    history.push(routes.jobShow.path.replace(":param", params.param))
  }

  const fieldsFr = jobCategoryFieldsFr({ intl })
  const fieldsAr = jobCategoryFieldsAr({ intl })


  const jobfieldsFr = jobFieldsFr({ intl })
  const jobfieldsAr = jobFieldsAr({ intl })


  return (
    <FormView
      goBackTo={goBackToList}
      goToDisplay={!_.isEmpty(params) && goToShow}
      title={
        intl.formatMessage({ id: _.isEmpty(params) ? "JOB.NEW.TITLE" : "JOB.EDIT.TITLE" })
      }
      isLoading={isLoading}
    >
      { ({ saveRef }) => (
        <LanguageTab>
          { ({ isFr, isAr }) => (
            <DynamicForm
              className="mt-5"
              clearValuesAfterSubmit={success.isCreated}
              initialValues={!_.isEmpty(params) && jobToEdit}
              onSubmit={saveJob}
            >
              <RenderFields fields={fieldsFr} show={isFr} />
              <RenderFields fields={fieldsAr} show={isAr} />

              <FormRepeater max={500} min={1} labelbtn={intl.formatMessage({ id: "JOB.INPUT.CONTACT" })}>
                <FormRepeaterFields fields={jobfieldsFr} show={isFr} />
                <FormRepeaterFields fields={jobfieldsAr} show={isAr} />

              </FormRepeater>

              <button ref={saveRef} className="d-none" type="submit"></button>
            </DynamicForm>
          )}
        </LanguageTab>
      )}
    </FormView>
  )
}

export default injectIntl(JobForm)
