import React,{useEffect} from "react";
import {useParams} from "react-router-dom";
import "./Exam.css";
import {useQuizContext} from "../../Context/quiz.jsx";
import Question from "../Question/Question";

function Exam(){
    const {id} = useParams();
    const {Quiz, FetchQuiz} = useQuizContext();
    useEffect(() => {
        FetchQuiz(id);
    },[]);
    return(
        <div className="Render-Quiz" >
            <div className="Main-Quiz" >
                <form action="#">
                    <div>
                        <h2 className="H2-Title" >{Quiz.title}</h2>
                        <p className="P-Author" >Por {Quiz.author}</p>
                        {
                            Quiz.questions?.map((questions, i)=>(
                                <Question key={i} title={questions.question} options={questions.options} number={i + 1}/>
                            )) 
                        }
                    </div> 
                    <div className="button-render-quiz" >
                        <button type="submit">Enviar</button>
                    </div>
                </form> 
            </div>
        </div>
    );
}

export default Exam;