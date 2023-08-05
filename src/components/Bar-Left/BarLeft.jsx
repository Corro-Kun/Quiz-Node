import React from "react";
import './BarLeft-Style.css';
import { Link } from "react-router-dom";

function BarLeft() {
    return(
        <div className="Bar-Home" >
            <div className="Render-Bar-Home">
                <div className="logo">
                    <h2>Quiz-Kun</h2>
                </div>
                <div className="List-Bar" >
                    <ul><Link>Quiz</Link></ul>
                    <ul><Link>My Quiz</Link></ul>
                    <ul><Link>Qualified Quiz</Link></ul>
                </div>
            </div>
            <div className="Bar-Home-Botom">
                <h3>Nombre de usuario</h3>
            </div>
        </div>
    );
}

export default BarLeft;
