const express = require('express');
const app = express();
const port = 4355;
const student = require("./cotrollers/StudentCont");
const bodyParser = require("body-parser");
const user = require("./cotrollers/UserController");
const cors = require('cors')
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
// requires
require("./db/db")


//swagger setup
const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        tittle: "My apis",
        version: "1.0.0"
    }
};

const options = {
    swaggerDefinition,
    apis: ['./cotrollers/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);






//use
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/stud", student);
app.use("/user", user);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));




app.listen(port, () => {
    console.log(`running on port ${port}`);
})