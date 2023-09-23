import React from "react"
import SchoolsLoadingDialog from "./components/loading/SchoolsLoadingDialog"
import SchoolsCard from "./components/card/SchoolCard"
import { SchoolsUIProvider } from "./context/SchoolsUIContext"

import dialogRoutes from "./routes/dialogs"
import routes from "./../../routes"
import {ProtectedDialogRoute} from "../../../../components/routes"


const SchoolPage = ({ history }) => {

  const schoolsUIEvents = {
    newSchoolButtonClick: () => {
      history.push(routes.schoolCreate.path)
    },
    newSchoolRule: routes.schoolCreate,
    openShowSchoolPage: (param) => {
      history.push(routes.schoolShow.path.replace(":param", param))
    },
    showSchoolRule: routes.schoolShow,
    openSchoolAppoitmentPage: (param) => {
      history.push(routes.schoolAppointments.path.replace(":param", param))
    },
    openEventPage: (param) => {
      history.push(routes.eventList.path.replace(":schoolParam", param))
    },
    openEventRule: routes.eventList,
    showSchoolAppointmentRule: routes.schoolAppointments,
    openEditSchoolPage: (param) => {
      history.push(routes.schoolEdit.path.replace(":param", param))
    },
    editSchoolRule: routes.schoolEdit,
    openDisableSchoolDialog: (param) => {
      history.push(dialogRoutes.schoolDisable.path.replace(":param", param))
    },
    disableSchoolRule: dialogRoutes.schoolDisable,
    openDisableSchoolsDialog: () => {
      history.push(dialogRoutes.schoolsDisable.path)
    },
    disableSchoolsRule: dialogRoutes.schoolsDisable,
    openEnableSchoolDialog: (param) => {
      history.push(dialogRoutes.schoolEnable.path.replace(":param", param))
    },
    enableSchoolRule: dialogRoutes.schoolEnable,
    openEnableSchoolsDialog: () => {
      history.push(dialogRoutes.schoolsEnable.path)
    },
    enableSchoolsRule: dialogRoutes.schoolsEnable,
  }

  const renderRoute = ({ component, history, match })  => {
    const Component = component
    const params = (match && match.params) ? {...match.params} : {}
    return <Component params={params} show={match != null} onHide = {() => { history.push(routes.schoolList.path)} } />
  }

  return (
    <SchoolsUIProvider schoolsUIEvents={schoolsUIEvents}>
      <SchoolsLoadingDialog />
      { Object.keys(dialogRoutes).map(key => (
        <ProtectedDialogRoute key={key} path={dialogRoutes[key].path}>
          {({ history, match }) => renderRoute({ component: dialogRoutes[key].component, history, match })}
        </ProtectedDialogRoute>
      )) }
      <SchoolsCard />
    </SchoolsUIProvider>
  )
}


export default SchoolPage
