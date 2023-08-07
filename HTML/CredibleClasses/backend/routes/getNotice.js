const express = require("express");
const router = express.Router();
const { Notice } = require("../db/noticedb.js");


// Route to get all notices
router.get("/", async (req, res) => {
  try {
    // Fetch all notices from the database
    const allNotices = await Notice.find({});

    res.status(200).json(allNotices);
  } catch (error) {
    res.status(500).json({ error: "Error fetching notices" });
  }
});

module.exports = router;
