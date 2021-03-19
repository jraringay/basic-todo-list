

// Call required package modules
const express = require("express");
const router = express.Router();

// Call database
const db = require("../database/db.js")

// Set up application
const app = express();

/* Route definition */
router.get("/", (req, res) => {
  res.render("pages/index", {
    title: "Home Page",
    message: "Hello World",
  });
});

router.get("/tasks", (req, res) => {
  db.any("SELECT * FROM todo")
  .then((tasks) => {
    res.json(tasks)
  })
  .catch((err) => {
    console.log(err)
  })
  
});


// Export route to app.js
module.exports = router;