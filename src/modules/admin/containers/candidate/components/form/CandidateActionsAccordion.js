import React, { useMemo, useState } from "react"
import _ from "lodash"
import { injectIntl } from "react-intl"
import { useCandidatesUIContext } from "../../context/CandidatesUIContext"
import { ProtectedLink } from "../../../../../../components/wrappers"


import { AccordionShowView } from "./../../../../../../components/partials/controls"
import { CandidateCreateDialogs } from "../../routes/dialogs/AddData"
import { Button } from "react-bootstrap"
import routes from "../../../../routes"
import { ProtectedDialogRoute } from "../../../../../../components/routes"


const CandidatesActionsAccordion = ({ history, candidatesUIActions, intl }) => {

    // Candidates UI Context
    const candidatesUIContext = useCandidatesUIContext()
    const candidatesUIProps = useMemo(() => {
        return {
            ...candidatesUIContext
        }
    }, [candidatesUIContext])



    /* const renderRoute = ({ component, history, match }) => {
        const Component = component
        const params = (match && match.params) ? { ...match.params } : {}
        return <Component params={params} show={match != null} onHide={() => { history.push(routes.candidateCreate.path) }} />
    } */

    return (
        <>
            {/* {
                Object.keys(CandidateCreateDialogs).map(key => (
                    <ProtectedDialogRoute key={key} path={CandidateCreateDialogs[key].path}>
                        {({ history, match }) => renderRoute({ component: CandidateCreateDialogs[key].component, history, match })}
                    </ProtectedDialogRoute>
                ))
            } */}
            <AccordionShowView title={intl.formatMessage({
                id: "GENERAL.ACTIONS"
            })}>
                <ProtectedLink rule={candidatesUIActions.CreatePartnershipDialogRule}>
                    <Button
                        className="btn btn-sm btn-primary mr-3"
                        onClick={() => candidatesUIActions.openCreatePartnershipDialog()}
                    >
                        <i className="fas fa-plus" />
                            Ajouter une Entreprise
                        </Button>
                </ProtectedLink>
                <ProtectedLink rule={candidatesUIActions.CreateSchoolDialogRule}>
                    <Button
                        className="btn btn-sm btn-primary mr-3"
                        onClick={() => candidatesUIActions.openCreateSchoolDialog()}
                    >
                        <i className="fas fa-plus" />
                            Ajouter un établissement scolaire
                        </Button>
                </ProtectedLink>
            </AccordionShowView>
        </>
    )
}


export default injectIntl(CandidatesActionsAccordion)