/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"
import { OFFER_STATUS, OFFER_STATUS_COLOR } from "../../../../../UIHelpers"




const StatusColumnFormatter = (
  cellContent,
) => (
  <div className={`label label-lg label-light-${OFFER_STATUS_COLOR[cellContent]} label-inline`}>
    {OFFER_STATUS[cellContent] && <FormattedMessage id={OFFER_STATUS[cellContent]} />}
  </div>
);

/* const StatusColumnFormatter = (
  cellContent,
) => {
  return <div className={`label label-lg label-light-primary label-inline`}>
    {options[cellContent] || <FormattedMessage id="GENERAL.EMPTY" />}
  </div>
}; */


export default StatusColumnFormatter
