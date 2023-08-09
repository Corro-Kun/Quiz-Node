import React,{createContext, useContext, useEffect, useState} from "react";
import {login} from "../api/auth.js";

export const AuthContext = createContext();

export function useAuthContext() {
    return useContext(AuthContext);
}

export function UseAuth({children}) {
    const [DataRegister, setDataRegister] = useState({});
    const [DataLogin, setDataLogin] = useState({
        email: '',
        password: ''
    });
    const [VerficPass, setVerficPass] = useState(false);
    const [VerficEmail, setVerficEmail] = useState(false);
    const [VerficUser, setVerficUser] = useState(false);

    const ChangerLogin = ({target:{name, value}}) =>{
        setDataLogin({...DataLogin, [name]: value});
        setVerficEmail(false);
        setVerficPass(false);
    }

    const HandleLogin = async (e) =>{
        e.preventDefault();
        try {
            await login(DataLogin);
            setVerficUser(true);
        } catch (error) {
            const {message} = error.response.data;
            if(message === 'Contraseña incorrecta'){
                setVerficPass(true);
            }else if(message === 'No se encontro ningun usuario'){
                setVerficEmail(true);
            }
        }
    }

    return(
        <AuthContext.Provider value={{ChangerLogin, HandleLogin, VerficPass, VerficEmail, VerficUser}} >
            {children}
        </AuthContext.Provider>
    );
}