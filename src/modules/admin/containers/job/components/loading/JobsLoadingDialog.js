import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector } from "react-redux"
import { LoadingDialog } from "./../../../../../../components/partials/controls"

const JobsLoadingDialog = ({ intl }) => {
  const { isLoading } = useSelector(
    state => ({ isLoading: state.admin.job.isFetching }),
    shallowEqual
  )
  useEffect(() => { }, [isLoading])
  return <LoadingDialog isLoading={isLoading} text={intl.formatMessage({ id: "GENERAL.LOADING" })} />
}


export default injectIntl(JobsLoadingDialog)
