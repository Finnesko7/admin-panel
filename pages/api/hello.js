import Cors from 'cors'
import corsMiddleware from "../../lib/middleware/cors-middleware";
import authMiddleware from "../../lib/middleware/auth-middleware";

export default async (req, res, next) => {
  authMiddleware(req, res, next)

  res.statusCode = 200
  res.json({ name: 'John Doe s' })
}
