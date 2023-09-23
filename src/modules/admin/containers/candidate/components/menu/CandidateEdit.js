import React, { useEffect } from "react"
import { FormattedMessage } from "react-intl"
import { isEmpty } from "lodash"
import { shallowEqual, useSelector, useDispatch } from "react-redux"

import { getLang, isRLTLang } from "./../../../../../../i18n"
import { ProtectedContent } from "../../../../../../components/wrappers"
import { NavLink } from "react-router-dom"
import LanguageIcon from '@material-ui/icons/Language';
import AttachmentIcon from '@material-ui/icons/Attachment';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { fetchCandidate } from "./../../store/actions"
import routes from "./../../routes/edit"
import { AR, FR } from "../../../../../../constants";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";

const CANDIDATE_NAME_VALUE = {
  [AR]: "firstNameAR",
  [FR]: "firstNameFr"
}

const CANDIDATE_NAME_TEXT = {
  [AR]: "CANDIDATE.INPUT.NAME_AR",
  [FR]: "CANDIDATE.INPUT.NAME_FR",
}

const CANDIDATE_EMAIL_VALUE = {
  [AR]: "email",
  [FR]: "email"
}

const CANDIDATE_ACTIVITY_TEXT = {
  [AR]: "CANDIDATE.INPUT.EMAIL",
  [FR]: "CANDIDATE.INPUT.EMAIL",
}


const EditCandidate = ({ param }) => {

  const dispatch = useDispatch()

  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { refresh, candidate } = useSelector(
    (state) => ({
      refresh: state.admin.candidate.refresh,
      isFetching: state.admin.candidate.isFetching,
      candidate: state.admin.candidate.candidate
    }),
    shallowEqual
  )

  useEffect(() => {
    if (isEmpty(candidate) || candidate.id !== param) {
      dispatch(fetchCandidate({ param }))
    }

    // eslint-disable-next-line
  }, [refresh && isEmpty(candidate)])

  return (
    <>
      {/*<!--begin::Aside-->*/}
      <div className="flex-row-auto">
        {/*<!--begin::Profile Card-->*/}
        <div className="card card-custom card-stretch">
          {/*<!--begin::Body-->*/}
          <div className="card-body">

            {!isEmpty(candidate) && (
              <>
                <div className="py-5">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <span className="font-weight-bold mr-2">
                      <FormattedMessage
                        id={CANDIDATE_NAME_TEXT[getLang()] || "GENERAL.EMPTY"}
                      />
                    </span>
                    <span
                      className={`label label-lg label-light-info label-inline`}
                    >
                      {
                        <>
                          {candidate[CANDIDATE_NAME_VALUE[getLang()]] || "----"}
                        </>
                      }
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <span className="font-weight-bold mr-2">
                      <FormattedMessage
                        id={CANDIDATE_ACTIVITY_TEXT[getLang()] || "GENERAL.EMPTY"}
                      />
                    </span>
                    <span
                      className={`label label-lg label-light-primary label-inline`}
                    >
                      {candidate[CANDIDATE_EMAIL_VALUE[getLang()]] || "----"}
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
              <ProtectedContent rule={routes.candidateFormPersonalInfo}>
                <div className="navi-item mb-2">
                  {/*<NavLink*/}
                  {/*  to={routes.candidateFormSourceKeyWords.path.replace(":param", param)}*/}
                  {/*  className="navi-link py-4"*/}
                  {/*>*/}
                  {/*  <span className="navi-icon mr-2">*/}
                  {/*    <span className="svg-icon">*/}
                  {/*      <VpnKeyIcon />*/}
                  {/*    </span>*/}
                  {/*  </span>*/}
                  {/*  <span className="navi-text font-size-lg">*/}
                  {/*    <FormattedMessage id="CANDIDATE_SOURCE_INFOS" />*/}
                  {/*  </span>*/}

                  {/*</NavLink>*/}
                  <NavLink
                      to={routes.candidateFormPersonalInfo.path.replace(":param", param)}
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
                  <NavLink
                      to={routes.candidateFormProfessionalInfo.path.replace(":param", param)}
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
                  <NavLink
                      to={routes.candidateFormLanguage.path.replace(":param", param)}
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
                  <NavLink
                      to={routes.candidateFormDocument.path.replace(":param", param)}
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
}


export default EditCandidate
