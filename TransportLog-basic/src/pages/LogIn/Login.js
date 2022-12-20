import React, { useState } from 'react';
import './Login.css';
import AuthService from '../../services/auth.service';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import Feedback from 'react-bootstrap/esm/Feedback';
import { toast } from 'react-toastify';


const Loginform = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  

  const handleNameChange = (value) => {
    setName(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleLogin = async (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
    e.preventDefault();
    try {
      await AuthService.login(name, password).then(
        () => {
          toast.success("User is successfully logged in");
          navigate("/home")
          window.location.reload();
        },
        (error) => {
          toast.error("User was not successfully logged in");
          console.log(error);
        }
      );
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="Auth-form-container">
      <Form noValidate validated={validated} className="Auth-form" onSubmit={handleLogin}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              required
              type="text"
              className="form-control mt-1"
              placeholder="Enter Username"
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
          <div className="pt-3">
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </div>
          <p className="forgot-password text-center mt-2 pt-3">
            If you don't have account <a href="/registration">create!</a>
          </p>
        </div>
      </Form>
    </div>
  );
}

export default Loginform;