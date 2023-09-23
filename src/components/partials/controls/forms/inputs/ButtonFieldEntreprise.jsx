import React, { useEffect, useState } from "react"
import _ from "lodash"
import { Button } from "react-bootstrap"
import CandidateSchoolModalDialog
    from "../../../../../modules/admin/containers/candidate/components/dialog/AddData/CandidateSchoolModalDialog";
import CandidatePartnershipModalDialog
    from "../../../../../modules/admin/containers/candidate/components/dialog/AddData/CandidatePartnershipModalDialog";

const ButtonFieldPartnership = ({
                               ...props
                           }) => {


    const [showPartnershipModal, setShowPatnershipModal] = useState(false)

    return (
        <div>
            <br/>
            <Button
                className="btn btn-sm btn-primary mr-3"
                onClick={() => setShowPatnershipModal(true)}
            >  <i className="fas fa-plus" /></Button>
            <CandidatePartnershipModalDialog show={showPartnershipModal} onHide={() => setShowPatnershipModal(false)}></CandidatePartnershipModalDialog>
        </div>
    )
}


export default ButtonFieldPartnership