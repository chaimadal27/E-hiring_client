import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { DataTable } from "../../../../../../components/partials"
import { useOffersUIContext } from "../../context/OffersUIContext"
import { fetchOffers } from "../../store/actions"
import offerFields from "./fields/offerFields"
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { IS_ACTIVATED } from "../../store/constants";



const OfferTable = ({ intl }) => {
  // Offers UI Context
  const offersUIProps = useOffersUIContext()

  const columns = offerFields({ intl, offersUIProps })

  // Getting curret state of offers list from store (Redux)
  const { totalSize, offers: entities = [], isFetching = false } = useSelector(
    (state) => ({
      offers: state.admin.offer.offers,
      isFetching: state.admin.offer.isFetching,
      totalSize: state.admin.offer.totalSize,
    }),
    shallowEqual
  )

  // Offers Redux state
  const dispatch = useDispatch()

  useEffect(() => {
    offersUIProps.setIds([])
    dispatch(fetchOffers(offersUIProps.queryParams))

    // eslint-disable-next-line
  }, [offersUIProps.queryParams, dispatch])

  const filterCompanyByDelete = () => {
    if (!offersUIProps.queryParams[IS_ACTIVATED]) {
      offersUIProps.setQueryParamsBase({ [IS_ACTIVATED]: 1 });
    } else {
      offersUIProps.setQueryParamsBase({ [IS_ACTIVATED]: 0 });
    }
  };

  return (
    <>
      {/* <div className="text-right pb-2 pt-2">
        <FormControlLabel
          control={
            <Switch
              checked={Boolean(!offersUIProps.queryParams[IS_ACTIVATED])}
              onChange={filterCompanyByDelete}
              name=""
            />
          }
          label={intl.formatMessage({ id: "offer.FILTER.DELETE" })}
        />
      </div>  */}
      <DataTable
        isFetching={isFetching}
        entities={entities}
        columns={columns}
        totalSize={totalSize}
        queryParams={offersUIProps.queryParams}
        onQueryParamsChange={offersUIProps.setQueryParams}
        ids={offersUIProps.ids}
        setIds={offersUIProps.setIds}
       // filter={filterFactory()}
      />
    </>
  );
}

export default injectIntl(OfferTable)
