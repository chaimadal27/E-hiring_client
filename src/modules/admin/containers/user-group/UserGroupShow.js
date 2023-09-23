


/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useLayoutEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"

import { ShowView } from "../../../../components/partials/controls"
import UserGroup from "./components/display/UserGroup"
import { useSubheader } from "../../../../components/layout"
import { fetchUserGroup, clearStore } from "./store/actions"
import routes from "./../../routes"

const UserGroupShow = ({ history, match: { params = null }, intl }) => {
  // Subheader
  const suhbeader = useSubheader()
  const _title = intl.formatMessage({ id: "USER_GROUP.SHOW.TITLE" })

  // Tabs
  const dispatch = useDispatch()
  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isFetching, userGroupForShow = null, error } = useSelector(
    (state) => ({
      isFetching: state.admin.userGroup.isFetching,
      userGroupForShow: state.admin.userGroup.userGroup,
      success: state.admin.userGroup.success,
      error: state.admin.userGroup.error
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(fetchUserGroup(params))
  }, [params, dispatch])

  useLayoutEffect(() => {
    suhbeader.setTitle(_title)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const goBackToUserGroupsList = () => {
    history.push(routes.userGroupList.path)
  }

  return (
    <ShowView 
      title={_title}
      goBackTo={goBackToUserGroupsList}
      onClose={clearStore}
      error={error}
    >
      <UserGroup error={error} isFetching={isFetching} userGroup={userGroupForShow} />
      
    </ShowView>
  )
}

export default injectIntl(UserGroupShow)














/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
// import React, { useEffect, useState, useCallback } from "react"
// import { injectIntl } from "react-intl"
// import { shallowEqual, useSelector, useDispatch } from "react-redux"
// import { FormView } from "../../../../components/partials/controls"
// import _ from "lodash"

// import UserGroupForm from "./components/form/UserGroupForm"

// import { createUserGroup, clearStore, editUserGroup, fetchUserGroup } from "./store/actions"

// import { useSubheader } from "../../../../components/layout"

// import routes from "./../../routes"


// const UserGroupShow = ({ history, match: { params = null }, intl }) => {
//   // Subheader
//   const suhbeader = useSubheader()

//   const [title, setTitle] = useState("")
//   const dispatch = useDispatch()

//   //const layoutDispatch = useContext(LayoutContext.Dispatch)
//   const { isLoading, userGroupForEdit, success, error } = useSelector(
//     (state) => ({
//       isLoading: state.admin.userGroup.isLoading,
//       userGroupForEdit: state.admin.userGroup.userGroup,
//       success: state.admin.userGroup.success,
//       error: state.admin.userGroup.error
//     }),
//     shallowEqual
//   )

//   const saveUserGroup = (values) => {
//     if (_.isEmpty(params)) {
//       dispatch(createUserGroup(values))
//     } else {
//       dispatch(editUserGroup(params, values))
//     }
//   }

//   const goBackToUserGroupsList = useCallback(() => {
//     history.push(routes.userGroupList.path)
//   }, [history])

//   useEffect(() => {
//     if (!_.isEmpty(params)){
//       dispatch(fetchUserGroup(params))
//     }
//     dispatch(clearStore())
//   }, [params, dispatch])

//   useEffect(() => {
//     let _title = !_.isEmpty(params) 
//       ? intl.formatMessage({ id: "USER_GROUP.EDIT.TITLE" }) 
//       : intl.formatMessage({ id: "USER_GROUP.NEW.TITLE" })
//     setTitle(_title)
//     suhbeader.setTitle(_title)
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [userGroupForEdit, params])

//   return (
//     <FormView
//       goBackTo={goBackToUserGroupsList}
//       title={title}
//       onClose={clearStore}
//       error={error}
//       success={success.isCreated}
//       isLoading={isLoading}
//       successMsg={[
//         { condition: success.isUpdated, label: intl.formatMessage({ id: "USER_GROUP.EDIT.MSG" }) },
//         { condition: success.isCreated, label: intl.formatMessage({ id: "USER_GROUP.NEW.MSG" }) }
//       ]}
//     >
//       { ({ saveRef }) => (<UserGroupForm
//         isLoading={isLoading}
//         userGroup={ !_.isEmpty(params) && userGroupForEdit}
//         onSubmit={saveUserGroup}
//         saveRef={saveRef}
//       />)
//       }
//     </FormView>
//   )
// }


// export default injectIntl(UserGroupShow)
