import React, { useState } from 'react';
import axios from 'axios';
import './registration.css';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import Feedback from 'react-bootstrap/esm/Feedback';
import { toast } from 'react-toastify';


const Registrationform = () => {
  const [name, setName] = useState("");
  const [password, setpassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);


  const handleNameChange = (value) => {
    setName(value);
  };

  const handlePasswordChange = (value) => {
    setpassword(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handleSave = (e) => {
    const data = {
      UserName: name,
      Password: password,
      Email: email
    };
    e.preventDefault();
    try {
      const form = e.currentTarget;
      if (form.checkValidity() === false) {
        e.stopPropagation();
      }
      setValidated(true);
      const url = "https://localhost:7034/api/Authenticate/register"
      axios.post(url, data).then((result) => {
        toast.success("User is successfully logged in");
      }).catch((error) => {
        toast.error("User was not successfully logged in");
        

      })
    }finally{
    }
  }
  return (
    <div className="Regi-form-container">
      <Form noValidate validated={validated} className="Regi-form" onSubmit={handleSave}>
        <div className="Regi-form-content">
          <h3 className="Regi-form-title">Registration User</h3>
          <div className="form-group mt-3">
            <label>User name</label>
            <input
              required
              type="text"
              className="form-control mt-1"
              placeholder="User name"
              onChange={(e) => handleNameChange(e.target.value)}
            />
            <Feedback>Data is valid!</Feedback>
            <Feedback type="invalid">
              Please insert username.
            </Feedback>
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              required
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e) => handlePasswordChange(e.target.value)}
            />
            <Feedback>Data is valid!</Feedback>
            <Feedback type="invalid">
              Please insert password.
            </Feedback>
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              required
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={(e) => handleEmailChange(e.target.value)}
            />
            <Feedback>Data is valid!</Feedback>
            <Feedback type="invalid">
              Please insert email.
            </Feedback>
          </div>
          <div className="pt-3">
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </div>
          <p className="forgot-password text-center mt-4">
            <a href="/login">Back</a>
          </p>
        </div>
      </Form>
    </div>
  );
}

export default Registrationform;