import React, { useEffect } from "react"
import { injectIntl } from "react-intl"

import { ENDPOINTS } from "./../../store/constants"

import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { fetchlegalAgencyExtraData } from "./../../store/actions"

import { legalAgencyFields } from "./fields/legalAgencyFields"
import routesForm from "./../../routes/edit"
import {DisplayItems, LanguageTab, RenderItems, ShowView} from "../../../../../../components/partials"


const LegalAgencyDisplay = ({ params, history, goBackToList, intl }) => {

  const fields = legalAgencyFields({ intl })

  const dispatch = useDispatch()

  const { isFetching, error, item } = useSelector(
    (state) => ({
      isFetching: state.admin.legalAgency.isFetching,
      item: state.admin.legalAgency.legalAgency,
      error: state.admin.legalAgency.error,
    }),
    shallowEqual
  )

  const goToEdit = () => {
    history.push(routesForm.legalAgencyForm.path.replace(":param", params.param))
  }

  useEffect(() => {
    dispatch(fetchlegalAgencyExtraData(params))
  }, [])

  return (
    <ShowView
      title={ intl.formatMessage({ id: "LEGAL_AGENCY.SHOW.TITLE" }) }
      goBackTo={goBackToList}
      printURL={ENDPOINTS.LEGAL_AGENCY_EXPORT.replace(":param", params.param)}
      goToEdit={goToEdit}
    >
      <LanguageTab>

        { ({ isFr, isAr }) => (
          <DisplayItems
            error={error}
            isFetching={isFetching}
            object={item}
          >
            <RenderItems fields={fields} />
          </DisplayItems>
        ) }
      </LanguageTab>
    </ShowView>
  )
}

export default injectIntl(LegalAgencyDisplay)
