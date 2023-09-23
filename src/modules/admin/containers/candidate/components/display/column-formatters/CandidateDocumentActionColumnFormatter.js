/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"
import { OverlayTrigger, Tooltip, Button } from "react-bootstrap"
import SVG from "react-inlinesvg"
import { toAbsoluteUrl } from "../../../../../../../helpers"
import { ProtectedLink } from "../../../../../../../components/wrappers"
import {createCandidate, downloadDocument, editCandidateDocument} from "../../../store/actions/candidate.js"
import {useDispatch} from "react-redux";
import _ from "lodash"

const DocumentActionsColumnFormatter = (params) => {

    // const dispatch = useDispatch()
    //
    const DownloadDocument = () => {
          //  dispatch(downloadDocument())
    }
    return(

    <div className="text-right">
            <OverlayTrigger
                overlay={
                    <Tooltip id="partnership-edit-tooltip">
                        <FormattedMessage id="FOLDER_DOCUMENT.FILE" />
                    </Tooltip>
                }
            >
                    <a
                        className="btn btn-sm btn-icon btn-light btn-hover-warning btn-sm mx-1 my-1"
                        onClick={DownloadDocument}
                    >
            <span >
              <SVG
                  src={toAbsoluteUrl("/media/svg/icons/Files/Download.svg")}
              />
            </span>
                    </a>

            </OverlayTrigger>
    </div>
)

}

export default DocumentActionsColumnFormatter
