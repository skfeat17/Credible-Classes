const { mongoose, Student } = require('../db/mongodb.js');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());

// Endpoint to fetch ATS result
router.post("/ats/:roll/:examdate", async (req, res) => {
  try {
    const { roll, examdate } = req.params;
    const examType = "ATS";

    const student = await Student.findOne({
      roll: roll,
      "results.Exam_Type": examType,
      "results.Exam_Date": examdate,
    });

    if (!student) {
      return res.status(404).json({ message: "Student not found or Result not found for the provided exam date and type" });
    }

    // Find the matching result object
    const matchingResult = student.results.find(result => result.Exam_Type === examType && result.Exam_Date === examdate);

    if (!matchingResult) {
      return res.status(404).json({ message: "Result not found for the provided exam date and type" });
    }

    // Sending the matching result in the response
    res.status(200).json(matchingResult);
  } catch (error) {
    // Handling errors if any occurred during the process
    console.error("Error fetching result:", error);
    res.status(500).json({ message: "Failed to get result" });
  }
});

// Endpoint to fetch CTS result
router.post("/cts/:roll/:examdate", async (req, res) => {
  try {
    const { roll, examdate } = req.params;
    const examType = "CTS";

    const student = await Student.findOne({
      roll: roll,
      "results.Exam_Type": examType,
      "results.Exam_Date": examdate,
    });

    if (!student) {
      return res.status(404).json({ message: "Student not found or Result not found for the provided exam date and type" });
    }

    // Find the matching result object
    const matchingResult = student.results.find(result => result.Exam_Type === examType && result.Exam_Date === examdate);

    if (!matchingResult) {
      return res.status(404).json({ message: "Result not found for the provided exam date and type" });
    }

    // Sending the matching result in the response
    res.status(200).json(matchingResult);
  } catch (error) {
    // Handling errors if any occurred during the process
    console.error("Error fetching result:", error);
    res.status(500).json({ message: "Failed to get result" });
  }
});

module.exports = router;
