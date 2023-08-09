import React from "react";
import "../assets/Login.css"
import {Link, useNavigate} from "react-router-dom";
import {useAuthContext} from "../Context/auth.jsx";

function Register() {
    const Navegate = useNavigate();

    const {ChangerRegister, HandleRegister, VerficEmail, VerficUser} = useAuthContext();

    if(VerficUser){
        Navegate('/home');
    }

    return(
        <div className="Div-LoginRegister">
            <form onSubmit={HandleRegister} style={{height: '380px'}} >
                <h2>Register</h2>
                <div className="InputLabel">
                    <label>Nombre</label>
                    <input type="text" 
                    required 
                    name="name"
                    onChange={(e) => ChangerRegister(e)}
                    />
                </div>
                <div className="InputLabel">
                    <label>Email</label>
                    <input type="text" 
                    required 
                    name="email"
                    onChange={(e) => ChangerRegister(e)}
                    />
                </div>
                <div className="InputLabel">
                    <label>Contraseña</label>
                    <input type="password" 
                    required 
                    name="password"
                    onChange={(e) => ChangerRegister(e)}
                    />
                </div>
                <div className="Div-Form-Men" >
                    <p>¿Ya tienes una cuenta?</p> <Link to={'/'}>Entrar</Link>
                </div>
                <div className="Div-Botom-loginRegister" >
                    <button type="submit">Login</button>
                </div>
                {
                    VerficEmail ? <p style={{color: 'red'}} >Este usuario ya existe</p> : null
                }
            </form>
        </div>
    );
}

export default Register;