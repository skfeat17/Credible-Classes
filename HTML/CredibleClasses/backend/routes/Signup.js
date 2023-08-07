const express = require('express');
const bodyParser = require('body-parser');
const { mongoose, Student } = require('../db/mongodb.js');
const router = express.Router();

router.use(bodyParser.json());

// Route to add a new student
router.post("/:name/:roll/:password/:studentClass", async (req, res) => {
  try {
    const { name, roll, password, studentClass } = req.params;

    const newStudent = new Student({
      name: name,
      roll: roll,
      studentClass: studentClass,
      password: password,
    });

    await newStudent.save();

    res.status(200).json({ message: "Student added successfully", data: newStudent });
  } catch (error) {
    console.error("Error adding student:", error);
    res.status(500).json({ message: "Failed to add student" });
  }
});

module.exports = router;
