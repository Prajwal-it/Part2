import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");


  // Fetch Students
  const getStudents = async () => {
    const res = await axios.get("http://localhost:3000/students");
    setStudents(res.data);
  };


  useEffect(() => {
    getStudents();
  }, []);


  // Add Student
  const addStudent = async () => {

    await axios.post("http://localhost:3000/students", {
      name,
      branch
    });

    setName("");
    setBranch("");

    getStudents();
  };


  // Delete Student
  const deleteStudent = async (id) => {

    await axios.delete(`http://localhost:3000/students/${id}`);

    getStudents();
  };


  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Management System</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Branch"
        value={branch}
        onChange={(e) => setBranch(e.target.value)}
      />

      <button onClick={addStudent}>
        Add Student
      </button>

      <hr />

      {
        students.map((student) => (
          <div key={student.id}>
            <h3>{student.name}</h3>
            <p>{student.branch}</p>

            <button
              onClick={() => deleteStudent(student.id)}
            >
              Delete
            </button>

            <hr />
          </div>
        ))
      }
    </div>
  );
}

export default App;