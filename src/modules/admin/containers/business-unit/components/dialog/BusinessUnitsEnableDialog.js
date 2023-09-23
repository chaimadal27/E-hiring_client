import React, {useEffect} from 'react'
import { Modal } from 'react-bootstrap'
import { ModalProgressBar } from "../../../../../../components/partials/controls"
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { FormattedMessage } from "react-intl"
import { useBusinessUnitsUIContext } from "../../context/BusinessUnitsContext"
import { enableAllBusinessUnits, fetchBusinessUnits } from "../../store/actions"


const BusinessUnitsEnableDialog = ({show, onHide}) => {

    const businessUnitsUIProps = useBusinessUnitsUIContext()
    const dispatch = useDispatch()

    const { isLoading, success } = useSelector(
        (state) => ({
            isLoading: state.admin.businessUnit.isLoading,
            success: state.admin.businessUnit.success
        }),
        shallowEqual
    )

    useEffect(()=> {
        if (success.isActivated && show) {
            onHide()
            dispatch(fetchBusinessUnits(businessUnitsUIProps.quertParams))
            businessUnitsUIProps.setIds([])
        }
    },[businessUnitsUIProps.ids, success, show])



    const onEnableBusinessUnits = () => {
        dispatch(enableAllBusinessUnits(businessUnitsUIProps.ids))
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
          <FormattedMessage id="BUSiNESS_UNIT.MULTIPLE_ENABLE.TITLE" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormattedMessage id="BUSINESS_UNIT.MULTIPLE_ENABLE.MSG" />
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
            onClick={onEnableBusinessUnits}
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

export default BusinessUnitsEnableDialog