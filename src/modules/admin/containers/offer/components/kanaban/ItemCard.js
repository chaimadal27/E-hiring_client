import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Add from '@material-ui/icons/Add';
import { isEmpty, isString } from "lodash";
import { isRLTLang } from "./../../../../../../i18n"
import { toAbsoluteUrl } from "../../../../../../helpers";
import { Row } from 'react-bootstrap';
import { Card } from '../../../../../../components/partials';
import { candidateCompanyUIHelper } from '../../../../UIHelpers';
import KanbanItemMenu from "./KanbanItemMenu"





export const ItemCard = ({ content, params, history }) => {

    return (
        <>
            {!isEmpty(content) && (
                <div className="w-100 d-flex justify-content-between align-items-center gap-5" >
                    {/* <div >
                        <Avatar variant="rounded"
                            src={`${content.logo}`
                                //'https://www.biography.com/.image/t_share/MTU0ODUwMjQ0NjIwNzI0MDAx/chris-hemsworth-poses-during-a-photo-call-for-thor-ragnarok-on-october-15-2017-in-sydney-australia-photo-by-mark-metcalfe_getty-images-for-disney-square.jpg'
                            }
                        />
                    </div> */}
                    <div className={"symbol symbol-primary m" + (isRLTLang() ? "l" : "r") + "-3"}>
                        <span className="symbol-label text-white font-weight-bold font-size-h4">{content.candidateDetails.firstNameFr[0] + content.candidateDetails.lastNameFr[0] || "-"}</span>
                    </div>
                    <div >
                        <h6>{content.candidateDetails.firstNameFr + " " + content.candidateDetails.lastNameFr}</h6>
                        <div style={{ fontSize: '12px' }}>affecté le {content.createdAt.substr(0, content.createdAt.indexOf(' '))}</div>
                    </div>
                    <div >

                        <KanbanItemMenu params={params} history={history} idKanban={content.id} idCandidate={content.candidate} />

                    </div>
                </div>
            )}
        </>
    );
};

export default ItemCard;

