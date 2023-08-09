import React from "react";
import './Box-File.css';
import ImgQuiz from '../../assets/img-Quiz.jpg';

function BoxFile({title, id, number}){
    return(
        <div className="box-file" style={{backgroundImage: `url(${ImgQuiz})`}}>
            <h2 style={{marginLeft: 5+'px'}} >#{number}</h2>
            <div className="Title-Box">
                <h3>{title}</h3>
            </div>
        </div>
    );
}

export default BoxFile;
