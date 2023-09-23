/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"
import { OverlayTrigger, Tooltip } from "react-bootstrap"
import SVG from "react-inlinesvg"
import { toAbsoluteUrl } from "../../../../../../../helpers"
import { ProtectedLink } from "../../../../../../../components/wrappers"

const ActionsColumnFormatter = (
  cellContent,
  row,
  rowIndex,
  formatExtraData
) => (
  <div className="text-right">
    {row.isActive && (
      <OverlayTrigger
        overlay={
          <Tooltip id="candidate-edit-tooltip">
            <FormattedMessage id="CANDIDATE.EDIT" />
          </Tooltip>
        }
      >
        <ProtectedLink rule={formatExtraData.editCandidateRule}>
          <a
            className="btn btn-sm btn-icon btn-light btn-hover-warning btn-sm mx-1 my-1"
            onClick={() => formatExtraData.openEditCandidatePage(row.id)}
          >
            <span className="svg-icon svg-icon-md svg-icon-warning">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Communication/Write.svg")}
              />
            </span>
          </a>
        </ProtectedLink>
      </OverlayTrigger>
    )}

    {row.isActive && (
      <OverlayTrigger
        overlay={
          <Tooltip id="candidate-show-tooltip">
            <FormattedMessage id="CANDIDATE.SHOW" />
          </Tooltip>
        }
      >
        <ProtectedLink rule={formatExtraData.showCandidateRule}>
          <a
            className="btn btn-sm btn-icon btn-light btn-hover-primary btn-sm mx-1 my-1"
            onClick={() => formatExtraData.openShowCandidatePage(row.id)}
          >
            <span className="svg-icon svg-icon-md svg-icon-primary">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/General/Visible.svg")}
              />
            </span>
          </a>
        </ProtectedLink>
      </OverlayTrigger>
    )}

    {row.isActive && (
      <OverlayTrigger
        overlay={
          <Tooltip id="candidate-disable-tooltip">
            <FormattedMessage id="CANDIDATE.DISABLE" />
          </Tooltip>
        }
      >
        <ProtectedLink rule={formatExtraData.disableCandidateRule}>
          <a
            className="btn btn-sm btn-icon btn-light btn-hover-danger btn-sm my-1 mx-1"
            onClick={() => formatExtraData.openDisableCandidateDialog(row.id)}
          >
            <span className="svg-icon svg-icon-md svg-icon-danger">
              <SVG src={toAbsoluteUrl("/media/svg/icons/General/Trash.svg")} />
            </span>
          </a>
        </ProtectedLink>
      </OverlayTrigger>
    )}

    {!row.isActive && (
      <OverlayTrigger
        overlay={
          <Tooltip id="candidate-enable-tooltip">
            <FormattedMessage id="CANDIDATE.ENABLE" />
          </Tooltip>
        }
      >
        <ProtectedLink rule={formatExtraData.enableCandidateRule}>
          <a
            className="btn btn-sm btn-icon btn-light btn-hover-success btn-sm mx-1 my-1"
            onClick={() => formatExtraData.openEnableCandidateDialog(row.id)}
          >
            <span className="svg-icon svg-icon-md svg-icon-success">
              <SVG src={toAbsoluteUrl("/media/svg/icons/General/Unlock.svg")} />
            </span>
          </a>
        </ProtectedLink>
      </OverlayTrigger>
    )}
  </div>
);


export default ActionsColumnFormatter
