import _ from "lodash"
import * as Yup from "yup"
import { INPUT} from "./../../../../../../../components/partials"


const resourceStateFields = ({ intl }) => [
  {
    name: "resourceState",
    label: intl.formatMessage({ id: "RESOURCE_STATE.INPUT.NAME" })  ,
    placeholder: intl.formatMessage({ id: "RESOURCE_STATE.INPUT.NAME" }),
    component: INPUT,
    size: 12,
    required: true,
    validation: Yup.string().required(),
  },
]


export default _.memoize(resourceStateFields)
