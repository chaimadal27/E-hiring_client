import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import _ from "lodash"
import { shallowEqual, useSelector, useDispatch } from "react-redux"

import { DisplayItems, DynamicForm, LanguageTab, RenderFields, RenderItems } from "./../../../../../../components/partials/controls"
import { shareCv } from "./../../store/actions"
import * as Yup from "yup";

import { SELECT } from "./../../../../../../components/partials";
import { userUIHelper } from "./../../../../UIHelpers";

const ShareCvForm = (props) => {

    const { saveRef, intl, params, initialValues = {}, } = props

    const dispatch = useDispatch()
    //const layoutDispatch = useContext(LayoutContext.Dispatch)



    const share = (values) => {
        dispatch(shareCv(params, values))
    }


    const ShareCvFields = ({ intl }) => [
        {
            name: "recruiters",
            component: SELECT,
            loadOptions: userUIHelper,
            initialValue: [],
            label: intl.formatMessage({ id: "OFFER.INPUT.RECRUITER" }),
            placeholder: intl.formatMessage({ id: "OFFER.INPUT.RECRUITER" }),
            size: 12,
            multiple: true,
            validation: Yup.array(),
            required: true
        },
    ];
    const fields = ShareCvFields({ intl })
    return (
        <>
            <DynamicForm
                className="mt-5"
                onSubmit={share}
            >
                <RenderFields fields={fields} show={true} />
                <button ref={saveRef} className="d-none" type="submit"></button>
            </DynamicForm>
        </>
    )
}

export default injectIntl(ShareCvForm)
