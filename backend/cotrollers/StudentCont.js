const express = require("express");
const Student = require("../models/Student");
const router = express.Router();

router.get("/", (req, res) => {

    Student.find().then((result) => {
        result.json({
            data: result
        })

    }).catch((err) => {

        res.status(400).json({ error: err });


    })

})

router.post("/", (req, res) => {

    Student.find({ email: req.body.email })
        .then((result) => {

            if (Object.keys(result).length != 0) {
                res.status(400).json({ error: "Email in use", message: "user not saved" });
            } else {
                let newStudent = new Student({
                    name: req.body.name,
                    email: req.body.email,
                    age: req.body.age
                })

                newStudent.save()
                    .then(result => {
                        res.status(200).json({ data: result, message: "user saved" });
                    })

                .catch(err => {
                    res.status(400).json({ error: err, message: "user not saved" });
                })
            }
        })
        .catch((error => {
            res.json({ error: error });
        }))


})

module.exports = router;