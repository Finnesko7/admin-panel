import authMiddleware from "../../lib/middleware/auth-middleware";

export default async (req, res, next) => {

  res.statusCode = 200
  res.json({ name: 'John Doe s' })
}
