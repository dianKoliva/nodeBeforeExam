    const jwt = require("jsonwebtoken");
    module.exports = (req, res, next) => {

        const token = req.headers.authorization;
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