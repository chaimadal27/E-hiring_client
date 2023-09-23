import React from "react";
import { FormattedMessage } from "react-intl";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderTitle,
  CardHeaderToolbar,
  FlashMessages,
  FilterFormView,
} from "../../../../../../components/partials/controls";
import ListsTable from "./../table/ListsTable";
import ListsFilter from "./../from/ListsFilter";
import { useListsUIContext } from "./../../context/ListsUIContext";
import { useSelector, shallowEqual } from "react-redux";
//import { clearStore } from "./../../store/actions";
import { ProtectedLink } from "../../../../../../components/wrappers";

const ListCard = () => {
  const listsUIProps = useListsUIContext();

  const { success, error } = useSelector(
    (state) => ({
      success: state.admin.list.success,
      error: state.admin.list.error,
    }),
    shallowEqual
  );

  return (
    <>
      <FilterFormView
        title={<FormattedMessage id="PARTNERSHIP.FILTER.TITLE" />}
      >
        {({ searchRef, resetRef }) => (
          <ListsFilter searchRef={searchRef} clearSearchRef={resetRef} />
        )}
      </FilterFormView>
      <Card>
        <CardHeader>
          <div className="card-title">
            <CardHeaderTitle>
              <FormattedMessage id="Les Listes" />
            </CardHeaderTitle>
          </div>
          {/* <CardHeaderToolbar>
            <ProtectedLink rule={listsUIProps.newListRule}>
              <button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={listsUIProps.newListButtonClick}
              >
                <FormattedMessage id="PARTNERSHIP.NEW.TITLE" />
              </button>
            </ProtectedLink>
          </CardHeaderToolbar> */}
        </CardHeader>
        <CardBody>
          <ListsTable />
        </CardBody>
      </Card>
    </>
  );
};

export default ListCard;
