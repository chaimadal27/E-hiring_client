import React from "react"
import { connect } from "react-redux"

import { AuthenticationError, PermissionDeniedError, isPermittedPermission } from "./../../helpers"
import {ContentRoute} from "../router"


const ProtectedRoute = ({ isAuthenticated = false, anonymous = true, can, isSuperuser, permissions, ...props }) => {

  if (!isAuthenticated && !anonymous){
    throw new AuthenticationError()
  }

  if (!isSuperuser && !isPermittedPermission(can, permissions)){
    throw new PermissionDeniedError()
  }

  return (<ContentRoute {...props} />)
}


const mapStateToProps = (state) => state.common.auth

export default connect(mapStateToProps)(ProtectedRoute)
