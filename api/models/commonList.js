const mongoose = require('mongoose');

const CommonListSchema = new mongoose.Schema(
{
    title: {type: String, required: true, unique: true},
    content: {type: Array}

}, {timestamps: true}
);

const CommonList = new mongoose.model("CommonList", CommonListSchema);

module.exports = CommonList;