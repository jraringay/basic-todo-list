

// Call required package modules
const express = require("express");
const router = express.Router();

// Set up application
const app = express();

/* Route definition */
router.get("/", (req, res) => {
  res.render("pages/index", {
    title: "Home Page",
    message: "Hello World",
  });
});

// Export route to app.js
module.exports = router;