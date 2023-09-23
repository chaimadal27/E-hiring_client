import { lazy } from "react"
import { UPDATE, MODULES_PERMISSIONS, VIEW, CREATE } from "../../../../constants"

const Candidate = lazy(() => import("../../containers/candidate/CandidateNew"))
const CandidateEdit = lazy(() => import("../../containers/candidate/CandidateEdit"))
const CandidateShow = lazy(() => import("../../containers/candidate/CandidateShow"))
const CandidatePage = lazy(() => import("../../containers/candidate/CandidatePage"))
const CandidateSearchPage = lazy(() => import("../../containers/candidate/CandidateSearchPage"))

const { CANDIDATE } = MODULES_PERMISSIONS

export const candidateCreate = {
    path: "/candidates/new",
    component: Candidate,
    can: CANDIDATE.permissions[CREATE],
    exact: true,
}

export const candidateEdit = {
    path: "/candidates/:param/edit",
    component: CandidateEdit,
    can: CANDIDATE.permissions[UPDATE]
}

export const candidateShow = {
    path: "/candidates/:param/show",
    component: CandidateShow,
    can: CANDIDATE.permissions[VIEW]
}

export const candidateList = {
    path: "/candidates",
    component: CandidatePage,
    can: CANDIDATE.permissions[VIEW]
}

export const candidateSearchList = {
    path: "/recherche-avancé",
    component: CandidateSearchPage,
    can: CANDIDATE.permissions[VIEW]
}