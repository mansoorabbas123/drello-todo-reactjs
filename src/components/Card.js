import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import CardColapse from "./CardColapse";

const Card = ({
  col: { list, id },
  toggleCard,
  toggle,
  handleOnDragEnd,
  todo,
  updateTodo,
  todoAddHandler,
  date,
  updateDate,
}) => {
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
                draggableId={index.toString()}
                key={todo}
                index={index}
              >
                {(provided) => (
                  <div
                    className="p-2 rounded mt-1 bg-white"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {todo}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <button
        className={
          toggleCard === id
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
    </div>
  );
};

export default Card;
