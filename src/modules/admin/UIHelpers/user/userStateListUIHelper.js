// import _ from "lodash"

// import { HTTP_METHODS } from "../../../../constants"   
// import { makeCall } from "../../../../helpers/MakeRequest" 
// import { store } from "../../../../configureStore"


// const FETCH_RESOURCE_STATE_ENDPOINT = "/api/resource-state/all"


// const formatStates = (states) => states.map((state)=>({
//     label: state.resourceState,
//     value: state.id
// }))

// export const userStateListUIHelper = (callback = f=>f)=>{
//     const {token} = store.getState().common.auth || {}
//     return new Promise((resolve, reject)=>
//         makeCall(HTTP_METHODS.GET, FETCH_RESOURCE_STATE_ENDPOINT, {},{'Authorization': `Bearer  ${token.access}`}, {} )
//         .then(resp=>resolve(callback(formatStates(resp.data))))
//         .catch(()=>reject(callback([])))
//     )
// }