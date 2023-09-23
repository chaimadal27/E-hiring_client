/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"
import { useLocation } from "react-router"
import { NavLink } from "react-router-dom"
//import { PA_VERSION } from "./../../../../../../constants"
import SVG from "react-inlinesvg"
import { checkIsActive, toAbsoluteUrl } from "../../../../../../helpers"
import routes from "../../../../routes"
import { ProtectedContent } from "../../../../../../components/wrappers"

const HeaderMenu = ({ layoutProps }) => {
  const location = useLocation()
  const getMenuItemActive = (url) => {
    return checkIsActive(location, url) ? "menu-item-active" : ""
  }

  return <div
    id="kt_header_menu"
    className={`header-menu header-menu-mobile ${layoutProps.ktMenuClasses}`}
    {...layoutProps.headerMenuAttributes}
  >
    {/*begin::Header Nav*/}
    <ul className={`menu-nav ${layoutProps.ulClasses}`}>

      {/*begin::1 Level*/}
      <ProtectedContent rule={routes.myAppointments}>
        <li className={`menu-item menu-item-rel ${getMenuItemActive(routes.myAppointments.path)}`}>
          <NavLink className="menu-link" to={routes.myAppointments.path}>
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Communication/Clipboard-list.svg")} />
            </span>
            <span className="menu-text"><FormattedMessage id="MENU.MY_CALENDAR" /></span>
          </NavLink>
        </li>
      </ProtectedContent>
      {/* <li className={`menu-item menu-item-rel ${getMenuItemActive('/')}`}>
        <span className="">
          <span className="menu-text"><FormattedMessage id="GENERAL.VERSION" values={{ version: PA_VERSION }} /> </span>
        </span>
      </li> */}
      {/*end::1 Level*/}
    </ul>
    {/*end::Header Nav*/}
  </div>
}


export default HeaderMenu
