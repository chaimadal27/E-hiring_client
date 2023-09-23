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
                {!row.isActive && (
                        <OverlayTrigger
                                overlay={
                                        <Tooltip id="user-edit-tooltip">
                                                <FormattedMessage id="BUSINESS_UNIT.EDIT" />
                                        </Tooltip>
                                }
                        >
                                <ProtectedLink rule={formatExtraData.editBusinessUnitRule}>
                                        <a
                                                className="btn btn-sm btn-icon btn-light btn-hover-warning btn-sm mx-1 my-1"
                                                onClick={() => formatExtraData.openEditBusinessUnitPage(row.id)}
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
                                        <Tooltip id="user-show-tooltip">
                                                <FormattedMessage id="BUSINESS_UNIT.SHOW" />
                                        </Tooltip>
                                }
                        >
                                <ProtectedLink rule={formatExtraData.showBusinessUnitRule}>
                                        <a
                                                className="btn btn-sm btn-icon btn-light btn-hover-primary btn-sm mx-1 my-1"
                                                onClick={() => formatExtraData.openShowBusinessUnitPage(row.id)}
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
                                        <Tooltip id="user-disable-tooltip">
                                                <FormattedMessage id="BUSINESS_UNIT.DISABLE" />
                                        </Tooltip>
                                }
                        >
                                <ProtectedLink rule={formatExtraData.disableBusinessUnitRule}>
                                        <a
                                                className="btn btn-sm btn-icon btn-light btn-hover-danger btn-sm my-1 mx-1"
                                                onClick={() => formatExtraData.openDisableBusinessUnitDialog(row.id)}
                                        >
                                                <span className="svg-icon svg-icon-md svg-icon-danger">
                                                        <SVG src={toAbsoluteUrl("/media/svg/icons/General/Lock.svg")} />
                                                </span>
                                        </a>
                                </ProtectedLink>
                        </OverlayTrigger>
                )}

                {row.isActive && !row.isDeleted && (
                        <OverlayTrigger
                                overlay={
                                        <Tooltip id="user-enable-tooltip">
                                                <FormattedMessage id="BUSINESS_UNIT.ENABLE" />
                                        </Tooltip>
                                }
                        >
                                <ProtectedLink rule={formatExtraData.enableBusinessUnitRule}>
                                        <a
                                                className="btn btn-sm btn-icon btn-light btn-hover-success btn-sm mx-1 my-1"
                                                onClick={() => formatExtraData.openEnableBusinessUnitDialog(row.id)}
                                        >
                                                <span className="svg-icon svg-icon-md svg-icon-success">
                                                        <SVG src={toAbsoluteUrl("/media/svg/icons/General/Unlock.svg")} />
                                                </span>
                                        </a>
                                </ProtectedLink>
                        </OverlayTrigger>
                )}
                {row.isActive && !row.isDeleted && (
                        <OverlayTrigger
                                overlay={
                                        <Tooltip id="user-enable-tooltip">
                                                <FormattedMessage id="BUSINESS_UNIT.DELETE" />
                                        </Tooltip>
                                }
                        >
                                <ProtectedLink rule={formatExtraData.deleteBusinessUnitRule}>
                                        <a
                                                className="btn btn-sm btn-icon btn-light btn-hover-danger btn-sm mx-1 my-1"
                                                onClick={() => formatExtraData.openDeleteBusinessUnitDialog(row.id)}
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
