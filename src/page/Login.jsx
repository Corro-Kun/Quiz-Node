import React from "react";
import "../assets/Login.css"

function Login() {
    return(
        <div className="Div-LoginRegister">
            <form action="#">
                <h2>Login</h2>
                <div className="InputLabel">
                    <label>Email</label>
                    <input type="text" required />
                </div>
                <div className="InputLabel">
                    <label>Contraseña</label>
                    <input type="password" required />
                </div>
                <div className="Div-Form-Men" >
                    <p>¿No tienes cuenta?</p> <a href="#">Registrarse</a>
                </div>
                <div className="Div-Botom-loginRegister" >
                    <button type="submit">Entrar</button>
                </div>
            </form>
        </div>
    );   
}

export default Login;