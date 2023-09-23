import _ from 'lodash'
import { AR, FR } from '../../../../../../../constants'
import { sortCaret } from '../../../../../../../helpers'
import { getLang } from '../../../../../../../i18n'
import * as columnFormatters from './../column-formatters'
import { textFilter, selectFilter } from "react-bootstrap-table2-filter";
import { getOptions } from "../../../../../UIHelpers";




const columns = ({ intl, offersUIProps }) => [
  {
    dataField: 'title',
    text: intl.formatMessage({
      id: "OFFER.INPUT.TITLE_FR",

    }),
    //filter: textFilter(),
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: 'startDate',
    text: intl.formatMessage({
      id: "OFFER.INPUT.START_DATE",
    }),
   // filter: textFilter(),
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: 'endDate',
    text: intl.formatMessage({
      id: "OFFER.INPUT.END_DATE",
    }),
   // filter: textFilter(),
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: 'client',
    text: intl.formatMessage({
      id: "OFFER.INPUT.CLIENT",
    }),
    //filter: textFilter(),
    formatter: columnFormatters.OfferClientColumnFormatter,
    sort: true,
    sortCaret: sortCaret,
  },
  /* {
    dataField: 'country',
    text: intl.formatMessage({
      id: "Pays",
    }),
    filter: textFilter(),
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: 'region',
    text: intl.formatMessage({
      id: "Région",
    }),
    filter: textFilter(),
    sort: true,
    sortCaret: sortCaret,
  }, */
  {
    dataField: "status",
    text: intl.formatMessage({
      id: "OFFER.INPUT.STATUS",
    }),
    formatter: columnFormatters.StatusColumnFormatter,
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "action",
    text: intl.formatMessage({
      id: "GENERAL.ACTIONS",
    }),
    formatter: columnFormatters.OfferActionsColumnFormatter,
    formatExtraData: offersUIProps,
    classes: "text-right pr-0",
    headerClasses: "text-right pr-3",
    style: {
      minWidth: "100px",
    },
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
];
export default _.memoize(columns)
