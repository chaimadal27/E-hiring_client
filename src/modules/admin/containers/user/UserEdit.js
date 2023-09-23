import React, { useEffect } from 'react'
import {injectIntl} from "react-intl"
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import _ from "lodash"

import UserForm from './components/form/UserForm'
import { clearStore, editUser, fetchUser } from './store/actions'
import { useSubheader } from '../../../../components/layout'
import routes from './../../routes'
import { FormView } from '../../../../components/partials'

const UserEdit = ({history,intl,  match:{params}}) => {
    const subheader = useSubheader()

    const dispatch = useDispatch()

    const { isLoading, success, error } = useSelector(
        (state) => ({
            isLoading: state.admin.user.isLoading,
            success: state.admin.user.success,
            error: state.admin.user.error
        }),
        shallowEqual
    )

    const saveUser =(fieldValues)=> {
        const values = _.cloneDeep(fieldValues)
        dispatch(editUser(params, values))
    }

    const goBackToUserList=()=> {
        history.push(routes.userList.path)
    }

    useEffect(()=>{
        dispatch(fetchUser(params))
    },[params, intl, dispatch])


  return (
    <FormView
        goBackTo={goBackToUserList}
        title="Modifier"
        onClose={clearStore}
        error={error}
        isLoading={isLoading}
        successMsg={[
            {condition: success.isUpdated, label: intl.formatMessage({ id: "USER.EDIT.MSG" })}
        ]}
    >
        {
            ({saveRef}) => (<UserForm 
                isLoading={isLoading}
                success={success.isUpdated}
                onSubmit={saveUser}
                
                saveRef={saveRef}
            />)
        }
    </FormView>
  )
}

export default UserEdit