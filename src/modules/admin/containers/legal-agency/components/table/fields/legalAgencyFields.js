import _ from "lodash"
import { AR, FR } from "../../../../../../../constants"
import { sortCaret } from '../../../../../../../helpers'
import { getLang } from '../../../../../../../i18n'
import * as columnFormatters from "./../column-formatters"

const LEGAL_AGENCY_NAME_VALUE = {
    [FR]:"agencyName"
}
const LEGAL_AGENCY_NAME_LABEL = {
    [FR]:"LEGAL_AGENCY_NAME"
}

const LEGAL_AGENCY_EMAIL_VALUE = {
    [FR]:"agencyEmail"
}
const LEGAL_AGENCY_EMAIL_LABEL = {
    [FR]:"LEGAL_AGENCY_EMAIL"
}

const LEGAL_AGENCY_ADDRESS_VALUE = {
    [FR]:"agencyAddress"
}
const LEGAL_AGENCY_ADDRESS_LABEL = {
    [FR]:"LEGAL_AGENCY_ADDRESS"
}

const LEGAL_AGENCY_LEGAL_STATUS_VALUE = {
    [FR]:"agencyLegalStatus"
}
const LEGAL_AGENCY_LEGAL_STATUS_LABEL = {
    [FR]:"LEGAL_AGENCY_LEGAL_STATUS"
}

const columns = ({intl, legalAgenciesUIProps}) => [
    {
        dataField: LEGAL_AGENCY_NAME_VALUE[getLang()],
        text: intl.formatMessage({
            id: LEGAL_AGENCY_NAME_LABEL[getLang()],
        }),
        sort: true,
        sortCaret: sortCaret
    },
    {
        dataField: LEGAL_AGENCY_EMAIL_VALUE[getLang()],
        text: intl.formatMessage({
            id: LEGAL_AGENCY_EMAIL_LABEL[getLang()],
        }),
        sort: true,
        sortCaret: sortCaret
    },
    {
        dataField: LEGAL_AGENCY_ADDRESS_VALUE[getLang()],
        text: intl.formatMessage({
            id: LEGAL_AGENCY_ADDRESS_LABEL[getLang()],
        }),
        sort: true,
        sortCaret: sortCaret
    },
    {
        dataField: LEGAL_AGENCY_LEGAL_STATUS_VALUE[getLang()],
        text: intl.formatMessage({
            id: LEGAL_AGENCY_LEGAL_STATUS_LABEL[getLang()],
        }),
        sort: true,
        sortCaret: sortCaret
    },
    {
        dataField: "action",
        text: intl.formatMessage({
            id:"GENERAL.ACTIONS",
        }),
        formatter: columnFormatters.LegalAgencyActionsColumnFormatter,
        formatExtraData: legalAgenciesUIProps,
        classes: "text-right pr-0",
        headerClasses: "text-right pr-3",
        style: {
            minWidth: "200px",
        },
    }
]

export default _.memoize(columns)