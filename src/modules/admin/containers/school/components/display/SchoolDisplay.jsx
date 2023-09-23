import React, { useEffect } from "react"
import { injectIntl } from "react-intl"

import { ENDPOINTS } from "./../../store/constants"

import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { fetchSchoolExtraData } from "./../../store/actions"

import {  schoolFieldsAr, schoolFieldsFr, schoolFields } from "./fields/schoolFields"
import routesForm from "./../../routes/edit"
import {DisplayItems, LanguageTab, RenderItems, ShowView} from "../../../../../../components/partials"


const PersonalData = ({ params, history, goBackToList, intl }) => {

  const fieldsFr = schoolFieldsFr({ intl })
  const fieldsAr = schoolFieldsAr({ intl })
  const fields = schoolFields({ intl })
{console.log(fieldsAr)}
  const dispatch = useDispatch()

  const { isFetching, error, item } = useSelector(
    (state) => ({
      isFetching: state.admin.school.isFetching,
      item: state.admin.school.schoolExtraData,
      error: state.admin.school.error,
    }),
    shallowEqual
  )

  const goToEdit = () => {
    history.push(routesForm.schoolForm.path.replace(":param", params.param))
  }

  useEffect(() => {
    dispatch(fetchSchoolExtraData(params))
    // eslint-disable-next-line
  }, [])
 
  return (
    <ShowView
      title={ intl.formatMessage({ id: "SCHOOL.SHOW.TITLE" }) }
      goBackTo={goBackToList}
      //printURL={ENDPOINTS.EXPORT_SCHOOL.replace(":param", params.param)}
      goToEdit={goToEdit}
    >
      <LanguageTab>
        { ({ isFr, isAr }) => (
          <DisplayItems
            error={error}
            isFetching={isFetching}
            object={item}
          >
            <RenderItems fields={fieldsAr} show={isAr} />
            <RenderItems fields={fieldsFr} show={isFr} />
            <RenderItems fields={fields} />
          </DisplayItems>
        ) }
      </LanguageTab>
    </ShowView>
  )
}

export default injectIntl(PersonalData)
