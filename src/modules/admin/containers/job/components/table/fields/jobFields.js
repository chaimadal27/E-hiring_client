import _ from 'lodash'
import { AR, FR } from '../../../../../../../constants'
import { sortCaret } from '../../../../../../../helpers'
import { getLang } from '../../../../../../../i18n'
import * as columnFormatters from './../column-formatters'
import { textFilter, selectFilter } from "react-bootstrap-table2-filter";
import { getOptions } from "../../../../../UIHelpers";



const JOB_NAME_VALUE = {
  [AR]: "nameAr",
  [FR]: "nameFr"
}

const JOB_NAME_LABEL = {
  [AR]: "JOB.INPUT.NAME_AR",
  [FR]: "JOB.INPUT.NAME_FR"
}

const JOB_DESCRIPTION_VALUE = {
  [AR]: "descriptionAr",
  [FR]: "descriptionFr"
}

const JOB_DESCRIPTION_LABEL = {
  [AR]: "JOB.INPUT.DESCRIPTION_AR",
  [FR]: "JOB.INPUT.DESCRIPTION_FR"
}


const columns = ({ intl, jobsUIProps }) => [
  {
    dataField: JOB_NAME_VALUE[getLang()],
    text: intl.formatMessage({
      id: JOB_NAME_LABEL[getLang()],

    }),
   // filter: textFilter(),
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: JOB_DESCRIPTION_VALUE[getLang()],
    text: intl.formatMessage({
      id: JOB_DESCRIPTION_LABEL[getLang()],

    }),
    //filter: textFilter(),
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "isActive",
    text: intl.formatMessage({
      id: "JOB.INPUT.STATUS",
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
    formatter: columnFormatters.JobActionsColumnFormatter,
    formatExtraData: jobsUIProps,
    classes: "text-right pr-0",
    headerClasses: "text-right pr-3",
    style: {
      minWidth: "100px",
    },
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
];
export default _.memoize(columns)
