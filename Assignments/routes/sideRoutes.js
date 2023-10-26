const express = require("express");

const router = express();
const path = require("path");

router.get("/side-page", (req, res, next) =>
  res.sendFile(path.join(__dirname, "..", "pages", "sidePage.html"))
);

module.exports = router;
