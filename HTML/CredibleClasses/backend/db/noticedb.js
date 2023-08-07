const mongoose = require("mongoose");
const Notice = require('./noticeSchema.js');

// Connect to MongoDB
mongoose.connect("mongodb+srv://credibleclasseswebsite:database@student.xfxu6fz.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export the `mongoose` object and the `Notice` model
module.exports = {
  mongoose,
  Notice,
};
