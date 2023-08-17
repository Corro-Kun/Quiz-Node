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
        }else if(addEventListener === 'keyBackspace'){
            FetchQuizzes();
        }else{
            setQuizzes(Quizzes.filter((Quizzes)=> Quizzes.title.toLowerCase().includes(value.toLowerCase()) ));
        }
    }

    const FetchQuiz = async (id) =>{
        const {data} = await getQuiz(id);
        setQuiz(data);
        console.log(data);
    }

    const [NumQuestion, setNumQuestion] = useState(1);
    const [Saveopciones, setSaveopciones] = useState([0]);
    function AddQuestion(){
        let Question = [];
        for(let a = 0; a < NumQuestion; a++){
            Question.push(
                <div key={a} className="Question-add-question-function" >
                    <label>{a+1}. Escribe tu pregunta:</label>
                    <input type="text" name="question" onChange={(e) => changerQuestioQuiz(e,a)} />
                    <div className="Question-function-Options">
                        {AddAnswerQuestion(a)}
                        <button onClick={() => {
                            let newdata = [...Saveopciones];
                            if(!newdata[a]){
                                newdata[a] = 0;
                            }
                            newdata[a] = newdata[a] + 1;
                            setSaveopciones(newdata);
                        }} >Añadir respuestas</button>

                    </div>
                </div>
            );
        }
        return Question;
    }
    function AddAnswerQuestion(i){
        let Answer = [];
        for(let a = 0; a < Saveopciones[i]; a++){
            if(a === 0){
                Answer.push(
                    <div key={a} >
                        <label>A. </label>
                        <input type="text" onChange={(e) => chagerOptionsQuiz(e,i,a)} />
                        <input type="radio" name={i} onChange={() => changerQualificationQuiz(i,a)} />
                    </div>
                );
            }else if(a === 1){
                Answer.push(
                    <div key={a} >
                        <label>B. </label>
                        <input type="text" onChange={(e) => chagerOptionsQuiz(e,i,a)} />
                        <input type="radio" name={i} onChange={() => changerQualificationQuiz(i, a)} />
                    </div>
                );
            }else if(a === 2){
                Answer.push(
                    <div key={a} >
                        <label>C. </label>
                        <input type="text" onChange={(e)=> chagerOptionsQuiz(e,i,a)}/>
                        <input type="radio" name={i} onChange={() => changerQualificationQuiz(i, a)} />
                    </div>
                );                
            }else if(a === 3){
                Answer.push(
                    <div key={a} >
                        <label>D. </label>
                        <input type="text" onChange={(e)=> chagerOptionsQuiz(e, i, a)} />
                        <input type="radio" name={i} onChange={() => changerQualificationQuiz(i,a)} />
                    </div>
                );
            }
        }
        return Answer;
    }

    const [Quizadd, setQuizadd] = useState({
        title: '',
        questions:[
            {
                question: 'a',
                options: [
                    {
                        option: '',
                        qualification: 0
                    }
                ]
            }
        ]
    });

    function changerTitleQuiz({target:{name, value}}){
        setQuizadd({...Quizadd, [name]: value});
    }

    function changerQuestioQuiz({target:{name, value}}, i){
        let newdata = {...Quizadd};
        if(!newdata.questions[i]){
            newdata.questions[i] =  {
                question: '',
                options: [
                    {
                        option: '',
                        qualification: 0
                    }
                ]
            }
        }
        newdata.questions[i][name] = value;
        setQuizadd(newdata);
    }

    function chagerOptionsQuiz({target:{value}}, indexQuestions, indexOptions){
        let newdata = {...Quizadd};
        if(!newdata.questions[indexQuestions].options[indexOptions]){
            newdata.questions[indexQuestions].options[indexOptions] = {
                option: '',
                qualification: 0
            }
        }
        newdata.questions[indexQuestions].options[indexOptions].option = value;
        setQuizadd(newdata);
        console.log(Quizadd)
    }

    function changerQualificationQuiz(indexQuestions, indexOptions){
        let newdata = {...Quizadd};
        for(let a = 0 ; a < newdata.questions[indexQuestions].options.length; a++){
            newdata.questions[indexQuestions].options[a].qualification = 0;
        }
        newdata.questions[indexQuestions].options[indexOptions].qualification = 1;
    }

    return(
        <QuizContext.Provider value={{DataProfile, Quizzes, FilterQuizzes, FetchQuiz, Quiz, NumQuestion, setNumQuestion, AddQuestion, changerTitleQuiz}} >
            {children}
        </QuizContext.Provider>
    );
}
