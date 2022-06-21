const express = require("express");
const Student = require("../models/Student");
const router = express.Router();
const checker = require("../checker")



/**
 * @swagger
 * /stud/get-all:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Leanne Graham
 *                       email:
 *                         type:    string
 *                         description: The user's email.
 *                         example: leane@gmail.com
 */


router.get("/get-all", (req, res) => {
    Student.find().then((result) => {
        res.json({
            data: result
        })

    }).catch((err) => {
        console.log(err);
        res.status(400).json({ myerro: err });


    })

})


/**
 * @swagger
 * /stud/get/{id}:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *               type: string
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Leanne Graham
 *                       email:
 *                         type:    string
 *                         description: The user's email.
 *                         example: leane@gmail.com
 */
router.get("/get/:id", (req, res) => {
    const returned = Student.findById(req.params.id)
        .then((result) => {
            res.json({
                data: result
            })

        }).catch((err) => {
            console.log(err);
            res.status(400).json({ myerro: err });


        })

})




/**
 * @swagger
 * /stud/:
 *   post:
 *     summary: Create new student.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The user's name.
 *                 example: Leanne Graham
 *               email:
 *                  type: string
 *                  description: The user's email.
 *                  example: Leane@gmail.com
 *               age:
 *                  type: number
 *                  description: The user's age.
 *                  example: 12
 * 
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                    
 *                     name:
 *                       type: string
 *                       description: The user's name.
 *                       example: Leanne Graham
 *                     
 *                     email:
 *                       type: string
 *                       description: The user's email.
 *                       example: Leane@gmail.com
 * 
 *                     age:
 *                      type: number
 *                      description: The user's age.
 *                      example: 12
 */


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
                        res.status(201).json({ data: result, message: "user saved" });
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