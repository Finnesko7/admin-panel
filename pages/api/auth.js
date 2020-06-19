import authMiddleware from "../../lib/middleware/auth-middleware";

export default (req, res) => {

    authMiddleware(req, res);

    res.statusCode = 200
    res.json({ name: 'Auth' })
}
