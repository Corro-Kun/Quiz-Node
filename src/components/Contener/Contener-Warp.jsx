import React from "react";
import {useNavigate} from "react-router-dom";
import './Contener-Warp.css';
import BoxFile from "../Box-File/Box-File";
import {useQuizContext} from "../../Context/quiz.jsx";

function ContenerWarp() {
    const {Quizzes,FilterQuizzes} = useQuizContext();
    const navigate = useNavigate();
    return(
        <div className="contener-warp">
            <div className="Contener-Bar-Top">
                <input type="text" placeholder="Buscar..." onChange={(e) => FilterQuizzes(e)} />
                <button onClick={()=> navigate('/new/quiz') } >Crear</button>
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