    const jwt = require("jsonwebtoken");
    module.exports = (req, res, next) => {

        let hold = req.headers.authorization;
        const myArray = hold.split(" ");
        const token = myArray[1];


        try {
            const decoded = jwt.verify(token, "trial");
            req.userData = decoded;
            next();


        } catch (err) {
            return res.status(401).json({
                message: "auth failed",
                error: err
            })
        }

    }