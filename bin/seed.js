require("dotenv").config(); // import all key/value pairs from .env in process.env : really usefull when going online :)
require("./../config/mongodb");

const userModel = require("./../models/User")
const exerciseModel = require("./../models/Exercise")
const tagModel = require("./../models/Tag")

async function seedIt() {

    try {
        const user = {
            username: "lili",
            email: "lili@unit.com",
            password: "123456"
        };

        const userSeed = await userModel.create(user)


        const exercise = {
            user: userSeed._id,
            title: "Leg",
            unit1Type: "kg",
            unit2Type: "rep",
            data: [{
                unit1Data: 10,
                unit2Data: 20,
                date: Date.now(),
                mood: "ok"
            },
            {
                unit1Data: 15,
                unit2Data: 20,
                date: Date.now(),
                mood: "good"
            }
            ]
        }

        const exerciseSeed = await exerciseModel.create(exercise)

        const tag = {
            name: "Monday",
            author: userSeed._id
        }

        const tagSeed = await tagModel.create(tag)
    }

    catch (err) {
        console.error(err)
    }
}


seedIt();