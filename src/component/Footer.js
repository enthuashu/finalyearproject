import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>About</h6>
              <p class="text-justify">
                Medical Support Services Portal (MSSP) is an initiative towards
                solving the problem of finding covid resources in a situation
                where time is of great essence. Medical Support Services Portal
                (MSSP) is a non profitable service provider which works to
                provide ease to government and patient on a single platform,
                which shows details of availablity of bed, medicine, covid
                resources and some other medical services at a single spot.
              </p>
              <button class="btn">
                <Link to="/about">Know More</Link>
              </button>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Services</h6>
              <ul class="footer-links">
                <li>
                  <Link exact to="/beds">
                    Beds
                  </Link>
                </li>
                <li>
                  <Link exact to="/oxygen">
                    Oxygen Cylinder
                  </Link>
                </li>
                <li>
                  <Link exact to="/hospital">
                    Hospital Contact
                  </Link>
                </li>
                <li>
                  <Link exact to="/medicine">
                    Medicine
                  </Link>
                </li>
                <li>
                  <Link exact to="/plasma">
                    Plasma
                  </Link>
                </li>
                <li>
                  <Link exact to="/food">
                    Food Services
                  </Link>
                </li>
                <li>
                  <Link exact to="/volunteer">
                    Volunteer Resources
                  </Link>
                </li>
                <li>
                  <a
                    target="_ashu"
                    href="https://covidhelp-mmmut.herokuapp.com/mentalhelp"
                  >
                    Mental Help
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul class="footer-links">
                <li>
                  <Link exact to="/register">
                    SignUp
                  </Link>
                </li>
                <li>
                  <Link exact to="/login">
                    SignIn
                  </Link>
                </li>
                <li>
                  <Link exact to="/about">
                    AboutUs
                  </Link>
                </li>
                <li>
                  <Link exact to="/contacts">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">
                Copyright &copy; 2022 All Rights Reserved by
                <Link exact to="/">
                  {" "}
                  Medical Support Services Portal (MSSP){" "}
                </Link>
                .
              </p>
            </div>

            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="social-icons">
                <li>
                  <a
                    class="facebook"
                    target="_ashu"
                    href="https://www.facebook.com/Young-Engineers-Association-101204675458730/"
                  >
                    <i class="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    class="twitter"
                    target="_ashu"
                    href="https://twitter.com/EngineersYouth?s=08"
                  >
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    class="dribbble"
                    target="_ashu"
                    href="https://www.instagram.com/covidhelpup/?igshid=pqiq7mb8bo89"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    class="linkedin"
                    target="_ashu"
                    href="https://t.me/joinchat/hrlYJy21Whk4NWY1"
                  >
                    <i class="fab fa-telegram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
