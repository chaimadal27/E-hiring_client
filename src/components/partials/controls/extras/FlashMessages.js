import React, { useEffect, useState } from "react"
import { SnackbarProvider } from "notistack"
import { Snackbars, SnackbarError } from "../../controls"
import { isEmpty } from "lodash"
import { useDispatch } from "react-redux"

const FlashMessages = ({ successMsg = [], error, onClose }) => {

  const dispatch = useDispatch()

  const [showError, setShowError] = useState(false)
  const [errorObj, setError] = useState(false)
  const [showSuccessMsg, setShowSuccessMsg] = useState([])

  useEffect(() => {
    if (!isEmpty(error) && !showError) {
      setShowError(true)
      setError(error)
      dispatch(onClose())
    }

    if (!isEmpty(error) && showError) {
      setShowError(false)
      setError(error)
      dispatch(onClose())
      setShowError(true)
    }

    // eslint-disable-next-line
  }, [error])

  useEffect(() => {
    successMsg.forEach((obj) => {
      if (obj.condition) {
        setShowSuccessMsg([obj.label])
        dispatch(onClose())
      }
    })

    // eslint-disable-next-line
  }, [successMsg])

  const onCloseErrorMessage = () => {
    setShowError(false)
    setError(null)
  }

  const onCloseSuccessMessage = (obj) => {
    setShowSuccessMsg([ /*...showSuccessMsg.filter((msg) => msg !== obj)*/])
  }

  return (
    <SnackbarProvider maxSnack={3}>
      { showSuccessMsg.map((msg) => (<Snackbars open={true} message={msg} onClose={() => onCloseSuccessMessage(msg)} />))}
      { showError && <SnackbarError open={true} error={errorObj} onClose={onCloseErrorMessage} />}
    </SnackbarProvider>
  )
}


export default FlashMessages
