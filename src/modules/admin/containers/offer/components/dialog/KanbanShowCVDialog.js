/* eslint-disable no-restricted-imports */
import React, { useState, useEffect } from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useSelector } from "react-redux"
import { ShowFileModal } from "../../../../../../components/partials/controls"
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import _ from "lodash"
import dialogRoutes from "../../routes/kanban"
// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { pdfjs } from 'react-pdf';
import { candidateGetCVUIHelper } from "../../../../UIHelpers";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const KanbanShowCVDialog = ({ params, show, onHide, history }) => {
    // Schools Redux state
    const { isLoading, success } = useSelector(
        (state) => ({ isLoading: state.admin.offer.isLoading, success: state.admin.offer.success }),
        shallowEqual
    )
    const [file, setFile] = useState("")
    useEffect(() => {
        if (!_.isNull(params.cvParam)) {
            candidateGetCVUIHelper(params.cvParam).then((result) => { setFile(result) })
        }
    }, [])
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    const openSendFileDialog = () => { history.push(dialogRoutes.shareCv.path.replace(":param", params.param).replace(":cvParam", params.cvParam)) }

    return (
        <ShowFileModal
            title={<FormattedMessage id={"CANDIDATE.DOCUMENT.SHOW"} />}
            show={show}
            success={success.isCreated}
            onHide={onHide}
            isLoading={isLoading}
            size="lg"
            sendFile={openSendFileDialog}
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



export default KanbanShowCVDialog
