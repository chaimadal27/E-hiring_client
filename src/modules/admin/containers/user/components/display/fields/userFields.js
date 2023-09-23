// import addressUIHelper from "./../../../../../../common/UIHelpers/addressUIHelper";
import { isEmpty, isArray } from "lodash"
import {LIST_OF_ITEMS, NESTED_LIST_OF_ITEMS, SELECT} from '../../../../../../../components/partials'
import { LIST } from "../../../../list/store/constants/endpoints"
import {
  // civilityUIHelper,
  permissionUIHelper,
  // issuperuserUIHelper,
  // ismanagerUIHelper,
  // userStateListUIHelper
 
} from './../../../../../UIHelpers'


export const userFieldsAr = ({ intl }) => [
  {
    name: 'user.firstNameAr',
    label: intl.formatMessage({ id: 'USER.INPUT.FIRST_NAME_AR' }),
    size: 6,
  },
  {
    name: 'user.lastNameAr',
    label: intl.formatMessage({ id: 'USER.INPUT.LAST_NAME_AR' }),
    size: 6
  }
]

export const userFieldsFr = ({ intl }) => [
  {
    name: 'user.firstName',
    label: intl.formatMessage({ id: 'USER.INPUT.FIRST_NAME_FR' }),
    size: 6
  },
  {
    name: 'user.lastName',
    label: intl.formatMessage({ id: 'USER.INPUT.LAST_NAME_FR' }),
    size: 6
  }
]

export const userFields = ({ intl }) => [
  // {
  //   name: 'civility',
  //   options: civilityUIHelper(intl),
  //   label: intl.formatMessage({ id: 'USER.INPUT.CIVILITY' }),
  //   size: 6,
  // },
  {
    name: 'user.email',
    label: intl.formatMessage({ id: 'USER.INPUT.EMAIL' }),
    size: 6,
  },
  {
    name:'userDob',
    label:intl.formatMessage({id:'USER.DATE_OF_BIRTH'}),
    size:6
  },
  {
    name:'userCity',
    label:intl.formatMessage({id:'USER.CITY'}),
    size:6
  },
  {
    name:'userCountry',
    label:intl.formatMessage({id:'USER.COUNTRY'}),
    size:6
  },
  {
    name:'userPostalCode',
    label:intl.formatMessage({id:'USER.POSTAL_CODE'}),
    size:6
  },
  {
    name:'tjm',
    label:intl.formatMessage({id:'USER.TJM'}),
    size:6
  },
  {
    name:'devise',
    label:intl.formatMessage({id:'USER.DEVISE'}),
    size:6
  },
  {
    name:'mobility',
    label:intl.formatMessage({id:'USER.MOBILITY'}),
    size:6
  },
  {
    name: 'phone',
    label: intl.formatMessage({ id: 'USER.INPUT.MOBILE' }),
    size: 6,
  },
  // {
  //   name:'user.isSuperuser',
  //   options: issuperuserUIHelper(intl),
  //   label:intl.formatMessage({id:'USER.INPUT.ISSUPERUSER'}),
  //   size:6
  // },
  // {
  //   name:'isManager',
  //   options: ismanagerUIHelper(intl),
  //   label: intl.formatMessage({id:'USER.INPUT.ISMANAGER'}),
  //   size:6
  // },
  // {
  //   name:'userState',
  //   loadOptions: userStateListUIHelper({id:'RESOURCE.STATE'}),
  //   label: intl.formatMessage({id:'RESOURCE.STATE'}),
  //   size:6,
  // },
  {
    name: 'user.displayGroups[].name',
    label: intl.formatMessage({ id: 'USER.INPUT.GROUP' }),
  },
  {
    name: 'user.displayGroups[].displayPermissions[].codename',
    component: NESTED_LIST_OF_ITEMS,
    columns: ([
      { text: intl.formatMessage({ id: "GENERAL.MODULE" }) },
      { text: intl.formatMessage({ id: "GENERAL.PERMISSIONS" }) }
    ]),
    label: intl.formatMessage({ id: 'USER.INPUT.PERMISSIONS' }),
    formatter: (value) => {
      let fieldValue = {}
      permissionUIHelper( (permissions) => {
        if (!isEmpty(permissions) && isArray(permissions)) {
          fieldValue = permissions.reduce((acc, permission) => {
            acc[intl.formatMessage({ id: permission.label })] = permission.options.map((perm) => intl.formatMessage({ id: perm.label }))
            return acc
          }, {})
        }}, value)
      return fieldValue
    },
    size: 12,
  }
]
