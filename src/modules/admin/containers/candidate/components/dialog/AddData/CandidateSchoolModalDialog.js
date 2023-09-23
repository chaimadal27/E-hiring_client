/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useSelector } from "react-redux"
import { FormModal } from "../../../../../../../components/partials/controls"
import SchoolFormModal from "../../../../school/components/form/SchoolFormModal"
import { FlashMessages } from "../../../../../../../components/partials"
import { clearStore } from "../../../../school/store/actions"


const CandidateSchoolModalDialog = ({ params, show, onHide }) => {

  // Schools Redux state
  const { isLoading, success, error } = useSelector(
    (state) => ({ isLoading: state.admin.school.isLoading, success: state.admin.school.success, error: state.admin.school.error }),
    shallowEqual
  )

  return (
    <>
      <FlashMessages
        successMsg={[
          { condition: success.isCreated, label: <FormattedMessage id={"SCHOOL.NEW.MSG"} /> }
        ]}
        error={error}
        onClose={clearStore}
      />
      <FormModal
        title={<FormattedMessage id={"SCHOOL.NEW.TITLE"} />}
        show={show}
        success={success.isCreated}
        onHide={onHide}
        isLoading={isLoading}
        size='xl'
      >
        {({ saveRef }) => (
          <SchoolFormModal
            params={params}
            saveRef={saveRef}
          />
        )}
      </FormModal>
    </>
  )
}


export default CandidateSchoolModalDialog
