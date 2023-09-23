import React from 'react'
import BusinessUnitsLoadingDialog from "./components/loading/BusinessUnitsLoadingDialog"
import BusinessUnitsCard from "./components/card/BusinessUnitCard"
import { BusinessUnitsUIProvider } from "./context/BusinessUnitsContext"
import dialogRoutes from "./routes"
import routes from "./../../routes"
import { ProtectedDialogRoute } from "../../../../components/routes"



const BusinessUnitPage = ({ history }) => {

  const businessUnitsUIEvents = {
    newBusinessUnitButtonClick: () => {
      history.push(routes.businessUnitCreate.path)
    },
    newBusinessUnitRule: routes.businessUnitCreate,

    openEditBusinessUnitPage: (param) => {
      history.push(routes.businessUnitEdit.path.replace(":param", param))
    },
    editBusinessUnitRule: routes.businessUnitEdit,

    openShowBusinessUnitPage: (param) => {
      history.push(routes.businessUnitShow.path.replace(":param", param))
    },
    showBusinessUnitRule: routes.businessUnitShow,

    // openDisableBusinessUnitDialog:(param) => {
    // history.push(dialogRoutes.businessUnitDisable.path.replace(":param", param))
    // },
    // disableBusinessUnitRule: dialogRoutes.businessUnitDisable,

    // openDisableBusinessUnitDialog:(param) => {
    //   history.push(dialogRoutes.businessUnitDisable.path.replace(":param", param))
    // },
    // disableBusinessUnitRule: dialogRoutes.businessUnitDisable,

    // openEnableBusinessUnitDialog:(param) => {
    //   history.push(dialogRoutes.businessUnitEnable.path.replace(":param", param))
    // },
    // enableBusinessUnitRule: dialogRoutes.businessUnitEnable,

    // openDeleteBusinessUnitDialog:(param) => {
    //   history.push(dialogRoutes.businessUnitDelete.path.replace(":param", param))
    // },
    // deleteBusinessUnitRule: dialogRoutes.businessUnitDelete,
    // }

  }




  const renderRoute = ({ component, history, match }) => {
    const Component = component
    const params = (match && match.params) ? { ...match.params } : {}
    return <Component params={params} show={match != null} onHide={() => { history.push(routes.businessUnitList.path) }} />

  }
  return (
    <BusinessUnitsUIProvider businessUnitsUIEvents={businessUnitsUIEvents}>
      <BusinessUnitsLoadingDialog />
      {Object.keys(dialogRoutes).map(key => (
        <ProtectedDialogRoute key={key} path={dialogRoutes[key].path}>
          {({ history, match }) => renderRoute({ component: dialogRoutes[key].component, history, match })}
        </ProtectedDialogRoute>
      ))}

      <BusinessUnitsCard />
    </BusinessUnitsUIProvider>
  )
}

export default BusinessUnitPage
