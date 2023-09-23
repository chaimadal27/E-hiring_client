import React,{useEffect} from 'react'
import { Modal } from "react-bootstrap"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { ModalProgressBar } from "../../../../../../components/partials/controls"
import { useBusinessUnitsUIContext } from "../../context/BusinessUnitsContext"
import { disableBusinessUnit, fetchBusinessUnits } from "../../store/actions"


const BusinessUnitDisableDialog = ({ params, show, onHide }) => {
    const businessUnitsUIProps = useBusinessUnitsUIContext()
    const dispatch = useDispatch()
    const { isLoading, success } = useSelector(
        (state) => ({isLoading: state.admin.businessUnit.isLoading,
        success: state.admin.businessUnit.success,
        }),
        shallowEqual
    )
    useEffect(()=>{
        if (success.isDeactivated && show) {
            onHide()
            dispatch(fetchBusinessUnits(businessUnitsUIProps.queryParams))
            businessUnitsUIProps.setIds([])
        }
    }, [success, show])
  

    const onDisableBusinessUnit = () => {
        dispatch(disableBusinessUnit(params))
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
            <FormattedMessage id="BUSINESS_UNIT.DISABLE.TITLE" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormattedMessage id="BUSINESS_UNIT.DISABLE.MSG" />
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
              onClick={onDisableBusinessUnit}
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

export default BusinessUnitDisableDialog
