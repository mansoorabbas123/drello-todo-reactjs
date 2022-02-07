import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import Card from "./Card";
import CardColapse from "./CardColapse";

const Main = () => {
  const [date, setDate] = useState(new Date());
  const [toggleCard, setToggleCard] = useState(null);
  const [todo, setTodo] = useState("Enter Task Details...");

  const initialColumns = {
    todo: {
      id: "todo",
      list: ["test 1", "test 2", "test 3"],
    },
    doing: {
      id: "doing",
      list: [],
    },
    done: {
      id: "done",
      list: [],
    },
  };

  const [columns, setColumns] = useState(initialColumns);

  const toggle = (id) => {
    setToggleCard(id);
  };

  const updateTodo = (value) => {
    setTodo(value);
  };

  const todoAddHandler = (e) => {
    e.preventDefault();
    console.log(todo);
  };

  const updateDate = (value) => {
    console.log("====================================");
    console.log(value);
    console.log("====================================");
  };

  const handleOnDragEnd = ({ source, destination }: DropResult) => {
    // Make sure we have a valid destination
    if (destination === undefined || destination === null) return null;

    console.log("Source --->", source);
    // Make sure we're actually moving the item
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return null;

    // Set start and end variables
    const start = columns[source.droppableId];
    const end = columns[destination.droppableId];

    // If start is the same as end, we're in the same column
    if (start === end) {
      // Move the item within the list
      // Start by making a new list without the dragged item
      const newList = start.list.filter(
        (_: any, idx: number) => idx !== source.index
      );

      // Then insert the item at the right location
      newList.splice(destination.index, 0, start.list[source.index]);

      // Then create a new copy of the column object
      const newCol = {
        id: start.id,
        list: newList,
      };

      // Update the state
      setColumns((state) => ({ ...state, [newCol.id]: newCol }));
      return null;
    } else {
      // If start is different from end, we need to update multiple columns
      // Filter the start list like before
      const newStartList = start.list.filter(
        (_: any, idx: number) => idx !== source.index
      );

      // Create a new start column
      const newStartCol = {
        id: start.id,
        list: newStartList,
      };

      // Make a new end list array
      const newEndList = end.list;

      // Insert the item into the end list
      newEndList.splice(destination.index, 0, start.list[source.index]);

      // Create a new end column
      const newEndCol = {
        id: end.id,
        list: newEndList,
      };

      // Update the state
      setColumns((state) => ({
        ...state,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      }));
      return null;
    }
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <main className="p-5 flex justify-start items-start flex-wrap">
        {/* each card  */}
        {Object.values(columns).map((col) => (
          <Card
            col={col}
            toggleCard={toggleCard}
            toggle={toggle}
            todo={todo}
            updateTodo={updateTodo}
            todoAddHandler={todoAddHandler}
            date={date}
            updateDate={updateDate}
            key={col.id}
          />
        ))}
      </main>
    </DragDropContext>
  );
};

export default Main;
