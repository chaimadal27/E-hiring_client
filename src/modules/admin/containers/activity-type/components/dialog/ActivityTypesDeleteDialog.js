/* eslint-disable no-restricted-imports */
import React, { useEffect } from "react"
import { Modal } from "react-bootstrap"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ModalProgressBar } from "../../../../../../components/partials/controls"
import { useActivityTypesUIContext } from "../../context/ActivityTypesUIContext"
import {deleteActivityTypes, fetchActivityTypes} from "../../store/actions"

const ActivityTypesDeleteDialog = ({ params, show, onHide }) => {
  // ActivityTypes UI Context
  const activityTypesUIProps = useActivityTypesUIContext()

  // ActivityTypes Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.activityType.isLoading, success: state.admin.activityType.success }),
    shallowEqual
  )

  // if !id we should close modal
  useEffect(() => {
    if (success.isDeleted && show) {
      onHide()
      dispatch(fetchActivityTypes(activityTypesUIProps.queryParams))
      activityTypesUIProps.setIds([])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success, show])

  const onDeleteUser = () => {
    // server request for deleting smsSkeleton by id
    dispatch(deleteActivityTypes(params))
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
          <FormattedMessage id="ACTIVITY_TYPE.MULTIPLE_DELETE.TITLE" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormattedMessage id="ACTIVITY_TYPE.MULTIPLE_DELETE.MSG" />
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
            onClick={onDeleteUser}
            className="btn btn-sm btn-danger btn-elevate"
          >
            {isLoading && <span className="px-5 spinner spinner-white"></span>}
            <FormattedMessage id="GENERAL.DELETE" />
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}


export default ActivityTypesDeleteDialog
