import React, { useEffect, useState } from "react"
import { injectIntl } from "react-intl"
import _ from "lodash"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { DataTable } from "../../../../../../components/partials"
import { useCandidatesUIContext } from "../../context/CandidatesUIContext"
import { fetchCandidates } from "../../store/actions"
import candidateFields from "./fields/candidateFields"
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { IS_ACTIVATED } from "../../store/constants";

const CandidateTable = ({ intl }) => {
  // Candidates UI Context
  const candidatesUIProps = useCandidatesUIContext()

  const columns = candidateFields({ intl, candidatesUIProps })

  // Getting curret state of candidates list from store (Redux)
  const { totalSize, candidates: entities = [], isFetching = false } = useSelector(
    (state) => ({
      candidates: state.admin.candidate.candidates,
      isFetching: state.admin.candidate.isFetching,
      totalSize: state.admin.candidate.totalSize,
    }),
    shallowEqual
  )

  // Candidates Redux state
  const dispatch = useDispatch()

  useEffect(() => {
    candidatesUIProps.setIds([])
    dispatch(fetchCandidates(candidatesUIProps.queryParams))
    // eslint-disable-next-line
  }, [candidatesUIProps.queryParams, dispatch])

  const filterCompanyByDelete = () => {
    if (!candidatesUIProps.queryParams[IS_ACTIVATED]) {
      candidatesUIProps.setQueryParamsBase({ [IS_ACTIVATED]: 1 });
    } else {
      candidatesUIProps.setQueryParamsBase({ [IS_ACTIVATED]: 0 });
    }
  };

  return (
    <>

      <DataTable
        isFetching={isFetching}
        entities={entities}
        columns={columns}
        totalSize={totalSize}
        queryParams={candidatesUIProps.queryParams}
        onQueryParamsChange={candidatesUIProps.setQueryParams}
        ids={candidatesUIProps.ids}
        setIds={candidatesUIProps.setIds}

      />
    </>
  );
}

export default injectIntl(CandidateTable)
