/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react"
import { Modal } from "react-bootstrap"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ModalProgressBar } from "../../../../../../components/partials/controls"
import { deleteResourceState, fetchResourceStates } from "../../store/actions"
import { useResourceStatesUIContext } from "../../context/ResourceStatesUIContext"

const ResourceStateDeleteDialog = ({ params, show, onHide }) => {
  // ResourceStates UI Context
  const resourceStatesUIContext = useResourceStatesUIContext()
  const resourceStatesUIProps = useMemo(() => {
    return {
      setIds: resourceStatesUIContext.setIds,
      queryParams: resourceStatesUIContext.queryParams,
    }
  }, [resourceStatesUIContext])

  // ResourceStates Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.resourceState.isLoading, success: state.admin.resourceState.success }),
    shallowEqual
  )

  // if !id we should close modal
  useEffect(() => {
    if (success && show) {
      onHide()
      dispatch(fetchResourceStates(resourceStatesUIProps.queryParams))
      resourceStatesUIProps.setIds([])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success, show, resourceStatesUIProps])

  const onDeleteResourceState = () => {
    // server request for deleting resourceState by id
    dispatch(deleteResourceState(params))
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
          <FormattedMessage id="RESOURCE_STATE.DELETE.TITLE" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormattedMessage id="RESOURCE_STATE.DELETE.MSG" />
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
            onClick={onDeleteResourceState}
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


export default ResourceStateDeleteDialog
