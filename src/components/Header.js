import React from "react";

const Header = () => {
  return (
    <header className="text-white ">
      <div className="text-center text-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 inline mb-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path
            fill-rule="evenodd"
            d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
            clip-rule="evenodd"
          />
        </svg>
        Drello
      </div>
      <div className="flex justify-between lg:text-xl md:text-md mt-5">
        <p className="bg-slate-700 ml-5 p-2">Your Drello Board</p>
        {/* <p className="bg-slate-700 mr-5 p-2">---Change Background</p> */}
      </div>
    </header>
  );
};

export default Header;
