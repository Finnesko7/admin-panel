import Cors from 'cors'
import corsMiddleware from "../../lib/middleware/cors-middleware";

export default async (req, res) => {
  await corsMiddleware(req, res)

  res.statusCode = 200
  res.json({ name: 'John Doe s' })
}
