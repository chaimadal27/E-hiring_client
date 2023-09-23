/* eslint-disable no-restricted-imports */
import React, { useEffect } from "react"
import { Modal } from "react-bootstrap"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ModalProgressBar } from "../../../../../../components/partials/controls"
//import * as actions from "../../../_redux/activities/activitiesActions"
import { useActivitiesUIContext } from "../../context/ActivitiesUIContext"
import {disableActivity, fetchActivities} from "../../store/actions"

const ActivityDisableDialog = ({ params, show, onHide }) => {
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
    if (success.isDeactivated && show) {
      onHide()
      dispatch(fetchActivities(activitiesUIProps.queryParams))
      activitiesUIProps.setIds([])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success, show])

  const onDisableActivity = () => {
    // server request for deleting smsSkeleton by id
    dispatch(disableActivity(params))
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
          <FormattedMessage id="ACTIVITY.DISABLE.TITLE" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormattedMessage id="ACTIVITY.DISABLE.MSG" />
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
            onClick={onDisableActivity}
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


export default ActivityDisableDialog
