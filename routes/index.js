

// Call required package modules
const express = require("express");
const router = express.Router();

// Call database
const db = require("../database/db.js")

// Set up application
const app = express();

// GET Route definition - Home
router.get("/", (req, res) => {
  res.render("pages/index", {
    title: "Home Page",
    message: "Hello World",
  });
});

// POST Route definition - Add task
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


// POST Route definition - Mark finished tasks
router.post("/finish/:id", (req, res) => {
  const taskId = req.params.id
  db.none("UPDATE todo SET is_done = TRUE, done_at = NOW() WHERE id = $1", [taskId])
  .then(() => {
    console.log("Task completed successfully")
    return res.end()
  })
  .catch((err) => {
    res.render("pages/error", {
      title: "Error",
      err: err
    })
  })
})

// GET Route definition - Display tasks
router.get("/tasks", (req, res) => {
  db.any("SELECT task, TO_CHAR(created_at, 'Day, DDth Mon YYYY') created_at, is_done, TO_CHAR(done_at, 'Day, DDth Mon YYYY') done_at FROM todo")
  .then((tasks) => {
    res.json(tasks)
  })
  .catch((err) => {
    console.log(err)
  })
  
});


// Export route to app.js
module.exports = router;