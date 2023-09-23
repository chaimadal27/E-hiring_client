import { TABLE_OF_ITEMS } from "../../../../../../../components/partials";
import { AR, FR } from "../../../../../../../constants";
import { getLang } from "../../../../../../../i18n";
//import routes from "../../../../../routes";
import { legalFormUIHelper } from "../../../../../UIHelpers";

//import DescriptionIcon from '@material-ui/icons/Description';

// Validation schema
export const listFields = ({ intl }) => [
    {
        name: "name",
        label: intl.formatMessage({ id: "LIST.MENU.EDIT.TITLE" }),
        size: 8,
    },
    {
        name: "optionSet",
        showActions: false,
        columns: [
            {
                dataField: "rank",
                text: intl.formatMessage({
                    id: "LIST.INPUT.ORDRE",
                }),
                size: 2,
            },
            {
                dataField: "value",
                text: intl.formatMessage({
                    id: "LIST.INPUT.OPTION",
                }),
                size: 10,
            },
        ],
        component: TABLE_OF_ITEMS,
        size: 12,
    },
];
