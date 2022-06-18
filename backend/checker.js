    const jwt = require("jsonwebtoken");
    module.exports = (req, res, next) => {

        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicmVxLmJvZHkubmFtZSIsImVtYWlsIjoickBnbWFpbC5jb20iLCJpYXQiOjE2NTU1NzczODYsImV4cCI6MTY1NTU5ODk4Nn0._mvufSuLmXgYSc5zycvw3sPH5eukALXbMS3SQlhzHEw"
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