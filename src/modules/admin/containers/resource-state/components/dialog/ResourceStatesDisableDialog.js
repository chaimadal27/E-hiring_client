/* eslint-disable no-restricted-imports */
import React, { useEffect } from "react"
import { Modal } from "react-bootstrap"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ModalProgressBar } from "../../../../../../components/partials/controls"
//import * as actions from "../../../_redux/resourceStates/resourceStatesActions"
import { useResourceStatesUIContext } from "../../context/ResourceStatesUIContext"
import {disableResourceStates, fetchResourceStates} from "../../store/actions"


const ResourceStatesDisableDialog = ({ show, onHide }) => {
  // ResourceStates UI Context
  const resourceStatesUIProps = useResourceStatesUIContext()
  
  // ResourceStates Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.resourceState.isLoading, success: state.admin.resourceState.success }),
    shallowEqual
  )

  // if there weren't selected smsSkeletons we should close modal
  useEffect(() => {
    // !smsSkeletonsUIProps.ids || smsSkeletonsUIProps.ids.length === 0 ||
    if ( success.isDeactivated &&  show ) {
      onHide()
      resourceStatesUIProps.setIds([])
      dispatch(fetchResourceStates(resourceStatesUIProps.queryParams))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resourceStatesUIProps.ids, success, show])

  const onDisableResourceStates = () => {
    // server request for deleting smsSkeleton by seleted ids
    dispatch(disableResourceStates(resourceStatesUIProps.ids))
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
          <FormattedMessage id="RESOURCE_STATE.MULTIPLE_DISABLE.TITLE" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormattedMessage id="RESOURCE_STATE.MULTIPLE_DISABLE.MSG" />
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
            onClick={onDisableResourceStates}
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


export default ResourceStatesDisableDialog
