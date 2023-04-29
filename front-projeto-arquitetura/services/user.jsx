import jwt from "jsonwebtoken"

const SECRET = process.env.JWT_SECRET;

const readToken = (token) => {
    try{
        return jwt.verify(token, SECRET);
    }catch(err){
        throw new Error ("Token inválido")
    }
}

export const verifyToken = (token) => {
    return readToken(token)
}