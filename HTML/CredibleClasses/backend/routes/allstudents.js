const express = require('express');
const { mongoose, Student } = require('../db/mongodb.js');
const router = express.Router();

let allStudents;
async function getAllStudents() {
    try {
        allStudents = await Student.find();
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  }
  getAllStudents()

router.get("/", (req, res) => {
    res.json(allStudents);
});

module.exports=router;