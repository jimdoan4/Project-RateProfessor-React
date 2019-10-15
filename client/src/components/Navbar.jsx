import React, { Component } from "react";
import { NavContainer } from "./styled-components/NavbarStyles";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <NavContainer>
        <nav
          id="navbar"
          className="navbar navbar-expand-lg navbar-dark fixed-top"
          style={{ height: "70px" }}
        >
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto text-center center-nav-links">
              <li className="nav-item">
                <Link to="/" className="nav-link btn">
                  HOME
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/professors/" className="nav-link btn">
                  RATE A PROFESSOR
                </Link>
              </li>

              <li className="nav-item ">
                <Link to="/information/" className="nav-link btn">
                  INSURANCE
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/contact/" className="nav-link btn">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <nav
          id="navbar"
          className="navbar navbar-expand-lg navbar-dark fixed-top"
          style={{
            height: "60px",
            background: "#394475",
            color: "white",
            marginTop: "70px"
          }}
        >
          <h3
            className="text-center"
            style={{ margin: "auto", marginTop: "5px" }}
          >
            FIND WHAT YOU ARE LOOKING FOR
          </h3>
        </nav>
      </NavContainer>
    );
  }
}
