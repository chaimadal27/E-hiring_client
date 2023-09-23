import _ from "lodash";

const resourceStateFields = ({ intl }) => [
  {
    name: "resourceState",
    label: intl.formatMessage({ id: "RESOURCE_STATE.INPUT.NAME" }),
    size: 12,
  },
];

export default _.memoize(resourceStateFields);
