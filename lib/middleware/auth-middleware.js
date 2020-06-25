import jwt from 'jsonwebtoken';
import cookies from "next-cookies";
import redirectTo from "../redirect";

const authMiddleware = (req, res, ctx = {}) => {
    let token = "";

    if (ctx) {
        token = cookies(ctx)['admin-atlanta'];
    } else {
        token = req.headers.authentication
    }

    try {
        jwt.verify(token, process.env.jwtSecret);
    } catch (err) {

        if (ctx) {
            redirectTo('/', { res: ctx.res, status: 301 })
            return false
        }
        return res.status(401).json({ "msg": err.message })// for api
    }
}

export default authMiddleware;