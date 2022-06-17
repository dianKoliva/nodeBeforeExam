const express = require("express")
const app = express();
const port = 400;
const student = require("./controllers/StudentControll")


//requires
// require("./db/db")

//using
app.use("/student", student)

app.get("/get", (req, res) => {
    console.log("hello");
})
app.listen(() => {

    console.log(`App running on port ${port}`);
})