import _ from "lodash"
import {AR, FR} from "../../../../../../../constants"
import {sortCaret} from "../../../../../../../helpers"
import {getLang} from "../../../../../../../i18n"
import * as columnFormatters from "./../column-formatters"

const BUSINESS_UNIT_NAME_FIELD = {
    [FR]:"businessUnitName"
}
const BUSINESS_UNIT_NAME_TEXT = {
    [FR]:"BUSINESS_UNIT_NAME"
}
const BUSINESS_UNIT_MANAGER_FIELD = {
    [FR]:"businessUnitManager"
}
const BUSINESS_UNIT_MANAGER_TEXT = {
    [FR]:"BUSINESS_UNIT_MANAGER"
}
const BUSINESS_UNIT_LEGAL_AGENCY_FIELD = {
    [FR]:"legalAgency"
}
const BUSINESS_UNIT_LEGAL_AGENCY_TEXT = {
    [FR]:"BUSINESS_UNIT_LEGAL_AGENCY"
}


const columns = ({intl, businessUnitsUIProps}) => [
    {
        dataField:"businessUnitName",
        text: intl.formatMessage({
            id: BUSINESS_UNIT_NAME_TEXT[getLang()],
        }),
        sort: true,
        sortCaret: sortCaret,
    },
    {
        dataField: "action",
        text: intl.formatMessage({
            id:"GENERAL.ACTIONS"
        }),
        formatter: columnFormatters.ActionsColumnFormatter,
        formatExtraData: businessUnitsUIProps,
        classes: "text-right pr-0",
        headerClasses: "text-right pr-3",
        style: {
            minWidth: "200px",
        },
    },
]
export default _.memoize(columns)
