/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "redux"

// Reducers
import profileReducer from "./containers/profile/store/reducers"
import userReducer from "./containers/user/store/reducers"
import userGroupReducer from "./containers/user-group/store/reducers"
import partnershipReducer from "./containers/partnership/store/reducers";
import jobReducer from "./containers/job/store/reducers";
import schoolReducer from "./containers/school/store/reducers";
import candidateReducer from "./containers/candidate/store/reducers";
import listReducer from "./containers/list/store/reducers";
import offerReducer from "./containers/offer/store/reducers";
// time tracking reducers
import legalAgencyReducer from "./containers/legal-agency/store/reducers";
import businessUnitReducer from "./containers/business-unit/store/reducers";
import activityReducer from "./containers/activity/store/reducers"
import resourceStateReducer from "./containers/resource-state/store/reducers"
import activityTypeReducer from "./containers/activity-type/store/reducers"
/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default combineReducers({
  user: userReducer,
  profile: profileReducer,
  userGroup: userGroupReducer,
  partnership: partnershipReducer,
  job: jobReducer,
  school: schoolReducer,
  list: listReducer,
  candidate: candidateReducer,
  offer: offerReducer,
  legalAgency: legalAgencyReducer,
  businessUnit: businessUnitReducer,
  activity: activityReducer, 
  resourceState: resourceStateReducer,
  activityType:activityTypeReducer,
});

