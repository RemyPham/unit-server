const express = require("express");
const router = new express.Router();
var ObjectId = require('mongodb').ObjectID; 

const exerciseModel = require("../models/Exercise")
// const userModel = require("../models/User")

router.post("/", (req,res) => {
    exerciseModel
    .create(req.body)
    .then(createdExo => {
        res.status(200).json(createdExo)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get("/", (req,res) => {
    
    exerciseModel
    .find({"user": ObjectId(req.user._id)})
    .then(listOfExo => {
        res.status(200).json(listOfExo)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})










module.exports = router;