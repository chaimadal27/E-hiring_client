import CandidateEnableDialog from "./../../components/dialog/CandidateEnableDialog"
import CandidatesEnableDialog from "./../../components/dialog/CandidatesEnableDialog"
import CandidateDisableDialog from "./../../components/dialog/CandidateDisableDialog"
import CandidatesDisableDialog from "./../../components/dialog/CandidatesDisableDialog"


import { MODULES_PERMISSIONS, ACTIVATE, DEACTIVATE } from "../../../../../../constants"


const { CANDIDATE } = MODULES_PERMISSIONS


export const candidateEnable = {
  path: "/enable-candidate/:param",
  component: CandidateEnableDialog,
  can: CANDIDATE.permissions[ACTIVATE]
}


export const candidateDisable = {
  path: "/disable-candidate/:param",
  component: CandidateDisableDialog,
  can: CANDIDATE.permissions[DEACTIVATE]
}

export const candidatesDisable = {
  path: "/disable-candidates",
  component: CandidatesDisableDialog,
  can: CANDIDATE.permissions[DEACTIVATE]
}

export const candidatesEnable = {
  path: "/enable-candidates",
  component: CandidatesEnableDialog,
  can: CANDIDATE.permissions[ACTIVATE]
}

