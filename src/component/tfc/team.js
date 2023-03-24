import React from "react";
import "./index.css";
import ishika from "./ishika.jpg";
import arpita from "./arpita.jpg";
import shivang from "./Shivang.jpg";
import hsir from "./hsir.jpg";
import anushka from "./anushka.jpg";
import ashu from "./asir.jpg";

const team = () => {
  return (
    <div class="container">
      <div class="row text-center">
        <h1>Our Team</h1>
        <div class="profile-card mt-2 col-md-4 col-10">
          <div class="img">
            <img alt="testimg" src={ashu} />
          </div>
          <div class="caption">
            <h3>Ashutosh Mishra</h3>
            <p>Team Lead</p>
            <p>Full Stack Developer</p>
            <div class="social-links">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/enthuashu"
              >
                <i class="fab fa-facebook"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/enthuashu/"
              >
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <br />
        <div class="profile-card mt-2 col-md-4 col-10">
          <div class="img">
            <img alt="testimg" src={hsir} />
          </div>
          <div class="caption">
            <h3>Harshit Agrahari</h3>
            <p>Team Manager</p>
            <p>Graphic Designer</p>
            <div class="social-links">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/harshit.agrahari.10"
              >
                <i class="fab fa-facebook"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/harshit-agrahari-3515b1195/"
              >
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <br />
        <div class="profile-card col-md-4 col-10">
          <div class="img">
            <img alt="testimg" src={ishika} />
          </div>
          <div class="caption">
            <h3>Ishika Gupta</h3>
            <p>Web Developer</p>
            <div class="social-links">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/confusishika"
              >
                <i class="fab fa-facebook"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/ishika-gupta-764036201/"
              >
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <br />
        <div class="profile-card col-md-4 col-10">
          <div class="img">
            <img alt="testimg" src={shivang} />
          </div>
          <div class="caption">
            <h3>Shivang Dwivedi</h3>
            <p>Web Developer</p>
            <div class="social-links">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/profile.php?id=100064180809842"
              >
                <i class="fab fa-facebook"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/shivang-dwivedi-b83173212/"
              >
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <br />
        <div class="profile-card col-md-4 col-sm-10">
          <div class="img">
            <img alt="testimg" src={arpita} />
          </div>
          <div class="caption">
            <h3>Arpita Varshneya</h3>
            <p>Web Developer</p>
            <div class="social-links">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/arpita.varshneya.5"
              >
                <i class="fab fa-facebook"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/arpita-varshneya-55ab6a202/"
              >
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <br />
        <div class="profile-card col-md-4 col-10">
          <div class="img">
            <img alt="testimg" src={anushka} />
          </div>
          <div class="caption">
            <h3>Anushka Yadav</h3>
            <p>Database Management</p>
            <div class="social-links">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/profile.php?id=100061025419186"
              >
                <i class="fab fa-facebook"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/anushka-yadav-3874ab210/"
              >
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default team;
