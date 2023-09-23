import React, {useEffect} from "react"
import { injectIntl } from "react-intl"
import {shallowEqual, useSelector} from "react-redux"
import {LoadingDialog} from "./../../../../../../components/partials/controls"

const ActivitiesLoadingDialog = ({ intl }) => {
  const { isLoading } = useSelector(
    state => ({ isLoading: state.admin.activity.isFetching }),
    shallowEqual
  )
  useEffect(() => {}, [isLoading])
  return <LoadingDialog isLoading={isLoading} text={ intl.formatMessage({ id: "GENERAL.LOADING"}) } />
}


export default injectIntl(ActivitiesLoadingDialog)
