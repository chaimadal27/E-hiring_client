import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import _ from "lodash"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { FormView, LanguageTab } from "../../../../../../components/partials/controls"

import { offerFieldsAr, offerFieldsFr, offerFields } from "./fields/offerFields"

import { DynamicForm, RenderFields } from "../../../../../../components/partials/controls"
import { editOffer, createOffer, fetchOfferExtraData } from "../../store/actions"

import routes from "../../routes/display"

const OfferForm = (props) => {

  const { intl, history, goBackToList, params = undefined } = props

  const dispatch = useDispatch()
  const { offerToEdit, success, isLoading } = useSelector(
    (state) => ({
      success: state.admin.offer.success,
      offerToEdit: state.admin.offer.offerExtraData,
      isLoading: state.admin.offer.isLoading,
    }),
    shallowEqual
  )

  useEffect(() => {
    if (!_.isEmpty(params)) {
      dispatch(fetchOfferExtraData(params))
    }
  }, [params, dispatch])

  const saveOffer = (values) => {
    /* console.log(fieldValues)
    const values = {
      ...fieldValues,
      recruiter: !_.isArray(fieldValues.recruiter) ? [fieldValues.recruiter] : fieldValues.recruiter
    }*/
    console.log(values)
    if (_.isEmpty(params)) {
      dispatch(createOffer(values))
    } else {
      dispatch(editOffer(params, values))
    }
  }

  const goToShow = () => {
    history.push(routes.offerDisplay.path.replace(":param", params.param))
  }

  const fieldsFr = offerFieldsFr({ intl })
  const fieldsAr = offerFieldsAr({ intl })
  const fields = offerFields({ intl })

  return (
    <FormView
      goBackTo={goBackToList}
      goToDisplay={!_.isEmpty(params) && goToShow}
      title={
        intl.formatMessage({ id: _.isEmpty(params) ? "OFFER.NEW.TITLE" : "OFFER.EDIT.TITLE" })
      }
      isLoading={isLoading}
    >
      { ({ saveRef }) => (
        <LanguageTab>
          { ({ isFr, isAr }) => (
            <DynamicForm
              className="mt-5"
              clearValuesAfterSubmit={success.isCreated}
              initialValues={!_.isEmpty(params) && offerToEdit}
              onSubmit={saveOffer}
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

export default injectIntl(OfferForm)
