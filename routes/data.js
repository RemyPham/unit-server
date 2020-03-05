const express = require("express");
const router = new express.Router();
var ObjectId = require('mongodb').ObjectID; 

const exerciseModel = require("../models/Exercise")

router.get("/:id", (req,res) => {
    
    exerciseModel
    .findById(req.params.id)
    .then(exo => {
        res.status(200).json(exo)
    })
    .catch(err => console.log(err))
})

router.patch("/:id", (req,res,next) => {
    const {unit1Data, unit2Data, mood, date} = req.body;
    const updatedExo = {unit1Data, unit2Data, mood, date}
    exerciseModel
    .findByIdAndUpdate(req.params.id, {$push: {data: updatedExo}}, {new: true})
    .then(dbRes => {
        res.status(200).json(dbRes)
    })
    .catch(next)
})





module.exports = router;