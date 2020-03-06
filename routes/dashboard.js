const express = require("express");
const router = new express.Router();
var ObjectId = require('mongodb').ObjectID; 

const exerciseModel = require("../models/Exercise")
// const userModel = require("../models/User")


router.get("/", (req, res) => {
    console.log(req)
    exerciseModel
    .find({"user": ObjectId(req.user._id)})
    .populate("user")
    .then(userExercise => {
        res.status(200).json(userExercise)
    })
    .catch(err=>console.log(err))
})


router.get("/:id", (req,res) => {
    exerciseModel
    .findById(req.params.id)
    .then(exoDetail => {
        res.status(200).json(exoDetail)
    })
    .catch(err => console.log(err))
})






module.exports = router;