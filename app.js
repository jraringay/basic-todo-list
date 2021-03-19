const express = require("express");
const morgan = require("morgan");
const ejsLayout = require("express-ejs-layouts");
const path = require("path");
const { port } = require("./config")

// Set up application
const app = express();

// Monitor HTTP requests in console
app.use(morgan("dev"));

// Routes setup
const indexRoute = require("./routes/index");

// Parsing app/x-www-form-urlencoded
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Layout setup
app.set("view engine", "ejs");
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(ejsLayout)
app.set("layout", "./layouts/basic-layout")

// Routes setup
app.use("/routes/index", indexRoute);

// Run App
app.listen(port, () => {
  console.log(`listening on port ${port}`);
})

app.use("/", indexRoute);