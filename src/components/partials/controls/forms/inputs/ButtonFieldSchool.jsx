import React, { useEffect, useState } from "react"
import _ from "lodash"
import { Button } from "react-bootstrap"
import CandidateSchoolModalDialog
    from "../../../../../modules/admin/containers/candidate/components/dialog/AddData/CandidateSchoolModalDialog";

const ButtonFieldSchool = ({
                               ...props
                           }) => {


    const [showSchoolModal, setShowSchoolModal] = useState(false)

    return (
        <div>
            <br/>
            <Button
                className="btn btn-sm btn-primary mr-3"
                onClick={() => setShowSchoolModal(true)}
            >  <i className="fas fa-plus" /></Button>
            <CandidateSchoolModalDialog show={showSchoolModal} onHide={() => setShowSchoolModal(false)}></CandidateSchoolModalDialog>
        </div>
    )
}


export default ButtonFieldSchool