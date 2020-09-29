import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";

const Menu = () => {
  return (
    <div class="bs-component">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link class="navbar-brand" to="/">
          <img
            src={logo}
            alt="SpaceX"
            style={{ width: 300, display: "block", margin: "auto" }}
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>

        <div class="collapse navbar-collapse" id="navbarColor02">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link to="/" class="nav-link">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/about" class="nav-link">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
