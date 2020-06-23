import jwt from 'jsonwebtoken';

export default (req, res) => {
    console.log('req.header.Authentication', req.headers.authentication)

    let success = false;
    let data = JSON.parse(req.body);
    let token = jwt.sign( { "username": `${data.login}` }, process.env.jwtSecret, { expiresIn: 60 })

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
