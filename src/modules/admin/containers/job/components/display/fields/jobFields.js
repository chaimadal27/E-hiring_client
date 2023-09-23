import { TABLE_OF_ITEMS } from "../../../../../../../components/partials";
import { AR, FR } from "../../../../../../../constants";
import { getLang } from "../../../../../../../i18n";
import * as columnFormatters from "../column-formatters"
import dialogRoutes from "../../../routes/display"
//import routes from "../../../../../routes";


//import DescriptionIcon from '@material-ui/icons/Description';

const NAME_DATA_FIELD = {
  [AR]: "nameAr",
  [FR]: "nameFr",
};

const NAME_LABEL = {
  [AR]: "JOB.INPUT.NAME_AR",
  [FR]: "JOB.INPUT.NAME_FR",
};


export const jobFieldsFr = ({ intl }) => [
  {
    name: "nameFr",
    label: intl.formatMessage({ id: "JOB.INPUT.CATEGORY_FR" }),
    size: 12,
  },
  {
    name: "descriptionFr",
    label: intl.formatMessage({ id: "JOB.INPUT.DESCRIPTION_FR" }),
    size: 12,
  },

];

export const jobFieldsAr = ({ intl }) => [
  {
    name: "nameAr",
    label: intl.formatMessage({ id: "JOB.INPUT.CATEGORY_FR" }),
    size: 12,
  },
  {
    name: "descriptionAr",
    label: intl.formatMessage({ id: "JOB.INPUT.DESCRIPTION_FR" }),
    size: 12,
  },
];

// Validation schema
export const jobFields = ({ intl }) => [
  {
    name: "jobSet",
    showActions: true,
    addAnotherActions: [
      {
        label: intl.formatMessage({
          id: "GENERAL.VALIDATE"
        }),
        iconPath: "/media/svg/icons/Code/Done-circle.svg",
        onShowCondition: ({ status }) => status == 1,
        onClick: ({ category, id }, history) => history.push(dialogRoutes.jobValidate.path.replace(":param", category).replace(":eventParam", id))
      },
      {
        label: intl.formatMessage({ id: "GENERAL.REJECT" }),
        iconPath: "/media/svg/icons/Code/Error-circle.svg",
        onShowCondition: ({ status }) => status == 1,
        onClick: ({ category, id }, history) => history.push(dialogRoutes.jobReject.path.replace(":param", category).replace(":eventParam", id))
      }
    ],
    columns: [
      {
        dataField: NAME_DATA_FIELD[getLang()],
        text: intl.formatMessage({
          id: NAME_LABEL[getLang()],
        }),
      },
      {
        dataField: "status",
        text: intl.formatMessage({
          id: "SERVICE.INPUT.STATE",
        }),
        formatter: columnFormatters.StatusColumnFormatter,
      },
    ],
    component: TABLE_OF_ITEMS,
    label: intl.formatMessage({ id: "JOB.CONTACT.TITLE" }),
    size: 12,
  },
];
