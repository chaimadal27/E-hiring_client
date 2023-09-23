import React from "react";
import ListsLoadingDialog from "./components/loading/ListsLoadingDialog";
import ListsCard from "./components/card/ListCard";
import { ListsUIProvider } from "./context/ListsUIContext";

//import dialogRoutes from "./routes/dialogs";
import routes from "./../../routes";
import { ProtectedDialogRoute } from "../../../../components/routes";

const ListPage = ({ history }) => {
  const listsUIEvents = {
    newListButtonClick: () => {
      history.push(routes.listCreate.path)
    },
    newListRule: routes.listCreate,
    openEditListPage: (param) => {
      history.push(routes.listEdit.path.replace(":param", param));
    },
    editListRule: routes.listEdit,

    openShowListPage: (param) => {
      history.push(routes.listShow.path.replace(":param", param))
    },
    showListRule: routes.listShow,
  };

  const renderRoute = ({ component, history, match }) => {
    const Component = component;
    const params = match && match.params ? { ...match.params } : {};
    return (
      <Component
        params={params}
        show={match != null}
        onHide={() => {
          history.push(routes.listList.path);
        }}
      />
    );
  };

  return (
    <ListsUIProvider listsUIEvents={listsUIEvents}>
      {/* <ListsLoadingDialog />
      {Object.keys(dialogRoutes).map((key) => (
        <ProtectedDialogRoute key={key} path={dialogRoutes[key].path}>
          {({ history, match }) =>
            renderRoute({
              component: dialogRoutes[key].component,
              history,
              match,
            })
          }
        </ProtectedDialogRoute>
      ))} */}
      <ListsCard />
    </ListsUIProvider>
  );
};

export default ListPage;
