import React from "react"
import JobsLoadingDialog from "./components/loading/JobsLoadingDialog"
import JobsCard from "./components/card/JobCard"
import { JobsUIProvider } from "./context/JobsUIContext"

import dialogRoutes from "./routes/dialogs"
import detailsRoutes from "./routes/display"
import routes from "./../../routes"
import { ProtectedDialogRoute } from "../../../../components/routes"


const JobPage = ({ history }) => {

  const jobsUIEvents = {
    newJobButtonClick: () => {
      history.push(routes.jobCreate.path)
    },
    newJobRule: routes.jobCreate,
    openShowJobPage: (param) => {
      history.push(routes.jobShow.path.replace(":param", param))
    },
    showJobRule: routes.jobShow,
    openJobAppoitmentPage: (param) => {
      history.push(routes.jobAppointments.path.replace(":param", param))
    },
    openEventPage: (param) => {
      history.push(routes.eventList.path.replace(":jobParam", param))
    },
    openEventRule: routes.eventList,
    showJobAppointmentRule: routes.jobAppointments,
    openEditJobPage: (param) => {
      history.push(routes.jobEdit.path.replace(":param", param))
    },
    editJobRule: routes.jobEdit,
    openDisableJobDialog: (param) => {
      history.push(dialogRoutes.jobDisable.path.replace(":param", param))
    },
    disableJobRule: dialogRoutes.jobDisable,
    openDisableJobsDialog: () => {
      history.push(dialogRoutes.jobsDisable.path)
    },
    disableJobsRule: dialogRoutes.jobsDisable,
    openEnableJobDialog: (param) => {
      history.push(dialogRoutes.jobEnable.path.replace(":param", param))
    },
    enableJobRule: dialogRoutes.jobEnable,
    openEnableJobsDialog: () => {
      history.push(dialogRoutes.jobsEnable.path)
    },
    enableJobsRule: dialogRoutes.jobsEnable,
    openValidateJobDialog: (param) => {
      history.push(dialogRoutes.jobValidate.path.replace(":param", param))
    },
    ValidateJobRule: dialogRoutes.jobValidate,
    openRejectJobDialog: (param) => {
      history.push(dialogRoutes.jobReject.path.replace(":param", param))
    },
    RejectJobRule: dialogRoutes.jobReject,
  }

  const renderRoute = ({ component, history, match }) => {
    const Component = component
    const params = (match && match.params) ? { ...match.params } : {}
    return <Component params={params} show={match != null} onHide={() => { history.push(routes.jobList.path) }} />
  }

  return (
    <JobsUIProvider jobsUIEvents={jobsUIEvents}>
      <JobsLoadingDialog />
      { Object.keys(dialogRoutes).map(key => (
        <ProtectedDialogRoute key={key} path={dialogRoutes[key].path}>
          {({ history, match }) => renderRoute({ component: dialogRoutes[key].component, history, match })}
        </ProtectedDialogRoute>
      ))}
      <JobsCard />
    </JobsUIProvider>
  )
}


export default JobPage
