import React from "react";
import "./App.css";
const App = () => {
  return (
    <>
      <div className="container">
        <div className="quize-container bg-white mx-auto rounded  p-8 shadow-md">
          <div className="quize-header flex items-center justify-between	 ">
            <div>
              <p className="mb-1">Question 1/ 5</p>
              <div className="quize-status h-5  border-rose-700 border-2 ">
                <div className="quize-status-line bg-red-400 w-5 h-4"></div>
              </div>
            </div>
            <div className="quize-score">
              <p>Score</p>
              <h2 className="text-red-700">0</h2>
            </div>
          </div>
          <div className="quize-body mt-8 text-left">
            <div className="quize-question">
              <h1 className="text-xl font-semibold ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eveniet, odit.
              </h1>
            </div>
            <ul className="quize-answer-list pt-8 ">
              <li className=" flex items-center  cursor-pointer shadow-md hover:bg-green-100">
                <div className="counter py-2 px-5 bg-rose-400 mr-4 text-white ">
                  1
                </div>
                <p>Lorem ipsum dolor sit.</p>
              </li>
              <li className=" flex items-center  cursor-pointer shadow-md hover:bg-green-100">
                <div className="counter py-2 px-5 bg-rose-400 mr-4 text-white ">
                  1
                </div>
                <p>Lorem ipsum dolor sit.</p>
              </li>
              <li className=" flex items-center  cursor-pointer shadow-md hover:bg-green-100">
                <div className="counter py-2 px-5 bg-rose-400 mr-4 text-white ">
                  1
                </div>
                <p>Lorem ipsum dolor sit.</p>
              </li>
              <li className=" flex items-center  cursor-pointer shadow-md hover:bg-green-100">
                <div className="counter py-2 px-5 bg-rose-400 mr-4 text-white ">
                  1
                </div>
                <p>Lorem ipsum dolor sit.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
