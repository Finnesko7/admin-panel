import jwt from 'jsonwebtoken';

const initMiddleware = (middleware) => {
    return (req, res) =>
        new Promise((resolve, reject) => {
            middleware(req, res, (result) => {

                if (!result) {
                    console.log("result:", result)
                    return reject("Error auth")
                }
                return resolve(result)
            })
        })
}

const authMiddleware = initMiddleware((req, res, result) => {
    console.log("req", req.url);
})

export default authMiddleware;