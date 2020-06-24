import jwt from 'jsonwebtoken';

const authMiddleware = (req, res) => {
    const token = req.headers.authentication
    try {
        var decoded = jwt.verify(token, process.env.jwtSecret);
        console.log("decoded", decoded)
    } catch (err) {
        return res.status(401).json({ "msg": err.message })
    }
}

export default authMiddleware;