import React from "react";
import "../assets/Login.css"
import {Link, useNavigate} from "react-router-dom";
import {useAuthContext} from "../Context/auth.jsx";

function Login() {
    const navigate = useNavigate();

    const {ChangerLogin, HandleLogin, VerficPass, VerficEmail, VerficUser} = useAuthContext();

    if(VerficUser){
        navigate('/home');
    }

    return(
        <div className="Div-LoginRegister">
            <form onSubmit={HandleLogin} style={{height: '310px'}} >
                <h2>Login</h2>
                <div className="InputLabel">
                    <label>Email</label>
                    <input type="text" 
                    required
                    name="email"
                    onChange={(e) => ChangerLogin(e)}
                    />

                </div>
                <div className="InputLabel">
                    <label>Contraseña</label>
                    <input type="password" 
                    required 
                    name="password"
                    onChange={(e) => ChangerLogin(e)}
                    />
                </div>
                <div className="Div-Form-Men" >
                    <p>¿No tienes cuenta?</p> <Link to={'/register'}>Registrarse</Link>
                </div>
                <div className="Div-Botom-loginRegister" >
                    <button type="submit">Entrar</button>
                </div>
                {
                    VerficPass ? <p style={{color: 'red'}} >Contraseña incorrecta</p> : null
                }
                {
                    VerficEmail ? <p style={{color: 'red'}} >No se encontro ningun usuario con ese email</p> : null
                }
            </form>
        </div>
    );   
}

export default Login;