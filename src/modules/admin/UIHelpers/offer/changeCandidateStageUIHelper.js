import _ from "lodash"

import { HTTP_METHODS } from "./../../../../constants"
import { makeExternalCall, makeCall } from "./../../../../helpers"
import { store } from "./../../../../configureStore"

const CHANGE_STAGE_ENDPOINT = "/api/kanban/change_stage?id=:param1&stage=:param2"


export const changeCandidateStageUIHelper = async (kanban, destination) => {
    try {
        let endpoint = CHANGE_STAGE_ENDPOINT
        if (kanban && destination) {
            endpoint = CHANGE_STAGE_ENDPOINT.replace(":param1", parseInt(kanban)).replace(":param2", parseInt(destination))
        }
        const { token } = store.getState().common.auth || {}
        let query = {}
        let result = []
        const resp = await makeCall(HTTP_METHODS.GET, endpoint, {}, { 'Authorization': `Bearer  ${token.access}` }, query)
        if (_.isPlainObject(resp.data)) {
            result = [resp.data]
            { console.log(result) }
        } else {
            result = resp.data
            { console.log(result) }
        }
    }
    catch (e) {
        console.log(e.err)
        return []
    }
}

