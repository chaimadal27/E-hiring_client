import { HTTP_METHODS } from "./../../../../constants"
import { makeCall } from "./../../../../helpers"
import { store } from "./../../../../configureStore"
import { isRLTLang } from "../../../../i18n"

const FETCH_CANDIDATES_ENDPOINT = "/api/candidates/all"


const formatCandidates = (candidates) => candidates.map((candidate) => ({
    label: !isRLTLang() ? `${candidate.firstNameFr} ${candidate.lastNameFr}` : `${candidate.firstNameAr} ${candidate.lastNameAr}`,
    value: candidate.id,
    ...candidate
}))

export const candidateUIHelper = (callback = f => f) => {

    const { token } = store.getState().common.auth || {}

    return new Promise((resolve, reject) =>
        makeCall(HTTP_METHODS.GET, FETCH_CANDIDATES_ENDPOINT, {}, { 'Authorization': `Bearer ${token.access}` }, {})
            .then(resp => resolve(callback(formatCandidates(resp.data))))
            .catch(() => reject(callback([])))
    )
}
