import React, { useEffect } from "react"
import { FormattedMessage } from "react-intl"
import { isEmpty } from "lodash"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import Typography from "@material-ui/core/Typography";

import { getLang, isRLTLang } from "./../../../../../../i18n"
import { ProtectedContent } from "../../../../../../components/wrappers"

import { toAbsoluteUrl } from "../../../../../../helpers"

import { NavLink } from "react-router-dom"

import StoreIcon from "@material-ui/icons/Store";
import StorefrontIcon from "@material-ui/icons/Storefront";

import { fetchPartnership } from "./../../store/actions"
import routes from "./../../routes/edit"
import {AR, FR} from "../../../../../../constants";

const PARTNER_NAME_VALUE = {
  [AR] : "nameAr",
  [FR] : "nameFr"
}

const PARTNER_NAME_TEXT = {
  [AR] : "PARTNERSHIP.INPUT.NAME_AR",
  [FR] : "PARTNERSHIP.INPUT.NAME_FR",
}

const PARTNER_ACTIVITY_VALUE = {
  [AR] : "activityAr",
  [FR] : "activityFr"
}

const PARTNER_ACTIVITY_TEXT = {
  [AR] : "PARTNERSHIP.INPUT.ACTIVITY_AR",
  [FR] : "PARTNERSHIP.INPUT.ACTIVITY_FR",
}


const EditPartnership = ({ param }) => {

  const dispatch = useDispatch()

  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { refresh, partnership } = useSelector(
    (state) => ({
      refresh: state.admin.partnership.refresh,
      isFetching: state.admin.partnership.isFetching,
      partnership: state.admin.partnership.partnership
    }),
    shallowEqual
  )

  useEffect(() => {
    if (isEmpty(partnership) || partnership.id !== param) {
      dispatch(fetchPartnership({ param }))
    }

    // eslint-disable-next-line
  }, [refresh && isEmpty(partnership)])

  return (
    <>
      {/*<!--begin::Aside-->*/}
      <div className="flex-row-auto">
        {/*<!--begin::Profile Card-->*/}
        <div className="card card-custom card-stretch">
          {/*<!--begin::Body-->*/}
          <div className="card-body">
            {/*<!--begin::Contact-->*/}
            {!isEmpty(partnership) && (
              <>
                <div className="d-flex align-items-center">
                  <div
                    className={
                      "symbol symbol-60 symbol-xl-50 m" +
                      (isRLTLang() ? "l" : "r") +
                      "-3 align-self-start align-self-xl-center"
                    }
                  >
                    {partnership.logo ? (
                      <div
                        class="symbol-label"
                        style={{
                          backgroundImage: `url(${toAbsoluteUrl(
                            partnership.logo
                          )})`,
                          height: "45px",
                          width: "75px",
                        }}
                      />
                    ) : (
                      <div
                        class="symbol-label"
                        style={{
                          backgroundImage: `url(${toAbsoluteUrl(
                            `/media/img/no-photo.svg`
                          )})`,
                        }}
                      />
                    )}
                  </div>
                  <div>
                    <span className="font-weight-bolder mx-5 font-size-h5 text-dark-75 text-hover-primary">
                      <div className="text-dark m-0 flex-grow-1 mr-3 font-size-h5">
                        {
                          <>
                            {partnership[PARTNER_NAME_VALUE[getLang()]] ||
                              "----"}
                          </>
                        }
                      </div>
                      <Typography
                        variant="overline"
                        display="block"
                        gutterBottom
                      >
                        {
                          <>
                            {partnership[PARTNER_ACTIVITY_VALUE[getLang()]] ||
                              "----"}
                          </>
                        }
                      </Typography>
                    </span>
                    <div className="text-muted"></div>
                  </div>
                </div>
              </>
            )}
            {!isEmpty(partnership) && (
              <>
                <div className="py-5">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <span className="font-weight-bold mr-2">
                      <FormattedMessage
                        id={PARTNER_NAME_TEXT[getLang()] || "GENERAL.EMPTY"}
                      />
                    </span>
                    <span
                      className={`label label-lg label-light-info label-inline`}
                    >
                      {
                        <>
                          {partnership[PARTNER_NAME_VALUE[getLang()]] || "----"}
                        </>
                      }
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <span className="font-weight-bold mr-2">
                      <FormattedMessage
                        id={PARTNER_ACTIVITY_TEXT[getLang()] || "GENERAL.EMPTY"}
                      />
                    </span>
                    <span
                      className={`label label-lg label-light-primary label-inline`}
                    >
                      {partnership[PARTNER_ACTIVITY_VALUE[getLang()]] || "----"}
                    </span>
                  </div>
                </div>
              </>
            )}
            {/*<!--end::Contact-->*/}
            <div className="py-5 navi navi-bold navi-hover navi-active navi-link-rounded">
              <ProtectedContent rule={routes.partnershipForm}>
                <div className="navi-item mb-2">
                  <NavLink
                    to={routes.partnershipForm.path.replace(":param", param)}
                    className="navi-link py-4"
                  >
                    <span className="navi-icon mr-2">
                      <span className="svg-icon">
                        <StorefrontIcon />
                      </span>
                    </span>
                    <span className="navi-text font-size-lg">
                      <FormattedMessage id="MENU.PARTNER" />
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
}


export default EditPartnership
