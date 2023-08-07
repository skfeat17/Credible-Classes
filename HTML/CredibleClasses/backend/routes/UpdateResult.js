const { mongoose, Student } = require('../db/mongodb.js');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());

// Endpoint to add a new result for a student
router.post("/:roll/:examtype/:examdate/:fullmarks/:marks", async (req, res) => {
  try {
    const roll = req.params.roll;
    const examtype = req.params.examtype;
    const examdate = req.params.examdate;
    const fullmarks = req.params.fullmarks;
    const marks = req.params.marks;
    const newResult = {
      Exam_Type: examtype,
      Exam_Date: examdate,
      Full_Marks: fullmarks,
      Obtained_Marks: marks,
    };
    
    // Find the student with the provided roll number
    const student = await Student.findOne({ roll: roll });
    
    // If no student is found, respond with an error message
    if (!student) {
      return res.status(404).json({ message: "Record not found. Student with the given roll number does not exist." });
    }
    
    // Add the new result to the student's results array
    await Student.updateOne({ roll: roll }, { $push: { results: newResult } });
    
    res.status(200).json({ message: "Result added successfully" });
  } catch (error) {
    console.error("Error adding result:", error);
    res.status(500).json({ message: "Failed to add result" });
  }
});

module.exports = router;
