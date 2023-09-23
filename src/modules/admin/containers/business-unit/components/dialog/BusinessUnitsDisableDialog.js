import React, {useEffect} from 'react'
import { Modal } from 'react-bootstrap'
import { FormattedMessage } from "react-intl"
import { useBusinessUnitsUIContext } from "../../context/BusinessUnitsContext"
import { ModalProgressBar } from "../../../../../../components/partials/controls"
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { disableAllBusinessUnits, fetchBusinessUnits } from "../../store/actions"


const BusinessUnitsDisableDialog = ( { show, onHide } ) => {
    const businessunitsUIProps = useBusinessUnitsUIContext()

    const dispatch = useDispatch()

    const {isLoading, success} = useSelector(
        (state) => ({
            isLoading: state.admin.businessUnit.isLoading,
            success: state.admin.businessUnit.success
        }),
        shallowEqual
    )

    useEffect(()=> {
        if (success.isDeactivated && show) {
            onHide()
            dispatch(fetchBusinessUnits(businessunitsUIProps.queryParams))
            businessunitsUIProps.setIds([])
        }
    }, [businessunitsUIProps.ids, success, show])

     const onDisableBusinessUnits = () => {
        dispatch(disableAllBusinessUnits(businessunitsUIProps.ids))
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
        <FormattedMessage id="BUSINESS_UNIT.MULTIPlE_DISABLE.TITLE" />
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <FormattedMessage id="BUSINESS_UNIT.MULTIPlE_DISABLE.MSG" />
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
          onClick={onDisableBusinessUnits}
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

export default BusinessUnitsDisableDialog