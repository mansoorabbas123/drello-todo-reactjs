import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import CardColapse from "./CardColapse";
import "./Card.css";
import { useState } from "react";
import EditColapse from "./EditColapse";
import dateFormat, { masks } from "dateformat";

const Card = ({
  col: { list, id },
  toggleCard,
  toggle,
  todo,
  updateTodo,
  todoAddHandler,
  date,
  updateDate,
  columns,
  editTodo,
  updateEditId,
  editId,
  editToggle,
  updateEditToggle,
}) => {
  const [showDate, setShowDate] = useState(null);
  // const [editToggle, setEditToggle] = useState(null);
  const toggleDate = (id) => {
    setShowDate(id);
  };
  const toggleForEdit = (id, droppableId) => {
    // if (editToggle) {
    //   // setTodo("");
    // }
    console.log("date on edit---->", date);
    updateEditId(id);
    // console.log(columns.todo.list);
    // columns.todo.list.find(li=>li.id===id);
    let targetTodo = columns[droppableId].list.find((li) => li.id === id);
    updateTodo(targetTodo.todo);
    console.log("date from target todo --->", date);
    updateDate(targetTodo.date);
    updateEditToggle(droppableId);
  };
  return (
    <div className="p-3 bg-white rounded w-80 m-3 bg-slate-300" key={id}>
      <div>
        <h4>{id}</h4>
      </div>
      <Droppable droppableId={id}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {list.map((todo, index) => (
              <Draggable
                draggableId={todo.id.toString()}
                key={todo.id}
                index={index}
              >
                {(provided) => (
                  <>
                    <div
                      className="flex justify-between bg-white my-1 p-2 rounded mt-1"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      onMouseEnter={() => toggleDate(todo.id)}
                      onMouseLeave={() => setShowDate(null)}
                    >
                      <div
                      // className="p-2 rounded mt-1 bg-white"
                      >
                        {todo.todo}
                      </div>
                      <div
                        className="cursor-pointer"
                        onClick={() => toggleForEdit(todo.id, id)}
                      >
                        <i className="far fa-edit mx-2"></i>
                      </div>
                    </div>
                    <div
                      className={
                        showDate === todo.id ? "block bg-slate-200" : "hidden"
                      }
                    >
                      {dateFormat(todo.date, "fullDate").toString()}
                    </div>
                  </>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <button
        className={
          toggleCard || editToggle === id
            ? "hidden"
            : "block w-full hover:bg-cyan-100 text-left mt-10 p-2 rounded-md"
        }
        onClick={() => toggle(id)}
      >
        +Add a New Card
      </button>
      <CardColapse
        toggleCard={toggleCard}
        toggle={toggle}
        todo={todo}
        updateTodo={updateTodo}
        todoAddHandler={todoAddHandler}
        date={date}
        updateDate={updateDate}
        ID={id}
      />
      <EditColapse
        toggleCard={toggleCard}
        editToggle={editToggle}
        toggleForEdit={toggleForEdit}
        todo={todo}
        updateTodo={updateTodo}
        todoAddHandler={todoAddHandler}
        date={date}
        updateDate={updateDate}
        ID={id}
        editTodo={editTodo}
        updateEditToggle={updateEditToggle}
      />
    </div>
  );
};

export default Card;
