import routes from "./../../../../routes"
import { combinePathRoutes } from "./../../../../../../helpers"

import CandidateSchoolModalDialog from "./../../components/dialog/AddData/CandidateSchoolModalDialog"
import CandidatePartnershipModalDialog from "./../../components/dialog/AddData/CandidatePartnershipModalDialog"
import { MODULES_PERMISSIONS, ACTIVATE, CREATE } from "../../../../../../constants"
import CandidateForm1 from "../../components/form/CandidateFormSourceKeyWords";
import CandidateNew from "../../CandidateNew";
import CandidateFormProfessionalInfo from "../../components/form/CandidateFormProfessionalInfo";
import CandidateFormLanguage from "../../components/form/CandidateFormLanguage";


const { SCHOOL } = MODULES_PERMISSIONS
const { PARTNERSHIP } = MODULES_PERMISSIONS
const {USER}= MODULES_PERMISSIONS

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
const candidateFormProfessionalInfo = {
    path: "/candidateProfessionalInfo",
    component: CandidateFormProfessionalInfo,
    can: USER.permissions[CREATE]
}
const candidateFormLanguage = {
    path: "/candidateLanguages",
    component: CandidateFormLanguage,
    can: USER.permissions[CREATE]
}


export default combinePathRoutes(
    {
        path: routes.candidateCreate.path
    },
    {
        candidateFormProfessionalInfo,
        candidateFormLanguage,
        CandidateCreatePartnershipDialog,
        CandidateCreateSchoolDialog
    }
)