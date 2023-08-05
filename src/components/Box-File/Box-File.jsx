import React from "react";
import './Box-File.css';
import ImgQuiz from '../../assets/img-Quiz.jpg';

function BoxFile(){
    return(
        <div className="box-file" style={{backgroundImage: `url(${ImgQuiz})`}}>
            <h2 style={{marginLeft: 5+'px'}} >#1</h2>
            <div className="Title-Box">
                <h3>Quiz</h3>
            </div>
        </div>
    );
}

export default BoxFile;
