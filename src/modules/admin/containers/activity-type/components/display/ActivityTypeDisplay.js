import React, { useEffect } from "react"
import { injectIntl } from "react-intl"

import { ENDPOINTS } from "./../../store/constants"

import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { fetchactivityTypeExtraData } from "./../../store/actions"

import { activityTypeFields } from "./fields/activityTypeFields"
import routesForm from "./../../routes/edit"
import {DisplayItems, LanguageTab, RenderItems, ShowView} from "../../../../../../components/partials"


const ActivityTypeDisplay = ({ params, history, goBackToList, intl }) => {

  const fields = activityTypeFields({ intl })

  const dispatch = useDispatch()

  const { isFetching, error, item } = useSelector(
    (state) => ({
      isFetching: state.admin.activityType.isFetching,
      item: state.admin.activityType.activityType,
      error: state.admin.activityType.error,
    }),
    shallowEqual
  )

  const goToEdit = () => {
    history.push(routesForm.activityTypeForm.path.replace(":param", params.param))
  }

  useEffect(() => {
    dispatch(fetchactivityTypeExtraData(params))
  }, [])

  return (
    <ShowView
      title={ intl.formatMessage({ id: "ACTIVITY_TYPE.SHOW.TITLE" }) }
      goBackTo={goBackToList}
      printURL={ENDPOINTS.ACTIVITY_TYPE_EXPORT.replace(":param", params.param)}
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

export default injectIntl(ActivityTypeDisplay)
