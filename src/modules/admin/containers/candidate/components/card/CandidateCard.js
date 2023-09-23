import React, { useState,useRef } from "react"
import { FormattedMessage } from "react-intl"
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderTitle,
  CardHeaderToolbar,
  FlashMessages,
  FilterFormView
} from "../../../../../../components/partials/controls"
import CandidatesFilter from "./../form/CandidatesFilter"
import CandidatesTable from "./../table/CandidatesTable"
import CandidatesGrouping from "./../grouping/CandidatesGrouping"
import { useCandidatesUIContext } from "./../../context/CandidatesUIContext"
import { useSelector, shallowEqual } from "react-redux"
import { clearStore } from "./../../store/actions"
import Button from '@material-ui/core/Button';
import { ProtectedLink } from "../../../../../../components/wrappers"
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';




const CandidateCard = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    // const inputRef=useRef();
    // const triggerFileSelectPopup = () => inputRef.current.Click();


    const fileInput = useRef(null);
    const handleClose = () => {
        setAnchorEl(null);
    };

    const candidatesUIProps = useCandidatesUIContext()
  const { success, error } = useSelector(
    (state) => ({
      success: state.admin.candidate.success,
      error: state.admin.candidate.error
    }),
    shallowEqual
  )
  return (
    <>
      <FlashMessages
        error={error}
        onClose={clearStore}
        successMsg={[
          { condition: success.isActivated, label: <FormattedMessage id="CANDIDATE.MSG.ACTIVATED" /> },
          { condition: success.isDeactivated, label: <FormattedMessage id="CANDIDATE.MSG.DEACTIVATED" /> }
        ]}
      />
      <FilterFormView
        title={<FormattedMessage id="CANDIDATE.FILTER.TITLE" />}
      >
        {
          ({ searchRef, resetRef }) => (
            <CandidatesFilter searchRef={searchRef} clearSearchRef={resetRef} />
          )
        }
      </FilterFormView>
      <Card>
        <CardHeader>
          <div className="card-title">
            <CardHeaderTitle>
              <FormattedMessage id="CANDIDATE.LIST.TITLE" />
            </CardHeaderTitle>
          </div>
          <CardHeaderToolbar>
            {/*<ProtectedLink rule={candidatesUIProps.newCandidateRule}>*/}
                <Button className="btn btn-sm btn-primary"  onClick={handleClick}>
                   <FormattedMessage id="CANDIDATE.NEW.TITLE" />
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>

                      Créer depuis un CV
                    </MenuItem>
                    <MenuItem onClick={candidatesUIProps.newCandidateButtonClick}>Créer manuellement</MenuItem>
                </Menu>
              {/*<button*/}
              {/*  type="button"*/}
              {/*  className="btn btn-sm btn-primary"*/}
              {/*  onClick={candidatesUIProps.newCandidateButtonClick}*/}
              {/*>*/}
              {/*  <FormattedMessage id="CANDIDATE.NEW.TITLE" />*/}
              {/*</button>*/}
            {/*</ProtectedLink>*/}
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          {candidatesUIProps.ids.length > 0 && <CandidatesGrouping />}
          <CandidatesTable />
        </CardBody>
      </Card>
    </>
  )
}


export default CandidateCard
