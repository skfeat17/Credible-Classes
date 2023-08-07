const express = require("express");
const router = express.Router();
const { mongoose, Student } = require('../db/mongodb.js');

router.use(express.json());

router.put('/', async (req, res) => {
    const { studentClass, subjectName, noteName, newNoteLink } = req.body;

    try {
        const result = await Student.updateMany(
            { studentClass, [`notes.${subjectName}`]: { $elemMatch: { note_name: noteName } } },
            { $set: { [`notes.${subjectName}.$.note_link`]: newNoteLink } }
        );

        if (result.nModified > 0) {
            res.status(200).json({ message: `${result.nModified} note links updated successfully.` });
        } else {
            const noteExists = await Student.exists({
                studentClass,
                [`notes.${subjectName}`]: { $elemMatch: { note_name: noteName } }
            });

            if (noteExists) {
                res.status(200).json({ message: `Note link Update Success` });
            } else {
                res.status(404).json({ error: 'No student or note found to update.' });
            }
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating note links.' });
    }
});

module.exports = router;
