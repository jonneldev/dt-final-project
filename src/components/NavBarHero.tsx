import React from "react";
import "../css/bootstrap.min.css";
import "../css/NavBarHero.css";

const NavBarHero = () => {
  return (
    <div>
      {/* SVG Icon */}
      <svg style={{ display: "none" }}>
        <symbol
          id="user-outline-icon"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="32" cy="32" r="32" fill="#111" />
          <g
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="32" cy="24" r="6" />
            <path d="M20 44c0-6.627 5.373-12 12-12s12 5.373 12 12" />
          </g>
        </symbol>
        <symbol
          id="burger-icon"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="32" cy="32" r="32" fill="none" />
          <g stroke="white" stroke-width="4" stroke-linecap="round">
            <line x1="16" y1="22" x2="48" y2="22" />
            <line x1="16" y1="34" x2="48" y2="34" />
            <line x1="16" y1="46" x2="48" y2="46" />
          </g>
        </symbol>
      </svg>
      {/* <!--Navbar Start--> */}
      <nav className="navbar navbar-expand-lg fixed-top navbar-custom">
        <div className="container">
          {/* LOGO */}
          <a className="logo" href="#home">
            <img src="images/logo.png" alt="" />
          </a>
          {/* NAVBAR TOGGLE BUTTON */}
          <button className="navbar-account rounded-pill" type="button">
            <svg className="icon" width="32" height="32">
              <use href="#burger-icon"></use>
            </svg>
            <span>
              <svg className="icon" width="32" height="32">
                <use href="#user-outline-icon"></use>
              </svg>
            </span>
          </button>
        </div>
      </nav>

      {/* <!-- Hero start --> */}
      <section className="hero-episodes">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h1 className="text-white hero-title fw-bold mb-4">
                The Main Event
              </h1>
              <p className="text-white mb-5 fs-18">
                A trailer about an upcoming featured play, concert, or any
                musical performance. This is the subheader.
              </p>
              <div className="d-flex align-items-center mb-4 mb-lg-0">
                <button className="btn btn-gradient-primary rounded-pill me-4">
                  Watch <i className="mdi mdi-chevron-right ms-1"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NavBarHero;
