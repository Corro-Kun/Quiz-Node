import crypto from 'crypto';

const ID = (length) =>{
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charLength = chars.length;

    for(let i = 0; i < length; i++){
        const random = crypto.randomInt(0, charLength);
        result += chars.charAt(random);
    } 

    return result;
}

export default ID