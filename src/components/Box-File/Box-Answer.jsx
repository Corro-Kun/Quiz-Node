import React from "react";
import ImgQuiz from '../../assets/Calificacion.png';

function BoxAnswer({title, qualification}){
    return(
        <div className="box-file" style={{backgroundImage: `url(${ImgQuiz})`}} >
            { qualification < 50 ? <h2 style={{marginLeft: '5px', color: 'red'}} >{qualification}</h2> : <h2 style={{marginLeft: '5px', color: 'green'}} >{qualification}</h2> }
            <div className="Title-Box">
                <h3>{title}</h3>
            </div>
        </div>
    );
}

export default BoxAnswer;