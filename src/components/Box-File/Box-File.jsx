import React from "react";
import {useNavigate} from "react-router-dom";
import './Box-File.css';
import ImgQuiz from '../../assets/img-Quiz.jpg';

function BoxFile({title, id, number}){
    const navigate = useNavigate();
    return(
        <div className="box-file" style={{backgroundImage: `url(${ImgQuiz})`}} onClick={() => navigate('/quiz/'+id)} >
            <h2 style={{marginLeft: 5+'px'}} >#{number}</h2>
            <div className="Title-Box">
                <h3>{title}</h3>
            </div>
        </div>
    );
}

export default BoxFile;
