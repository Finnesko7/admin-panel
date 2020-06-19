import jwt from 'jsonwebtoken';
const jwtSecret = "mysuperdupersecret";

const token = jwt.sign({ "username": "Mike" }, jwtSecret, { expiresIn: 60 }) // 1 min token

export default (req, res) => {

    const t = req.headers.authorization;
    console.log("authorization:", t);

    let success = false;
    let data = JSON.parse(req.body);
    if (data.login === "admin" && data.password === "admin") {
        success = true;
    }

    res.json({'token' : success ? token : false})
}


export const config = {
    api: {
        bodyParser: true,
    },
}
