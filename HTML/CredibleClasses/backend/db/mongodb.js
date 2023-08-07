// app.js
const { default: mongoose } = require("mongoose");
const Student = require('./schema.js');

// Connect to MongoDB
mongoose.connect("mongodb+srv://credibleclasseswebsite:database@student.xfxu6fz.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// Export the `mongoose` object and the `Student` model
module.exports = {
  mongoose,
  Student,
};
