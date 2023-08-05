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
                <div>
                    <p>¿No tienes cuenta? <a href="#">Registrarse</a></p>
                </div>
                <button type="submit">Entrar</button>
            </form>
        </div>
    );   
}

export default Login;