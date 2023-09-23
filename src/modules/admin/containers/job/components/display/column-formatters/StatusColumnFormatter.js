/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"

const StatusColumnFormatter = (
    cellContent,
) => {
    if (cellContent == 1) {
        return (
            <div className={`label label-lg label-light-primary label-inline`}>
                nouveau
            </div>
        )
    }
    else if (cellContent == 2) {
        return (
            <div className={`label label-lg label-light-success label-inline`}>
                validé
            </div>
        )
    }
    else {
        return (
            <div className={`label label-lg label-light-danger label-inline`}>
                non validé
            </div>
        )
    }
};


export default StatusColumnFormatter