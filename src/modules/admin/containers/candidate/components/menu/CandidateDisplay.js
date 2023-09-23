import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { isEmpty } from "lodash";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import { toAbsoluteUrl } from "../../../../../../helpers";

import { isRLTLang, getLang } from "./../../../../../../i18n";
import { ProtectedContent } from "../../../../../../components/wrappers";
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { NavLink } from "react-router-dom";

import { fetchCandidate } from "./../../store/actions";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';

import routes from "./../../routes/display";
import LanguageIcon from "@material-ui/icons/Language";
import AttachmentIcon from "@material-ui/icons/Attachment";


const CandidateDisplay = ({ param, fetchCandidate, candidate }) => {
    useEffect(() => {
        if (isEmpty(candidate) || candidate.id !== param) {
            fetchCandidate({ param });
        }

        // eslint-disable-next-line
    }, []);

    const [showPersonalInfos, setShowPersonalInfos] = useState()
    const [showProfessionalInfos, setShowProfessionalInfos] = useState()

    const switchPage = () => {
        setShowPersonalInfos(!setShowPersonalInfos)
        setShowProfessionalInfos(!showProfessionalInfos)
        console.log(showProfessionalInfos, showPersonalInfos)
    }

    return (
        <>
            {/*<!--begin::Aside-->*/}
            <div className="flex-row-auto offcanvas-mobile" id="kt_profile_aside">
                {/*<!--begin::Profile Card-->*/}
                <div className="card card-custom card-stretch">
                    {/*<!--begin::Body-->*/}
                    <div className="card-body">
                        {/*<!--begin::Contact-->*/}
                        {!isEmpty(candidate) && (
                            <>
                                <div className="d-flex align-items-center">
                                    <div
                                        className={
                                            "symbol symbol-60 symbol-xl-90 m" +
                                            (isRLTLang() ? "l" : "r") +
                                            "-3 align-self-start align-self-xl-center"
                                        }
                                    >
                                        {candidate.photo ? (
                                            <div
                                                className="symbol-label"
                                                style={{
                                                    backgroundImage: `url(${candidate.photo
                                                        })`,
                                                    height: '70px',
                                                    width: '70px'
                                                }}
                                            />
                                        ) : (
                                            <div
                                                className="symbol-label"
                                                style={{
                                                    backgroundImage: `url(${toAbsoluteUrl(
                                                        `/media/img/no-photo.svg`
                                                    )})`,
                                                }}
                                            />
                                        )}
                                    </div>
                                </div>
                            </>
                        )}
                        {!isEmpty(candidate) && (
                            <>
                                <div className="py-5">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <span className="font-weight-bold mr-2">
                                            <FormattedMessage
                                                id={"CANDIDATE.MENU.NAME_FR" || "GENERAL.EMPTY"}
                                            />
                                        </span>
                                        <span
                                            className={`label label-lg label-light-info label-inline`}
                                        >
                                            {
                                                <>
                                                    {candidate["firstNameFr"] || "----"}{" "}{candidate["lastNameFr"] || "----"}
                                                </>
                                            }
                                        </span>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <span className="font-weight-bold mr-2">
                                            <FormattedMessage
                                                id={"CANDIDATE.INPUT.EMAIL" || "GENERAL.EMPTY"}
                                            />{" :"}
                                        </span>
                                        <span
                                            className={`label label-lg label-light-primary label-inline`}
                                        >
                                            {candidate["email"] || "----"}
                                        </span>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <span className="font-weight-bold mr-2">
                                            <FormattedMessage
                                                id={"CANDIDATE.INPUT.FIRST_PHONE" || "GENERAL.EMPTY"}
                                            />{" :"}
                                        </span>
                                        <span
                                            className={`label label-lg label-light-primary label-inline `}
                                        >
                                            {candidate["firstPhone"] || "----"}
                                        </span>
                                    </div>
                                </div>
                            </>
                        )}
                        {/*<!--end::Contact-->*/}
                        <div className="py-5 navi navi-bold navi-hover navi-active navi-link-rounded">
                            {/*<ProtectedContent rule={routes.candidateDisplayKeyWords}>*/}
                            {/*    <div className="navi-item mb-2">*/}
                            {/*        <NavLink*/}
                            {/*            to={routes.candidateDisplayKeyWords.path.replace(":param", param)}*/}
                            {/*            className="navi-link py-4"*/}
                            {/*        >*/}
                            {/*            <span className="navi-icon mr-2">*/}
                            {/*                <span className="svg-icon">*/}
                            {/*                    <VpnKeyIcon />*/}
                            {/*                </span>*/}
                            {/*            </span>*/}
                            {/*            <span className="navi-text font-size-lg">*/}
                            {/*                <FormattedMessage id="CANDIDATE_SOURCE_INFOS" />*/}
                            {/*            </span>*/}
                            {/*        </NavLink>*/}
                            {/*    </div>*/}
                            {/*</ProtectedContent>*/}
                            <ProtectedContent rule={routes.candidateDisplayPersonalInfo}>
                                <div className="navi-item mb-2">
                                    <NavLink
                                        to={routes.candidateDisplayPersonalInfo.path.replace(":param", param)}
                                        className="navi-link py-4"
                                    >
                                        <span className="navi-icon mr-2">
                                            <span className="svg-icon">
                                                <PermIdentityIcon />
                                            </span>
                                        </span>
                                        <span className="navi-text font-size-lg">
                                            <FormattedMessage id="CANDIDATE_PERSONAL_INFOS_SOURCE" />
                                        </span>
                                    </NavLink>
                                </div>
                            </ProtectedContent>
                            <ProtectedContent rule={routes.candidateDisplayProfessionalInfo}>
                                <div className="navi-item mb-2">
                                    <NavLink
                                        to={routes.candidateDisplayProfessionalInfo.path.replace(":param", param)}
                                        className="navi-link py-4"
                                    >
                                        <span className="navi-icon mr-2">
                                            <span className="svg-icon">
                                                <WorkOutlineIcon />
                                            </span>
                                        </span>
                                        <span className="navi-text font-size-lg">
                                            <FormattedMessage id="CANDIDATE_PROFESSIONAL_INFOS" />
                                        </span>
                                    </NavLink>
                                </div>
                            </ProtectedContent>
                            <ProtectedContent rule={routes.candidateDisplayLanguage}>
                                <div className="navi-item mb-2">
                                    <NavLink
                                        to={routes.candidateDisplayLanguage.path.replace(":param", param)}
                                        className="navi-link py-4"
                                    >
                                        <span className="navi-icon mr-2">
                                            <span className="svg-icon">
                                                <LanguageIcon />
                                            </span>
                                        </span>
                                        <span className="navi-text font-size-lg">
                                            <FormattedMessage id="CANDIDATE.INPUT.LANGUAGES" />
                                        </span>
                                    </NavLink>
                                </div>
                            </ProtectedContent>
                            <ProtectedContent rule={routes.candidateDisplayDocuments}>
                                <div className="navi-item mb-2">
                                    <NavLink
                                        to={routes.candidateDisplayDocuments.path.replace(":param", param)}
                                        className="navi-link py-4"
                                    >
                                        <span className="navi-icon mr-2">
                                            <span className="svg-icon">
                                                <AttachmentIcon />
                                            </span>
                                        </span>
                                        <span className="navi-text font-size-lg">
                                            <FormattedMessage id="CANDIDATE_DOCUMENTS" />
                                        </span>
                                    </NavLink>
                                </div>
                            </ProtectedContent>

                        </div>
                    </div>
                    {/*<!--end::Body-->*/}
                </div>
                {/*<!--end::Profile Card-->*/}
            </div>
            {/*<!--end::Aside-->*/}
        </>
    );
};

const mapStateToProps = (state) => state.admin.candidate;

export default connect(mapStateToProps, { fetchCandidate })(
    CandidateDisplay
);
