import * as Yup from 'yup'

// import addressUIHelper from "./../../../../../../common/UIHelpers/addressUIHelper";
import {
  // civilityUIHelper,
  permissionUIHelper,
  groupUIHelper,
  // issuperuserUIHelper,
  // ismanagerUIHelper,
  // userStateListUIHelper
  

} from './../../../../../UIHelpers'

import {
  // ASYNC_SELECT,
  INPUT,
  SELECT,
  INPUT_MASK,
  RADIO,
  CHECKBOX_GROUP,
  DATE_PICKER,
  
} from './../../../../../../../components/partials'


// Validation schema


// AR fields
export const userFieldsAr = ({ intl }) => [
  {
    name: 'user.firstNameAr',
    component: INPUT,
    label: intl.formatMessage({ id: 'USER.INPUT.FIRST_NAME_AR' }),
    placeholder: intl.formatMessage({ id: 'USER.INPUT.FIRST_NAME_AR' }),
    size: 6,
    validation: Yup.string().min(2).max(200).required(),
    required: true
  },
  {
    name: 'user.lastNameAr',
    component: INPUT,
    label: intl.formatMessage({ id: 'USER.INPUT.LAST_NAME_AR' }),
    placeholder: intl.formatMessage({ id: 'USER.INPUT.LAST_NAME_AR' }),
    validation: Yup.string().min(2).max(200).required(),
    required: true,

    size: 6
  }
]





// FR fields
export const userFieldsFr = ({ intl }) => [
  {
    name: 'user.firstName',
    component: INPUT,
    label: intl.formatMessage({ id: 'USER.INPUT.FIRST_NAME_FR' }),
    placeholder: intl.formatMessage({ id: 'USER.INPUT.FIRST_NAME_FR' }),
    validation: Yup.string().min(2).max(200).required(),
    required: true,

    size: 6
  },
  {
    name: 'user.lastName',
    component: INPUT,
    label: intl.formatMessage({ id: 'USER.INPUT.LAST_NAME_FR' }),
    placeholder: intl.formatMessage({ id: 'USER.INPUT.LAST_NAME_FR' }),
    validation: Yup.string().min(2).max(200).required(),
    required: true,

    size: 6
  }
]

export const userFields = ({ intl }) => [
  // {
  //   name: 'civility',
  //   component: RADIO,
  //   options: civilityUIHelper(intl),
  //   label: intl.formatMessage({ id: 'USER.INPUT.CIVILITY' }),
  //   placeholder: intl.formatMessage({ id: 'USER.INPUT.CIVILITY' }),
  //   validation: Yup.number().required(),
  //   size: 6,
  //   required: true
  // },


  {
    name: 'user.email',
    component: INPUT,
    label: intl.formatMessage({ id: 'USER.INPUT.EMAIL' }),
    placeholder: intl.formatMessage({ id: 'USER.INPUT.EMAIL' }),
    size: 6,
    validation: Yup.string().email().required(),
    required: true
  },
  
  {
    name:'userDob',
    component: DATE_PICKER,
    label: intl.formatMessage({id: 'USER.DATE_OF_BIRTH'}),
    placeholder: intl.formatMessage({id: 'USER.DATE_OF_BIRTH'}),
    validation: Yup.date().required(),
    size:6
  },

  {
    name:'userCity',
    component: INPUT,
    label: intl.formatMessage({id:'USER.CITY'}),
    placeholder: intl.formatMessage({id: 'USER.CITY'}),
    validation: Yup.string().required(),
    size:6,
    required:true,
  },

  {
    name:'userCountry',
    component: INPUT,
    label: intl.formatMessage({id:'USER.COUNTRY'}),
    placeholder: intl.formatMessage({id: 'USER.COUNTRY'}),
    validation: Yup.string().required(),
    size:6,
    required:true,
  },


  {
    name:'userPostalCode',
    component: INPUT_MASK,
    mask:'9999',
    label: intl.formatMessage({id:'USER.POSTAL_CODE'}),
    placeholder: intl.formatMessage({id:'USER.POSTAL_CODE'}),
    validation: Yup.number(),
    size: 6,
    required:true,
    maxLength: 4
  },

  {
    name:'tjm',
    component: INPUT_MASK,
    mask:'9.99',
    label: intl.formatMessage({id:'USER.TJM'}),
    placeholder: intl.formatMessage({id: 'USER.TJM'}),
    validation: Yup.number(),
    size: 6,
    required: true,
    maxLength: 3
  },

  {
    // it could be added to list management since this is an ERP
    // don't forget to ask amine about this
    name: 'devise',
    component: INPUT,
    label: intl.formatMessage({ id: 'USER.DEVISE' }),
    placeholder: intl.formatMessage({ id: 'USER.DEVISE' }),
    validation: Yup.string().min(2).max(200).required(),
    required: true,
    size: 6
  },
  
  {
    // it could be added staticly in Profile model as CharField with choices
    // ask amine about this
    name: 'mobility',
    component: INPUT,
    label: intl.formatMessage({ id: 'USER.MOBILITY' }),
    placeholder: intl.formatMessage({ id: 'USER.MOBILITY' }),
    validation: Yup.string().min(2).max(200).required(),
    required: true,
    size: 6
  },
  // is suppose that this we don't need this
  // again ask about this
  // {
  //   name: 'secondPhone',
  //   component: INPUT_MASK,
  //   mask: '99999999',
  //   label: intl.formatMessage({ id: 'USER.INPUT.PHONE' }),
  //   placeholder: intl.formatMessage({ id: 'USER.INPUT.PHONE' }),
  //   validation: Yup.number().phone(),
  //   size: 6
  // },
  {
    name: 'phone',
    component: INPUT_MASK,
    mask: '99999999',
    label: intl.formatMessage({ id: 'USER.INPUT.MOBILE' }),
    placeholder: intl.formatMessage({ id: 'USER.INPUT.MOBILE' }),
    validation: Yup.number().phone(),
    size: 6,
    maxLength: 8
  },
  

  // {
  //   name:'user.isSuperuser',
  //   component:RADIO,
  //   options: issuperuserUIHelper(intl),
  //   label: intl.formatMessage({id:'USER.INPUT.ISSUPERUSER'}),
  //   placeholder: intl.formatMessage({id: 'USER.INPUT.ISSUPERUSER'}),
  //   validation: Yup.number().required(),
  //   size: 6,
  //   required:true

  // },

  
  // {
  //   name:'isManager',
  //   component:RADIO,
  //   options: ismanagerUIHelper(intl),
  //   label: intl.formatMessage({id:'USER.INPUT.ISMANAGER'}),
  //   placeholder: intl.formatMessage({id:'USER.INPUT.ISMANAGER'}),
  //   validation: Yup.number().required(),
  //   size: 6,
  //   required: true
  // },  


  // {
  //   name:'userState',
  //   component: SELECT,
  //   multiple: false,
  //   loadOptions: userStateListUIHelper,
  //   label: intl.formatMessage({id:"RESOURCE.STATE"}),
  //   placeholder: intl.formatMessage({id: "RESOURCE.STATE"}),
  //   // saveOptions:{
  //   //   ref:'state-save',
  //   //   attr:'states-of-user'
  //   // },
  //   validation: Yup.array().required(),
  //   required: true

  // },

  {
    name: 'user.groups',
    component: SELECT,
    multiple: true,
    loadOptions: groupUIHelper,
    saveOptions: {
      ref: 'groups-save',
      attr: 'permissions'
    },
    label: intl.formatMessage({ id: 'USER.INPUT.GROUP' }),
    placeholder: intl.formatMessage({ id: 'USER.INPUT.GROUP' }),
    validation: Yup.string().array().required(),
    required: true
  },
  {
    name: 'user.userPermissions',
    label: intl.formatMessage({ id: 'USER.INPUT.PERMISSIONS' }),
    placeholder: intl.formatMessage({ id: 'USER.INPUT.PERMISSIONS' }),
    component: CHECKBOX_GROUP,
    disabledOptionsRef: 'groups-save',
    translateLabels: true,
    loadOptions: permissionUIHelper,
    size: 12,
    validation: Yup.mixed().array()
  }
]
