import React, { useEffect } from "react"
import { FormattedMessage } from "react-intl"
import { isEmpty } from "lodash"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import Typography from "@material-ui/core/Typography";

import { getLang, isRLTLang } from "./../../../../../../i18n"
import { ProtectedContent } from "../../../../../../components/wrappers"
import { NavLink } from "react-router-dom"

import SchoolIcon from '@material-ui/icons/School';
import { fetchSchool } from "./../../store/actions"
import routes from "./../../routes/edit"
import { AR, FR } from "../../../../../../constants";

const SCHOOL_SHORT_NAME_VALUE = {
  [AR]: "shortNameAr",
  [FR]: "shortNameFr"
}
const SCHOOL_LONG_NAME_VALUE = {
  [AR]: "longNameAr",
  [FR]: "longNameFr"
}
const SCHOOL_SHORT_NAME_LABEL = {
  [AR]: "SCHOOL.INPUT.SHORT_NAME_AR",
  [FR]: "SCHOOL.INPUT.SHORT_NAME_FR"
}
const SCHOOL_LONG_NAME_LABEL = {
  [AR]: "SCHOOL.INPUT.LONG_NAME_AR",
  [FR]: "SCHOOL.INPUT.LONG_NAME_FR"
}

const EditSchool = ({ param }) => {

  const dispatch = useDispatch()

  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { refresh, school } = useSelector(
    (state) => ({
      refresh: state.admin.school.refresh,
      isFetching: state.admin.school.isFetching,
      school: state.admin.school.school
    }),
    shallowEqual
  )

  useEffect(() => {
    if (isEmpty(school) || school.id !== param) {
      dispatch(fetchSchool({ param }))
    }

    // eslint-disable-next-line
  }, [refresh && isEmpty(school)])

  return (
    <>
      {/*<!--begin::Aside-->*/}
      <div className="flex-row-auto">
        {/*<!--begin::Profile Card-->*/}
        <div className="card card-custom card-stretch">
          {/*<!--begin::Body-->*/}
          <div className="card-body">
            {/*<!--begin::Contact-->*/}
            {!isEmpty(school) && (
              <>
                <div className="py-5">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <span className="font-weight-bold mr-2">
                      <FormattedMessage
                        id={SCHOOL_SHORT_NAME_LABEL[getLang()] || "GENERAL.EMPTY"}
                      />
                    </span>
                    <span
                      className={`label label-lg label-light-info label-inline`}
                    >
                      {
                        <>
                          {school[SCHOOL_SHORT_NAME_VALUE[getLang()]] || "----"}
                        </>
                      }
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <span className="font-weight-bold mr-2">
                      <FormattedMessage
                        id={SCHOOL_LONG_NAME_LABEL[getLang()] || "GENERAL.EMPTY"}
                      />
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <span
                      className={`label label-lg label-light-primary label-inline`}
                    >
                      {school[SCHOOL_LONG_NAME_VALUE[getLang()]] || "----"}
                    </span>
                  </div>
                </div>
              </>
            )}
            {/*<!--end::Contact-->*/}
            <div className="py-5 navi navi-bold navi-hover navi-active navi-link-rounded">
              <ProtectedContent rule={routes.schoolForm}>
                <div className="navi-item mb-2">
                  <NavLink
                    to={routes.schoolForm.path.replace(":param", param)}
                    className="navi-link py-4"
                  >
                    <span className="navi-icon mr-2">
                      <span className="svg-icon">
                        <SchoolIcon />
                      </span>
                    </span>
                    <span className="navi-text font-size-lg">
                      <FormattedMessage id="MENU.SCHOOL" />
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


export default EditSchool
