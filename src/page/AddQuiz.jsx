import React from 'react'
import { QuizProvider } from '../Context/quiz'
import PlanQuestions from '../components/Plan-Questions/PlanQuestions'

function AddQuiz() {
    return (
        <QuizProvider>
            <PlanQuestions /> 
        </QuizProvider>
    )
}

export default AddQuiz