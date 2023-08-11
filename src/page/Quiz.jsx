import React from "react";
import {QuizProvider} from "../Context/quiz.jsx";
import Exam from "../components/Exam/Exam.jsx";

function Quiz() {
  return (
    <QuizProvider>
        <Exam />
    </QuizProvider>
  );
}

export default Quiz;