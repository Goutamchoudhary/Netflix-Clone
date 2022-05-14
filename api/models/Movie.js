const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema(
{
    title: {type: String, required: true, unique: true},
    desc: {type: String},
    img: {type: String},
    trailer: {type: String},
    video: {type: String},
    duration: {type: String},
    year: {type: String},
    limit: {type: Number},
    genre: {type: String},
    isSeries: {type: Boolean, default: false}

}, {timestamps: true}
);

const Movie = new mongoose.model("Movie", MovieSchema);

module.exports = Movie;