import React, { useEffect } from "react";
import { injectIntl } from "react-intl";
import _ from "lodash";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import {
  FormRepeater,
  FormRepeaterFields,
  FormView,
  LanguageTab,
} from "../../../../../../components/partials/controls";

import { listFields, listNameFields } from "./fields/listFields";

import {
  DynamicForm,
  RenderFields,
} from "../../../../../../components/partials/controls";
import { editList, fetchListExtraData, createList } from "../../store/actions";
import list from "../../routes/edit/list";

//import routes from "../../routes/display";

const ListForm = (props) => {
  const { intl, history, goBackToList, params = undefined } = props;

  const dispatch = useDispatch();
  const { listToEdit, success, isLoading } = useSelector(
    (state) => ({
      success: state.admin.list.success,
      listToEdit: state.admin.list.listExtraData,
      isLoading: state.admin.list.isLoading,
    }),
    shallowEqual
  );

  useEffect(() => {
    if (!_.isEmpty(params)) {
      dispatch(fetchListExtraData(params));
    }
  }, [params, dispatch]);

  const saveList = (values) => {
    if (_.isEmpty(params)) {
      dispatch(createList(values))
    } else {
      dispatch(editList(params, values))
    }

  };

  const fields = listFields({ intl });
  const namefields = listNameFields({ intl });
  return (
    <FormView
      goBackTo={goBackToList}
      goToDisplay={!_.isEmpty(params)}
      title={intl.formatMessage({
        id: "LIST.EDIT.TITLE",
      }) + " : " + listToEdit?.name}
      isLoading={isLoading}
    >
      {({ saveRef }) => (
        <DynamicForm
          className="mt-5"
          clearValuesAfterSubmit={success.isCreated}
          initialValues={!_.isEmpty(params) && listToEdit}
          onSubmit={saveList}
        >
          <RenderFields fields={namefields} show={true} />
          <FormRepeater
            max={100}
            min={1}
            sortable={true}
            labelbtn={intl.formatMessage({ id: "LIST.OPTION" })}
          >
            <FormRepeaterFields fields={fields} show={true} />
          </FormRepeater>
          <button ref={saveRef} className="d-none" type="submit"></button>
        </DynamicForm>
      )}

    </FormView>
  );
};

export default injectIntl(ListForm);
{
  /*<DynamicForm
          className="mt-5"
          clearValuesAfterSubmit={success.isCreated}
          initialValues={!_.isEmpty(params) && listToEdit}
          onSubmit={saveList}
        >
          <RenderFields fields={fields} show={true} />
          <DynamicInput></DynamicInput>

          <FormRepeater
                max={100}
                min={1}
                label={intl.formatMessage({ id: "PARTNERSHIP.INPUT.CONTACT" })}
              >
                <FormRepeaterFields fields={listFields} show={true} />
              </FormRepeater>

          <button ref={saveRef} className="d-none" type="submit"></button>
        </DynamicForm>*/
}
