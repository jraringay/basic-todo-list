

// Call required package modules
const express = require("express");
const router = express.Router();

// Call database
const db = require("../database/db.js")

// Set up application
const app = express();

// Parsing json and app/x-www-form-urlencoded from body
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Route definition
router.get("/", (req, res) => {
  res.render("pages/index", {
    title: "Home Page",
    message: "Hello World",
  });
});

router.post("/addtask", (req, res) => {
  console.log(req.body.task)
  db.none("INSERT INTO todo(task) VALUES ($1)", [req.body.task])
  .then(() => {
    console.log("Task added successfully")
    return res.end()
  })
  .catch((err) => {
    res.render("pages/error", {
      title: "Error",
      err: err
    })
  })
})

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