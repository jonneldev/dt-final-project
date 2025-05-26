import React from "react";
import "../css/bootstrap.min.css";
import "../css/NavBarHero.css";

const NavBarHero = () => {
  return (
    <div>
      {/* <!--Navbar Start--> */}
      <nav className="navbar navbar-expand-lg fixed-top navbar-custom">
        <div className="container">
          {/* LOGO */}
          <a className="logo" href="#home">
            <img src="images/logo.png" alt="" />
          </a>
          {/* NAVBAR TOGGLE BUTTON */}
          <button className="navbar-account" type="button">
            <span>
              <i className="fa fa-bars"></i>
            </span>
            <span>
              <i className="fa fa-user-circle"></i>
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
