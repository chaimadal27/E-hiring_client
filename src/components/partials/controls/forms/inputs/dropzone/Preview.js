import React from "react"
import {toAbsoluteUrl} from "../../../../../../helpers"


const iconByFn = {
  cancel: { backgroundImage: `url(${toAbsoluteUrl("/media/svg/icons/General/Scissors.svg")})` },
  remove: { backgroundImage: `url(${toAbsoluteUrl("/media/svg/icons/Files/Deleted-file.svg")})` },
  restart: { backgroundImage: `url(${toAbsoluteUrl("/media/svg/icons/General/Update.svg")})` },
}


const Preview = ({ className,
  imageClassName,
  style,
  imageStyle,
  fileWithMeta: { cancel, remove, restart },
  meta: { name = '', percent = 0, size = 0, previewUrl, status, duration, validationError },
  isUpload,
  canCancel,
  canRemove,
  canRestart,
  extra: { minSizeBytes }
}) => {

  let title = `${name || '?'}`
  if (duration) title = `${title}`

  if (status === 'error_file_size' || status === 'error_validation') {
    return (
      <div className={className} style={style}>
        <span className="dzu-previewFileNameError">{title}</span>
        {status === 'error_file_size' && <span>{size < minSizeBytes ? 'File too small' : 'File too big'}</span>}
        {status === 'error_validation' && <span>{String(validationError)}</span>}
        {canRemove && <span className="dzu-previewButton" style={iconByFn.remove} onClick={remove} />}
      </div>
    )
  }

  if (status === 'error_upload_params' || status === 'exception_upload' || status === 'error_upload') {
    title = `${title} (upload failed)`
  }
  if (status === 'aborted') title = `${title} (cancelled)`

  return (
    <div className={className} style={style}>
      {previewUrl && <img className={imageClassName} style={imageStyle} src={previewUrl} alt={title} title={title} />}
      {!previewUrl && <span className="dzu-previewFileName">{title}</span>}

      <div className="dzu-previewStatusContainer">
        {isUpload && (
          <progress max={100} value={status === 'done' || status === 'headers_received' ? 100 : percent} />
        )}

        {status === 'uploading' && canCancel && (
          <span className="dzu-previewButton" style={iconByFn.cancel} onClick={cancel} />
        )}
        {status !== 'preparing' && status !== 'getting_upload_params' && status !== 'uploading' && canRemove && (
          <span className="dzu-previewButton" style={iconByFn.remove} onClick={remove} />
        )}
        {['error_upload_params', 'exception_upload', 'error_upload', 'aborted', 'ready'].includes(status) &&
            canRestart && <span className="dzu-previewButton" style={iconByFn.restart} onClick={restart} />}
      </div>
    </div>
  )
}


export default Preview
