/* eslint-disable no-restricted-imports */
import React, { useMemo, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Dropdown from "react-bootstrap/Dropdown"

import { FormattedMessage } from "react-intl"
import routes from "./../../../../routes"
import dialogRoutes from "../../routes/kanban"
import { DropdownTopbarItemToggler } from "../../../../../../components/partials"
import Add from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';

import { makeStyles } from '@material-ui/core/styles';
import KanbanDeleteDialog from "../dialog/KanbanDeleteDialog"
import CandidateShowCVDialog from "../../../candidate/components/dialog/ShowData/CandidateShowCVDialog"
import { candidateGetCVUIHelper } from "../../../../UIHelpers"

const useStyles = makeStyles(() => ({
    action: {
        padding: "5px",
        backgroundColor: '#fff',
        boxShadow: '0 1px 4px 0 rgba(0,0,0,0.12)',
        '&:hover': {
            backgroundColor: '#fff',
            color: '#000',
        },
    },
}));

const KanbanItemMenu = ({ params, history, idKanban, idCandidate }) => {
    const styles = useStyles();
    const [showDleteDialog, setshowDleteDialog] = useState(false);
    const [showCVModal, setShowCVModal] = useState(false)


    return (
        <>
            <Dropdown drop="down" alignRight>
                <Dropdown.Toggle
                    as={DropdownTopbarItemToggler}
                    id="dropdown-toggle-user-profile"
                ><IconButton className={styles.action} >
                        <Add />
                    </IconButton>

                </Dropdown.Toggle>
                <Dropdown.Menu
                    className="p-0 m-0 dropdown-menu-left dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-md">

                    <div className="navi navi-spacer-x-0 pt-3 pb-3">
                        <Link to={dialogRoutes.offerCreateAppointmentDialog.path.replace(":param", params.param)} className="navi-item px-8">                            <div className="navi-link">
                            <div className="navi-text">
                                <div className="font-weight-bold menu-text">
                                    Ajouter une Tâche
                                </div>
                            </div>
                            <div className="navi-icon mr-2">
                                <i className="flaticon2-calendar-2 text-primary" />
                            </div>
                        </div>
                        </Link>
                        <Dropdown.Divider />
                        <Link to={dialogRoutes.kanbanShowCv.path.replace(":param", params.param).replace(":cvParam", idCandidate)} className="navi-item px-8">
                            <div className="navi-link">
                                <div className="navi-text">
                                    <div className="font-weight-bold">
                                        Visualiser CV
                                </div>
                                </div>
                                <div className="navi-icon mr-2">
                                    <i className="flaticon2-pen text-success" />
                                </div>
                            </div>
                        </Link>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={() => setshowDleteDialog(true)} className="navi-item px-8">
                            <div className="navi-link">
                                <div className="navi-text">
                                    <div className="font-weight-bold">
                                        Supprimer
                                </div>
                                </div>
                                <div className="navi-icon mr-2">
                                    <i className="flaticon-delete text-danger" />
                                </div>
                            </div>
                        </Dropdown.Item>
                    </div>
                </Dropdown.Menu>
            </Dropdown>
            {/* < CandidateShowCVDialog id={idCandidate} type={'pdf'} show={showCVModal} onHide={() => setShowCVModal(false)}></CandidateShowCVDialog >*/}
            {/*             <KanbanDeleteDialog show={showDleteDialog} onHide={() => { history.push(routes.offerKanban.path.replace(":param", params.param)); setshowDleteDialog(false) }} id={idKanban} params={params}></KanbanDeleteDialog>
 */}        </>
    )
}


export default KanbanItemMenu
