const express = require('express');
const app = express();
const port = 4355;
const student = require("./cotrollers/StudentCont");
const bodyParser = require("body-parser");

// requires
require("./db/db")

//use
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/stud", student);

app.get("/", () => {
    console.log("hello")
})

app.listen(port, () => {
    console.log(`running on port ${port}`);
})