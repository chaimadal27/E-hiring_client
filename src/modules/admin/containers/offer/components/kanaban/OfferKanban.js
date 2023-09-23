/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useState, useEffect } from "react"
import {
    Card,
    CardBody,
    CardHeader,
    CardHeaderTitle,
    CardHeaderToolbar,
    CardFooter,
    FlashMessages,
    FilterFormView
} from "../../../../../../components/partials/controls"
import { injectIntl } from "react-intl"
import { FormattedMessage } from "react-intl"
import { ProtectedLink } from "../../../../../../components/wrappers"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import uuid from "uuid/v4";
import { Card as CardB, Button, CardDeck, CardColumns } from 'react-bootstrap'
import DeleteIcon from '@material-ui/icons/Delete';
import ItemCard from './ItemCard'
import _ from "lodash";
import { isRLTLang } from "./../../../../../../i18n"
import routes from "../../../../routes"
import { fetchKanbanCandidates } from "../../store/actions"
import { candidateGetCVUIHelper, changeCandidateStageUIHelper } from "../../../../UIHelpers"

const Kanban = (props) => {
    const { candidates, params, history } = props

    //const [fetchedCandidates, setFetchedCandidates] = useState(candidates)
    const [firstColumnItems, setfirstColumnItems] = useState([]);
    const [secondColumnItems, setsecondColumnItems] = useState([]);
    const [thirdColumnItems, setthirdColumnItems] = useState([]);
    const [forthColumnItems, setforthColumnItems] = useState([]);
    const [fifthColumnItems, setfifthColumnItems] = useState([]);
    const [showDeleteColumn, setshowDeleteColumn] = useState(false);
    const [data, setdata] = useState([])
    const [title, settitle] = useState("");

    const Emptycolumns = {
        ['1']: {
            name: "A Trier",
            items: []
        },
        ['2']: {
            name: "A Appeler",
            items: []
        },
        ['3']: {
            name: "Entretien RH",
            items: []
        },
        ['4']: {
            name: "Entretien Opérationnel",
            items: []
        },
        ['5']: {
            name: "Retenu",
            items: []
        }
    };
    const [columns, setColumns] = useState(Emptycolumns);

    const deleteColumn = {
        ['6']: {
            items: []
        }
    };


    /* const [isset, setIsset] = useState(0);
    var tt;
    if (columns.length > 0)
        clearTimeout(tt);
    else {
        if (isset == 0) {

            tt = setTimeout(() => {
                if (candidates.length > 0) {
                    setItems(candidates);
                    setIsset(1);
                }
            }, 1000)

        }
    } */

    useEffect(() => {
        setColumns(Emptycolumns)
        setdata(candidates)
    }, [candidates]);

    useEffect(() => {
        setItems(data)
        if (!_.isEmpty(data)) { settitle(data[0].offerDetails.title) }

    }, [data]);

    const setItems = (values) => {
        if (_.isEmpty(values)) return;
        let arrCol1 = [];
        let arrCol2 = [];
        let arrCol3 = [];
        let arrCol4 = [];
        let arrCol5 = [];
        values.map((candidate) => {
            const stage = candidate.stageCandidate
            switch (stage) {
                case 1:
                    arrCol1.push({ id: uuid(), content: candidate })
                    //setfirstColumnItems([...firstColumnItems, { id: uuid(), content: candidate }])
                    break
                case 2:
                    arrCol2.push({ id: uuid(), content: candidate })

                    //setsecondColumnItems([...secondColumnItems, { id: uuid(), content: candidate }])
                    break
                case 3:
                    arrCol3.push({ id: uuid(), content: candidate })

                    //setthirdColumnItems([...thirdColumnItems, { id: uuid(), content: candidate }])
                    break
                case 4:
                    arrCol4.push({ id: uuid(), content: candidate })

                    //setforthColumnItems([...forthColumnItems, { id: uuid(), content: candidate }])
                    break
                case 5:
                    arrCol5.push({ id: uuid(), content: candidate })

                    //etfifthColumnItems([...fifthColumnItems, { id: uuid(), content: candidate }])
                    break
                default:
                    break
            }
            const columnsFromBackend = {
                ['1']: {
                    name: "A Trier",
                    items: arrCol1
                },
                ['2']: {
                    name: "A Appeler",
                    items: arrCol2
                },
                ['3']: {
                    name: "Entretien RH",
                    items: arrCol3
                },
                ['4']: {
                    name: "Entretien Opérationnel",
                    items: arrCol4
                },
                ['5']: {
                    name: "Retenu",
                    items: arrCol5
                }
            };
            setColumns(columnsFromBackend)
        })
        //setfirstColumnItems(arrCol1);

    }

    //console.log(columnsFromBackend)
    const onDragEnd = (result, columns, setColumns) => {
        if (!result.destination) return;
        const { source, destination } = result;
        //console.log(result)
        if (destination.droppableId - source.droppableId == 1 || destination.droppableId < source.droppableId) {
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems
                },
                [destination.droppableId]: {
                    ...destColumn,
                    items: destItems
                }
            });
            changeCandidateStageUIHelper(removed.content.id, destination.droppableId)
        }
        /* else {
            const column = columns[source.droppableId];
            const copiedItems = [...column.items];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...column,
                    items: copiedItems
                }
            });
        } */
        //console.log(result)
        //console.log(columns)
    };

    const deleteItem = (result) => {
        if (!result.destination) return;
        const { source, destination } = result;
    }

    return (<>
        <DragDropContext
            onDragEnd={result => onDragEnd(result, columns, setColumns)}
        >
            <Card>
                <CardHeader>
                    <div className="card-title">
                        <CardHeaderTitle>
                            <FormattedMessage id="OFFER.KANBAN.TITLE" />  {"de l'offre : " + title}
                        </CardHeaderTitle>
                    </div>
                    <CardHeaderToolbar>
                        <Button
                            type="button"
                            onClick={() => {
                                history.push(routes.offerList.path)
                            }}
                            className="btn btn-sm btn-light mx-2"
                        >
                            {isRLTLang() ?
                                <>
                                    <FormattedMessage id="GENERAL.BACK" />
                                    <i className="fa fa-arrow-left" />
                                </>
                                : <>
                                    <i className="fa fa-arrow-left" />
                                    <FormattedMessage id="GENERAL.BACK" />
                                </>
                            }
                        </Button>
                    </CardHeaderToolbar>
                </CardHeader>
                <CardBody>
                    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>

                        <CardDeck className="w-100">
                            {Object.entries(columns).map(([columnId, column], index) => {
                                return (
                                    <CardB border="secondary" className="text-center bg-body" key={columnId} style={{ margin: 8, justifyContent: "center" }}>
                                        <CardHeader ><div className="card-title m-0">
                                            <CardHeaderTitle >
                                                {column.name}
                                            </CardHeaderTitle>
                                        </div></CardHeader>
                                        <Droppable droppableId={columnId} key={columnId} index={index}>
                                            {(provided, snapshot) => {
                                                return (
                                                    <CardBody
                                                        {...provided.droppableProps}
                                                        ref={provided.innerRef}
                                                        style={{
                                                            background: snapshot.isDraggingOver
                                                                ? "#f0f0f0"
                                                                : "#f7f7f7",
                                                            padding: 5,
                                                            //minWidth: 280,
                                                            minHeight: 500
                                                        }}
                                                    >
                                                        {column.items?.map((item, index) => {

                                                            return (
                                                                <Draggable
                                                                    key={item.id}
                                                                    draggableId={item.id}
                                                                    index={index}
                                                                >
                                                                    {(provided, snapshot) => {
                                                                        //setshowDeleteColumn(snapshot.isDragging)
                                                                        return (
                                                                            <CardB
                                                                                border="primary"
                                                                                ref={provided.innerRef}
                                                                                {...provided.draggableProps}
                                                                                {...provided.dragHandleProps}
                                                                                style={{
                                                                                    userSelect: "none",
                                                                                    padding: 8,
                                                                                    margin: "0 0 10px 0",
                                                                                    //minHeight: "50px",
                                                                                    fontSize: "18px",
                                                                                    backgroundColor: snapshot.isDragging
                                                                                        ? "#e8f3ff" : "#f5f5f5",
                                                                                    /* ? "#263B4A"
                                                                                    : "#456C86", */
                                                                                    color: "black",
                                                                                    ...provided.draggableProps.style
                                                                                }}
                                                                            >
                                                                                <ItemCard content={item.content} params={params} history={history} />
                                                                                {/* {item.content} */}
                                                                            </CardB>
                                                                        );
                                                                    }}
                                                                </Draggable>
                                                            );
                                                        })}
                                                        {provided.placeholder}
                                                    </CardBody>
                                                );
                                            }}
                                        </Droppable>
                                    </CardB>
                                );
                            })}</CardDeck>
                    </div>
                </CardBody>
            </Card>
            {/* {showDeleteColumn &&
                <div style={{ display: "flex", gap: 10, justifyContent: "center", alignItems: "center", padding: 15 }}>
                    <DragDropContext
                        onDragEnd={result => deleteItem(result)}
                    >
                        {Object.entries(deleteColumn).map(([columnId, column], index) => {
                            return (
                                <Droppable droppableId={columnId} key={columnId} index={index}>
                                    {(provided, snapshot) => {
                                        return (
                                            <CardB {...provided.droppableProps}
                                                ref={provided.innerRef}
                                                bg='danger' className='w-50' >
                                                <div style={{ display: "flex", gap: 10, justifyContent: "center", alignItems: "center", padding: 10 }} >
                                                    <DeleteIcon fontSize={"large"} />
                                                    <div style={{ fontSize: "20px" }}>Corbeille</div>
                                                </div>
                                                {!_.isEmpty(column.items) && column.items.map((item, index) => {

                                                    return (
                                                        <Draggable
                                                            key={item.id}
                                                            draggableId={item.id}
                                                            index={index}
                                                        >
                                                            {(provided, snapshot) => {
                                                                return
                                                                    ;
                                                            }}
                                                        </Draggable>
                                                    );
                                                })}
                                                {provided.placeholder}
                                            </CardB>
                                        )
                                    }}
                                </Droppable>)
                        })}
                    </DragDropContext>
                </div>} */}
        </DragDropContext>

    </>
    );
}

export default injectIntl(Kanban)