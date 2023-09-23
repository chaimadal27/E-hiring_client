import candidateRoutes from "./candidate"
import candidateRoutesPart2 from "./candidateProfessionalInfo"
import candidateRoutesLanguage from "./candidateLanguage"
import candidateRoutesKeyWords from "./candidateKeyWords"
import candidateRoutesDocuments from "./candidateDocuments"
export default { ...candidateRoutesPart2, ...candidateRoutes, ...candidateRoutesLanguage,...candidateRoutesKeyWords,...candidateRoutesDocuments }
