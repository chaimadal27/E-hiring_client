import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import _ from "lodash"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { FormRepeater, FormRepeaterFields, FormView, LanguageTab } from "../../../../../../components/partials/controls"

import { activityTypeFields } from "./fields/activityTypeFields"
import { activityTypeActivityFields } from "./fields/activityTypeActivitiesFields"

import { DynamicForm, RenderFields } from "../../../../../../components/partials/controls"
import { editActivityType, createActivityType, fetchactivityTypeExtraData } from "../../store/actions"

import routes from "../../routes/display"

const ActivityTypeForm = (props) => {

  const { intl, history, goBackToList, params = undefined } = props

  const dispatch = useDispatch()
  const { activityTypeToEdit, success, isLoading } = useSelector(
    (state) => ({
      success: state.admin.activityType.success,
      activityTypeToEdit: state.admin.activityType.activityTypeExtraData,
      isLoading: state.admin.activityType.isLoading,
    }),
    shallowEqual
  )

  useEffect(() => {
    if (!_.isEmpty(params)) {
      dispatch(fetchactivityTypeExtraData(params))
    }
  }, [params, dispatch])

  const saveActivityType = (values) => {
    if (_.isEmpty(params)) {
      dispatch(createActivityType(values))
    } else {
      dispatch(editActivityType(params, values))
    }
  }

  const goToShow = () => {
    history.push(routes.activityTypeDisplay.path.replace(":param", params.param))
  }


  const fields = activityTypeFields({ intl })


  const businessunitsFiels = activityTypeActivityFields({ intl })

  return (
      <>
    <FormView
      goBackTo={goBackToList}
      goToDisplay={!_.isEmpty(params) && goToShow}
      title={
        intl.formatMessage({ id: _.isEmpty(params) ? "ACTIVITY_TYPE.NEW.TITLE" : "ACTIVITY_TYPE.NEW.MSG" })
      }
      isLoading={isLoading}
    >
      { ({ saveRef }) => (
        <LanguageTab>
          { ({ isFr, isAr }) => (
            <DynamicForm
              className="mt-5"
              clearValuesAfterSubmit={success.isCreated}
              initialValues={!_.isEmpty(params) && activityTypeToEdit}
              onSubmit={saveActivityType}
            >
             
              <RenderFields fields={fields} show={true} />

              <FormRepeater max={10} min={1} labelbtn={intl.formatMessage({ id: "ACTIVITY_TYPE.INPUT.ACTIVITY" })}>
               
                <FormRepeaterFields fields={businessunitsFiels} show={true} />
              </FormRepeater>

              <button ref={saveRef} className="d-none" type="submit"></button>
            </DynamicForm>
          )}
        </LanguageTab>
      )}
    </FormView>
      </>
  )
}

export default injectIntl(ActivityTypeForm)
