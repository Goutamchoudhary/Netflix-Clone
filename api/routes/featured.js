const Featured = require('../models/Featured');
const router = require('express').Router();
const verify = require('../verifyToken');

// CREATE FEATURED
router.post('/', verify, async(req, res) => {
    if(req.user.isAdmin){
        const newFeatured = new Featured(req.body);

        try{
            const savedFeatured = await newFeatured.save();
            res.status(200).json(savedFeatured);
        }catch(err){
            res.status(500).json(err);
        }
    }
    else{
        res.status(403).json("You are not allowed!");
    }
});


// GET FEATURED MOVIE

router.get('/', verify, async(req, res) => {
    const type = req.query.type;
    let featured;
    try{
        if(type === "movie"){
            featured = await Featured.aggregate([    // this will give us a random movie
                {$match: {isSeries: false}},          // from all series collection
                {$sample: {size: 1} },
            ]);
        }
        else{
            featured = await Featured.aggregate([    // this will give us a random series
                {$match: {isSeries: true}},         // from all movies collection
                {$sample: {size: 1} },
            ]);
        }

        //console.log(featured);
        return res.status(200).json(featured);

    }catch(err){
        res.status(500).json(err);
    }
    
});

module.exports = router;