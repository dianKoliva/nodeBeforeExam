var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var studentSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { age: Number, required: true },
})

const Student = mongoose.module("student", studentSchema);
module.exports = Student;