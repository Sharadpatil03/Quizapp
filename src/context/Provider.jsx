import React, { createContext, useState } from "react";

export const store = createContext();

const Provider = ({ children }) => {
  const [subject, setSubject] = useState(null);
  const [difficulty, setdifficulty] = useState(null);
  const [questions, setQuestions] = useState(null);
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [score, setScore] = useState(0);
  return (
    <store.Provider
      value={{
        subject,
        setSubject,
        difficulty,
        setdifficulty,
        questions,
        setQuestions,
        index,
        setIndex,
        answer,
        setAnswer,
        score,
        setScore,
      }}
    >
      {children}
    </store.Provider>
  );
};

export default Provider;
