const express = require("express");
const router = new express.Router();
var ObjectId = require('mongodb').ObjectID; 

const exerciseModel = require("../models/Exercise")
// const userModel = require("../models/User")


router.get("/", (req, res) => {
    exerciseModel
    .find({"user": ObjectId(req.user._id)})
    .populate("user")
    .then(userExercise => {
        res.status(200).json(userExercise)
    })
    .catch(err=>console.log(err))
})







module.exports = router;