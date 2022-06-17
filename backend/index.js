const express = require("express")
const app = express();
const port = 400;


//requires
require("./db/db")

app.listen(() => {

    console.log(`App running on port ${port}`);
})