import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";

const Main = () => {
  const [date, setDate] = useState(new Date());
  const [toggleCard, setToggleCard] = useState(null);
  const [editToggle, setEditToggle] = useState(null);
  const [todo, setTodo] = useState("");
  const [editId, setEditId] = useState(null);

  const updateEditId = (value) => {
    setEditId(value);
  };
  const updateEditToggle = (value) => {
    setEditToggle(value);
  };

  const initialColumns = {
    todo: {
      id: "todo",
      list: [],
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
    if (toggleCard) {
      setTodo("");
    }
    setToggleCard(id);
  };

  const updateTodo = (value) => {
    setTodo(value);
  };

  const todoAddHandler = (e, id) => {
    e.preventDefault();
    if (!todo) {
      alert("Enter task first");
      return null;
    }
    console.log("date on add task---->", date);

    // let dueDate = dateFormat(date.getTime(), "dddd, mmmm dS, yyyy, h:MM:ss TT");
    // dueDate = dueDate.split(" ");
    // dueDate.shift();
    // dueDate = dueDate.join(",");

    let newTask = {
      id: uuidv4(),
      todo,
      date,
    };

    let oldTodoTasks = columns[id].list;
    oldTodoTasks.push(newTask);

    setColumns({ ...columns });
    setTodo("");
    setToggleCard(null);
  };

  const updateDate = (value) => {
    setDate(value);
  };
  /////////////////////////////////////////////////////////////////////////////////////////////
  const editTodo = (e, id) => {
    e.preventDefault();
    // console.log("edit toggle ----> ", id);
    console.log("target todo id --->", editId);
    let targetTodo = columns[id].list.find((li) => li.id === editId);
    let updatedList = columns[id].list.map((el) =>
      el.id === editId ? { id: targetTodo.id, todo, date } : el
    );
    columns[id].list = updatedList;
    setColumns({ ...columns });
    setEditToggle(null);
  };

  const handleOnDragEnd = ({ source, destination }: DropResult) => {
    // Make sure we have a valid destination
    if (destination === undefined || destination === null) {
      // console.log("====================================");
      console.log(source);
      // console.log(Object.values(columns));
      let oldTodoTasks = columns[source.droppableId].list;
      console.log(oldTodoTasks);
      let filtereList = oldTodoTasks.filter((el, idx) => !idx == source.index);
      console.log("filtered list", filtereList);
      columns[source.droppableId].list = filtereList;
      setColumns({ ...columns });
      // let filteredOldTasks = oldTodoTasks.filter( todo => todo.)
      // console.log("====================================");
      return null;
    }

    // console.log("Source --->", source);
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
      console.log("column after drag ---> ", columns);
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
            editTodo={editTodo}
            key={col.id}
            columns={columns}
            updateTodo={updateTodo}
            editTodo={editTodo}
            editId={editId}
            updateEditId={updateEditId}
            editToggle={editToggle}
            updateEditToggle={updateEditToggle}
          />
        ))}
      </main>
    </DragDropContext>
  );
};

export default Main;
