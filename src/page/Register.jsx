import React from "react";
import "../assets/Login.css"
import {Link} from "react-router-dom";

function Register() {
    return(
        <div className="Div-LoginRegister">
            <form action="#" style={{height: '380px'}} >
                <h2>Register</h2>
                <div className="InputLabel">
                    <label>Nombre</label>
                    <input type="text" required />
                </div>
                <div className="InputLabel">
                    <label>Email</label>
                    <input type="text" required />
                </div>
                <div className="InputLabel">
                    <label>Contraseña</label>
                    <input type="password" required />
                </div>
                <div className="Div-Form-Men" >
                    <p>¿Ya tienes una cuenta?</p> <Link to={'/'}>Entrar</Link>
                </div>
                <div className="Div-Botom-loginRegister" >
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

export default Register;