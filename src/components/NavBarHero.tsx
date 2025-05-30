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

        <symbol id="search-icon" viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="32" fill="none" />
          <g
            fill="none"
            stroke="white"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="28" cy="28" r="10" />
            <line x1="35" y1="35" x2="44" y2="44" />
          </g>
        </symbol>

        <symbol id="heart-icon" viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="32" fill="none" />
          <g
            fill="none"
            stroke="white"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M44.84 20.61a8.5 8.5 0 0 0-12.02 0L32 21.77l-0.82-0.82a8.5 8.5 0 0 0-12.02 12.02l0.82 0.82L32 45.23l12.02-12.02 0.82-0.82a8.5 8.5 0 0 0 0-12.02z" />
          </g>
        </symbol>

        <symbol id="star-icon" viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="32" fill="none" />
          <g
            fill="none"
            stroke="white"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M32 10l6.2 12.6L52 25.4l-10 9.7L44.4 50 32 42.6 19.6 50 22 35.1 12 25.4l13.8-2.8L32 10z" />
          </g>
        </symbol>

        <symbol id="megaphone-icon" viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="32" fill="none" />
          <g
            fill="none"
            stroke="white"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 28h8l18-6v20l-18-6h-8z" />

            <path d="M26 34l-2 4" />
          </g>
        </symbol>

        <symbol id="film-icon" viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="32" fill="none" />
          <g
            fill="none"
            stroke="white"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="14" y="14" width="36" height="36" rx="3" ry="3" />
            <line x1="22" y1="14" x2="22" y2="50" />
            <line x1="42" y1="14" x2="42" y2="50" />
            <line x1="14" y1="32" x2="50" y2="32" />
            <line x1="14" y1="22" x2="22" y2="22" />
            <line x1="14" y1="42" x2="22" y2="42" />
            <line x1="42" y1="42" x2="50" y2="42" />
            <line x1="42" y1="22" x2="50" y2="22" />
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
          <div className="dropdown">
            <button
              className="navbar-account rounded-pill dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg className="icon" width="32" height="32">
                <use href="#burger-icon"></use>
              </svg>
              <span>
                <svg className="icon" width="32" height="32">
                  <use href="#user-outline-icon"></use>
                </svg>
              </span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end bg-dark text-white">
              <li>
                <p className="px-3">
                  <strong>Create your account!</strong>
                  <br />
                  <small>
                    Get personalized event recommendations tailored just for
                    you!
                  </small>
                </p>
                <div className="row">
                  <div className="col d-grid">
                    <button
                      className="btn btn-gradient-primary rounded-pill"
                      type="button"
                    >
                      Sign up
                    </button>
                  </div>
                  <div className="col d-grid">
                    <button
                      className="btn btn-default-dark rounded-pill"
                      type="button"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <p className="">
                  <svg className="icon" width="32" height="32">
                    <use href="#search-icon"></use>
                  </svg>
                  Search Events
                </p>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <svg className="icon" width="32" height="32">
                  <use href="#heart-icon"></use>
                </svg>
                Follow Arts Organizations
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <svg className="icon" width="28" height="28">
                  <use href="#star-icon"></use>
                </svg>
                Highlight Video
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <svg className="icon" width="32" height="32">
                  <use href="#megaphone-icon"></use>
                </svg>
                Latest News
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <svg className="icon" width="26" height="26">
                  <use href="#film-icon"></use>
                </svg>
                Watch
              </li>
            </ul>
          </div>
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
      {/* <!-- Hero End --> */}
    </div>
  );
};

export default NavBarHero;
