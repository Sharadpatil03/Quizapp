import React, { useContext, useEffect } from "react";
import { store } from "../context/Provider";
import { useNavigate } from "react-router-dom";
import data from "../data/Questions.json";

const Home = () => {
  const {
    subject,
    setSubject,
    difficulty,
    setdifficulty,
    setQuestions,
    questions,
  } = useContext(store);
  const navigate = useNavigate();

  useEffect(() => {
    setSubject(null);
    setdifficulty(null);
  }, []);

  const handleClick = () => {
    if (!subject) {
      alert("Please Select subject !!!");
      return;
    } else if (!difficulty) {
      alert("Please Select difficulty !!!");
      return;
    } else {
      setQuestions(data.questions[subject][difficulty]);
      navigate(`/quiz/${subject}`);
    }
  };
  return (
    <>
      <section className="min-h-screen w-full bg-slate-900 flex flex-col items-center justify-center gap-10">
        <header>
          <h1 className="text-white text-3xl md:text-4xl font-semibold">
            <span className="text-orange-600">Front End </span>Quiz App
          </h1>
        </header>
        <div className="flex flex-wrap justify-center gap-5">
          <select
            onChange={(e) => setSubject(e.target.value)}
            id="subject"
            className="h-10 w-80 rounded-lg bg-transparent text-orange-600 outline outline-blue-500 ps-5"
          >
            <option value="select subject">select subject</option>
            <option value="html">html</option>
            <option value="css">css</option>
            <option value="javascript">javascript</option>
            <option value="react">react</option>
          </select>
          <select
            onChange={(e) => setdifficulty(e.target.value)}
            id="difficulty"
            className="h-10 w-80 rounded-lg bg-transparent text-orange-600 outline outline-blue-500 ps-5"
          >
            <option value="select difficulty">select difficulty</option>
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
        </div>
        <button
          onClick={handleClick}
          className="h-10 w-80 rounded-lg bg-green-500 text-white hover:bg-orange-600 focus:bg-green-700 outline-none transition delay-100"
        >
          Start Quiz
        </button>
      </section>
    </>
  );
};

export default Home;
