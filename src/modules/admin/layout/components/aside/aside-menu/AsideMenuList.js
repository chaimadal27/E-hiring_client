/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useState } from "react"
import { FormattedMessage } from "react-intl"
import { useLocation } from "react-router"
import { NavLink } from "react-router-dom"
import SVG from "react-inlinesvg"
import { toAbsoluteUrl, checkIsActive } from "./../../../../../../helpers"
import routes from "../../../../routes"
import { ProtectedContent, ProtectedContents } from "../../../../../../components/wrappers"

const AsideMenuList = ({ layoutProps }) => {
  const location = useLocation()
  const [showUsersMenu, setShowUsersMenu] = useState(false);
  const [showReferentielMenu, setShowReferentielMenu] = useState(false);
  const [showCandidateMenu, setshowCandidateMenu] = useState(false);
  const [showOfferMenu, setshowOfferMenu] = useState(false);
  const [showLegalAgencyMenu, setShowLegalAgencyMenu] = useState(false)
  const [showActivityTypeMenu, setShowActivityTypeMenu] = useState(false)
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu && "menu-item-active"} menu-item-open `
      : ""
  }

  return (
    <>
      {/* begin::Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {/*<li
          className={`menu-item ${getMenuItemActive(routes.dashboard.path, false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to={ routes.dashboard.path }>
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")}/>
            </span>
            <span className="menu-text">
              <FormattedMessage id="MENU.DASHBOARD" />
            </span>
          </NavLink>
        </li>*/}
        <ProtectedContent rule={routes.home}>
          <li
            className={`menu-item ${getMenuItemActive(
              routes.home.path,
              false
            )}`}
            aria-haspopup="true"
          >
            <NavLink className="menu-link" to={routes.home.path}>
              <span className="svg-icon menu-icon">
                <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Home.svg")} />
              </span>
              <span className="menu-text">
                <FormattedMessage id="MENU.HOME" />
              </span>
            </NavLink>
          </li>
        </ProtectedContent>
































              {/* begin legal agencies management */}
            <ProtectedContents rules={[routes.legalAgencyList, routes.businessUnitList]}>
          {/* begin::section */}
  
          <li className="menu-section ">
            <h4
              style={{ color: "#dbdbdb", fontSize: "12px" }}
              className="menu-text"
            >
              <a onClick={() => setShowLegalAgencyMenu(!showLegalAgencyMenu)}>
                <FormattedMessage id="MENU.LEGAL_AGENCY" /></a>
            </h4>

          </li>
          {/* end:: section */}
          {showLegalAgencyMenu ? (
            <>
              <ProtectedContent rule={routes.legalAgencyList}>
                <li
                  className={`menu-item ${getMenuItemActive(
                    routes.legalAgencyList.path,
                    false
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to={routes.legalAgencyList.path}>
                    <span className="svg-icon menu-icon">
                      <SVG
                        src={toAbsoluteUrl("/media/svg/icons/General/User.svg")}
                      />
                    </span>
                    <span className="menu-text">
                      <FormattedMessage id="MENU.FILIALE" />
                    </span>
                  </NavLink>
                </li>
              </ProtectedContent>

              <ProtectedContent rule={routes.businessUnitList}>
                <li
                  className={`menu-item ${getMenuItemActive(
                    routes.businessUnitList.path,
                    false
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to={routes.businessUnitList.path}>
                    <span className="svg-icon menu-icon">
                      <SVG
                        style={{ color: "white" }}
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Communication/Group.svg"
                        )}
                      />
                    </span>
                    <span className="menu-text">
                      <FormattedMessage id="MENU.BUSINESS" />
                    </span>
                  </NavLink>
                </li>
              </ProtectedContent>
            </>
          ) : (
            ""
          )}
        </ProtectedContents>
              {/* end legal agencies management */}








              {/* begin legal agencies management */}
            <ProtectedContents rules={[routes.activityTypeList, routes.activityList]}>
          {/* begin::section */}
  
          <li className="menu-section ">
            <h4
              style={{ color: "#dbdbdb", fontSize: "12px" }}
              className="menu-text"
            >
              <a onClick={() => setShowActivityTypeMenu(!showActivityTypeMenu)}>
                <FormattedMessage id="MENU.ACTIVITY_TYPE_MANAGEMENT" /></a>
            </h4>

          </li>
          {/* end:: section */}
          {showActivityTypeMenu ? (
            <>
              <ProtectedContent rule={routes.activityTypeList}>
                <li
                  className={`menu-item ${getMenuItemActive(
                    routes.activityTypeList.path,
                    false
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to={routes.activityTypeList.path}>
                    <span className="svg-icon menu-icon">
                      <SVG
                        src={toAbsoluteUrl("/media/svg/icons/General/User.svg")}
                      />
                    </span>
                    <span className="menu-text">
                      <FormattedMessage id="MENU.ACTIVITY_TYPE" />
                    </span>
                  </NavLink>
                </li>
              </ProtectedContent>

              <ProtectedContent rule={routes.activityList}>
                <li
                  className={`menu-item ${getMenuItemActive(
                    routes.activityList.path,
                    false
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to={routes.activityList.path}>
                    <span className="svg-icon menu-icon">
                      <SVG
                        style={{ color: "white" }}
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Communication/Group.svg"
                        )}
                      />
                    </span>
                    <span className="menu-text">
                      <FormattedMessage id="MENU.ACTIVITY" />
                    </span>
                  </NavLink>
                </li>
              </ProtectedContent>
            </>
          ) : (
            ""
          )}
        </ProtectedContents>
              {/* end legal agencies management */}

















        {/*begin user managment*/}
        <ProtectedContents rules={[routes.userList, routes.userGroupList]}>
          {/* begin::section */}
  
          <li className="menu-section ">
            <h4
              style={{ color: "#dbdbdb", fontSize: "12px" }}
              className="menu-text"
            >
              <a onClick={() => setShowUsersMenu(!showUsersMenu)}>
                <FormattedMessage id="MENU.USER_MANAGEMENT" /></a>
            </h4>

          </li>
          {/* end:: section */}
          {showUsersMenu ? (
            <>
              <ProtectedContent rule={routes.userList}>
                <li
                  className={`menu-item ${getMenuItemActive(
                    routes.userList.path,
                    false
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to={routes.userList.path}>
                    <span className="svg-icon menu-icon">
                      <SVG
                        src={toAbsoluteUrl("/media/svg/icons/General/User.svg")}
                      />
                    </span>
                    <span className="menu-text">
                      <FormattedMessage id="MENU.USER" />
                    </span>
                  </NavLink>
                </li>
              </ProtectedContent>

              <ProtectedContent rule={routes.userGroupList}>
                <li
                  className={`menu-item ${getMenuItemActive(
                    routes.userGroupList.path,
                    false
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to={routes.userGroupList.path}>
                    <span className="svg-icon menu-icon">
                      <SVG
                        style={{ color: "white" }}
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Communication/Group.svg"
                        )}
                      />
                    </span>
                    <span className="menu-text">
                      <FormattedMessage id="MENU.GROUP" />
                    </span>
                  </NavLink>
                </li>
              </ProtectedContent>
            </>
          ) : (
            ""
          )}
        </ProtectedContents>
        {/*end user managment*/}

        {/*begin referentiel managment*/}
        <ProtectedContents rules={[routes.partnershipList, routes.listList, routes.schoolList, routes.jobList]}>
          {/* begin::section */}
          <li className="menu-section ">
            <h4
              style={{ color: "#dbdbdb", fontSize: "12px" }}
              className="menu-text"
            ><a onClick={() => setShowReferentielMenu(!showReferentielMenu)}>
                <FormattedMessage id="MENU.PARTNERSHIP_SERVICES" />
              </a>
            </h4>
          </li>
          {/* end:: section */}
          {/*begin lists managment*/}
          {showReferentielMenu ? (
            <>
              <ProtectedContent rule={routes.listList}>
                <li
                  className={`menu-item ${getMenuItemActive(
                    routes.listList.path,
                    false
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to={routes.listList.path}>
                    <span className="svg-icon menu-icon">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Communication/Archive.svg"
                        )}
                      />
                    </span>
                    <span className="menu-text">
                      <FormattedMessage id="MENU.LISTS" />
                    </span>
                  </NavLink>
                </li>
              </ProtectedContent>
              {/*begin company managment*/}
              <ProtectedContent rule={routes.partnershipList}>
                <li
                  className={`menu-item ${getMenuItemActive(
                    routes.partnershipList.path,
                    false
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink
                    className="menu-link"
                    to={routes.partnershipList.path}
                  >
                    <span className="svg-icon menu-icon">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Communication/Adress-book2.svg"
                        )}
                      />
                    </span>
                    <span className="menu-text">
                      <FormattedMessage id="MENU.PARTNER" />
                    </span>
                  </NavLink>
                </li>
              </ProtectedContent>
              {/*begin school managment*/}
              <ProtectedContent rule={routes.schoolList}>
                <li
                  className={`menu-item ${getMenuItemActive(
                    routes.schoolList.path,
                    false
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink
                    className="menu-link"
                    to={routes.schoolList.path}
                  >
                    <span className="svg-icon menu-icon">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Home/Building.svg"
                        )}
                      />
                    </span>
                    <span className="menu-text">
                      <FormattedMessage id="MENU.SCHOOL" />
                    </span>
                  </NavLink>
                </li>
              </ProtectedContent>
              {/*begin jobs managment*/}
              <ProtectedContent rule={routes.jobList}>
                <li
                  className={`menu-item ${getMenuItemActive(
                    routes.jobList.path,
                    false
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink
                    className="menu-link"
                    to={routes.jobList.path}
                  >
                    <span className="svg-icon menu-icon">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Text/Bullet-list.svg"
                        )}
                      />
                    </span>
                    <span className="menu-text">
                      <FormattedMessage id="MENU.JOB" />
                    </span>
                  </NavLink>
                </li>
              </ProtectedContent>
            </>
          ) : (
            ""
          )}
        </ProtectedContents>
        {/*end referentiel managment*/}
        {/*begin candidate managment*/}
        <ProtectedContents rules={[routes.candidateList, routes.candidateSearchList]}>
          {/* begin::section */}
          <li className="menu-section ">
            <h4
              style={{ color: "#dbdbdb", fontSize: "12px" }} className="menu-text"
            >
              <a onClick={() => setshowCandidateMenu(!showCandidateMenu)}>
                <FormattedMessage id="MENU.CANDIDATE_MANAGMENT" /></a>
            </h4>

          </li>
          {/* end:: section */}
          {showCandidateMenu ? ( <>
          <ProtectedContent rule={routes.candidateList}>
            <li
              className={`menu-item ${getMenuItemActive(
                routes.candidateList.path,
                false
              )}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to={routes.candidateList.path}>
                <span className="svg-icon menu-icon">
                  <SVG
                    src={toAbsoluteUrl("/media/svg/icons/Communication/Add-user.svg")}
                  />
                </span>
                <span className="menu-text">
                  <FormattedMessage id="MENU.CANDIDATE" />
                </span>
              </NavLink>
            </li>
          </ProtectedContent>
          <ProtectedContent rule={routes.candidateSearchList}>
            <li
              className={`menu-item ${getMenuItemActive(
                routes.candidateSearchList.path,
                false
              )}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to={routes.candidateSearchList.path}>
                <span className="svg-icon menu-icon">
                  <SVG
                    src={toAbsoluteUrl("/media/svg/icons/Communication/search.svg")}
                  />
                </span>
                <span className="menu-text">
                  <FormattedMessage id="MENU.SEARCH.CANDIDATE" />
                </span>
              </NavLink>
            </li>
          </ProtectedContent>
              </>
          ) : (
              ""
          )}
        </ProtectedContents>

        {/*begin offer managment*/}
        <ProtectedContents rules={[routes.offerList]}>

          <li className="menu-section ">
            <h4
              style={{ color: "#dbdbdb", fontSize: "12px" }}
              className="menu-text"
            >
              <a onClick={() => setshowOfferMenu(!showOfferMenu)}>
                <FormattedMessage id="MENU.OFFER_MANAGMENT" /></a>
            </h4>

          </li>
            

          {showOfferMenu ? (
          <ProtectedContent rule={routes.offerList}>
            <li
              className={`menu-item ${getMenuItemActive(
                routes.offerList.path,
                false
              )}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to={routes.offerList.path}>
                <span className="svg-icon menu-icon">
                  <SVG
                    src={toAbsoluteUrl("/media/svg/icons/Communication/Clipboard-check.svg")}
                  />
                </span>
                <span className="menu-text">
                  <FormattedMessage id="MENU.OFFER" />
                </span>
              </NavLink>
            </li>
          </ProtectedContent>
          ) : (
              ""
          )}
        </ProtectedContents>
      </ul>
      {/* end::Menu Nav */}
    </>
  );
}


export default AsideMenuList
