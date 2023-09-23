/* eslint-disable no-restricted-imports */
import React, { useEffect } from "react"
import { Modal } from "react-bootstrap"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ModalProgressBar } from "../../../../../../components/partials/controls"
//import * as actions from "../../../_redux/activities/activitiesActions"
import { useActivitiesUIContext } from "../../context/ActivitiesUIContext"
import {disableActivities, fetchActivities} from "../../store/actions"


const ActivitiesDisableDialog = ({ show, onHide }) => {
  // Activities UI Context
  const activitiesUIProps = useActivitiesUIContext()
  
  // Activities Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.activity.isLoading, success: state.admin.activity.success }),
    shallowEqual
  )

  // if there weren't selected smsSkeletons we should close modal
  useEffect(() => {
    // !smsSkeletonsUIProps.ids || smsSkeletonsUIProps.ids.length === 0 ||
    if ( success.isDeactivated &&  show ) {
      onHide()
      activitiesUIProps.setIds([])
      dispatch(fetchActivities(activitiesUIProps.queryParams))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activitiesUIProps.ids, success, show])

  const onDisableActivities = () => {
    // server request for deleting smsSkeleton by seleted ids
    dispatch(disableActivities(activitiesUIProps.ids))
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {isLoading && <ModalProgressBar />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          <FormattedMessage id="ACTIVITY.MULTIPLE_DISABLE.TITLE" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormattedMessage id="ACTIVITY.MULTIPLE_DISABLE.MSG" />
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={onHide}
            className="btn btn-sm btn-light btn-elevate"
          >
            <FormattedMessage id="GENERAL.CANCEL" />
          </button>
          <> </>
          <button
            type="button"
            onClick={onDisableActivities}
            className="btn btn-sm btn-danger btn-elevate"
          >
            {isLoading && <span className="px-5 spinner spinner-white"></span>}
            <FormattedMessage id="GENERAL.DISABLE" />
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}


export default ActivitiesDisableDialog
