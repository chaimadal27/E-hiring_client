import _ from 'lodash'
import { AR, FR } from '../../../../../../../constants'
import { sortCaret } from '../../../../../../../helpers'
import { getLang } from '../../../../../../../i18n'
import * as columnFormatters from './../column-formatters'
import { textFilter, selectFilter } from "react-bootstrap-table2-filter";
import { getOptions } from "../../../../../UIHelpers";

const SCHOOL_SHORT_NAME_VALUE = {
  [AR]: "shortNameAr",
  [FR]: "shortNameFr"
}
const SCHOOL_LONG_NAME_VALUE = {
  [AR]: "longNameAr",
  [FR]: "longNameFr"
}
const SCHOOL_SHORT_NAME_LABEL = {
  [AR]: "SCHOOL.INPUT.SHORT_NAME_AR",
  [FR]: "SCHOOL.INPUT.SHORT_NAME_FR"
}
const SCHOOL_LONG_NAME_LABEL = {
  [AR]: "SCHOOL.INPUT.LONG_NAME_AR",
  [FR]: "SCHOOL.INPUT.LONG_NAME_FR"
}
const PARTNER_TYPE_VALUE = {
  [AR]: "type",
  [FR]: "type",
};
const PARTNER_COUNTRY_VALUE = {
  [AR]: "country",
  [FR]: "country",
};

let options = {}
let loadoptions = getOptions("Type de l'école")
const Setoptions = (result) => { options = result }
loadoptions(Setoptions)

const columns = ({ intl, schoolsUIProps }) => [
  {
    dataField: SCHOOL_SHORT_NAME_VALUE[getLang()],
    text: intl.formatMessage({
      id: SCHOOL_SHORT_NAME_LABEL[getLang()],

    }),
    //filter: textFilter(),
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: SCHOOL_LONG_NAME_VALUE[getLang()],
    text: intl.formatMessage({
      id: SCHOOL_LONG_NAME_LABEL[getLang()],
    }),
  //  filter: textFilter(),
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: PARTNER_TYPE_VALUE[getLang()],
    text: intl.formatMessage({
      id: "SCHOOL.INPUT.TYPE",
    }),
    // filter: selectFilter({
    //   options: options
    // }),
    sort: true,
    formatter: columnFormatters.SchoolTypeColumnFormatter,
    sortCaret: sortCaret,
  },
  {
    dataField: PARTNER_COUNTRY_VALUE[getLang()],
    text: intl.formatMessage({
      id: "SCHOOL.INPUT.ADDRESS_FR",
    }),
  //  filter: textFilter(),
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "isActive",
    text: intl.formatMessage({
      id: "SCHOOL.INPUT.STATUS",
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
    formatter: columnFormatters.SchoolActionsColumnFormatter,
    formatExtraData: schoolsUIProps,
    classes: "text-right pr-0",
    headerClasses: "text-right pr-3",
    style: {
      minWidth: "100px",
    },
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
];
export default _.memoize(columns)
