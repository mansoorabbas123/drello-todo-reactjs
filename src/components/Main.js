import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import CardColapse from "./CardColapse";

const Main = () => {
  const [date, setDate] = useState(new Date());
  const [toggleCard, setToggleCard] = useState(null);
  const [todo, setTodo] = useState("Enter Task Details...");
  // const [todos, setTodos] = useState([
  //   {
  //     id: 11,
  //     desc: "grocery",
  //   },
  //   {
  //     id: 12,
  //     desc: "meeting",
  //   },
  //   {
  //     id: 13,
  //     desc: "shopping",
  //   },
  // ]);

  const data = [
    {
      id: 1,
      title: "Todo",
      todos: [
        {
          id: 31,
          text: "test 1",
          dueDate: new Date(),
        },
      ],
    },
    {
      id: 2,
      title: "Doing",
      todos: [
        {
          id: 32,
          text: "test 2",
          dueDate: new Date(),
        },
      ],
    },
    {
      id: 3,
      title: "Done",
      todos: [
        {
          id: 33,
          text: "test 3",
          dueDate: new Date(),
        },
      ],
    },
  ];

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

  return (
    <main className="p-5 flex justify-start items-start flex-wrap">
      {/* each card  */}
      {data.map((card) => {
        return (
          <div
            className="p-3 bg-white rounded w-80 m-3 bg-slate-300"
            key={card.id}
          >
            <div>
              <h4>{card.title}</h4>
            </div>
            <div className="p-2 rounded mt-1 bg-white">
              {card.todos.map((todo) => (
                <p key={todo.id}>{todo.text}</p>
              ))}
            </div>
            <button
              className={
                toggleCard === card.id
                  ? "hidden"
                  : "block w-full hover:bg-cyan-100 text-left mt-10 p-2 rounded-md"
              }
              onClick={() => toggle(card.id)}
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
              card={card}
            />
          </div>
        );
      })}
    </main>
  );
};

export default Main;
