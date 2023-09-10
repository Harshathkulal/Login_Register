import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {

  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()

  const handlesubmit=(e)=>{
     e.preventDefault()
     axios.post('http://localhost:3001/register',{name,email,password})
     .then(result=>console.log(result))
     .catch(err=>{console.log(err)})
  }


  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 max-w-25 rounded">
        <h2>Register</h2>
        <form onSubmit={handlesubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              id="exampleInputEmail1"
              onChange={(e)=>setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              <strong>Email address</strong>
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              id="exampleInputEmail2"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              id="exampleInputPassword1"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 rounded-1">
            Submit
          </button>
        </form>
        <p>Already have a Account?</p>
        <Link to="/login" className="btn btn-success  w-100 rounded-1">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
