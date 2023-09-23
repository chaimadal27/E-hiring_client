import React from "react"
import LegalAgenciesLoadingDialog from "./components/loading/LegalAgenciesLoadingDialog"
import LegalAgencyCard from "./components/card/LegalAgencyCard"
import { LegalAgenciesUIProvider } from "./context/LegalAgenciesUIContext"

import dialogRoutes from "./routes/dialogs"
import routes from "./../../routes"
import {ProtectedDialogRoute} from "../../../../components/routes"


const LegalAgencyPage = ({ history }) => {

    const legalAgenciesUIEvents = {
	    // create legal agency
      newLegalAgencyButtonClick: () => {
          history.push(routes.legalAgencyCreate.path)
      },
      newLegalAgencyRule: routes.legalAgencyCreate,
      // show legal agency details
      openShowLegalAgencyPage: (param) => {
          history.push(routes.legalAgencyShow.path.replace(":param",param))
      },
    
	openEditLegalAgencyPage: (param) => {
	    history.push(routes.legalAgencyEdit.path.replace(":param", param))
	},
	editLegalAgencyRule: routes.legalAgecyEdit,


    openDisableLegalAgencyDialog:(param) => {
	history.push(dialogRoutes.legalAgencyDisable.path.replace(":param", param))
    },
	disableLegalAgencyRule: dialogRoutes.legalAgencyDisable,

	openEnableLegalAgencyDialog: (param) => {
	    history.push(dialogRoutes.legalAgencyEnable.path.replace(":param", param))
	},
	enableLegalAgencyRule: dialogRoutes.legalAgencyEnable,

	// disable and enable multiple legal agencies
    
	openDisableLegalAgencyDialog: () => {
	    history.push(dialogRoutes.legalAgenciesDisable.path)
	},
	disableLegalAgencyRule: dialogRoutes.legalAgenciesDisable,

	openEnableLegalAgencyDialog: () => {
	    history.push(dialogRoutes.legalAgenciesEnable.path)
	},
	enableLegalAgencyRule: dialogRoutes.legalAgenciesEnable,
    }



  const renderRoute = ({ component, history, match })  => {
    const Component = component
    const params = (match && match.params) ? {...match.params} : {}
    return <Component params={params} show={match != null} onHide = {() => { history.push(routes.legalAgencyList.path)} } />
  }

  return (
    
    <LegalAgenciesUIProvider legalAgenciesUIEvents={legalAgenciesUIEvents}>
      <LegalAgenciesLoadingDialog />
        {Object.keys(dialogRoutes).map(key=>(
          <ProtectedDialogRoute key={key} path={dialogRoutes[key].path}>
              {({history, match}) => renderRoute({component: dialogRoutes[key].component, history, match})}
          </ProtectedDialogRoute>
        ))}
      <LegalAgencyCard />
    </LegalAgenciesUIProvider>
  )
}


export default LegalAgencyPage
