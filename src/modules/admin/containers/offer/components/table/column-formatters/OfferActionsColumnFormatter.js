/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"
import { OverlayTrigger, Tooltip, Button } from "react-bootstrap"
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
    {row.isActive && row.status !== 3 && (
      <OverlayTrigger
        overlay={
          <Tooltip id="partnership-edit-tooltip">
            <FormattedMessage id="OFFER.EDIT" />
          </Tooltip>
        }
      >
        <ProtectedLink rule={formatExtraData.editOfferRule}>
          <a
            className="btn btn-sm btn-icon btn-light btn-hover-warning btn-sm mx-1 my-1"
            onClick={() => formatExtraData.openEditOfferPage(row.id)}
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
          <Tooltip id="partnership-show-tooltip">
            <FormattedMessage id="OFFER.SHOW" />
          </Tooltip>
        }
      >
        <ProtectedLink rule={formatExtraData.showOfferRule}>
          <a
            className="btn btn-sm btn-icon btn-light btn-hover-primary btn-sm mx-1 my-1"
            onClick={() => formatExtraData.openShowOfferPage(row.id)}
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

    {!row.isValid && (
      <OverlayTrigger
        overlay={
          <Tooltip id="partnership-disable-tooltip">
            <FormattedMessage id="OFFER.VALIDATE" />
          </Tooltip>
        }
      >
        <ProtectedLink rule={formatExtraData.validateOfferRule}>
          <a
            className="btn btn-sm btn-icon btn-light btn-hover-danger btn-sm my-1 mx-1"
            onClick={() => formatExtraData.openValidateOfferDialog(row.id)}
          >
            <Button type="button" className="btn btn-sm btn-icon btn-light-success pulse pulse-success">
              <i className="flaticon2-checkmark" />
              <span className="pulse-ring" />
            </Button>
            {/* <span className="svg-icon svg-icon-md svg-icon-danger">
              <SVG src={toAbsoluteUrl("/media/svg/icons/General/Lock.svg")} />
            </span> */}
          </a>
        </ProtectedLink>
      </OverlayTrigger>
    )}

    {row.isActive && row.isValid && row.status !== 3 && (
      <OverlayTrigger
        overlay={
          <Tooltip id="partnership-disable-tooltip">
            <FormattedMessage id="OFFER.CLOSE" />
          </Tooltip>
        }
      >
        <ProtectedLink rule={formatExtraData.closeOfferRule}>
          <a
            className="btn btn-sm btn-icon btn-light btn-hover-danger btn-sm my-1 mx-1"
            onClick={() => formatExtraData.openCloseOfferDialog(row.id)}
          >
            <span className="svg-icon svg-icon-md svg-icon-danger">
              <SVG src={toAbsoluteUrl("/media/svg/icons/General/Lock.svg")} />
            </span>
          </a>
        </ProtectedLink>
      </OverlayTrigger>
    )}
    {row.isActive && row.isValid && row.status !== 3 && (
      <OverlayTrigger
        overlay={
          <Tooltip id="partnership-disable-tooltip">
            <FormattedMessage id="OFFER.KANBAN" />
          </Tooltip>
        }
      >
        <ProtectedLink rule={formatExtraData.showKanbanRule}>
          <a
            className="btn btn-sm btn-icon btn-light btn-hover-success btn-sm my-1 mx-1"
            onClick={() => formatExtraData.openShowKanbanPage(row.id)}
          >
            <span className="svg-icon svg-icon-md svg-icon-success">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Text/Bullet-list.svg")} />
            </span>
          </a>
        </ProtectedLink>
      </OverlayTrigger>
    )}
    {!row.isActive && (
      <OverlayTrigger
        overlay={
          <Tooltip id="partnership-enable-tooltip">
            <FormattedMessage id="OFFER.ENABLE" />
          </Tooltip>
        }
      >
        <ProtectedLink rule={formatExtraData.enableOfferRule}>
          <a
            className="btn btn-sm btn-icon btn-light btn-hover-success btn-sm mx-1 my-1"
            onClick={() => formatExtraData.openEnableOfferDialog(row.id)}
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
