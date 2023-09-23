import { useLegalAgenciesUIContext } from "../../context/LegalAgenciesUIContext"
import { fetchLegalAgencies } from "../../store/actions"
import legalAgencyFields from "./fields/legalAgencyFields"
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { IS_ACTIVATED } from "../../store/constants";
import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import {DataTable} from "../../../../../../components/partials"

const LegalAgencyTable = ({ intl }) => {
  const legalAgenciesUIProps = useLegalAgenciesUIContext()

  const columns = legalAgencyFields({ intl, legalAgenciesUIProps })

  const { totalSize, legalAgencies: entities = [], isFetching = false } = useSelector(
    (state) => ({
      legalAgencies: state.admin.legalAgency.legalAgencies,
      isFetching: state.admin.legalAgency.isFetching,
      totalSize: state.admin.legalAgency.totalSize,
    }),
    shallowEqual
  )


  const dispatch = useDispatch()

  useEffect(() => {
    legalAgenciesUIProps.setIds([])
    dispatch(fetchLegalAgencies(legalAgenciesUIProps.queryParams))

  }, [legalAgenciesUIProps.queryParams, dispatch])

  const filterCompanyByDelete = () => {
    if (!legalAgenciesUIProps.queryParams[IS_ACTIVATED]) {
      legalAgenciesUIProps.setQueryParamsBase({ [IS_ACTIVATED]: 1 });
    } else {
      legalAgenciesUIProps.setQueryParamsBase({ [IS_ACTIVATED]: 0 });
    }
  };

  return (
    <>
      <div className="text-right pb-2 pt-2">
        <FormControlLabel
          control={
            <Switch
              checked={Boolean(legalAgenciesUIProps.queryParams[IS_ACTIVATED])}
              onChange={filterCompanyByDelete}
              name=""
            />
          }
          label={intl.formatMessage({ id: "LEGAL_AGENCY.FILTER.DELETE" })}
        />
      </div>
      <DataTable
        isFetching={isFetching}
        entities={entities}
        columns={columns}
        totalSize={totalSize}
        queryParams={legalAgenciesUIProps.queryParams}
        onQueryParamsChange={legalAgenciesUIProps.setQueryParams}
        ids={legalAgenciesUIProps.ids}
        setIds={legalAgenciesUIProps.setIds}

      />

    </>
  );
}

export default injectIntl(LegalAgencyTable)
