import React,{useEffect, useState} from "react";
import './BarLeft-Style.css';
import { Link } from "react-router-dom";
import {profile} from "../../api/auth.js";

function BarLeft() {

    const [DataProfile, setDataProfile] = useState({name: '', email: ''});

    useEffect(() => {
        const FetchProfile = async () =>{
            const {data} = await profile();
            setDataProfile(data[0]);
        }
        FetchProfile();
    }, []);

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
                <h3>{DataProfile.name}</h3>
                <p>{DataProfile.email}</p>
            </div>
        </div>
    );
}

export default BarLeft;
