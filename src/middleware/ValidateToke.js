import swj from "jsonwebtoken";
import {TOKEN} from "../config.js";

const AuthVerific = (req, res, next)=>{
    const {token}  = req.cookies;
    
    if(!token) return res.status(401).json({message: 'No token, authorization denied'});

    swj.verify(token,TOKEN, (err, user)=>{
        if(err) res.status(403).json({message: 'invalid token'});

        req.user = user;

        next();
    });
}

export default AuthVerific