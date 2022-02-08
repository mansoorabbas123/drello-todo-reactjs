import React from "react";
import DateTimePicker from "react-datetime-picker";

const EditColapse = ({
  ID,
  editToggle,
  updateEditToggle,
  todo,
  updateTodo,
  date,
  updateDate,
  editTodo,
}) => {
  return (
    <div className={editToggle === ID ? "block" : "hidden"}>
      <div>
        <label
          htmlFor=""
          className="bg-zinc-900 text-white p-1 rounded-lg mt-5 inline-block"
        >
          Current Task Text
        </label>
        <textarea
          name=""
          id=""
          className="my-3 block border-solid border-2 w-full"
          onChange={(e) => updateTodo(e.target.value)}
          value={todo}
          placeholder="Enter Task Details..."
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
          onClick={(e) => editTodo(e, ID)}
        >
          Save
        </button>
        <a
          onClick={() => updateEditToggle(null)}
          className="ml-3 cursor-pointer"
        >
          X
        </a>
      </div>
    </div>
  );
};

export default EditColapse;
