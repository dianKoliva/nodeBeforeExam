const express = require("express");
const Student = require("../models/Student");
const router = express.Router();
const checker = require("../checker")



/**
 * @swagger
 * /stud/get-all:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users.
 *     tags:
 *       - student
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
 *     tags:
 *       - student
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
            if (Object.keys(returned).length == 0) {
                res.status(404).json({ message: "user not found" })
            } else {
                res.json({
                    data: result
                })
            }



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
 *     tags:
 *       - student
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

/**
 * @swagger
 * /stud/update/{id}:
 *   put:
 *     summary: update student.
 *     tags:
 *       - student
 *     parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *               type: string
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
 *       400:
 *         description: 
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
router.put("/update/:id", (req, res) => {
    var id = req.params.id;
    Student.find({ _id: id }).then(result => {
        if (Object.keys(result).length != 0) {
            let updateOps = {};
            const body = req.body;

            for (const ops in body) {
                updateOps[ops] = body[ops];
            }


            Student.updateOne({ _id: id }, { $set: updateOps }).then((result => {
                    res.status(201).json({ "message": "updated" });
                }))
                .catch((err) => {
                    res.status(400).json({ "message": result });
                })

        } else {
            res.status(400).json({ error: "user not found", message: "user not updated" });
        }

    })
})



/**
 * @swagger
 * /stud/delete/{id}:
 *   delete:
 *     summary: delete a  student by id.
 *     tags:
 *       - student
 *     parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *               type: string
 *     responses:
 *       201:
 *         description: Created
 *       400: 
 *         description: Bad request
 *       
 */
router.delete("/delete/:id", (req, res) => {

    Student.findById(req.params.id)
        .then(result => {
            if (Object.keys(result).length != 0) {

                Student.deleteOne({ _id: req.params.id })
                    .then(() => {
                        res.status(200).json({ result: "deleted" })
                    })
                    .catch((err) => {
                        res.status(500).json({ err: err })
                    })

            } else {
                res.status(404).json({ "message": " student not found" })
            }

        })

})

module.exports = router;