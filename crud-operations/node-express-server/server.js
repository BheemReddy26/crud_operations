const config = require('config')
const express = require("express");
const cors = require("cors");

const router = require("./studentInfo/studentsRouter");
const router2 = require("./usersInfo/userRouter");
const router3 = require('./auth/authRouter')

const app = express();


if(!config.get('jwtPrivateKey')) {
    console.error("FATAL ERROR: jwtPrivateKey is not defined")
    process.exit(1);
}

var corOptions = {
  origin: "https://localhost:8081",
};

// middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Router from routes
app.use("/api/students", router);
app.use("/api/users", router2);
app.use('/api/auth', router3)

app.get("/", (req, res) => {
  res.send("hello");
});

var port = process.env.PORT || 8081;
console.log(port);

app.listen(port, () => {
  console.log(`Listening on the port  ${port}`);
});
