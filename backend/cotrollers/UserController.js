const { request } = require("express");
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs");

router.post("/register", (req, res) => {

    User.find({ email: req.body.email })
        .then(async(result) => {
            if (Object.keys(result).length != 0) {
                res.status(400).json({ error: "Email taken", message: "user wasn't registered" })
            } else {
                const salt = await bcrypt.genSalt(10);
                const password = await bcrypt.hash(req.body.password, salt);

                newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: password
                })

                newUser.save()
                    .then((result) => {
                        res.status(200).json({ data: result, message: "user created" });
                    })
                    .catch((err) => {
                        res.status(400).json({ error: err })
                    })
            }
        })
})

router.post("/login", (req, res) => {
    const pass = req.body.password;
    User.find({ email: req.body.email })
        .then(async(result) => {

            if (Object.keys(result).length === 0) {
                res.status(404).json({ error: "User not found" });
            } else {
                if (bcrypt.compare(pass, result[0].password)) {
                    const user = result[0];
                    const token = jwt.sign({ name: user.name, email: user.email },
                        "trial", { expiresIn: "6h" });

                    res.status(200).json({ token: token });
                } else {
                    res.status(400).json("invalid user");
                }
            }
        })
        .catch((err) => {
            res.status(400).json({ error: err });
        })
})




module.exports = router;