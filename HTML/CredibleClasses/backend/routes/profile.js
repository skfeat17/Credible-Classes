const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const { mongoose, Student } = require('../db/mongodb.js');
const router = express.Router();

router.use(bodyParser.json());

// Middleware to verify JWT token from the headers
function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }

  jwt.verify(token, 'credibleclasses', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    req.userId = decoded.roll; // Store the roll in the request object
    next();
  });
}

// Endpoint to get student details using the token
router.get("/", verifyToken, async (req, res) => {
  try {
    // Find the student based on the roll extracted from the token
    const student = await Student.findOne({ roll: req.userId });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Sending the student details in the response
    res.status(200).json({ message: "Student details", data: student });
  } catch (error) {
    // Handling errors if any occurred during the process
    console.error("Error fetching student details:", error);
    res.status(500).json({ message: "Failed to get student details" });
  }
});

module.exports = router;
