const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tagSchema = new Schema({
    name: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

const tagModel = mongoose.model("Tag", tagSchema);

module.exports = tagModel;