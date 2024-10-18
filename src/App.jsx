import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
import Quiz from "./components/Quiz";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/quiz/:subject" element={<Quiz />} />
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
