const router = require('express').Router();
const commonList = require('../models/commonList');
const verify = require('../verifyToken');


// CREATE
router.post('/', verify, async(req, res) => {
    if(req.user.isAdmin){
        const newList = new commonList(req.body);

        try{
            const savedList = await newList.save();
            return res.status(200).json(savedList);
        }catch(err){
            return res.status(500).json(err);
        }
    }
    else{
        return res.status(403).json("You are not allowed!");
    }
});


// DELETE

router.delete('/', verify, async(req, res) => {
    if(req.user.isAdmin){
        try{
            await commonList.findByIdAndDelete(req.params.dictionary);
            return res.status(200).json("The list has been deleted...");
        }catch(err){
            return res.status(500).json(err);
        }
    }
    else{
        return res.status(403).json("You are not allowed!");
    }
});


// GET

router.get('/', verify, async(req, res) => {
    let list = [];

    try{
        list = await commonList.find();

        return res.status(200).json(list);

    }catch(err){
        return res.status(500).json(err);
    }
})


module.exports = router;