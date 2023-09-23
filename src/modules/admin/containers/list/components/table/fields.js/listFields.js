import _ from "lodash";
import { sortCaret } from "../../../../../../../helpers";
import * as columnFormatters from "./../column-formatters";
//import filterFactory, { textFilter } from "react-bootstrap-table2-filter";


const columns = ({ intl, listsUIProps }) => [
  {
    dataField: "name",
    text: intl.formatMessage({
      id: "LIST.INPUT.NAME",
    }),
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "action",
    text: "Actions",
    formatter: columnFormatters.ListActionsColumnFormatter,
    formatExtraData: listsUIProps,
    classes: "text-right pr-0",
    headerClasses: "text-right pr-3",
    style: {
      minWidth: "100px",
    },
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
];
export default _.memoize(columns);
