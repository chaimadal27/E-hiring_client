import React from "react"
import CandidatesLoadingDialog from "./components/loading/CandidatesLoadingDialog"
import CandidatesCard from "./components/card/CandidateCard"
import { CandidatesUIProvider } from "./context/CandidatesUIContext"
import dialogRoutes from "./routes/dialogs"
import routes from "./../../routes"
import { ProtectedDialogRoute } from "../../../../components/routes"


const CandidatePage = ({ history }) => {

  const candidatesUIEvents = {
    newCandidateButtonClick: () => {
      history.push(routes.candidateCreate.path)
    },
    newCandidateRule: routes.candidateCreate,
    openShowCandidatePage: (param) => {
      history.push(routes.candidateShow.path.replace(":param", param))
    },
    showCandidateRule: routes.candidateShow,
    openEditCandidatePage: (param) => {
      history.push(routes.candidateEdit.path.replace(":param", param))
    },
    editCandidateRule: routes.candidateEdit,
    openDisableCandidateDialog: (param) => {
      history.push(dialogRoutes.candidateDisable.path.replace(":param", param))
    },
    disableCandidateRule: dialogRoutes.candidateDisable,
    openDisableCandidatesDialog: () => {
      history.push(dialogRoutes.candidatesDisable.path)
    },
    disableCandidatesRule: dialogRoutes.candidatesDisable,
    openEnableCandidateDialog: (param) => {
      history.push(dialogRoutes.candidateEnable.path.replace(":param", param))
    },
    enableCandidateRule: dialogRoutes.candidateEnable,
    openEnableCandidatesDialog: () => {
      history.push(dialogRoutes.candidatesEnable.path)
    },
    enableCandidatesRule: dialogRoutes.candidatesEnable,

  }

  const renderRoute = ({ component, history, match }) => {
    const Component = component
    const params = (match && match.params) ? { ...match.params } : {}
    return <Component params={params} show={match != null} onHide={() => { history.push(routes.candidateList.path) }} />
  }

  return (
    <CandidatesUIProvider candidatesUIEvents={candidatesUIEvents}>
      <CandidatesLoadingDialog />
      { Object.keys(dialogRoutes).map(key => (
        <ProtectedDialogRoute key={key} path={dialogRoutes[key].path}>
          {({ history, match }) => renderRoute({ component: dialogRoutes[key].component, history, match })}
        </ProtectedDialogRoute>
      ))}
      <CandidatesCard />
    </CandidatesUIProvider>
  )
}


export default CandidatePage
