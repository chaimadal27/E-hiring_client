import _ from "lodash"

import { ACTIVATE, DEACTIVATE, VIEW, UPDATE, CREATE, MODULES_PERMISSIONS, DELETE, UNDELETE, VALIDATE, INVALIDATE } from "./../../../../constants"
//import {isRLTLang} from "../../../i18n"

export const PERMISSIONS_LABELS = {
  [ACTIVATE]: "GENERAL.ACTIVATE",
  [DEACTIVATE]: "GENERAL.DEACTIVATE",
  [VIEW]: "GENERAL.VIEW",
  [UPDATE]: "GENERAL.UPDATE",
  [CREATE]: "GENERAL.CREATE",
  [DELETE]: "GENERAL.DELETE",
  [UNDELETE]: "GENERAL.UNDELETE",
  [VALIDATE]:"GENERAL.VALIDATE",
  [INVALIDATE]:"GENERAL.INVALIDATE"
}


export const MODULES_LABELS = {
  [MODULES_PERMISSIONS.USER.module]: "PERMISSIONS.USER",
  [MODULES_PERMISSIONS.USER_GROUP.module]: "PERMISSIONS.USER_GROUP",
  [MODULES_PERMISSIONS.LEGAL_AGENCY.module]: "PERMISSIONS.LEGAL_AGENCY",
  [MODULES_PERMISSIONS.BUSINESS_UNIT.module]: "PERMISSIONS.BUSINESS_UNIT",
  [MODULES_PERMISSIONS.SHEET.module]: "PERMISSIONS.SHEET",
/*
  [MODULES_PERMISSIONS.FOLDER_GROUP.module]: "PERMISSIONS.FOLDER_GROUP",
  [MODULES_PERMISSIONS.FOLDER.module]: "PERMISSIONS.FOLDER",

  [MODULES_PERMISSIONS.PARTNERSHIP.module]: "PERMISSIONS.PARTNERSHIP",
  [MODULES_PERMISSIONS.SERVICE.module]: "PERMISSIONS.SERVICE",*/
}


export const permissionUIHelper = (callback, selectedPermissions = []) => {

  const permissions = []
  for(let modulePermissionKey in MODULES_PERMISSIONS){
    if (MODULES_PERMISSIONS[modulePermissionKey].module in MODULES_LABELS){
      let permission = {
        label: MODULES_LABELS[MODULES_PERMISSIONS[modulePermissionKey].module],
        options: []
      }
      for (let permissionKey in MODULES_PERMISSIONS[modulePermissionKey].permissions){
        if (
        permissionKey in PERMISSIONS_LABELS &&
          (_.isEmpty(selectedPermissions) || (!_.isEmpty(selectedPermissions)
          && _.includes(selectedPermissions, MODULES_PERMISSIONS[modulePermissionKey].permissions[permissionKey]) ))
        ){
          permission.options.push({
            label: PERMISSIONS_LABELS[permissionKey],
            value: MODULES_PERMISSIONS[modulePermissionKey].permissions[permissionKey]
          })
        }
      }
      if (!_.isEmpty(permission.options)){
        permissions.push(permission)
      }
    }
  }

  callback(permissions)
}


export default _.memoize(permissionUIHelper)
