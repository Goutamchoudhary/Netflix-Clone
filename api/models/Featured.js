const mongoose = require('mongoose');

// genre: {type: String},

const FeaturedSchema = new mongoose.Schema(
{
    title: {type: String, required: true, unique: true},
    desc: {type: String},
    img: {type: String},
    isSeries: {type: Boolean, default: false}

}, {timestamps: true}
);

const Featured = new mongoose.model("Featured", FeaturedSchema);

module.exports = Featured;