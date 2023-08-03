import jws from 'jsonwebtoken';
import { TOKEN } from '../config.js';

function CreateToken(payloand){
    return new Promise((resolve, reject)=>{
        jws.sign(payloand, TOKEN,{ expiresIn: "1d" }, (err, token)=> {
            if(err) reject(err); 
            resolve(token); 
        });
    });
}

export default CreateToken