import _ from "lodash"
import {sortCaret} from "../../../../../../../helpers"
import {activityTypeUIHelper} from "../../../../../UIHelpers"
import * as columnFormatters from "./../column-formatters"



const columns = ({ intl, activitiesUIProps }) => [
    {
	dataField: "activityName",
	text: intl.formatMessage({id:'ACTIVITY.INPUT.NAME'}),
	sort: true,
	sortCaret: sortCaret,
    },
    // {
	// dataField: "activityType",
	// loadOptions: activityTypeUIHelper,
	// text: intl.formatMessage({id:'ACTIVITY.INPUT.ACTIVITY_TYPE'}),
	// sort: true,
	// sortCaret: sortCaret,
    // },
  {
    dataField: "action",
    text: intl.formatMessage({
      id: "GENERAL.ACTIONS",
    }),
    formatter: columnFormatters.ActionsColumnFormatter,
    formatExtraData: activitiesUIProps,
    classes: "text-right pr-0",
    headerClasses: "text-right pr-3",
    style: {
      minWidth: "200px",
    },
  },
]


export default _.memoize(columns)
