const express = require("express");
const router = express.Router();
const { mongoose, Student } = require('../db/mongodb.js');

router.use(express.json());

// Function to add a note to a student with a specific rollNumber
async function addNoteToStudent(subject, rollNumber, note) {
  // Update the student with the matching rollNumber and push the new note
  await Student.updateOne({ roll: rollNumber }, { $push: { [`notes.${subject}`]: note } });

  // Fetch the student with the updated values after the update
  const updatedStudent = await Student.findOne({ roll: rollNumber });

  return updatedStudent;
}

// Route to add a note for a specific subject to a student
router.post("/:subject/:rollNumber", async (req, res) => {
  try {
    const subject = req.params.subject;
    const rollNumber = req.params.rollNumber;

    const newNote = {
      note_name: req.body.note_name,
      note_link: req.body.note_link,
    };

    const updatedStudent = await addNoteToStudent(subject, rollNumber, newNote);

    if (!updatedStudent) {
      res.status(404).json({ message: "Student not found" });
    } else {
      // Sending a success response with the updated student
      res.status(200).json({ message: `Note added to student ${rollNumber} successfully`, data: updatedStudent });
    }
  } catch (error) {
    // Handling errors if any occurred during the process
    console.error("Error adding note:", error);
    res.status(500).json({ message: "Failed to add note" });
  }
});

module.exports = router;
