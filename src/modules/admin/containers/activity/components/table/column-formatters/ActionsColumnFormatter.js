/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"
import { OverlayTrigger, Tooltip } from "react-bootstrap"
import SVG from "react-inlinesvg"
import { toAbsoluteUrl } from "../../../../../../../helpers"
import {ProtectedLink} from "../../../../../../../components/wrappers"

const ActionsColumnFormatter = (
  cellContent,
  row,
  rowIndex,
  formatExtraData
) => (
  <div className="text-right">
    {!row.isActive && (
      <OverlayTrigger
        overlay={
          <Tooltip id="activity-edit-tooltip">
            <FormattedMessage id="ACTIVITY.EDIT" />
          </Tooltip>
        }
      >
        <ProtectedLink rule={formatExtraData.editActivityRule}>
          <a
            className="btn btn-sm btn-icon btn-light btn-hover-warning btn-sm mx-1 my-1"
            onClick={() => formatExtraData.openEditActivityPage(row.id)}
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


    {!row.isActive && (
      <OverlayTrigger
        overlay={
          <Tooltip id="activity-show-tooltip">
            <FormattedMessage id="ACTIVITY.SHOW" />
          </Tooltip>
        }
      >
        <ProtectedLink rule={formatExtraData.showActivityRule}>
          <a
            className="btn btn-sm btn-icon btn-light btn-hover-primary btn-sm mx-1 my-1"
            onClick={() => formatExtraData.openShowActivityPage(row.id)}
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

    {!row.isActive && (
      <OverlayTrigger
        overlay={
          <Tooltip id="activity-disable-tooltip">
            <FormattedMessage id="ACTIVITY.DISABLE" />
          </Tooltip>
        }
      >
        <ProtectedLink rule={formatExtraData.disableActivityRule}>
          <a
            className="btn btn-sm btn-icon btn-light btn-hover-danger btn-sm my-1 mx-1"
            onClick={() => formatExtraData.openDisableActivityDialog(row.id)}
          >
            <span className="svg-icon svg-icon-md svg-icon-danger">
              <SVG src={toAbsoluteUrl("/media/svg/icons/General/Lock.svg")} />
            </span>
          </a>
        </ProtectedLink>
      </OverlayTrigger>
    )}

    {!row.isActive && !row.isDeleted && (
      <OverlayTrigger
        overlay={
          <Tooltip id="activity-enable-tooltip">
            <FormattedMessage id="ACTIVITY.ENABLE" />
          </Tooltip>
        }
      >
        <ProtectedLink rule={formatExtraData.enableActivityRule}>
          <a
            className="btn btn-sm btn-icon btn-light btn-hover-success btn-sm mx-1 my-1"
            onClick={() => formatExtraData.openEnableActivityDialog(row.id)}
          >
            <span className="svg-icon svg-icon-md svg-icon-success">
              <SVG src={toAbsoluteUrl("/media/svg/icons/General/Unlock.svg")} />
            </span>
          </a>
        </ProtectedLink>
      </OverlayTrigger>
    )}
    {!row.isActive && !row.isDeleted && (
      <OverlayTrigger
        overlay={
          <Tooltip id="activity-enable-tooltip">
            <FormattedMessage id="ACTIVITY.DELETE" />
          </Tooltip>
        }
      >
        <ProtectedLink rule={formatExtraData.deleteActivityRule}>
          <a
            className="btn btn-sm btn-icon btn-light btn-hover-danger btn-sm mx-1 my-1"
            onClick={() => formatExtraData.openDeleteActivityDialog(row.id)}
          >
            <span className="svg-icon svg-icon-md svg-icon-danger">
              <SVG src={toAbsoluteUrl("/media/svg/icons/General/Trash.svg")} />
            </span>
          </a>
        </ProtectedLink>
      </OverlayTrigger>
    )}
      </div>
);


export default ActionsColumnFormatter
