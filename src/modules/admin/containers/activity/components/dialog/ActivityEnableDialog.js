/* eslint-disable no-restricted-imports */
import React, { useEffect } from "react"
import { Modal } from "react-bootstrap"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ModalProgressBar } from "../../../../../../components/partials/controls"
//import * as actions from "../../../_redux/activities/activitiesActions"
import { useActivitiesUIContext } from "../../context/ActivitiesUIContext"
import {enableActivity, fetchActivities} from "../../store/actions"

const ActivityEnableDialog = ({ params, show, onHide }) => {
  // Activities UI Context
  const activitiesUIProps = useActivitiesUIContext()
  
  // Activities Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.activity.isLoading, success: state.admin.activity.success }),
    shallowEqual
  )

  // if !id we should close modal
  useEffect(() => {
    if (success.isActivated && show) {
      onHide()
      dispatch(fetchActivities(activitiesUIProps.queryParams))
      activitiesUIProps.setIds([])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success, show])

  const onEnableactivity = () => {
    // server request for deleting Activities by id
    dispatch(enableActivity(params))
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {isLoading && <ModalProgressBar variant="query" />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          <FormattedMessage id="ACTIVITY.ENABLE.TITLE" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormattedMessage id="ACTIVITY.ENABLE.MSG" />
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
            disabled={isLoading}
            onClick={onEnableactivity}
            className="btn btn-sm btn-success btn-elevate"
          >
            {isLoading && <span className="px-5 spinner spinner-white"></span>}
            <FormattedMessage id="GENERAL.ENABLE" />
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}


export default ActivityEnableDialog
