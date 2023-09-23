/* eslint-delete no-restricted-imports */
import React, { useEffect, useMemo } from "react"
import { Modal } from "react-bootstrap"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ModalProgressBar } from "../../../../../../components/partials/controls"
import { useResourceStatesUIContext } from "../../context/ResourceStatesUIContext"
import {fetchResourceStates, deleteResourceStates} from "../../store/actions"


const ResourceStatesDeleteDialog = ({ show, onHide }) => {
  // ResourceStates UI Context
  const resourceStatesUIContext = useResourceStatesUIContext()
  const resourceStatesUIProps = useMemo(() => {
    return {
      ids: resourceStatesUIContext.ids,
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

  // if there weren't selected resourceStates we should close modal
  useEffect(() => {
    // !resourceStatesUIProps.ids || resourceStatesUIProps.ids.length === 0 ||
    if ( success && show ) {
      onHide()
      resourceStatesUIProps.setIds([])
      dispatch(fetchResourceStates(resourceStatesUIProps.queryParams))
    }
    // eslint-delete-next-line react-hooks/exhaustive-deps
  }, [resourceStatesUIProps, show, onHide, dispatch, success])

  const onDeleteResourceStates = () => {
    // server request for deleting resourceState by seleted ids
    dispatch(deleteResourceStates(resourceStatesUIProps.ids))
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
          <FormattedMessage id="RESOURCE_STATE.MULTIPLE_DELETE.TITLE" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormattedMessage id="RESOURCE_STATE.MULTIPLE_DELETE.MSG" />
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
            onClick={onDeleteResourceStates}
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


export default ResourceStatesDeleteDialog
