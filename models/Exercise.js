const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        required: true
    },
    unit1Type: {
        type: String,
        enum: ["kg", "cal"],
        required: true
    },
    unit2Type: {
        type: String,
        enum: ["rep", "min"],
        required: true
    },
    tags: [{
        type: Schema.Types.ObjectId,
        ref: "Tag"
    }],
    data: [{
        unit1Data: {
            type: Number,
            required: true,
        },
        unit2Data: {
            type: Number,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now()
        },
        mood: {
            type: String,
            enum: ["bad", "ok", "good", "easy"],
            required: true,
        }
    }]
})

const exerciseModel = mongoose.model("Exercise", exerciseSchema);

module.exports = exerciseModel;