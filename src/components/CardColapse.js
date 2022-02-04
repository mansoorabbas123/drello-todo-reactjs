import React from "react";
import DateTimePicker from "react-datetime-picker";

const CardColapse = ({
  card,
  toggleCard,
  toggle,
  todo,
  updateTodo,
  todoAddHandler,
  date,
  updateDate,
}) => {
  return (
    <div className={toggleCard === card.id ? "block" : "hidden"}>
      <div>
        <label
          htmlFor=""
          className="bg-zinc-900 text-white p-1 rounded-lg mt-5 inline-block"
        >
          Task Text
        </label>
        <textarea
          name=""
          id=""
          className="my-3 block border-solid border-2 w-full"
          onChange={(e) => updateTodo(e.target.value)}
          value={todo}
        />
      </div>
      <div>
        <label
          htmlFor=""
          className="bg-zinc-900 text-white p-1 rounded-lg mb-4 inline-block"
        >
          Task Due Date
        </label>
        <div className="text-center">
          <DateTimePicker
            onChange={(value) => updateDate(value)}
            value={date}
          />
        </div>
      </div>
      <div>
        <button
          className="my-3 bg-teal-800 text-white p-2 rounded-lg"
          onClick={todoAddHandler}
        >
          Add Card
        </button>
        <a onClick={() => toggle(null)} className="ml-3 cursor-pointer">
          X
        </a>
      </div>
    </div>
  );
};

export default CardColapse;
