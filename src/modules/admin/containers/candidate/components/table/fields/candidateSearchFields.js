import _ from 'lodash'
import { AR, FR } from '../../../../../../../constants'
import { sortCaret } from '../../../../../../../helpers'
import { getLang } from '../../../../../../../i18n'
import * as columnFormatters from './../column-formatters'
import { textFilter, selectFilter } from "react-bootstrap-table2-filter";
import { getOptions } from "../../../../../UIHelpers";


const columns = ({ intl, candidatesUIProps }) => [
    {
        dataField: "firstNameFr",
        text: intl.formatMessage({
            id: "CANDIDATE.INPUT.FIRST_NAME_FR",

        }),
       // filter: textFilter(),
        sort: true,
        sortCaret: sortCaret,
    },
    {
        dataField: "lastNameFr",
        text: intl.formatMessage({
            id: "CANDIDATE.INPUT.LAST_NAME_FR",

        }),
      //  filter: textFilter(),
        sort: true,
        sortCaret: sortCaret,
    },
    {
        dataField: "email",
        text: intl.formatMessage({
            id: "CANDIDATE.INPUT.EMAIL",

        }),
       // filter: textFilter(),
        sort: true,
        sortCaret: sortCaret,
    },

    {
        dataField: "status",
        text: intl.formatMessage({
            id: "CANDIDATE.INPUT.STATUS",
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
        formatter: columnFormatters.SearchCandidateActionsColumnFormatter,
        formatExtraData: candidatesUIProps,
        classes: "text-right pr-0",
        headerClasses: "text-right pr-3",
        style: {
            minWidth: "100px",
        },
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
];
export default _.memoize(columns)
