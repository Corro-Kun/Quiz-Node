import ID from "../lib/generate_id.js";
import sql from "../database/sql.js";
import crypto from "bcryptjs";
import To from "../lib/swj.js";

export const register = async (req, res) =>{
    try {
        const {name, email, password} = req.body;
        const id = ID(30);

        const found = await sql.query("SELECT * FROM user WHERE email = ?",[email])
        const result1 = found[0];

        if(result1[0]) return res.status(500).json({message: 'Este usuario ya existe'});

        const passwordHash = await crypto.hash(password, 10);

        const data = await sql.query("INSERT INTO user (id, name, email, password) VALUES(?, ?, ?, ?)",[id, name, email, passwordHash]);

        const cookie = await To({id: id});

        res.cookie("token", cookie,{SameSite: 'none'});

        res.status(200).json({message: 'El usuario a asi creado con exito'});

    } catch (error) {
        res.status(500).json({message: 'Ocurrio un error'});
    }
}
export const login = async (req, res) =>{
    try {
        const {email, password } = req.body;

        const found = await sql.query("SELECT * FROM user WHERE email = ?",[email]);
        const result1 = found[0];

        if(!result1) return res.json({message: 'No se encontro ningun usuario'});

        const passwordValue = result1[0].password;
        const resultAcces = await crypto.compare(password, passwordValue);

        if(!resultAcces) return res.status(500).json({message: 'Contraseña incorrecta'});

        const cookie = await To({id: result1[0].id});

        res.cookie("token", cookie, {SameSite: 'none'});

        res.status(200).json({message: 'bienvenido '+ result1[0].name});
    } catch (error) {
        res.status(500).json({message: 'Ocurrio un error'});    
    }

}
export const logout = (req, res) =>{
    res.cookie("token", "",{expires: new Date(0)});
    return res.sendStatus(200);
}
export const profile = async (req, res) =>{
    try {
        const id = req.user.id;
        const result = await sql.query("SELECT * FROM user WHERE id = ?",[id]);

        const {name, email} = result[0][0];

        res.status(200).json([{name, email}]);
    } catch (error) {
        res.status(500).json({message: 'Ocurrio un error'});    
    }
}