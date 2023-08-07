const express = require("express");
const router = express.Router();
const { mongoose, Student } = require('../db/mongodb.js');

router.use(express.json());

// Function to add a note to all students with a specific class and a specific subject
async function addNoteToClassStudents(subject, studentClass, note) {
  // Update all students with the matching class and push the new note
  await Student.updateMany({ studentClass: studentClass }, { $push: { [`notes.${subject}`]: note } });

  // Fetch all students with the updated values after the update
  const updatedStudents = await Student.find({ studentClass: studentClass });

  return updatedStudents;
}

// Route to add a note for a specific subject to all students with a specific class
router.post("/:subject/:studentClass", async (req, res) => {
  try {
    const subject = req.params.subject;
    const studentClass = req.params.studentClass;

    const newNote = {
      note_name: req.body.note_name,
      note_link: req.body.note_link,
    };

    const updatedStudents = await addNoteToClassStudents(subject, studentClass, newNote);

    if (updatedStudents.length === 0) {
      res.status(404).json({ message: "Students not found for the provided class" });
    } else {
      // Sending a success response with the updated students array
      res.status(200).json({ message: `Note added to all students of class ${studentClass} successfully`, data: updatedStudents });
    }
  } catch (error) {
    // Handling errors if any occurred during the process
    console.error("Error adding note:", error);
    res.status(500).json({ message: "Failed to add note" });
  }
});

module.exports = router;
