import React, { useEffect } from 'react'
import {injectIntl} from "react-intl"
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import _ from "lodash"

import ActivityForm from './components/form/ActivityForm'
import { clearStore, editActivity, fetchActivity } from './store/actions'
import { useSubheader } from '../../../../components/layout'
import routes from './../../routes'
import { FormView } from '../../../../components/partials'

const ActivityEdit = ({history,intl,  match:{params}}) => {
    const subheader = useSubheader()

    const dispatch = useDispatch()

    const { isLoading, success, error } = useSelector(
        (state) => ({
            isLoading: state.admin.activity.isLoading,
            success: state.admin.activity.success,
            error: state.admin.activity.error
        }),
        shallowEqual
    )

    const saveActivity =(fieldValues)=> {
        const values = _.cloneDeep(fieldValues)
        dispatch(editActivity(params, values))
    }

    const goBackToActivityList=()=> {
        history.push(routes.activityList.path)
    }

    useEffect(()=>{
        dispatch(fetchActivity(params))
    },[params, intl, dispatch])


  return (
    <FormView
        goBackTo={goBackToActivityList}
        title="Modifier"
        onClose={clearStore}
        error={error}
        isLoading={isLoading}
        successMsg={[
            {condition: success.isUpdated, label: intl.formatMessage({ id: "ACTIVITY.EDIT.MSG" })}
        ]}
    >
        {
            ({saveRef}) => (<ActivityForm 
                isLoading={isLoading}
                success={success.isUpdated}
                onSubmit={saveActivity}
                
                saveRef={saveRef}
            />)
        }
    </FormView>
  )
}

export default ActivityEdit