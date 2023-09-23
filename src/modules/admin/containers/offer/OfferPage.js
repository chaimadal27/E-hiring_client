import React from "react"
import OffersLoadingDialog from "./components/loading/OffersLoadingDialog"
import OffersCard from "./components/card/OfferCard"
import { OffersUIProvider } from "./context/OffersUIContext"

import dialogRoutes from "./routes/dialogs"
import routes from "./../../routes"
import { ProtectedDialogRoute } from "../../../../components/routes"


const OfferPage = ({ history }) => {

  const offersUIEvents = {
    newOfferButtonClick: () => {
      history.push(routes.offerCreate.path)
    },
    newOfferRule: routes.offerCreate,
    openShowOfferPage: (param) => {
      history.push(routes.offerShow.path.replace(":param", param))
    },
    showOfferRule: routes.offerShow,
    openEditOfferPage: (param) => {
      history.push(routes.offerEdit.path.replace(":param", param))
    },
    editOfferRule: routes.offerEdit,
    openDisableOfferDialog: (param) => {
      history.push(dialogRoutes.offerDisable.path.replace(":param", param))
    },
    disableOfferRule: dialogRoutes.offerDisable,
    openDisableOffersDialog: () => {
      history.push(dialogRoutes.offersDisable.path)
    },
    disableOffersRule: dialogRoutes.offersDisable,
    openEnableOfferDialog: (param) => {
      history.push(dialogRoutes.offerEnable.path.replace(":param", param))
    },
    enableOfferRule: dialogRoutes.offerEnable,
    openEnableOffersDialog: () => {
      history.push(dialogRoutes.offersEnable.path)
    },
    enableOffersRule: dialogRoutes.offersEnable,
    openValidateOfferDialog: (param) => {
      history.push(dialogRoutes.offerValidate.path.replace(":param", param))
    },
    validateOfferRule: dialogRoutes.offerValidate,
    openCloseOfferDialog: (param) => {
      history.push(dialogRoutes.offerClose.path.replace(":param", param))
    },
    closeOfferRule: dialogRoutes.offerClose,
    openShowKanbanPage: (param) => {
      history.push(routes.offerKanban.path.replace(":param", param))
    },
    showKanbanRule: routes.kanbanShow,
  }

  const renderRoute = ({ component, history, match }) => {
    const Component = component
    const params = (match && match.params) ? { ...match.params } : {}
    return <Component params={params} show={match != null} onHide={() => { history.push(routes.offerList.path) }} />
  }

  return (
    <OffersUIProvider offersUIEvents={offersUIEvents}>
      <OffersLoadingDialog />
      { Object.keys(dialogRoutes).map(key => (
        <ProtectedDialogRoute key={key} path={dialogRoutes[key].path}>
          {({ history, match }) => renderRoute({ component: dialogRoutes[key].component, history, match })}
        </ProtectedDialogRoute>
      ))}
      <OffersCard />
    </OffersUIProvider>
  )
}


export default OfferPage
