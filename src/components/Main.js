import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";

const Main = () => {
  const [value, onChange] = useState(new Date());
  const [toggleCard, setToggleCard] = useState(null);

  const data = [
    {
      id: 1,
      title: "Todo",
    },
    {
      id: 2,
      title: "Doing",
    },
    {
      id: 3,
      title: "Done",
    },
  ];

  const toggle = (id) => {
    setToggleCard(id);
  };

  return (
    <main className="p-5 flex justify-start items-start flex-wrap">
      {/* each card  */}
      {data.map((el) => {
        return (
          <div className="p-3 bg-white rounded w-80 m-3 " key={el.id}>
            <div>
              <h4>{el.title}</h4>
            </div>
            <button
              className={
                toggleCard === el.id
                  ? "hidden"
                  : "block w-full hover:bg-cyan-100 text-left mt-10 p-2 rounded-md"
              }
              onClick={() => toggle(el.id)}
            >
              +Add a New Card
            </button>
            <div className={toggleCard === el.id ? "block" : "hidden"}>
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
                  value=" Enter Task Details ..."
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
                  <DateTimePicker onChange={onChange} value={value} />
                </div>
              </div>
              <div>
                <button className="my-3 bg-teal-800 text-white p-2 rounded-lg">
                  Add Card
                </button>
                <a onClick={() => toggle(null)} className="ml-3 cursor-pointer">
                  X
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default Main;
