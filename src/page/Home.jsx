import React from "react";
import BarLeft from "../components/Bar-Left/BarLeft.jsx";
import Desktop from "../components/Desktop/Desktop.jsx";
import ContenerWarp from "../components/Contener/Contener-Warp.jsx";
import { QuizProvider } from "../Context/quiz.jsx";

function Home() {
    return(
        <QuizProvider>
            <Desktop>
                <BarLeft />
                <ContenerWarp />
            </Desktop>
        </QuizProvider>
   );
}

export default Home;