import React, { useContext, useEffect, useState } from "react";
import { store } from "../context/Provider";
import { useNavigate } from "react-router-dom";
import { FaMedal } from "react-icons/fa";

const Quiz = () => {
  const {
    questions,
    index,
    setIndex,
    subject,
    difficulty,
    setAnswer,
    answer,
    score,
    setScore,
  } = useContext(store);
  const navigate = useNavigate();
  const [result, setResult] = useState(false);

  useEffect(() => {
    if (!subject || !difficulty) {
      navigate("/");
    }
  }, [navigate, subject, difficulty]);

  const handleSubmit = (ans) => {
    setAnswer(ans);
  };

  const handleAnswer = () => {
    if (questions[index].correct_answer === answer) {
      setScore((score) => score + 1);
    }
    setAnswer(null);
    if (index !== questions.length - 1) {
      setIndex(index + 1);
    } else {
      setResult(true);
    }
  };

  const handleRetake = () => {
    setScore(0);
    setIndex(0);
    setResult(false);
    navigate("/");
  };

  return (
    <>
      <section className="min-h-screen w-full bg-slate-900 flex items-center justify-center">
        {result ? (
          <div className="min-h-[400px] w-80 md:w-[400px] rounded-lg bg-white p-5 flex items-center justify-center flex-col gap-5">
            <h2 className="text-4xl">Score</h2>
            <FaMedal
              className={`text-4xl ${
                score >= 9
                  ? "text-yellow-400"
                  : score >= 7 && score < 9
                  ? "text-slate-400"
                  : score > 0 && score < 7
                  ? "text-amber-800"
                  : "text-black"
              }`}
            />
            <h3 className="font-semibold text-4xl">
              {score} / {questions.length}
            </h3>
            <button
              onClick={handleRetake}
              className="h-10 w-full rounded-lg bg-green-500 text-white hover:bg-green-700"
            >
              Take Test Again
            </button>
          </div>
        ) : (
          questions && (
            <div className="min-h-[400px] w-80 md:w-[400px] rounded-lg bg-white p-5">
              <h2 className="font-semibold text-2xl">
                {index + 1}. {questions[index].question}
              </h2>
              <div className="my-5 flex flex-col gap-5">
                {questions[index].options.map((a, i) => (
                  <button
                    onClick={() => handleSubmit(i)}
                    key={i}
                    className="min-h-10 w-full border flex items-center p-3 rounded-lg cursor-pointer hover:bg-green-300 hover:text-white focus:bg-orange-600 focus:text-white outline-none"
                  >
                    {i + 1}. {a}
                  </button>
                ))}
              </div>
              {answer != null && (
                <button
                  onClick={handleAnswer}
                  className="h-10 w-full rounded-lg bg-green-500 text-white hover:bg-green-700"
                >
                  Submit
                </button>
              )}
            </div>
          )
        )}
      </section>
    </>
  );
};

export default Quiz;
