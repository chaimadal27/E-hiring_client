/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useRef } from "react"
import { FormattedMessage } from "react-intl"

import { Card, CardBody, CardHeader, CardHeaderToolbar, ModalProgressBar, FlashMessages } from "../../controls"
import _ from "lodash"

import { isRLTLang } from "./../../../../i18n"

import { Button } from "react-bootstrap"

const WizardFormView = ({ children, title, goBackTo, goToDisplay, successMsg = [], toolBar, isLoading, error, onClose }) => {

    const saveRef = useRef()

    const onSave = () => {
        if (saveRef && saveRef.current) {
            saveRef.current.click()
        }
    }

    return (
        <Card>
            <FlashMessages successMsg={successMsg} error={error} onClose={onClose} />
            {isLoading && <ModalProgressBar />}
            <CardHeader title={title}>
                <CardHeaderToolbar>
                    {_.isFunction(goBackTo) && <Button
                        type="button"
                        onClick={goBackTo}
                        className="btn btn-sm btn-light mx-2"
                    >
                        {isRLTLang() ?
                            <>
                                <FormattedMessage id="GENERAL.BACK" />
                                <i className="fa fa-arrow-left" />
                            </>
                            : <>
                                <i className="fa fa-arrow-left" />
                                <FormattedMessage id="GENERAL.BACK" />
                            </>
                        }
                    </Button>
                    }
                    {_.isFunction(goToDisplay) && <Button
                        type="button"
                        className="btn btn-sm btn-warning btn-hover-warning mx-2"
                        onClick={goToDisplay}
                    >
                        <FormattedMessage id="GENERAL.SHOW" />
                    </Button>
                    }
                    { /*<Button
            disabled={isLoading}
            onClick={onSave}
            type="button"
            className="btn btn-sm btn-primary"
          >
            { isLoading && <span className="px-5 spinner spinner-white"></span>}
            <FormattedMessage id="GENERAL.SAVE_AND_BACK_TO_LIST" />
          </Button>*/}
                    {toolBar}
                </CardHeaderToolbar>
            </CardHeader>
            <CardBody>
                {children({ saveRef })}
            </CardBody>
        </Card>
    )
}


export default WizardFormView