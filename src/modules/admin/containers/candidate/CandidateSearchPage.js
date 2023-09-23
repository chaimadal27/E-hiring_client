import React from "react"
import CandidatesLoadingDialog from "./components/loading/CandidatesLoadingDialog"
import CandidatesSearchCard from "./components/card/CandidateSearchCard"
import { CandidatesUIProvider } from "./context/CandidatesUIContext"
import dialogRoutes from "./routes/dialogs/search"
import routes from "./../../routes"
import { ProtectedDialogRoute } from "../../../../components/routes"

import { FormattedMessage } from "react-intl"
import {
    Card,
    CardBody,
    CardHeader,
    CardHeaderTitle,
    CardHeaderToolbar,
    FlashMessages,
    FilterFormView
} from "./../../../../components/partials/controls"
import CandidatesFilter from "./components/form/CandidatesFilter"
import CandidatesTable from "./components/table/CandidatesTable"
import CandidatesGrouping from "./components/grouping/CandidatesGrouping"
import { useCandidatesUIContext } from "./context/CandidatesUIContext"



const CandidateSearchPage = ({ history }) => {

    const candidatesUIProps = useCandidatesUIContext()
    console.log(candidatesUIProps)

    const candidatesUIEvents = {

        openShowCandidatePage: (param) => {
            history.push(routes.candidateShow.path.replace(":param", param))
        },
        showCandidateRule: routes.candidateShow,
        openEditCandidatePage: (param) => {
            history.push(routes.candidateEdit.path.replace(":param", param))
        },
        editCandidateRule: routes.candidateEdit,
        openAffectCandidatePage: (param) => {
            history.push(dialogRoutes.candidateAffect.path.replace(":param", param))
        },
        affectCandidateRule: dialogRoutes.candidateAffect,


    }

    const renderRoute = ({ component, history, match }) => {
        const Component = component
        const params = (match && match.params) ? { ...match.params } : {}
        return <Component params={params} show={match != null} onHide={() => { history.push(routes.candidateSearchList.path) }} />
    }

    return (
        <CandidatesUIProvider candidatesUIEvents={candidatesUIEvents}>
            <CandidatesLoadingDialog />
            { Object.keys(dialogRoutes).map(key => (
                <ProtectedDialogRoute key={key} path={dialogRoutes[key].path}>
                    {({ history, match }) => renderRoute({ component: dialogRoutes[key].component, history, match })}
                </ProtectedDialogRoute>
            ))}
            <CandidatesSearchCard />
        </CandidatesUIProvider>
    )
}


export default CandidateSearchPage
