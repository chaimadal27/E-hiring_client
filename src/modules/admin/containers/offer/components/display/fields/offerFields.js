// import { AR, FR } from "../../../../../../../constants";
// import { getLang } from "../../../../../../../i18n";
//import routes from "../../../../../routes";
import {

  listUIHelper,
  candidateCompanyUIHelper,
   userUIHelper, partnershipContactsDisplayUIHelper,candidateKeyWordsUIHelper
} from "./../../../../../UIHelpers";
import countryList from 'react-select-country-list'

//import DescriptionIcon from '@material-ui/icons/Description';

export const offerFieldsFr = ({  }) => [

];

export const offerFieldsAr = ({  }) => [

];

// Validation schema
export const offerFields = ({ intl }) => [
  {
    name: "title",
    label: intl.formatMessage({ id: "OFFER.INPUT.TITLE_FR" }),
    size: 8,

  },
  {
    name: "status",
    loadOptions: listUIHelper("Status offre"),
    label: intl.formatMessage({ id: "OFFER.INPUT.STATUS" }),
    size: 4,
  },
  {
    name: "recruiter",
    loadOptions: userUIHelper,
    label: intl.formatMessage({ id: "OFFER.INPUT.RECRUITER" }),
    size: 12,
  },
  {
    name: "startDate",
    label: intl.formatMessage({ id: "OFFER.INPUT.START_DATE" }),
    size: 6,
  },
  {
    name: "endDate",
    label: intl.formatMessage({ id: "OFFER.INPUT.END_DATE" }),
    size: 6,
  },
  {
    name: "positionsNumber",

    label: intl.formatMessage({ id: "OFFER.INPUT.POSITIONS_NUMBER" }),
    size: 6,
  },
  {
    name: "contractType",
    loadOptions: listUIHelper('Type de contrat'),
    label: intl.formatMessage({ id: "OFFER.INPUT.CONTRACT_TYPE" }),
    size: 6,
  },
  {
    name: "country",
    label: intl.formatMessage({ id: "OFFER.INPUT.COUNTRY" }),
    options: countryList().getData(),//countryUIHelper(intl),
    size: 6,
  },
  {
    name: "region",
    label: intl.formatMessage({ id: "OFFER.INPUT.REGION" }),
    size: 6,
  },
  {
    name: "client",
    loadOptions: candidateCompanyUIHelper,
    label: intl.formatMessage({ id: "OFFER.INPUT.CLIENT" }),
    size: 6,
  },
  {
    name: "contact",
    label: intl.formatMessage({ id: "OFFER.INPUT.CONTACT" }),
    loadOptions: partnershipContactsDisplayUIHelper,
    size: 6,

  },
  {
    name: "seniority",
    loadOptions: listUIHelper("Séniorité"),
    label: intl.formatMessage({ id: "OFFER.INPUT.SENIORITY" }),
    size: 6,
  },
  {
    name: "activitySector",
    loadOptions: listUIHelper("Secteur d'activité"),
    label: intl.formatMessage({ id: "OFFER.INPUT.ACTIVITY" }),
    size: 6,
  },
  {
    name: "description",
    label: intl.formatMessage({ id: "OFFER.INPUT.DESCRIPTION" }),
    size: 12,
  },
  {
    name: "requirements",
    label: intl.formatMessage({ id: "OFFER.INPUT.REQUIREMENTS" }),
    size: 12,
  },
  {
    name: "keyWords",
    loadOptions: candidateKeyWordsUIHelper,
    label: intl.formatMessage({ id: "OFFER.INPUT.KEY_WORDS" }),
    size: 12,
  },

];
