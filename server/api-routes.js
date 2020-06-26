
const {Router} = require('express')
const router = Router()
const jwt = require('jsonwebtoken');

router.post('/api/login', (req, res) => {
    let success = false;
    let data = req.body;
    console.log('req.body >>>>>>>>>>>>>>> ', data)
    let token = jwt.sign( { "username": `${data.login}` }, process.env.jwtSecret, { expiresIn: 60 })

    if (data.login === "admin" && data.password === "admin") {
        success = true;
    }

    res.json({'token' : success ? token : false})
})

module.exports = router