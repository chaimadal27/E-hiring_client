


/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useLayoutEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"

import { ShowView } from "../../../../components/partials/controls"
import ResourceState from "./components/display/ResourceState"
import { useSubheader } from "../../../../components/layout"
import { fetchResourceState, clearStore } from "./store/actions"
import routes from "./../../routes"

const ResourceStateShow = ({ history, match: { params = null }, intl }) => {
  // Subheader
  const suhbeader = useSubheader()
  const _title = intl.formatMessage({ id: "RESOURCE_STATE.SHOW.TITLE" })

  // Tabs
  const dispatch = useDispatch()
  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isFetching, resourceStateForShow = null, error } = useSelector(
    (state) => ({
      isFetching: state.admin.resourceState.isFetching,
      resourceStateForShow: state.admin.resourceState.resourceState,
      success: state.admin.resourceState.success,
      error: state.admin.resourceState.error
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(fetchResourceState(params))
  }, [params, dispatch])

  useLayoutEffect(() => {
    suhbeader.setTitle(_title)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const goBackToResourceStatesList = () => {
    history.push(routes.resourceStateList.path)
  }

  return (
    <ShowView 
      title={_title}
      goBackTo={goBackToResourceStatesList}
      onClose={clearStore}
      error={error}
    >
      <ResourceState error={error} isFetching={isFetching} resourceState={resourceStateForShow} />
      
    </ShowView>
  )
}

export default injectIntl(ResourceStateShow)














/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
// import React, { useEffect, useState, useCallback } from "react"
// import { injectIntl } from "react-intl"
// import { shallowEqual, useSelector, useDispatch } from "react-redux"
// import { FormView } from "../../../../components/partials/controls"
// import _ from "lodash"

// import ResourceStateForm from "./components/form/ResourceStateForm"

// import { createResourceState, clearStore, editResourceState, fetchResourceState } from "./store/actions"

// import { useSubheader } from "../../../../components/layout"

// import routes from "./../../routes"


// const ResourceStateShow = ({ history, match: { params = null }, intl }) => {
//   // Subheader
//   const suhbeader = useSubheader()

//   const [title, setTitle] = useState("")
//   const dispatch = useDispatch()

//   //const layoutDispatch = useContext(LayoutContext.Dispatch)
//   const { isLoading, resourceStateForEdit, success, error } = useSelector(
//     (state) => ({
//       isLoading: state.admin.resourceState.isLoading,
//       resourceStateForEdit: state.admin.resourceState.resourceState,
//       success: state.admin.resourceState.success,
//       error: state.admin.resourceState.error
//     }),
//     shallowEqual
//   )

//   const saveResourceState = (values) => {
//     if (_.isEmpty(params)) {
//       dispatch(createResourceState(values))
//     } else {
//       dispatch(editResourceState(params, values))
//     }
//   }

//   const goBackToResourceStatesList = useCallback(() => {
//     history.push(routes.resourceStateList.path)
//   }, [history])

//   useEffect(() => {
//     if (!_.isEmpty(params)){
//       dispatch(fetchResourceState(params))
//     }
//     dispatch(clearStore())
//   }, [params, dispatch])

//   useEffect(() => {
//     let _title = !_.isEmpty(params) 
//       ? intl.formatMessage({ id: "RESOURCE_STATE.EDIT.TITLE" }) 
//       : intl.formatMessage({ id: "RESOURCE_STATE.NEW.TITLE" })
//     setTitle(_title)
//     suhbeader.setTitle(_title)
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [resourceStateForEdit, params])

//   return (
//     <FormView
//       goBackTo={goBackToResourceStatesList}
//       title={title}
//       onClose={clearStore}
//       error={error}
//       success={success.isCreated}
//       isLoading={isLoading}
//       successMsg={[
//         { condition: success.isUpdated, label: intl.formatMessage({ id: "RESOURCE_STATE.EDIT.MSG" }) },
//         { condition: success.isCreated, label: intl.formatMessage({ id: "RESOURCE_STATE.NEW.MSG" }) }
//       ]}
//     >
//       { ({ saveRef }) => (<ResourceStateForm
//         isLoading={isLoading}
//         resourceState={ !_.isEmpty(params) && resourceStateForEdit}
//         onSubmit={saveResourceState}
//         saveRef={saveRef}
//       />)
//       }
//     </FormView>
//   )
// }


// export default injectIntl(ResourceStateShow)