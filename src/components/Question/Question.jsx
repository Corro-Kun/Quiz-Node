import React from "react";
import "./Question.css";

function Question({number,title, options}){
    return(
        <div className="Render-Question" >
            <div>
                <h3>{number}. {title}</h3>
            </div>
            <div>
                {
                    options?.map((options, i)=>(
                        <div className="render-options-quiz" key={i} >
                            <input type="radio" name={title} id={i} value={options.answer} required/>
                            <label htmlFor={options.option}>{options.option}. {options.answer}</label>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Question;