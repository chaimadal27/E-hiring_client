import React, { useEffect } from "react"
import { FormattedMessage } from "react-intl"
import { isEmpty } from "lodash"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import Typography from "@material-ui/core/Typography";

import { getLang, isRLTLang } from "./../../../../../../i18n"
import { ProtectedContent } from "../../../../../../components/wrappers"
import { NavLink } from "react-router-dom"

import SchoolIcon from '@material-ui/icons/School';
import { fetchOffer } from "./../../store/actions"
import routes from "./../../routes/edit"
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

const EditOffer = ({ param }) => {

  const dispatch = useDispatch()

  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { refresh, offer } = useSelector(
    (state) => ({
      refresh: state.admin.offer.refresh,
      isFetching: state.admin.offer.isFetching,
      offer: state.admin.offer.offer
    }),
    shallowEqual
  )

  useEffect(() => {
    if (isEmpty(offer) || offer.id !== param) {
      dispatch(fetchOffer({ param }))
    }

    // eslint-disable-next-line
  }, [refresh && isEmpty(offer)])

  return (
    <>
      {/*<!--begin::Aside-->*/}
      <div className="flex-row-auto">
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
                        id={OFFER_SHORT_NAME_LABEL[getLang()] || "GENERAL.EMPTY"}
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
                        id={OFFER_LONG_NAME_LABEL[getLang()] || "GENERAL.EMPTY"}
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
              <ProtectedContent rule={routes.offerForm}>
                <div className="navi-item mb-2">
                  <NavLink
                    to={routes.offerForm.path.replace(":param", param)}
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


export default EditOffer
