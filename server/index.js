const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require("./models/Employee")
require('dotenv').config();

const PORT = process.env.PORT;

const app=express()
app.use(express.json())
app.use(cors())

const DB = process.env.DATABASE;
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log("Connected To DB");
  })
  .catch((err) => {
    console.log(`Connection Failed to DB ${err}`);
  });

app.post('/login', (req, res) => {
    const {email,password}=req.body;
    EmployeeModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("success")
            }else{
                res.json("the password is incorrect")
            }
        }else{
            res.json("No Record exist")
        }
    })
});

app.post('/', (req, res) => {
    EmployeeModel.create(req.body)
      .then(employee => res.json(employee))
      .catch(err => res.json(err));
  });
  

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})