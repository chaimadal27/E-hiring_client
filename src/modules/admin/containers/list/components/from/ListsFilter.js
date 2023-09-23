import React, { useMemo, useState } from "react";
import _ from "lodash";
import { injectIntl } from "react-intl";
import { isEqual } from "lodash";
import { useListsUIContext } from "../../context/ListsUIContext";

import {
  listFields,
} from "./fields/filterFields";

import {
  DynamicForm,
  RenderFields,
} from "./../../../../../../components/partials/controls";


const ListsFilter = ({ searchRef, clearSearchRef, intl }) => {

  const fields = listFields({ intl });

  // Lists UI Context
  const listsUIContext = useListsUIContext();
  const listsUIProps = useMemo(() => {
    return {
      ...listsUIContext,
    };
  }, [listsUIContext]);

  const applyFilter = (values) => {
    const newQueryParams = {
      ..._.pickBy(
        { ...listsUIProps.queryParams, ...values },
        _.identity
      ),
    };
    if (!isEqual(newQueryParams, listsUIProps.queryParams)) {
      newQueryParams.pageNumber = 1;
      listsUIProps.setQueryParams(newQueryParams);
    }
  };

  return (
    <>
      <DynamicForm className="mt-5" onSubmit={applyFilter} reset={true}>
        <RenderFields fields={fields} show={true} />
        <button ref={searchRef} className="d-none" type="submit"></button>
        <button ref={clearSearchRef} className="d-none" type="reset"></button>
      </DynamicForm>
    </>
  );
};

export default injectIntl(ListsFilter);
