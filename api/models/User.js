const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = new mongoose.Schema(
{
    username: {type: String, required: true, unique: [true, "Username is not available"]},
    email: {
        type: String, 
        required: true, 
        unique: [true, "Email ID is already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
        }
    },
    password: {type: String, required: true},
    profilePic: {type: String, default: ""},
    isAdmin: {type: Boolean, default: false},

}, {timestamps: true}
);

const User = new mongoose.model("User", UserSchema);

module.exports = User;