const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const { mongoose, Student } = require('../db/mongodb.js');

const router = express.Router();

router.use(bodyParser.json());

// Route to handle login
router.post("/:roll/:password", async (req, res) => {
  try {
    const { roll, password } = req.params;
    const user = await Student.findOne({ roll, password });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    const token = jwt.sign({ roll: user.roll }, 'credibleclasses');
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Failed to login" });
  }
});

module.exports = router;
