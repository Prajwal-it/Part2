const express=require('express');
const { parse } = require('vite');
const app=express();
app.use(express.json());
let students=[
    {roll:70,name:"Prajwal",branch:"IT"},
    {roll:71,name:"Prafull",branch:"CSE"}
];

app.get("/students",(req,res)=>{
    res.json(students);
})

app.post("/students",(req,res)=>{
    const newStudent=req.body;
    students.push(newStudent);
    res.json({
        message:"New Student added",
        students
    });
});

app.put("/students/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    for(let i=0;i<students.length;i++)
    {
        if(students[i].roll===id)
        {
            students[i].rollno=req.body.roll;
            students[i].name=req.body.name;
            students[i].branch=req.body.branch;
        }
    }
    res.json({
        message:"Student Updated",
        students
    });
});

app.delete("/students/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    students=students.filter(student=>student.id!==id);
    res.json({
        message:"Student deleted",
        students
    })
})

app.listen(3000,()=>{
    console.log("Server running on port 3000");
})