const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


// Sample Data
let students = [
  {
    id: 1,
    name: "Prajwal",
    branch: "IT"
  }
];


// GET Students
app.get("/students", (req, res) => {
  res.json(students);
});


// ADD Student
app.post("/students", (req, res) => {
  const newStudent = {
    id: students.length + 1,
    name: req.body.name,
    branch: req.body.branch
  };

  students.push(newStudent);

  res.json({
    message: "Student Added",
    student: newStudent
  });
});


// DELETE Student
app.delete("/students/:id", (req, res) => {
  students = students.filter(
    (s) => s.id != req.params.id
  );

  res.json({
    message: "Student Deleted"
  });
});


// Server
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});