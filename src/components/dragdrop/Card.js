import React, { useState } from 'react'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import { v4 as uuid } from 'uuid'

const itemsFromBackend = [
    { id: uuid(), content: "Mango" },
    { id: uuid(), content: "Apple" },
    { id: uuid(), content: "Rambutan" },
    { id: uuid(), content: "Lemon" },
    { id: uuid(), content: "Orange" },
    { id: uuid(), content: "Ponkan" },
]

const columnsFromBackend = {
    [uuid()]: {
        name: "Fruits",
        items: itemsFromBackend
    },
    [uuid()]: {
        name: "Yellow",
        items: []
    },
    [uuid()]: {
        name: "Red",
        items: []
    },
    [uuid()]: {
        name: "Orange",
        items: []
    }
}

const onDragEnd = (result, fruitColumns, setFruitColumns) => {
    if (!result.destination) return
    const { source, destination } = result

    if (source.droppableId !== destination.droppableId) {
        const sourceColumn = fruitColumns[source.droppableId]
        const destColumn = fruitColumns[destination.droppableId]
        const sourceItems = [...sourceColumn.items]
        const destItems = [...destColumn.items]
        const [removed] = sourceItems.splice(source.index, 1)
        destItems.splice(destination.index, 0, removed)
        setFruitColumns({
            ...fruitColumns,
            [source.droppableId]: {
                ...sourceColumn,
                items: sourceItems
            },
            [destination.droppableId]: {
                ...destColumn,
                items: destItems
            }
        })
    } else {
        const column = fruitColumns[source.droppableId]
        const copiedItems = [...column.items]
        const [removed] = copiedItems.splice(source.index, 1)
        copiedItems.splice(destination.index, 0, removed)
        setFruitColumns({
            ...fruitColumns,
            [source.droppableId]: {
                ...column,
                items: copiedItems
            }
        })
    }
}

const Card = () => {
    const [fruitColumns, setFruitColumns] = useState(columnsFromBackend)
    return (
        <div className="context-wrapper">
            <DragDropContext
                onDragEnd={result => onDragEnd(result, fruitColumns, setFruitColumns)}>
                {Object.entries(fruitColumns).map(([columnId, column], index) => {
                    return (
                        <div classNmae="column-wrap" key={columnId}>
                            <h2>{column.name}</h2>
                            <div style={{ margin: 8 }}>
                                <Droppable droppableId={columnId} key={columnId}>
                                    {(provided, snapshot) => {
                                        return (
                                            <div className="dropbox"
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}
                                                style={{
                                                    background: snapshot.isDraggingOver
                                                        ? "#eee"
                                                        : "#ddd"
                                                }}
                                            >
                                                {column.items.map((item, index) => {
                                                    return (
                                                        <Draggable
                                                            key={item.id}
                                                            draggableId={item.id}
                                                            index={index}
                                                        >
                                                            {(provided, snapshot) => {
                                                                return (
                                                                    <div className="dragbox"
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        style={{
                                                                            backgroundColor: snapshot.isDragging
                                                                                ? "#929292"
                                                                                : "#454545",
                                                                            ...provided.draggableProps.style
                                                                        }}
                                                                    >
                                                                        {item.content}
                                                                    </div>
                                                                )
                                                            }}
                                                        </Draggable>
                                                    )
                                                })}
                                                {provided.placeholder}
                                            </div>
                                        )
                                    }}
                                </Droppable>
                            </div>
                        </div>
                    )
                })}
            </DragDropContext>
        </div>
    )
}

export default Card
