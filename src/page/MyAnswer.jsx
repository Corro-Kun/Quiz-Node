import React from "react";
import BarLeft from "../components/Bar-Left/BarLeft.jsx";
import Desktop from "../components/Desktop/Desktop.jsx";
import Contener from "../components/Contener/Contener-Answer.jsx";
import { QuizProvider} from "../Context/quiz.jsx";

function MyAnswer(){
    return(
        <QuizProvider>
            <Desktop>
                <BarLeft />
                <Contener />
            </Desktop>
        </QuizProvider>
    )
}

export default MyAnswer;