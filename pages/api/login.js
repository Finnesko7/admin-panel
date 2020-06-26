import jwt from 'jsonwebtoken';
import mongoConnect from '../../config/db';
import User from "../../models/user";
import bcrypt from 'bcrypt';

export const config = {
    api: {
        bodyParser: true,
    }
}


export default async (req, res) => {

    await mongoConnect()

    let token = null;
    const {login, password} = req.body;
    const [user] = await User.find({email: login});

    if (user.id) {
        token = await getToken(password, user)
    }

    res.json({'token': token})
}

const getToken = (password, user) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, user.password, function (err, result) {
            if (err) reject(err)

            if (result) {
                resolve(jwt.sign({"userId": `${user.id}`}, process.env.jwtSecret, {expiresIn: 60}));
            }
        });
    })
}
