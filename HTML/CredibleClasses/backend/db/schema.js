const mongoose = require('mongoose');

// Define the subdocument schema for exam results
const ExamResultSchema = new mongoose.Schema({
  Exam_Type: { type: String },
  Exam_Date: { type: String },
  Full_Marks: { type: Number },
  Obtained_Marks: { type: Number },
});

// Define the subdocument schema for notes
const NoteSchema = new mongoose.Schema({
  note_name: { type: String },
  note_link: { type: String },
});

// Define the main schema
const StudentSchema = new mongoose.Schema({
  name: { type: String },
  roll: { type: Number },
  studentClass: { type: Number },
  password: { type: String },
  results: { type: [ExamResultSchema] },
  notes: {
    phsyics: { type: [NoteSchema] },
    chemistry: { type: [NoteSchema] },
    biology: { type: [NoteSchema] },
    geography: { type: [NoteSchema] },
    economics: { type: [NoteSchema] },
    civics: { type: [NoteSchema] },
    history: { type: [NoteSchema] },
  },
});

// Create the mongoose model
const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;
