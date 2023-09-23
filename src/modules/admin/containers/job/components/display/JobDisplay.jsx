import React, { useEffect } from "react"
import { injectIntl } from "react-intl"

import { ENDPOINTS } from "./../../store/constants"

import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { fetchJobExtraData } from "./../../store/actions"

import { jobFieldsAr, jobFieldsFr, jobFields } from "./fields/jobFields"
import routesForm from "./../../routes/edit"
import { DisplayItems, LanguageTab, RenderItems, ShowView } from "../../../../../../components/partials"


/* const PersonalData = ({ params, history, goBackToList, intl }) => {*/

const PersonalData = ({ item = {}, error, isFetching, intl }) => {

  const fieldsFr = jobFieldsFr({ intl })
  const fieldsAr = jobFieldsAr({ intl })
  const fields = jobFields({ intl })

  /*   const dispatch = useDispatch()
  
    const { isFetching, error, item } = useSelector(
      (state) => ({
        isFetching: state.admin.job.isFetching,
        item: state.admin.job.jobExtraData,
        error: state.admin.job.error,
      }),
      shallowEqual
    )
  
    const goToEdit = () => {
      history.push(routesForm.jobForm.path.replace(":param", params.param))
    }
  
    useEffect(() => {
      dispatch(fetchJobExtraData(params))
      // eslint-disable-next-line
    }, []) */

  return (
    /*  <ShowView
       title={intl.formatMessage({ id: "JOB.SHOW.TITLE" })}
       goBackTo={goBackToList}
       printURL={ENDPOINTS.EXPORT_JOB.replace(":param", params.param)}
       goToEdit={goToEdit}
     > */
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
    /* </ShowView> */
  )
}

export default injectIntl(PersonalData)
