import React, { Component } from "react";
// import PropTypes from 'prop-types'
import { FaFeatherAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
export class Navbar extends Component {
  //   static propTypes = {

  //   }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              {" "}
              <FaFeatherAlt /> News Sparrow
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    to="/News-Sparrow"
                    className="nav-link"
                    style={({ isActive }) => {
                      return { fontWeight: isActive ? "bold" : "" };
                    }}
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    style={({ isActive }) => {
                      return { fontWeight: isActive ? "bold" : "" };
                    }}
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
