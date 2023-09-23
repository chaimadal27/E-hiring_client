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
    {row.isActive && (
      <OverlayTrigger
        overlay={
          <Tooltip id="activity-edit-tooltip">
            <FormattedMessage id="RESOURCE_STATE.EDIT" />
          </Tooltip>
        }
      >
        <ProtectedLink rule={formatExtraData.editResourceStateRule}>
          <a
            className="btn btn-sm btn-icon btn-light btn-hover-warning btn-sm mx-1 my-1"
            onClick={() => formatExtraData.openEditResourceStatePage(row.id)}
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
          <Tooltip id="activity-show-tooltip">
            <FormattedMessage id="RESOURCE_STATE.SHOW" />
          </Tooltip>
        }
      >
        <ProtectedLink rule={formatExtraData.showResourceStateRule}>
          <a
            className="btn btn-sm btn-icon btn-light btn-hover-primary btn-sm mx-1 my-1"
            onClick={() => formatExtraData.openShowResourceStatePage(row.id)}
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
          <Tooltip id="activity-disable-tooltip">
            <FormattedMessage id="RESOURCE_STATE.DISABLE" />
          </Tooltip>
        }
      >
        <ProtectedLink rule={formatExtraData.disableResourceStateRule}>
          <a
            className="btn btn-sm btn-icon btn-light btn-hover-danger btn-sm my-1 mx-1"
            onClick={() => formatExtraData.openDisableResourceStateDialog(row.id)}
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
            <FormattedMessage id="RESOURCE_STATE.ENABLE" />
          </Tooltip>
        }
      >
        <ProtectedLink rule={formatExtraData.enableResourceStateRule}>
          <a
            className="btn btn-sm btn-icon btn-light btn-hover-success btn-sm mx-1 my-1"
            onClick={() => formatExtraData.openEnableResourceStateDialog(row.id)}
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
            <FormattedMessage id="RESOURCE_STATE.DELETE" />
          </Tooltip>
        }
      >
        <ProtectedLink rule={formatExtraData.deleteResourceStateRule}>
          <a
            className="btn btn-sm btn-icon btn-light btn-hover-danger btn-sm mx-1 my-1"
            onClick={() => formatExtraData.openDeleteResourceStateDialog(row.id)}
          >
            <span className="svg-icon svg-icon-md svg-icon-danger">
              <SVG src={toAbsoluteUrl("/media/svg/icons/General/Trash.svg")} />
            </span>
          </a>
        </ProtectedLink>
      </OverlayTrigger>
    )}
    {row.isDeleted && (
      <OverlayTrigger
        overlay={
          <Tooltip id="activity-enable-tooltip">
            <FormattedMessage id="RESOURCE_STATE.UNDELETE" />
          </Tooltip>
        }
      >
              </OverlayTrigger>
    )}
  </div>
);


export default ActionsColumnFormatter
