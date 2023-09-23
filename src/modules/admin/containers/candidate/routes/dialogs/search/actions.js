import CandidateAffectDialog from "./../../../components/dialog/search/CandidateAffectDialog"


import { MODULES_PERMISSIONS, VIEW } from "../../../../../../../constants"


const { CANDIDATE } = MODULES_PERMISSIONS


export const candidateAffect = {
    path: "/affect-candidate/:param",
    component: CandidateAffectDialog,
    can: CANDIDATE.permissions[VIEW]
}


