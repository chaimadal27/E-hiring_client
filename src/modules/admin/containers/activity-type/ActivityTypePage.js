import React from "react"
import ActivityTypesLoadingDialog from "./components/loading/ActivityTypesLoadingDialog"
import ActivityTypeCard from "./components/card/ActivityTypeCard"
import { ActivityTypesUIProvider } from "./context/ActivityTypesUIContext"

import dialogRoutes from "./routes/dialogs"
import routes from "./../../routes"
import {ProtectedDialogRoute} from "../../../../components/routes"


const ActivityTypePage = ({ history }) => {

    const activityTypesUIEvents = {
	    // create legal agency
      newActivityTypeButtonClick: () => {
          history.push(routes.activityTypeCreate.path)
      },
      newActivityTypeRule: routes.activityTypeCreate,
      // show legal agency details
      openShowActivityTypePage: (param) => {
          history.push(routes.activityTypeShow.path.replace(":param",param))
      },
    
	openEditActivityTypePage: (param) => {
	    history.push(routes.activityTypeEdit.path.replace(":param", param))
	},
	editActivityTypeRule: routes.legalAgecyEdit,


    openDisableActivityTypeDialog:(param) => {
	history.push(dialogRoutes.activityTypeDisable.path.replace(":param", param))
    },
	disableActivityTypeRule: dialogRoutes.activityTypeDisable,

	openEnableActivityTypeDialog: (param) => {
	    history.push(dialogRoutes.activityTypeEnable.path.replace(":param", param))
	},
	enableActivityTypeRule: dialogRoutes.activityTypeEnable,


		
	// disable and enable multiple legal agencies
    
	openDisableActivityTypeDialog: () => {
	    history.push(dialogRoutes.activityTypesDisable.path)
	},
	disableActivityTypeRule: dialogRoutes.activityTypesDisable,

	openEnableActivityTypeDialog: () => {
	    history.push(dialogRoutes.activityTypesEnable.path)
	},
	enableActivityTypeRule: dialogRoutes.activityTypesEnable,
    }



  const renderRoute = ({ component, history, match })  => {
    const Component = component
    const params = (match && match.params) ? {...match.params} : {}
    return <Component params={params} show={match != null} onHide = {() => { history.push(routes.activityTypeList.path)} } />
  }

  return (
    
    <ActivityTypesUIProvider activityTypesUIEvents={activityTypesUIEvents}>
      <ActivityTypesLoadingDialog />
        {Object.keys(dialogRoutes).map(key=>(
          <ProtectedDialogRoute key={key} path={dialogRoutes[key].path}>
              {({history, match}) => renderRoute({component: dialogRoutes[key].component, history, match})}
          </ProtectedDialogRoute>
        ))}
      <ActivityTypeCard />
    </ActivityTypesUIProvider>
  )
}


export default ActivityTypePage
