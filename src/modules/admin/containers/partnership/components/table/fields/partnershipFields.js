import _ from 'lodash'
import { AR, FR } from '../../../../../../../constants'
import { sortCaret } from '../../../../../../../helpers'
import { getLang } from '../../../../../../../i18n'
import * as columnFormatters from './../column-formatters'
import { getOptions } from "../../../../../UIHelpers";

const PARTNER_LOGO_VALUE = {
  [AR]: "logo",
  [FR]: "logo",
};

const PARTNER_NAME_VALUE = {
  [AR]: "nameAr",
  [FR]: "nameFr"
}

const PARTNER_NAME_LABEL = {
  [AR]: "PARTNERSHIP.INPUT.NAME_AR",
  [FR]: "PARTNERSHIP.INPUT.NAME_FR"
}

const PARTNER_ACTIVITY_VALUE = {
  [AR]: "activityAr",
  [FR]: "activityFr"
}

const PARTNER_ACTIVITY_LABEL = {
  [AR]: "PARTNERSHIP.INPUT.ACTIVITY_AR",
  [FR]: "PARTNERSHIP.INPUT.ACTIVITY_FR"
}
const PARTNER_EMAIL_VALUE = {
  [AR]: "email",
  [FR]: "email",
};
const PARTNER_PHONE_VALUE = {
  [AR]: "telephone",
  [FR]: "telephone",
};

let options = {}
let loadoptions = getOptions("Secteur d'activité")
const Setoptions = (result) => { options = result }
loadoptions(Setoptions)

const columns = ({ intl, partnershipsUIProps }) => [
  {
    dataField: PARTNER_NAME_VALUE[getLang()],
    text: intl.formatMessage({
      id: PARTNER_NAME_LABEL[getLang()],

    }),
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "activity",
    text: intl.formatMessage({
      id: "PARTNERSHIP.INPUT.ACTIVITY_FR",
    }),
    sort: true,
    formatter: columnFormatters.ActivityColumnFormatter,
    sortCaret: sortCaret,
  },
    {
      dataField: PARTNER_EMAIL_VALUE[getLang()],
      text: intl.formatMessage({
        id: "PARTNERSHIP.INPUT.EMAIL",
      }),
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: PARTNER_PHONE_VALUE[getLang()],
      text: intl.formatMessage({
        id: "PARTNERSHIP.INPUT.PHONE",
      }),
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "isActive",
      text: intl.formatMessage({
        id: "PARTNERSHIP.INPUT.STATUS",
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
      formatter: columnFormatters.PartnershipActionsColumnFormatter,
      formatExtraData: partnershipsUIProps,
      classes: "text-right pr-0",
      headerClasses: "text-right pr-3",
      style: {
        minWidth: "100px",
      },
    },
  ];
  export default _.memoize(columns)
