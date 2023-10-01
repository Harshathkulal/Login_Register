const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require("./models/Employee")

const PORT=3001;

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post('/login', (req, res) => {
    const {email,password}=req.body;
    EmployeeModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("success")
            }else{
                res.json("the paaword is incorrect")
            }
        }else{
            res.json("No Record exist")
        }
    })
});

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
      .then(employee => res.json(employee))
      .catch(err => res.json(err));
  });
  

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})