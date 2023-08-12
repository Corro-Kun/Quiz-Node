import React,{useContext, createContext, useState, useEffect} from "react";
import {profile} from "../api/auth.js";
import { getQuizzes, getQuiz } from "../api/quiz.js";

const QuizContext = createContext();

export function useQuizContext(){
    return useContext(QuizContext);
};

export function QuizProvider({children}){
    const [DataProfile, setDataProfile] = useState({name: '', email: ''});
    const [Quizzes, setQuizzes] = useState([]);
    const [Quiz, setQuiz] = useState([]);

    useEffect(() => {
        FetchProfile();
        FetchQuizzes();
    }, []);

    const FetchProfile = async () =>{
        const {data} = await profile();
        setDataProfile(data[0]);
    }

    const FetchQuizzes = async () =>{
        const {data} = await getQuizzes();
        setQuizzes(data);
    }

    const FilterQuizzes = ({target:{value}})=>{
        if(value === ''){
            FetchQuizzes();
        }else{
            setQuizzes(Quizzes.filter((Quizzes) => Quizzes.title.toLowerCase().includes(value.toLowerCase())));
        }
    }

    const FetchQuiz = async (id) =>{
        const {data} = await getQuiz(id);
        setQuiz(data);
        console.log(data);
    }

    const [NumQuestion, setNumQuestion] = useState(1);
    const [QuestionsInput, setQuestionsInput] = useState([]);

    function AddQuestion(){
        let Question = [];
        for(let a = 0; a < NumQuestion; a++){
            Question.push(
                <div key={a} className="Question-add-question-function" >
                    <label>{a+1}. Escribe tu pregunta:</label>
                    <input type="text" />
                </div>
            );
        }
        return Question;
    }

    return(
        <QuizContext.Provider value={{DataProfile, Quizzes, FilterQuizzes, FetchQuiz, Quiz, NumQuestion, setNumQuestion, AddQuestion}} >
            {children}
        </QuizContext.Provider>
    );
}