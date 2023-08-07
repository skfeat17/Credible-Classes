const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
  noticeTitle: {
    type: String,
  },
  noticeContent: {
    type: String,
  },
  noticeDate: {
    type: Date,
  }
});

const Notice = mongoose.model('Notice', noticeSchema);

module.exports = Notice;
