import React from "react";
import {useNavigate} from "react-router-dom";
import './Contener-Warp.css';
import BoxAnswer from "../Box-File/Box-Answer";
import { useQuizContext } from "../../Context/quiz";

function ContenerAnswer(){
    const navigate = useNavigate();
    const {ListAnswers} = useQuizContext();
    return(
        <div className="contener-warp">
            <div className="Contener-Bar-Top">
                <input type="text" placeholder="Buscar..."/>
                <button onClick={()=> navigate('/new/quiz') } >Crear</button>
            </div>
            <div className="Warp-Render">
                {
                    ListAnswers.map((ListAnswers, i)=> (
                        <BoxAnswer key={i} title={ListAnswers.title} qualification={ListAnswers.qualification} />
                    ))
                }
            </div>
        </div>
    )
}

export default ContenerAnswer;