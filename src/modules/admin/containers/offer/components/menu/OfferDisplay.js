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

import { fetchOffer } from "./../../store/actions";

import SchoolIcon from '@material-ui/icons/School';
import routes from "./../../routes/display";
import { AR, FR } from "../../../../../../constants";

const OFFER_SHORT_NAME_VALUE = {
  [AR]: "shortNameAr",
  [FR]: "shortNameFr"
}
const OFFER_LONG_NAME_VALUE = {
  [AR]: "longNameAr",
  [FR]: "longNameFr"
}
const OFFER_SHORT_NAME_LABEL = {
  [AR]: "OFFER.INPUT.SHORT_NAME_AR",
  [FR]: "OFFER.INPUT.SHORT_NAME_FR"
}
const OFFER_LONG_NAME_LABEL = {
  [AR]: "OFFER.INPUT.LONG_NAME_AR",
  [FR]: "OFFER.INPUT.LONG_NAME_FR"
}

const OfferDisplay = ({ param, fetchOffer, offer }) => {
  useEffect(() => {
    if (isEmpty(offer) || offer.id !== param) {
      fetchOffer({ param });
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
            {!isEmpty(offer) && (
              <>
                <div className="py-5">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <span className="font-weight-bold mr-2">
                      <FormattedMessage
                        id={"GENERAL.EMPTY" || "GENERAL.EMPTY"}
                      />
                    </span>
                    <span
                      className={`label label-lg label-light-info label-inline`}
                    >
                      {
                        <>
                          {offer[OFFER_SHORT_NAME_VALUE[getLang()]] || "----"}
                        </>
                      }
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <span className="font-weight-bold mr-2">
                      <FormattedMessage
                        id={"GENERAL.EMPTY" || "GENERAL.EMPTY"}
                      />
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <span
                      className={`label label-lg label-light-primary label-inline`}
                    >
                      {offer[OFFER_LONG_NAME_VALUE[getLang()]] || "----"}
                    </span>
                  </div>
                </div>
              </>
            )}
            {/*<!--end::Contact-->*/}
            <div className="py-5 navi navi-bold navi-hover navi-active navi-link-rounded">
              <ProtectedContent rule={routes.offerDisplay}>
                <div className="navi-item mb-2">
                  <NavLink
                    to={routes.offerDisplay.path.replace(":param", param)}
                    className="navi-link py-4"
                  >
                    <span className="navi-icon mr-2">
                      <span className="svg-icon">
                        <SchoolIcon />
                      </span>
                    </span>
                    <span className="navi-text font-size-lg">
                      <FormattedMessage id="MENU.OFFER" />
                    </span>
                  </NavLink>
                </div>
              </ProtectedContent>
              <ProtectedContent rule={routes.offerDisplay}>
                <div className="navi-item mb-2">
                  <NavLink
                    to={routes.offerDisplay.path.replace(":param", param)}
                    className="navi-link py-4"
                  >
                    <span className="navi-icon mr-2">
                      <span className="svg-icon">
                        <SchoolIcon />
                      </span>
                    </span>
                    <span className="navi-text font-size-lg">
                      <FormattedMessage id="Kanban" />
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

const mapStateToProps = (state) => state.admin.offer;

export default connect(mapStateToProps, { fetchOffer })(
  OfferDisplay
);
