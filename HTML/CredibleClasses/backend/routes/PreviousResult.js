const { mongoose, Student } = require('../db/mongodb.js');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());

// Endpoint to get results for a student by roll number
router.get("/:roll", async (req, res) => {
  try {
    const roll = req.params.roll;

    const student = await Student.findOne({ roll: roll });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    const results = student.results;
    res.status(200).json({ results: results });
  } catch (error) {
    console.error("Error fetching results:", error);
    res.status(500).json({ message: "Failed to get results" });
  }
});

module.exports = router;
