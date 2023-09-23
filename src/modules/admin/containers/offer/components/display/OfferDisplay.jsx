import React, { useEffect } from "react"
import { injectIntl } from "react-intl"

import { ENDPOINTS } from "./../../store/constants"

import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { fetchOfferExtraData } from "./../../store/actions"

import { offerFieldsAr, offerFieldsFr, offerFields } from "./fields/offerFields"
import routesForm from "./../../routes/edit"
import { DisplayItems, LanguageTab, RenderItems, ShowView } from "../../../../../../components/partials"


const PersonalData = ({ params, history, goBackToList, intl }) => {

  const fieldsFr = offerFieldsFr({ intl })
  const fieldsAr = offerFieldsAr({ intl })
  const fields = offerFields({ intl })
  const dispatch = useDispatch()

  const { isFetching, error, item } = useSelector(
    (state) => ({
      isFetching: state.admin.offer.isFetching,
      item: state.admin.offer.offerExtraData,
      error: state.admin.offer.error,
    }),
    shallowEqual
  )

  const goToEdit = () => {
    history.push(routesForm.offerForm.path.replace(":param", params.param))
  }

  useEffect(() => {
    dispatch(fetchOfferExtraData(params))
    // eslint-disable-next-line
  }, [])

  return (
    <ShowView
      title={intl.formatMessage({ id: "OFFER.SHOW.TITLE" })}
      goBackTo={goBackToList}
      //printURL={ENDPOINTS.EXPORT_SCHOOL.replace(":param", params.param)}
      goToEdit={goToEdit}
    >
      <LanguageTab>
        {({ isFr, isAr }) => (
          <DisplayItems
            error={error}
            isFetching={isFetching}
            object={item}
          >
            <RenderItems fields={fieldsAr} show={isAr} />
            <RenderItems fields={fieldsFr} show={isFr} />
            <RenderItems fields={fields} />
          </DisplayItems>
        )}
      </LanguageTab>
    </ShowView>
  )
}

export default injectIntl(PersonalData)
