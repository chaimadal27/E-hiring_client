import routes from "./../../../../routes";
import { combinePathRoutes } from "./../../../../../../helpers";


import ListForm from "./../../components/from/ListForm"

import { MODULES_PERMISSIONS, ACTIVATE } from "../../../../../../constants";

const { LIST } = MODULES_PERMISSIONS;

const listForm = {
  path: "/list",
  component: ListForm,
  can: LIST.permissions[ACTIVATE],
};

export default combinePathRoutes(
  {
    path: routes.listEdit.path,
  },
  {
    listForm,
  }
);
