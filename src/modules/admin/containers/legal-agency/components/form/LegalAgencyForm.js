import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import _ from "lodash"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { FormRepeater, FormRepeaterFields, FormView, LanguageTab } from "../../../../../../components/partials/controls"

import { legalAgencyFields } from "./fields/legalAgencyFields"
import { legalAgencyBusinessUnitsFields } from "./fields/legalAgencyBusinessUnitsFields"

import { DynamicForm, RenderFields } from "../../../../../../components/partials/controls"
import { editLegalAgency, createLegalAgency, fetchlegalAgencyExtraData } from "../../store/actions"

import routes from "../../routes/display"

const LegalAgencyForm = (props) => {

  const { intl, history, goBackToList, params = undefined } = props

  const dispatch = useDispatch()
  const { legalAgencyToEdit, success, isLoading } = useSelector(
    (state) => ({
      success: state.admin.legalAgency.success,
      legalAgencyToEdit: state.admin.legalAgency.legalAgencyExtraData,
      isLoading: state.admin.legalAgency.isLoading,
    }),
    shallowEqual
  )

  useEffect(() => {
    if (!_.isEmpty(params)) {
      dispatch(fetchlegalAgencyExtraData(params))
    }
  }, [params, dispatch])

  const saveLegalAgency = (values) => {
    if (_.isEmpty(params)) {
      dispatch(createLegalAgency(values))
    } else {
      dispatch(editLegalAgency(params, values))
    }
  }

  const goToShow = () => {
    history.push(routes.legalAgencyDisplay.path.replace(":param", params.param))
  }


  const fields = legalAgencyFields({ intl })


  const businessunitsFiels = legalAgencyBusinessUnitsFields({ intl })

  return (
      <>
    <FormView
      goBackTo={goBackToList}
      goToDisplay={!_.isEmpty(params) && goToShow}
      title={
        intl.formatMessage({ id: _.isEmpty(params) ? "LEGAL_AGENCY.NEW.TITLE" : "LEGAL_AGENCY.NEW.MSG" })
      }
      isLoading={isLoading}
    >
      { ({ saveRef }) => (
        <LanguageTab>
          { ({ isFr, isAr }) => (
            <DynamicForm
              className="mt-5"
              clearValuesAfterSubmit={success.isCreated}
              initialValues={!_.isEmpty(params) && legalAgencyToEdit}
              onSubmit={saveLegalAgency}
            >
             
              <RenderFields fields={fields} show={true} />

              <FormRepeater max={10} min={1} labelbtn={intl.formatMessage({ id: "LEGAL_AGENCY.INPUT.BUSINESS_UNIT" })}>
               
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

export default injectIntl(LegalAgencyForm)
