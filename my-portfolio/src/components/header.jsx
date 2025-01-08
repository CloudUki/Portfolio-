import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="topnav">
              <a href="/" className="logo">Brandon Yang</a>
              <button
                className="navbar-toggler collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </button>
              <div className="navbar-collapse collapse" id="navbarNav">
                <ul id="main" className="navbar-nav">
                  <li><a className="nav-link" href="#about">About</a></li>
                  <li><a className="nav-link" href="#projects">Projects</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
