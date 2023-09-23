import React from "react"
import ResourceStatesLoadingDialog from "./components/loading/ResourceStatesLoadingDialog"
import { ResourceStatesUIProvider } from "./context/ResourceStatesUIContext"
import ResourceStateCard from "./components/card/ResourceStatesCard"

import { dialogRoutes, basePath } from "./routes"
import pageRoutes from "./../../routes"

import { ProtectedDialogRoute } from "../../../../components/routes"


const ResourceStatePage = ({ history }) => {

  const resourceStatesUIEvents = {
    newResourceStateButtonClick: () => {
      history.push(pageRoutes.resourceStateCreate.path)
    },
    newResourceStateRule: pageRoutes.resourceStateCreate,
    openShowResourceStatePage: (param) => {
      history.push(pageRoutes.resourceStateShow.path.replace(":param", param))
    },
    showResourceStateRule: pageRoutes.resourceStateShow,
    openEditResourceStatePage: (param) => {
      history.push(pageRoutes.resourceStateEdit.path.replace(":param", param))
    },
    editResourceStateRule: pageRoutes.resourceStateEdit,
    openDeleteResourceStateDialog: (param) => {
      history.push(dialogRoutes.resourceStateDelete.path.replace(":param", param))
    },
    deleteResourceStateRule: dialogRoutes.resourceStateDelete,
    openDeleteResourceStatesDialog: () => {
      history.push(dialogRoutes.resourceStatesDelete.path)
    },
    deleteResourceStatesRule: dialogRoutes.resourceStatesDelete
  }

  const renderRoute = ({ component, history, match })  => {
    const Component = component
    const params = (match && match.params) ? {...match.params} : {}
    return <Component params={params} show={match != null} onHide = {() => { history.push( basePath )} } />
  }

  return (
    <ResourceStatesUIProvider resourceStatesUIEvents={resourceStatesUIEvents}>
      <ResourceStatesLoadingDialog />
      { Object.keys(dialogRoutes).map(key => (
        <ProtectedDialogRoute key={key} path={dialogRoutes[key].path}>
          {({ history, match }) => renderRoute({ component: dialogRoutes[key].component, history, match })}
        </ProtectedDialogRoute>
      )) }
      <ResourceStateCard />
    </ResourceStatesUIProvider>
  )
}


export default ResourceStatePage
