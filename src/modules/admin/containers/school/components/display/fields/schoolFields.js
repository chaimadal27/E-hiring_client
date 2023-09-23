import { AR, FR } from "../../../../../../../constants";
import { getLang } from "../../../../../../../i18n";
//import routes from "../../../../../routes";
import { legalFormUIHelper, listUIHelper } from "../../../../../UIHelpers";

//import DescriptionIcon from '@material-ui/icons/Description';

export const schoolFieldsFr = ({ intl }) => [
  {
    name: "shortNameFr",
    label: intl.formatMessage({ id: "SCHOOL.INPUT.SHORT_NAME_FR" }),
    size: 6,
  },
  {
    name: "longNameFr",
    label: intl.formatMessage({ id: "SCHOOL.INPUT.LONG_NAME_FR" }),
    size: 6,
  },
];

export const schoolFieldsAr = ({ intl }) => [
  {
    name: "shortNameAr",
    label: intl.formatMessage({ id: "SCHOOL.INPUT.SHORT_NAME_AR" }),
    size: 6,
  },
  {
    name: "longNameAr",
    label: intl.formatMessage({ id: "SCHOOL.INPUT.LONG_NAME_AR" }),
    size: 6,
  },
];

// Validation schema
export const schoolFields = ({ intl }) => [
  {
    name: "type",
    loadOptions: listUIHelper("Type de l'école"),
    label: intl.formatMessage({ id: "SCHOOL.INPUT.TYPE" }),
    size: 4,
  },
  {
    name: "country",
    label: intl.formatMessage({ id: "SCHOOL.INPUT.ADDRESS_FR" }),
    size: 4,
  },

  {
    name: "webSite",
    label: intl.formatMessage({ id: "SCHOOL.INPUT.SITEWEB_FR" }),
    size: 4,
  },




];
