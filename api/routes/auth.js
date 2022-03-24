const router = require('express').Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js")

// Register
router.post('/register', async(req, res) => {
    try{
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(
                        req.body.password, 
                        process.env.SECRET_KEY)
                        .toString()
        });
        
        const user = await newUser.save();
        res.status(201).json(user);
    }
    catch(err){
        console.log(err);
    }
})


// Login

router.post("/login", async(req, res) => {

})

module.exports = router;