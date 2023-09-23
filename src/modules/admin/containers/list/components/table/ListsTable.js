import React, { useEffect } from "react";
import { injectIntl } from "react-intl";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { DataTable } from "../../../../../../components/partials";
import { useListsUIContext } from "../../context/ListsUIContext";
import { fetchLists } from "../../store/actions";
import SVG from "react-inlinesvg";
import listFields from "./fields.js/listFields";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { toAbsoluteUrl } from "../../../../../../helpers";
import { Button, ListGroup } from "react-bootstrap";

const ListTable = ({ intl }) => {
  // Lists UI Context
  const listsUIProps = useListsUIContext();

  const columns = listFields({ intl, listsUIProps });

  // Getting curret state of lists list from store (Redux)
  const { totalSize, lists: entities = [], isFetching = false } = useSelector(
    (state) => ({
      lists: state.admin.list.lists,
      isFetching: state.admin.list.isFetching,
      totalSize: state.admin.list.totalSize,
    }),
    shallowEqual
  );
  // Lists Redux state
  const dispatch = useDispatch();

  useEffect(() => {
    listsUIProps.setIds([]);
    dispatch(fetchLists(listsUIProps.queryParams));

    // eslint-disable-next-line
  }, [listsUIProps.queryParams, dispatch]);

  //Expand list options
  /* const expandRow = {
    showExpandColumn: true,
    onlyOneExpanding: true,
    expandColumnPosition: "right",
    renderer: (row) => (
      <div>
        <ListGroup variant="flush">
          {row.optionSet.map((value, index) => (
            <ListGroup.Item style={{ fontSize: "15px", paddingLeft: "100px" }} >{index + 1}) {value.value}</ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    ),
    expandHeaderColumnRenderer: ({ isAnyExpands }) => {
      if (isAnyExpands) {
        return;
      }
      return;
    },
    expandColumnRenderer: ({ expanded }) => {
      if (expanded) {
        return (
          <Button variant="outline-primary">Retour</Button>
        );
      }
      return <Button variant="outline-primary">Visualiser</Button>;
    },
  }; */

  return (
    <>
      <DataTable
        isFetching={isFetching}
        entities={entities}
        columns={columns}
        totalSize={totalSize}
        queryParams={listsUIProps.queryParams}
        onQueryParamsChange={listsUIProps.setQueryParams}
        ids={listsUIProps.ids}
        setIds={listsUIProps.setIds}
      //expandRow={expandRow}
      />
    </>
  );
};

export default injectIntl(ListTable);
