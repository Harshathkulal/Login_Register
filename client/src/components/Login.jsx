import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate=useNavigate()
  
    const handlesubmit=(e)=>{
       e.preventDefault();
       axios.post('http://localhost:3001/login',{email:email,password:password})
       .then(result=>{console.log(result)
        if(result.data==='success'){
        navigate('/home')
      }
       })
       .catch(err=>{console.log(err)})
    };
  
  
    return (
      <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 max-w-25 rounded">
          <h2>Login</h2>
          <form onSubmit={handlesubmit}>
            
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
            <button type="submit" className="btn btn-success w-100 rounded-1">
              Login
            </button>
          </form>
          <p>Don't have a Account?</p>
          <Link to="/register" className="btn btn-primary w-100 rounded-1">
            SignUp
          </Link>
        </div>
      </div>
    );
  };

export default Login
