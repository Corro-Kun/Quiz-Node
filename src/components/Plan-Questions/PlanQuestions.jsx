import React from 'react';
import './PlanQuestion.css';
import { useQuizContext } from '../../Context/quiz';

function PlanQuestions() {
    const {NumQuestion, setNumQuestion, AddQuestion, changerTitleQuiz, postQuiz} = useQuizContext();
    return (
        <div className='Main-Add-Quiz'>
            <div className='Render-Add-Quiz'>
                <form onSubmit={(e) => postQuiz(e)}>
                    <div className='Scrol-Add-Quiz' >
                        <div className='Title-Add-Quiz-Div' >
                            <h2>Añade tus preguntas</h2>
                            <h3>Agrega un titulo a tu quiz</h3>
                            <input type="text" required name="title" onChange={(e)=> changerTitleQuiz(e)}  />
                            <p>Preguntas en total: {NumQuestion}</p>
                        </div>
                        {AddQuestion()}
                        <div className='AddQuestions-button'>
                            <button type='button' onClick={() => setNumQuestion(NumQuestion+1)} >Añadir pregunta</button>
                        </div>
                    </div>
                    <div className='ButtonSubmit-Form-Add' >
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PlanQuestions