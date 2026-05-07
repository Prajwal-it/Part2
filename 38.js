const express = require("express");
const mongoose = require("mongoose");

const app = express();


// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/studentdb")
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log("Connection Error:", err);
});


// Home Route
app.get("/", (req, res) => {
    res.send("MongoDB Connected Successfully");
});


// Server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});