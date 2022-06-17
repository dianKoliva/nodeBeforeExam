var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { age: Number, required: true },
})

const user = mongoose.module("user", userSchema);
module.exports = User;