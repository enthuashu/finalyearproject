import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/logo.png";

function NavBar() {
  const RenderMenu = () => {
    if (true) {
      return (
        <>
          <nav className="navbar sticky-top navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <NavLink
                activeClassName="activenav"
                className="navbar-brand ps-5"
                to="/"
              >
                <img
                  alt="testimg"
                  src={Logo}
                  className="nav__logo d-inline-block "
                />
                MSSP
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                style={{ backgroundColor: "#311b92" }}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 pe-5 ps-5">
                  <li className="nav-item">
                    <NavLink
                      activeClassName="nav-link activenav"
                      to="/"
                      className="nav-link"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink
                      to="/"
                      className="nav-link dropdown-toggle"
                      id="navbarDarkDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Services
                    </NavLink>
                    <ul
                      className="dropdown-menu dropdown-menu-dark"
                      aria-labelledby="navbarDarkDropdownMenuLink"
                    >
                      <li>
                        <NavLink exact to="/beds" className="dropdown-item">
                          Beds
                        </NavLink>
                      </li>
                      <li>
                        <NavLink exact to="/oxygen" className="dropdown-item">
                          Oxygen Cylinder
                        </NavLink>
                      </li>
                      <li>
                        <NavLink exact to="/hospital" className="dropdown-item">
                          Hospital Contact
                        </NavLink>
                      </li>

                      <li>
                        <NavLink exact to="/food" className="dropdown-item">
                          Food Services
                        </NavLink>
                      </li>
                      <li>
                        <NavLink exact to="/plasma" className="dropdown-item">
                          Plasma
                        </NavLink>
                      </li>

                      <li>
                        <NavLink exact to="/medicine" className="dropdown-item">
                          Medicine
                        </NavLink>
                      </li>
                      <li>
                        <a
                          href="https://covidhelp-mmmut.herokuapp.com/mentalhelp"
                          target="_ashu"
                          className="dropdown-item"
                        >
                          Mental Help
                        </a>
                      </li>
                      <li>
                        <NavLink
                          exact
                          to="/volunteer"
                          className="dropdown-item"
                        >
                          Volunteer Resources
                        </NavLink>
                      </li>
                      <li>
                        <a
                          href="https://covidhelp-mmmut.herokuapp.com/"
                          target="_ashu"
                          className="dropdown-item"
                        >
                          Other Services
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="nav-link activenav"
                      to="/welcome"
                      className="nav-link"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="nav-link activenav"
                      to="/volunteer"
                      className="nav-link"
                    >
                      Volunteer
                    </NavLink>
                  </li>
                  <li className="nav-item"></li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="nav-link activenav"
                      to="/contacts"
                      className="nav-link"
                    >
                      Contact Us
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="nav-link activenav"
                      to="/about"
                      className="nav-link"
                    >
                      AboutUs
                    </NavLink>
                  </li>
                  {/* <li className="nav-item">
                    <NavLink
                      activeClassName="nav-link activenav"
                      to="/team"
                      className="nav-link"
                    >
                      Our Team
                    </NavLink>
                  </li> */}
                  <li className="nav-item">
                    <NavLink
                      activeClassName="nav-link activenav"
                      to="/logout"
                      className="nav-link"
                    >
                      <button type="button" className="btn">
                        Logout
                      </button>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </>
      );
    } else {
      return (
        <>
          <nav className="navbar sticky-top navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <NavLink
                activeClassName="activenav"
                className="navbar-brand ps-5"
                to="/"
              >
                <img
                  alt="testimg"
                  src={Logo}
                  className="nav__logo d-inline-block "
                />
                MSSP
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                style={{ backgroundColor: "#311b92" }}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 pe-5 ps-5">
                  <li className="nav-item">
                    <NavLink
                      activeClassName="nav-link activenav"
                      to="/"
                      className="nav-link"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink
                      to="/"
                      className="nav-link dropdown-toggle"
                      id="navbarDarkDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Services
                    </NavLink>
                    <ul
                      className="dropdown-menu dropdown-menu-dark"
                      aria-labelledby="navbarDarkDropdownMenuLink"
                    >
                      <li>
                        <NavLink exact to="/beds" className="dropdown-item">
                          Beds
                        </NavLink>
                      </li>
                      <li>
                        <NavLink exact to="/oxygen" className="dropdown-item">
                          Oxygen Cylinder
                        </NavLink>
                      </li>
                      <li>
                        <NavLink exact to="/hospital" className="dropdown-item">
                          Hospital Contact
                        </NavLink>
                      </li>

                      <li>
                        <NavLink exact to="/food" className="dropdown-item">
                          Food Services
                        </NavLink>
                      </li>
                      <li>
                        <NavLink exact to="/plasma" className="dropdown-item">
                          Plasma
                        </NavLink>
                      </li>

                      <li>
                        <NavLink exact to="/medicine" className="dropdown-item">
                          Medicine
                        </NavLink>
                      </li>
                      <li>
                        <a
                          href="https://covidhelp-mmmut.herokuapp.com/mentalhelp"
                          target="_ashu"
                          className="dropdown-item"
                        >
                          Mental Help
                        </a>
                      </li>
                      <li>
                        <NavLink
                          exact
                          to="/volunteer"
                          className="dropdown-item"
                        >
                          Volunteer Resources
                        </NavLink>
                      </li>
                      <li>
                        <a
                          href="https://covidhelp-mmmut.herokuapp.com/"
                          target="_ashu"
                          className="dropdown-item"
                        >
                          Other Services
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="nav-link activenav"
                      to="/welcome"
                      className="nav-link"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="nav-link activenav"
                      to="/volunteer"
                      className="nav-link"
                    >
                      Volunteer
                    </NavLink>
                  </li>
                  {/* <li className="nav-item">
                    <NavLink
                      activeClassName="nav-link activenav"
                      to="/team"
                      className="nav-link"
                    >
                      Our Team
                    </NavLink>
                  </li> */}

                  <li className="nav-item">
                    <NavLink
                      activeClassName="nav-link activenav"
                      to="/about"
                      className="nav-link"
                    >
                      AboutUs
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="nav-link activenav"
                      to="/login"
                      className="nav-link"
                    >
                      <button type="button" className="btn">
                        Sign Up / Sign In
                      </button>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </>
      );
    }
  };
  return (
    <div>
      <RenderMenu />
    </div>
  );
}

export default NavBar;
