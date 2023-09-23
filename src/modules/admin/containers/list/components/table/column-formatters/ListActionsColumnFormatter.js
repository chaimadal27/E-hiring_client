/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { FormattedMessage } from "react-intl";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../../../../helpers";
import { ProtectedLink } from "../../../../../../../components/wrappers";

const ActionsColumnFormatter = (
  cellContent,
  row,
  rowIndex,
  formatExtraData
) => (
  <div className="text-right">
    <OverlayTrigger
      overlay={
        <Tooltip id="partnership-edit-tooltip">
          <FormattedMessage id="LIST.EDIT" />
        </Tooltip>
      }
    >
      <ProtectedLink rule={formatExtraData.editListRule}>
        <a
          className="btn btn-sm btn-icon btn-light btn-hover-warning btn-sm mx-1 my-1"
          //className="btn btn-sm btn-icon btn-light btn-hover-warning btn-sm mx-14 my-2"
          onClick={() => formatExtraData.openEditListPage(row.id)}
        >
          {/* <Button variant="outline-primary">Modifier</Button> */}
          <span className="svg-icon svg-icon-md svg-icon-warning">
            <SVG
              src={toAbsoluteUrl("/media/svg/icons/Communication/Write.svg")}
            />
          </span>
        </a>
      </ProtectedLink>
    </OverlayTrigger>

    <OverlayTrigger
      overlay={
        <Tooltip id="partnership-show-tooltip">
          <FormattedMessage id="LIST.SHOW" />
        </Tooltip>
      }
    >
      <ProtectedLink rule={formatExtraData.showListRule}>
        <a
          className="btn btn-sm btn-icon btn-light btn-hover-primary btn-sm mx-1 my-1"
          onClick={() => formatExtraData.openShowListPage(row.id)}
        >
          <span className="svg-icon svg-icon-md svg-icon-primary">
            <SVG
              src={toAbsoluteUrl("/media/svg/icons/General/Visible.svg")}
            />
          </span>
        </a>
      </ProtectedLink>
    </OverlayTrigger>
  </div>
);

export default ActionsColumnFormatter;
