import { lazy } from "react";
import { UPDATE, MODULES_PERMISSIONS, VIEW, CREATE } from "../../../../constants";

const ListEdit = lazy(() => import("../../containers/list/ListEdit"));
const ListShow = lazy(() => import("../../containers/list/ListShow"))
const ListPage = lazy(() => import("../../containers/list/ListPage"));
const List = lazy(() => import("../../containers/list/ListNew"));


const { LIST } = MODULES_PERMISSIONS;

export const listCreate = {
  path: "/lists/new",
  component: List,
  can: LIST.permissions[CREATE]
}

export const listEdit = {
  path: "/lists/:param/edit",
  component: ListEdit,
  can: LIST.permissions[UPDATE],
};

export const listShow = {
  path: "/lists/:param/show",
  component: ListShow,
  can: LIST.permissions[VIEW]
}

export const listList = {
  path: "/listes",
  component: ListPage,
  can: LIST.permissions[VIEW],
};

