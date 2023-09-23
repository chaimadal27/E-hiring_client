import React from "react"
import ActivitiesLoadingDialog from "./components/loading/ActivitiesLoadingDialog"
import ActivitiesCard from "./components/card/ActivitiesCard"
import { ActivitiesUIProvider } from "./context/ActivitiesUIContext"

import dialogRoutes from "./routes"
import routes from "./../../routes"
import {ProtectedDialogRoute} from "../../../../components/routes"


const ActivityPage = ({ history }) => {

  const activitiesUIEvents = {
      newActivityButtonClick: () => {
	history.push(routes.activityCreate.path)
      },
      newActivityRule: routes.activityCreate,

      openShowActivityPage: (param) => {
	history.push(routes.activityShow.path.replace(":param",param))
      },
      showActivityRule: routes.activityShow,

      openEditActivityPage: (param) => {
	history.push(routes.activityEdit.path.replace(":param", param))
      },
      editActivityRule: routes.activityEdit,
      
      openDeleteActivityDialog: (param) => {
	history.push(dialogRoutes.activityDelete.path.replace(":param", param))
      },
      deleteActivityRule: dialogRoutes.activityDelete,
      
      openDisableActivityDialog: (param) => {
	history.push(dialogRoutes.activityDisable.path.replace(":param", param))
      },
      disableActivityRule: dialogRoutes.activityDisable,
	
      openEnableActivityDialog:(param) => {
	history.push(dialogRoutes.activityEnable.path.replace(":param", param))
      },
      enableActivityRule: dialogRoutes.activityEnable,

      // delete, disable, enable multiple activities

      openDeleteActivityDialog: () => {
	history.push(dialogRoutes.activitiesDelete.path)
      },
      enableActivityRule: dialogRoutes.activitiesDelete,

      openDisableActivityDialog:()=> {
	history.push(dialogRoutes.activitiesDelete.path)
      },
      disableActivityRule: dialogRoutes.activitiesDelete,

      openEnableActivityDialog: () => {
	history.push(dialogRoutes.activitiesEnable.path)
      },
      enableActivityRule: dialogRoutes.activitiesEnable,
  }

  const renderRoute = ({ component, history, match })  => {
    const Component = component
    const params = (match && match.params) ? {...match.params} : {}
    return <Component params={params} show={match != null} onHide = {() => { history.push(routes.activityList.path)} } />
  }

  return (
    <ActivitiesUIProvider activitiesUIEvents={activitiesUIEvents}>
      <ActivitiesLoadingDialog />
      { Object.keys(dialogRoutes).map(key => (
        <ProtectedDialogRoute key={key} path={dialogRoutes[key].path}>
          {({ history, match }) => renderRoute({ component: dialogRoutes[key].component, history, match })}
        </ProtectedDialogRoute>
      )) }
      <ActivitiesCard />
    </ActivitiesUIProvider>
  )
}


export default ActivityPage
