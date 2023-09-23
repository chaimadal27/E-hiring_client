import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import _ from "lodash"

import BusinessUnitFormUpdate from "./components/form/BusinessUnitFormUpdate"
import { createBusinessUnit, clearStore, fetchBusinessUnit, editBusinessUnit } from "./store/actions"
import { useSubheader } from "../../../../components/layout"
import routes from "./../../routes"
import {FormView} from "../../../../components/partials"


const BusinessUnitEdit = ({ history, intl, match: { params } }) => {
  // Subheader
  const suhbeader = useSubheader()

  const _title = intl.formatMessage({ id: (_.isEmpty(params) ? "USER.NEW.TITLE" : "USER.EDIT.TITLE") })

  const dispatch = useDispatch()
  
  const { isLoading, success, error, businessUnitToEdit } = useSelector(
    (state) => ({
      isLoading: state.admin.businessUnit.isLoading,
      success: state.admin.businessUnit.success,
      businessUnitToEdit: state.admin.businessUnit.businessUnit,
      error: state.admin.businessUnit.error
    }),
    shallowEqual
  )

  const saveBusinessUnit = (fieldValues) => {
    const values = _.cloneDeep(fieldValues)
    if (!_.isEmpty(params)){
      dispatch(editBusinessUnit(params, values))
    }else {
      dispatch(createBusinessUnit(values))
    }
  }

  const goBackToBusinessUnitsList = () => {
    history.push(routes.businessUnitList.path)
  }

  useEffect(() => {
    suhbeader.setTitle(_title)
    if (!_.isEmpty(params)){
      dispatch(fetchBusinessUnit(params))
    }
  }, [params, intl, dispatch, suhbeader, _title])

  return (
    <FormView
      goBackTo={goBackToBusinessUnitsList}
      title={_title}
      onClose={clearStore}
      error={error}
      isLoading={isLoading}
      successMsg={[
        { condition: success.isUpdated, label: intl.formatMessage({ id: "BUSINESS_UNIT.EDIT.MSG" }) },
        { condition: success.isCreated, label: intl.formatMessage({ id: "BUSINESS_UNIT.NEW.MSG" }) }
      ]}
    >
      { ({ saveRef }) => (<BusinessUnitFormUpdate
        isLoading={isLoading}
        success={success.isCreated}
        onSubmit={saveBusinessUnit}
        businessUnit={!_.isEmpty(params) && businessUnitToEdit}
        saveRef={saveRef}
      />
      ) }
    </FormView>
  )
}


export default injectIntl(BusinessUnitEdit)
