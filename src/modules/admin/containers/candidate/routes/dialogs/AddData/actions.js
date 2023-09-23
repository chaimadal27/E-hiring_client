import routes from "./../../../../../routes"
import { combinePathRoutes } from "./../../../../../../../helpers"

import CandidateSchoolModalDialog from "./../../../components/dialog/AddData/CandidateSchoolModalDialog"
import CandidatePartnershipModalDialog from "./../../../components/dialog/AddData/CandidatePartnershipModalDialog"


import { MODULES_PERMISSIONS, CREATE } from "../../../../../../../constants"

const { SCHOOL } = MODULES_PERMISSIONS
const { PARTNERSHIP } = MODULES_PERMISSIONS

const CandidateCreateSchoolDialog = {
    path: "/school_modal/create",
    component: CandidateSchoolModalDialog,
    can: SCHOOL.permissions[CREATE]
}

const CandidateCreatePartnershipDialog = {
    path: "/entreprise_modal/create",
    component: CandidatePartnershipModalDialog,
    can: PARTNERSHIP.permissions[CREATE]
}


export default combinePathRoutes(
    { path: routes.candidateCreate.path },
    {
        CandidateCreateSchoolDialog,
        CandidateCreatePartnershipDialog,
    }
)