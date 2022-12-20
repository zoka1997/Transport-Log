import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Customers from "./pages/Customers/Customers";
import SupportStatuses from "./pages/SupportStatuses/SupportStatuses";
import Logout from "./pages/Logout/Logout";
import UserManagment from "./pages/UserManagment/UserManagment";
import Home from "./pages/Home/Home";
import Docks from "./pages/Docks/Docks";
import Navbar from "./Components/Navbar/Navbar";
import Registrationform from "./pages/SignUp/registration";
import Loginform from "./pages/LogIn/Login";
import AuthService from "./services/auth.service";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const App = () => {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  return (
    <>
      {currentUser ? (
        <>
          <Navbar /> 
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/usermanagment" element={<UserManagment />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/supportstatuses" element={<SupportStatuses />} />
            <Route path="/docks" element={<Docks />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Loginform/>}/>
            <Route path="/login" element={<Loginform />} />
            <Route path="/registration" element={<Registrationform />} />
          </Routes>
          <ToastContainer position="top-right" closeOnClick autoClose={5000}/>
        </>
      )}
    </>
  );
};

export default App;
