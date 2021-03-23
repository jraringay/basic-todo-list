// Call required package modules
const express = require("express");
const router = express.Router();
const { compare, hash } = require("bcryptjs");

// Call database
const db = require("../database/db.js")

// Set up application
const app = express();

// GET Route definition - Login
router.get("/login", (req, res) => {
  res.render("pages/login", {
    title: "Login",
  });
});

// GET Route definition - Signup
router.get("/signup", (req, res) => {
  res.render("pages/signup", {
    title: "Signup",
  });
});

// POST Route definition - Signup
router.post("/signup", async (req, res) => {
  try {    
    // if(req.body.password !== req.body.confirmPassword) throw new Error('Passwords must match')
    
    const hashedPassword = await hash(req.body.password, 10)
    let newUser = {
      email: req.body.email.toLowerCase(),
      password: hashedPassword,
      firstName: req.body.fname,
      lastName: req.body.lname
    }

    db.none("INSERT INTO users(email, password, first_name, last_name) VALUES ($1, $2, $3, $4)", [newUser.email, newUser.password, newUser.firstName, newUser.lastName])
    .then(() => {
      return res.render("pages/index", {
        title: "Home Page",
        message: "Hello World",
      });
    })

  } catch (error) {
      return res.render("pages/error", {
        error: error
      })
  }
})


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
  let userId = 1
  db.none("INSERT INTO todo(user_id, task) VALUES ($1, $2)", [userId, req.body.task])
  .then(() => {
    console.log("Task added successfully")
    // return res.end()
    return res.render("pages/index", {
      title: "Home Page",
      message: "Hello World",
    });
  })
  .catch((err) => {
    res.render("pages/error", {
      title: "Error",
      err: err
    })
  })
})


// POST Route definition - Mark finished tasks
router.post("/complete/:id", (req, res) => {
  const taskId = req.params.id
  db.none("UPDATE todo SET is_done = TRUE, done_at = NOW() WHERE id = $1", [taskId])
  .then(() => {
    console.log("Task completed successfully")
    // return res.end()
    return res.render("pages/index", {
      title: "Home Page",
      message: "Hello World",
    });
  })
  .catch((err) => {
    res.render("pages/error", {
      title: "Error",
      err: err
    })
  })
})

// POST Route definition - Delete finished/unfinished tasks
router.post("/remove/:id", (req, res) => {
  const taskId = req.params.id
  db.any("DELETE FROM todo WHERE id = $1", [taskId])
  .then(() => {
    console.log("Task deleted successfully")
    // return res.end()
    return res.render("pages/index", {
      title: "Home Page",
      message: "Hello World",
    });
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
  db.any("SELECT todo.id, user_id, first_name, last_name, task, TO_CHAR(todo.created_at, 'Day, DDth Mon YYYY HH12:MM:SS AM') created_at, is_done, TO_CHAR(done_at, 'Day, DDth Mon YYYY HH12:MM:SS AM') done_at FROM todo LEFT JOIN users ON todo.user_id = users.id")
  .then((tasks) => {
    res.json(tasks)
  })
  .catch((err) => {
    console.log(err)
  })
  
});




// Export route to app.js
module.exports = router;