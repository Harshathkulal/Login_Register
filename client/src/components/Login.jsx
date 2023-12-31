import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [noRecordError, setNoRecordError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://login-register-kappa.vercel.app/login", { email: email, password: password })
      .then((result) => {
        //console.log(result);
        if (result.data === "success") {
          navigate("/home");
        } else if (result.data === "the password is incorrect") {
          setError("Incorrect password");
        } else if (result.data === "No Record exist") {
          setNoRecordError("No record Exist");
        }
      })
      .catch((err) => {
        console.log(err);
        setError("An error occurred.");
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 max-w-25 rounded">
        <h2>Login</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        {noRecordError && <div className="alert alert-danger">{noRecordError}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              <strong>Email address</strong>
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              id="exampleInputEmail2"
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-1">
            Login
          </button>
        </form>
        <p>Don't have an account?</p>
        <Link to="/" className="btn btn-primary w-100 rounded-1">
          SignUp
        </Link>
      </div>
    </div>
  );
};

export default Login;
