import React, { useState } from "react";
import Data from "./Data/Data";
import "./App.css";

const App = () => {
  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const currentQuestion = Data[question];
  const totalQuestions = Data.length;

  const handleCorrectQuestion = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 5);
    }
    if (question + 1 < totalQuestions) {
      setQuestion((oldQuestion) => oldQuestion + 1);
    } else {
      setQuizCompleted(true);
      console.log("Quiz completed!");
    }
  };

  const statusLineWidth = ((question + 1) / totalQuestions) * 100;
  return (
    <>
      <div className="container">
        <div className="quize-container bg-white mx-auto rounded p-8 shadow-md">
          <div className="quize-header flex items-center justify-between">
            <div>
              <p className="mb-1">
                Question {question + 1}/{totalQuestions}
              </p>
              <div className="quize-status h-4 border-rose-400 border-2">
                <div
                  className="quize-status-line bg-red-400"
                  style={{ width: `${statusLineWidth}%`, height: "100%" }}
                ></div>
              </div>
            </div>
            <div className="quize-score">
              <p>Score</p>
              <h2 className="text-red-700">{score}</h2>
            </div>
          </div>

          <div className="quize-body mt-8 text-left">
            {quizCompleted != true ? (
              <>
                <div className="quize-question">
                  <h1 className="text-xl font-semibold ">
                    {question + 1}. {currentQuestion.questionTxt}
                  </h1>
                </div>
                <ul className="quize-answer-list pt-8">
                  {currentQuestion.answerOptions.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center cursor-pointer shadow-md hover:bg-green-100"
                      onClick={() => handleCorrectQuestion(item.isCorrect)}
                    >
                      <div className="counter py-2 px-5 bg-rose-400 mr-4 text-white ">
                        {index + 1}
                      </div>
                      <p>{item.answerText}</p>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <strong className="font-semibold text-xl text-red-600">
                  Game over !
                </strong>
                <h2>Thank you for playing...</h2>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
