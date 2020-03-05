const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        // validate: {
        //     validator: function(v) {
        //         return /("^(?=.{3,})")/.test(v)
        //     },
        //     message: 'Username must be 3 characters or longer'
        // }
    },
    email: {
        type: String,
        unique: true,
        required: true,
        // validate: {
        //     validator: function(v) {
        //         return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)
        //     },
        //     message: 'Invalid email address!'
        // }
    },
    password: {
        type: String,
        required: true,
        // validate: {
        //     validator: function(v) {
        //         return /("^(?=.{6,})")/.test(v)
        //     },
        //     message: 'Password must be 6 characters or longer'
        // }
    },
})


const userModel = mongoose.model("User", userSchema);

module.exports = userModel;