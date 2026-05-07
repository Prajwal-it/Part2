// server.js

const express = require("express");

const app = express();
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});


// About Route
app.get("/about", (req, res) => {
  res.send("Welcome to About Page");
});


// Contact Route
app.get("/contact", (req, res) => {
  res.send("Welcome to Contact Page");
});


// Server Port
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});