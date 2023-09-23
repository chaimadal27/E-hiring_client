import React from "react"
import { injectIntl, FormattedMessage } from "react-intl"
import Dropzone from "react-dropzone-uploader"
import Preview from "../inputs/dropzone/Preview"
import {shallowEqual, useSelector} from "react-redux"
import {API_BASE_URL} from "../../../../../constants"

const ImportFrom = ({ maxFiles=3, accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", url, multiple=false, onSubmit }) => {

  const handleSubmit = (files, allFiles) => {
    onSubmit()
    allFiles.forEach(f => f.remove())
  }

  const { token } = useSelector(
    (state) => ({
      token: state.common.auth.token
    }),
    shallowEqual
  )

  const autoUpload = ({ file }) => {
    const body = new FormData()
    body.append('file', file)
    return { url: API_BASE_URL + url, body, headers: {"Authorization": `Bearer  ${token.access}`} }
  }

  return (
    <div className="my-2 form-group">
      <Dropzone
        maxFiles={maxFiles}
        multiple={multiple}
        accept={accept}
        getUploadParams={autoUpload}
        inputContent={<FormattedMessage key={1} id="GENERAL.UPLOAD_FILE_CONTENT" />}
        inputWithFilesContent={<FormattedMessage key={1} id="GENERAL.UPLOAD_FILE_INPUT" />}
        onSubmit={handleSubmit}
        PreviewComponent={Preview}
      />
    </div>
  )
}

export default injectIntl(ImportFrom)
