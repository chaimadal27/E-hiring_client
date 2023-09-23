import routes from "./../../../../routes"
import { combinePathRoutes } from "./../../../../../../helpers"
import CandidateFormSourceKeyWords from "../../components/form/CandidateFormSourceKeyWords";
import CandidateForm1 from "../../components/form/CandidateFormSourceKeyWords"
import CandidateSchoolModalDialog from "./../../components/dialog/AddData/CandidateSchoolModalDialog"
import CandidatePartnershipModalDialog from "./../../components/dialog/AddData/CandidatePartnershipModalDialog"
import { MODULES_PERMISSIONS, ACTIVATE, CREATE } from "../../../../../../constants"
import CandidateFormPersonalInfo from "../../components/form/CandidateFormPersonalInfo";
import CandidateFormProfessionalInfo from "../../components/form/CandidateFormProfessionalInfo";
import CandidateFormLanguage from "../../components/form/CandidateFormLanguage";
import CandidateFormDocument from "../../components/form/CandidateFormDocument";
import CandidateDisplayDocuments from "../../components/display/CandidateDisplayDocuments";
const { CANDIDATE } = MODULES_PERMISSIONS

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
const candidateFormSourceKeyWords = {
  path: "/candidate",
  component: CandidateFormSourceKeyWords,
  can: CANDIDATE.permissions[ACTIVATE]
}
const candidateFormPersonalInfo = {
  path: "/candidatePersonalInfo",
  component: CandidateFormPersonalInfo,
  can: CANDIDATE.permissions[ACTIVATE]
}

const candidateFormProfessionalInfo = {
  path: "/candidateProfessionalInfo",
  component: CandidateFormProfessionalInfo,
  can: CANDIDATE.permissions[ACTIVATE]
}
const candidateFormLanguage = {
  path: "/candidateLanguages",
  component: CandidateFormLanguage,
  can: CANDIDATE.permissions[ACTIVATE]
}
const candidateFormDocument = {
  path: "/candidateDocument",
  component: CandidateFormDocument,
  can: CANDIDATE.permissions[ACTIVATE]
}
const candidateDisplayDocuments = {
  path: "/candidateDocuments",
  component: CandidateDisplayDocuments,
  can: CANDIDATE.permissions[ACTIVATE]
}
export default combinePathRoutes(
  {
    path: routes.candidateEdit.path
  },
  {
    candidateFormSourceKeyWords,
    candidateFormPersonalInfo,
    candidateFormProfessionalInfo,
    candidateFormLanguage,
    candidateFormDocument,
    candidateDisplayDocuments,
    CandidateCreatePartnershipDialog,
    CandidateCreateSchoolDialog
  }
)
