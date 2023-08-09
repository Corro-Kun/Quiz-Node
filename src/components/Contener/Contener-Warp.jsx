import React from "react";
import './Contener-Warp.css';
import BoxFile from "../Box-File/Box-File";
import {useQuizContext} from "../../Context/quiz.jsx";

function ContenerWarp() {
    const {Quizzes} = useQuizContext();
    return(
        <div className="contener-warp">
            <div className="Contener-Bar-Top">
                <input type="text" placeholder="Buscar..." />
            </div>
            <div className="Warp-Render">
                {
                    Quizzes.map((Quizzes, i)=>(
                        <BoxFile key={i} title={Quizzes.title} id={Quizzes.id} number={i+1} />
                    ))
                }
            </div>
        </div>
    );
}

export default ContenerWarp;