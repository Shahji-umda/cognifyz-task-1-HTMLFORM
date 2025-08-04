// server.js
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Setup EJS
app.set("view engine", "ejs");
app.set("views", "./views");

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => {
  res.render("form");
});

app.post("/submit", (req, res) => {
  const { name, email, phone, question, answer } = req.body;
  res.render("response", { name, email, phone, question, answer });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
