import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home.jsx";
import Login from "./page/Login.jsx";
import Register from "./page/Register.jsx";
import { UseAuth } from "./Context/auth.jsx";
import Quiz from "./page/Quiz.jsx";
import AddQuiz from "./page/AddQuiz.jsx";

function App() {
  return (
    <UseAuth>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/new/quiz" element={<AddQuiz />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </UseAuth>
  );
}

export default App;
