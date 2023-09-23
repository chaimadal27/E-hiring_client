import React, { useEffect, useState } from "react"
import { injectIntl } from "react-intl"
import _ from "lodash"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { DataTable } from "../../../../../../components/partials"
import { useCandidatesUIContext } from "../../context/CandidatesUIContext"
import { searchCandidates } from "../../store/actions"
import candidateSearchFields from "./fields/candidateSearchFields"
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { IS_ACTIVATED } from "../../store/constants";

const CandidateSearchTable = ({ intl }) => {
    // Candidates UI Context
    const candidatesUIProps = useCandidatesUIContext()

    const columns = candidateSearchFields({ intl, candidatesUIProps })

    // Getting curret state of candidates list from store (Redux)
    const { totalSize = 0, candidates: entities = [], isFetching = false } = useSelector(
        (state) => ({
            candidates: state.admin.candidate.searchedCandidates,
            isFetching: state.admin.candidate.isFetching,
            totalSize: state.admin.candidate.totalSize,
        }),
        shallowEqual
    )

    // Candidates Redux state
    const dispatch = useDispatch()

    useEffect(() => {
        candidatesUIProps.setIds([])
        console.log(candidatesUIProps.queryParams)
        const size = _.size(candidatesUIProps.queryParams)
        if (size != 1) {
            dispatch(searchCandidates(candidatesUIProps.queryParams))
        }
        // eslint-disable-next-line
    }, [candidatesUIProps.queryParams, dispatch])

    const filterCompanyByDelete = () => {
        if (!candidatesUIProps.queryParams[IS_ACTIVATED]) {
            candidatesUIProps.setQueryParamsBase({ [IS_ACTIVATED]: 1 });
        } else {
            candidatesUIProps.setQueryParamsBase({ [IS_ACTIVATED]: 0 });
        }
    };
    // console.log(searchedCandidates)
    return (
        <>
            {/* <div className="text-right pb-2 pt-2">
        <FormControlLabel
          control={
            <Switch
              checked={Boolean(!candidatesUIProps.queryParams[IS_ACTIVATED])}
              onChange={filterCompanyByDelete}
              name=""
            />
          }
          label={intl.formatMessage({ id: "CANDIDATE.FILTER.DELETE" })}
        />
      </div> */}
            <DataTable
                isFetching={isFetching}
                entities={entities}
                columns={columns}
                totalSize={totalSize}
                queryParams={candidatesUIProps.queryParams}
                onQueryParamsChange={candidatesUIProps.setQueryParams}
                ids={candidatesUIProps.ids}
                setIds={candidatesUIProps.setIds}
             //   filter={filterFactory()}
            />
        </>
    );
}

export default injectIntl(CandidateSearchTable)
