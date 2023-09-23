/* eslint-disable no-restricted-imports */
import React, { useState, useEffect } from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useSelector } from "react-redux"
import { ShowFileModal } from "../../../../../../../components/partials/controls"
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import _ from "lodash"

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { pdfjs } from 'react-pdf';
import { candidateGetCVUIHelper } from "../../../../../UIHelpers";
import {GlobalWorkerOptions} from "pdfjs-dist";
import pdfjsLib from "pdfjs-dist";

//pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.js';


const CandidateShowCVDialog = ({ params, show, onHide, id }) => {
    // Schools Redux state
    const { isLoading, success } = useSelector(
        (state) => ({ isLoading: state.admin.candidate.isLoading, success: state.admin.candidate.success }),
        shallowEqual
    )
    const [file, setFile] = useState("")

    useEffect(() => {
        if (!_.isNull(params.param)) {
            candidateGetCVUIHelper(params.param).then((result) => { setFile(result) })
        }
    }, [])
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    console.log("file = ", file)
    return (
        <ShowFileModal
            title={<FormattedMessage id={"CANDIDATE.DOCUMENT.SHOW"} />}
            show={show}
            success={success.isCreated}
            onHide={onHide}
            isLoading={isLoading}
            size="lg"
        >

            {!_.isEmpty(file) ? <Viewer
                fileUrl={file}
                //fileUrl={`http://0.0.0.0:5000/media/${file}`}
                plugins={[
                    // Register plugins
                    defaultLayoutPluginInstance,
                ]}
            /> : <h6>pas de CV à afficher</h6>}


        </ShowFileModal>
    )
}



export default CandidateShowCVDialog
