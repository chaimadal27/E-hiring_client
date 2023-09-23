import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { useBusinessUnitsUIContext } from "../../context/BusinessUnitsContext"
import { fetchBusinessUnits } from "../../store/actions"
import businessUnitColumn from "./fields/businessUnitFields"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Switch from "@material-ui/core/Switch"
import {IS_DELETED} from "../../store/constants"
import {DataTable} from "../../../../../../components/partials"

const BusinessUnitTable = ({ intl }) => {
  const businessUnitsUIProps = useBusinessUnitsUIContext()

  const columns = businessUnitColumn({ intl, businessUnitsUIProps })

  const { totalSize, businessUnits: entities = [], isFetching } = useSelector(
    (state) => ({
      businessUnits: state.admin.businessUnit.businessUnits,
      isFetching: state.admin.businessUnit.isFetching,
      totalSize: state.admin.businessUnit.totalSize,
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchBusinessUnits(businessUnitsUIProps.queryParams))
    businessUnitsUIProps.setIds([])
  }, [businessUnitsUIProps.queryParams, dispatch])

  const filterBusinessUnitByDelete = () => {
    if (businessUnitsUIProps.queryParams[IS_DELETED]){
      businessUnitsUIProps.setQueryParamsBase({[IS_DELETED]: 0})
    }else {
      businessUnitsUIProps.setQueryParamsBase({[IS_DELETED]: 1})
    }
  }

  return (
    <>
      <div className="text-right pb-2 pt-2">
        <FormControlLabel
          control={<Switch checked={Boolean(businessUnitsUIProps.queryParams[IS_DELETED])} onChange={filterBusinessUnitByDelete} name="" />}
          label={ intl.formatMessage({ id: "BUSINESS_UNIT.FILTER.DELETE" }) }
        />
      </div>
      <DataTable
        isFetching={isFetching}
        entities={entities}
        columns={columns}
        totalSize={totalSize}
        queryParams={businessUnitsUIProps.queryParams}
        onQueryParamsChange={businessUnitsUIProps.setQueryParams}
        ids={businessUnitsUIProps.ids}
        setIds={businessUnitsUIProps.setIds}
      />
    </>
  )
}

export default injectIntl(BusinessUnitTable)
