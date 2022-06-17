const mongoose = require("mongoose")

function dbConnection() {
    mongoose.connect("mongodb://localhost/test");
    mongoose.connection.once('open', function() {
        console.log("connected to db");
    }).on('error', (err) => {
        console.log(err);
    })
}
dbConnection();