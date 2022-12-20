import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import $ from "jquery";
import AuthService from "../../services/auth.service";
import Button from "react-bootstrap/Button";

const Navbar = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
    navigate("/login");
    window.location.reload();
  };

  $(document).on("click", ".navbar-nav li a", function (e) {
    //This removes the `active` class from all `a`
    $(".navbar-nav li a").removeClass("active");

    //This adds the `active` class to the `a` that was clicked on
    $(this).addClass("active");
  });

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-mainbg">
        <div className="brad">
          <NavLink className="navbar-brand navbar-logo" to="/home">
            <img
              src="truck.png"
              style={{ width: "33px", height: "33px", marginRight: "10px" }}
            />
            Transport Log
          </NavLink>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars text-white"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>

            <li className="nav-item">
              <NavLink className="nav-link" to="/home">
                <i className="fas fa-tachometer-alt"></i>Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/usermanagment">
                <i className="far fa-address-book"></i>User Managment
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/customers">
                <i className="far fa-clone"></i>Customers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/supportstatuses">
                <i className="far fa-copy"></i>Support Statuses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/docks">
                <i className="far fa-copy"></i>Docks
              </NavLink>
            </li>
            {currentUser ? (
              <li className="nav-item">
                <NavLink
                  className="nav-link logout-nav"
                  to="/logout"
                  onClick={logOut}
                >
                  <Button variant="secondary">
                    <i className="far fa-copy"></i>Logout
                  </Button>
                </NavLink>
              </li>
            ) : (
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  <i className="far fa-copy"></i>Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
