import Cors from 'cors';
import initMiddleware from "./init-middleware";

const corsMiddleware = initMiddleware(
    Cors({
        // Only allow requests with GET, POST and OPTIONS
        methods: ['GET', 'POST', 'OPTIONS'],
    })
)

export default corsMiddleware;