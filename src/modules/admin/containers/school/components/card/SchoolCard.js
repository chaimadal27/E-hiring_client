import React from "react"
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
import SchoolsFilter from "./../form/SchoolsFilter"
import SchoolsTable from "./../table/SchoolsTable"
import SchoolsGrouping from "./../grouping/SchoolsGrouping"
import { useSchoolsUIContext } from "./../../context/SchoolsUIContext"
import { useSelector, shallowEqual } from "react-redux"
import { clearStore } from "./../../store/actions"

import { ProtectedLink } from "../../../../../../components/wrappers"

const SchoolCard = () => {

  const schoolsUIProps = useSchoolsUIContext()

  const { success, error } = useSelector(
    (state) => ({
      success: state.admin.school.success,
      error: state.admin.school.error
    }),
    shallowEqual
  )

  return (
    <>
      <FlashMessages
        error={error}
        onClose={clearStore}
        successMsg={[
          { condition: success.isActivated, label: <FormattedMessage id="SCHOOL.MSG.ACTIVATED" /> },
          { condition: success.isDeactivated, label: <FormattedMessage id="SCHOOL.MSG.DEACTIVATED" /> }
        ]}
      />
      <FilterFormView
        title={<FormattedMessage id="SCHOOL.FILTER.TITLE" />}
      >
        {
          ({ searchRef, resetRef }) => (
            <SchoolsFilter searchRef={searchRef} clearSearchRef={resetRef} />
          )
        }
      </FilterFormView>
      <Card>
        <CardHeader>
          <div className="card-title">
            <CardHeaderTitle>
              <FormattedMessage id="SCHOOL.LIST.TITLE" />
            </CardHeaderTitle>
          </div>
          <CardHeaderToolbar>
            <ProtectedLink rule={schoolsUIProps.newSchoolRule}>
              <button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={schoolsUIProps.newSchoolButtonClick}
              >
                <FormattedMessage id="SCHOOL.NEW.TITLE" />
              </button>
            </ProtectedLink>
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          {schoolsUIProps.ids.length > 0 && <SchoolsGrouping />}
          <SchoolsTable />
        </CardBody>
      </Card>
    </>
  )
}


export default SchoolCard
