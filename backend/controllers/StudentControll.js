const { Router } = require('express');
const express = require('express');
const route = express.Router();

route.get("/", (req, res) => {
    res.send("hey there");
})

module.exports = route;