import React, { useEffect } from "react"
import { injectIntl } from "react-intl"

import { ENDPOINTS } from "./../../store/constants"

import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { fetchListExtraData } from "./../../store/actions"

import { listFields } from "./fields/listFields"
import routesForm from "./../../routes/edit"
import {DisplayItems, LanguageTab, RenderItems, ShowView} from "../../../../../../components/partials"


const PersonalData = ({ params, history, goBackToList, intl }) => {

  const fields = listFields({ intl })

  const dispatch = useDispatch()

  const { isFetching, error, item } = useSelector(
    (state) => ({
      isFetching: state.admin.list.isFetching,
      item: state.admin.list.listExtraData,
      error: state.admin.list.error,
    }),
    shallowEqual
  )

  const goToEdit = () => {
    history.push(routesForm.listForm.path.replace(":param", params.param))
  }

  useEffect(() => {
    dispatch(fetchListExtraData(params))
    // eslint-disable-next-line
  }, [])

  return (
    <ShowView
      title={ intl.formatMessage({ id: "LIST.SHOW" }) }
      goBackTo={goBackToList}
      //printURL={ENDPOINTS.EXPORT_PARTNERSHIP.replace(":param", params.param)}
      goToEdit={goToEdit}
    >
          <DisplayItems
            error={error}
            isFetching={isFetching}
            object={item}
          >
            <RenderItems fields={fields} />
          </DisplayItems>

    </ShowView>
  )
}

export default injectIntl(PersonalData)
