const express = require("express");
const bodyParser = require('body-parser');
const router = express.Router();
const { Notice } = require("../db/noticedb.js");
router.use(bodyParser.json());
// Route to add a new notice
router.post("/", async (req, res) => {
  try {
    // Get the notice data from the request body
    const { noticeTitle, noticeContent} = req.body;
    const newNotice = new Notice({
      noticeTitle,
      noticeContent,
    });

    // Save the new notice to the database
    const savedNotice = await newNotice.save();

    res.status(201).json(savedNotice);
  } catch (error) {
    res.status(500).json({ error: "Error adding the notice" });
  }
});

module.exports = router;
