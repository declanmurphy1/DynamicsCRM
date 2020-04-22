import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap-grid.min.css";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
        <div className="container">
          <a className="navbar-brand" href="/">
            Dynamics CRM
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link " href="/">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/dashboard">
                  Clients
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
