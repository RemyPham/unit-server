require("dotenv").config();
require("./config/mongodb");
require("./config/passport");

const express = require("express");
const session = require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const _DEVMODE = true
// const passport = require("passport");

// ------------------------------------------
// SERVER CONFIG
// ------------------------------------------
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
    session({
      cookie: { secure: false, maxAge: 4 * 60 * 60 * 1000 }, // 4 hours
      resave: true,
      saveUninitialized: true,
      secret: process.env.SECRET_SESSION
    })
);

const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));


app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, "public")));

if (_DEVMODE === true) {
  app.use(function devMode(req, res, next) {
    req.user = {
      _id: "5e57e03e4e80cd07242d18fb",
      username: "Remy",
      email: "remy@unit.com"
    }

    next();
  });
}
//------------------------------------------
// BASE BACKEND ROUTE
// ------------------------------------------

// app.get("/", (req, res) => {
//     res.send("backend server is running");
// });


//------------------------------------------
// SPLITED ROUTING
// ------------------------------------------

const authRouter = require("./routes/auth")
const dashRouter = require("./routes/dashboard")
const exoRouter = require("./routes/exercise")
const dataRouter = require("./routes/data")

app.use("/",authRouter)
app.use("/dashboard",dashRouter)
app.use("/exercise", exoRouter)
app.use("/data", dataRouter)




module.exports = app;