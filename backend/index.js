const express = require('express');
const app = express();
const port = 4355;
const student = require("./cotrollers/StudentCont");
const bodyParser = require("body-parser");
const user = require("./cotrollers/UserController");
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require("swagger-ui-express");
// requires
require("./db/db")

//use
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/stud", student);
app.use("/user", user);




const options = {
    swaggerDefinition: {
        openapi: '3.0.1',
        info: {
            title: "Student apis",
            version: "1.0.0",

        },
        servers: [{
            url: "http://localhost:4355",

        }],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    schema: "bearer",
                    bearerFormat: "JWT"
                }
            }
        },
        security: [
            { bearerAuth: [] }
        ],
    },

    apis: ["./controllers/*.js"]
}
const swaggerSpecs = swaggerJSDoc(options)

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
app.listen(port, () => {
    console.log(`running on port ${port}`);
})