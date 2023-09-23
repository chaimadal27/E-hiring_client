import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { isEmpty } from "lodash";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import { toAbsoluteUrl } from "../../../../../../helpers";

import { isRLTLang, getLang } from "./../../../../../../i18n";
import { ProtectedContent } from "../../../../../../components/wrappers";

import { NavLink } from "react-router-dom";
//import { ProtectedLink } from "../../../../../../components/wrappers"

import { fetchJob } from "./../../store/actions";

import StoreIcon from "@material-ui/icons/Store";
import StorefrontIcon from "@material-ui/icons/Storefront";

import routes from "./../../routes/display";
import { AR, FR } from "../../../../../../constants";

const JOB_NAME_VALUE = {
  [AR]: "nameAr",
  [FR]: "nameFr",
};

const JOB_NAME_TEXT = {
  [AR]: "JOB.INPUT.NAME_AR",
  [FR]: "JOB.INPUT.NAME_FR",
};

const JOB_DESCRIPTION_VALUE = {
  [AR]: "descriptionAr",
  [FR]: "descriptionFr",
};

const JOB_DESCRIPTION_TEXT = {
  [AR]: "JOB.INPUT.DESCRIPTION_AR",
  [FR]: "JOB.INPUT.DESCRIPTION_FR",
};

const JobDisplay = ({ param, fetchJob, job }) => {
  useEffect(() => {
    if (isEmpty(job) || job.id !== param) {
      fetchJob({ param });
    }

    // eslint-disable-next-line
  }, []);

  return (
    <>
      {/*<!--begin::Aside-->*/}
      <div className="flex-row-auto offcanvas-mobile" id="kt_profile_aside">
        {/*<!--begin::Profile Card-->*/}
        <div className="card card-custom card-stretch">
          {/*<!--begin::Body-->*/}
          <div className="card-body">
            {/*<!--begin::Contact-->*/}
            {!isEmpty(job) && (
              <>
                <div className="py-5">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <span className="font-weight-bold mr-2">
                      <FormattedMessage
                        id={JOB_NAME_TEXT[getLang()] || "GENERAL.EMPTY"}
                      />
                    </span>
                    <span
                      className={`label label-lg label-light-info label-inline`}
                    >
                      {
                        <>
                          {job[JOB_NAME_VALUE[getLang()]] || "----"}
                        </>
                      }
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <span className="font-weight-bold mr-2">
                      <FormattedMessage
                        id={JOB_DESCRIPTION_TEXT[getLang()] || "GENERAL.EMPTY"}
                      />
                    </span>
                    <span
                      className={`label label-lg label-light-primary label-inline`}
                    >
                      {job[JOB_DESCRIPTION_VALUE[getLang()]] || "----"}
                    </span>
                  </div>
                </div>
              </>
            )}
            {/*<!--end::Contact-->*/}
            <div className="py-5 navi navi-bold navi-hover navi-active navi-link-rounded">
              <ProtectedContent rule={routes.jobDisplay}>
                <div className="navi-item mb-2">
                  <NavLink
                    to={routes.jobDisplay.path.replace(":param", param)}
                    className="navi-link py-4"
                  >
                    <span className="navi-icon mr-2">
                      <span className="svg-icon">
                        <StorefrontIcon />
                      </span>
                    </span>
                    <span className="navi-text font-size-lg">
                      <FormattedMessage id="MENU.JOB" />
                    </span>
                  </NavLink>
                </div>
              </ProtectedContent>
              {/*<ProtectedContent rule={routes.serviceList}>
                <div className="navi-item mb-2">
                  <NavLink to={routes.serviceList.path.replace(":param", param)} className="navi-link py-4">
                    <span className="navi-icon mr-2">
                      <span className="svg-icon">
                        <StoreIcon />
                      </span>
                    </span>
                    <span className="navi-text font-size-lg"><FormattedMessage id="MENU.SERVICES" /></span>
                  </NavLink>
                </div>
          </ProtectedContent>*/}
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

const mapStateToProps = (state) => state.admin.job;

export default connect(mapStateToProps, { fetchJob })(
  JobDisplay
);
