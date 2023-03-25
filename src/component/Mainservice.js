import React from "react";
import { Link, useHistory } from "react-router-dom";
import beds from "../images/beds.png";
import medicine from "../images/medicine.png";
import hospital from "../images/hospital.png";
import oxygen from "../images/oxygen.png";
import plasma from "../images/plasma.png";
import volunteer from "../images/7.jpg";
import { useAuth } from "../Utils/useAuth";

const Mainservice = () => {
  const { user } = useAuth();
  const history = useHistory();
  if (user && user.type === "patient")
    return (
      <div>
        <div class="container">
          <h1
            className="text-xl-center"
            style={{
              backgroundColor: "#311b92",
              color: "#ffffff",
              margin: "10px",
              padding: "10px",
              borderRadius: "0.5rem",
            }}
          >
            Our Services
          </h1>
          <div class="row" style={{ padding: "10px" }}>
            <div class="col-sm-4 py-3 py-sm-0">
              <div class="card box-shadow ">
                <img
                  alt="testimg"
                  style={{ height: "200px" }}
                  class="card-img-top"
                  src={beds}
                />
                <div class="card-body">
                  <h5 class="card-title">Bed Data</h5>
                  <Link to="/datadashboard" class="btn btn-primary">
                    Check
                  </Link>
                </div>
              </div>
            </div>

            <div class="col-sm-4 py-3 py-sm-0">
              <div class="card box-shadow ">
                <img
                  alt="testimg"
                  style={{ height: "200px" }}
                  class="card-img-top"
                  src={oxygen}
                />
                <div class="card-body">
                  <h5 class="card-title">Oxygen Cylinder Availablity</h5>
                  <Link to="/datadashboard" class="btn btn-primary">
                    Check
                  </Link>
                </div>
              </div>
            </div>

            <div class="col-sm-4 py-3 py-sm-0">
              <div class="card box-shadow ">
                <img
                  alt="testimg"
                  style={{ height: "200px" }}
                  class="card-img-top"
                  src={hospital}
                />
                <div class="card-body">
                  <h5 class="card-title">Hospital contact</h5>
                  <Link to="/datadashboard" class="btn btn-primary">
                    Check
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div class="row">
            <div class="col-sm-4 py-3 py-sm-0">
              <div class="card box-shadow ">
                <img
                  alt="testimg"
                  style={{ height: "200px" }}
                  class="card-img-top"
                  src={volunteer}
                />
                <div class="card-body">
                  <h5 class="card-title">Volunteer Resources</h5>
                  <Link to="/datadashboard" class="btn btn-primary">
                    Check
                  </Link>
                </div>
              </div>
            </div>

            <div class="col-sm-4 py-3 py-sm-0">
              <div class="card box-shadow ">
                <img
                  alt="testimg"
                  style={{ height: "200px" }}
                  class="card-img-top"
                  src={plasma}
                />
                <div class="card-body">
                  <h5 class="card-title">Blood</h5>
                  <Link to="/datadashboard" class="btn btn-primary">
                    Check
                  </Link>
                </div>
              </div>
            </div>

            <div class="col-sm-4 py-3 py-sm-0">
              <div class="card box-shadow ">
                <img
                  alt="testimg"
                  style={{ height: "200px" }}
                  class="card-img-top"
                  src={medicine}
                />
                <div class="card-body">
                  <h5 class="card-title">Medicine</h5>
                  <Link to="/datadashboard" class="btn btn-primary">
                    Check
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    );
  else if (user && user.type === "doctor")
    return (
      <div>
        <div class="container">
          <h1
            className="text-xl-center"
            style={{
              backgroundColor: "#311b92",
              color: "#ffffff",
              margin: "10px",
              padding: "10px",
              borderRadius: "0.5rem",
            }}
          >
            My Hospital Database
          </h1>
          <div class="row" style={{ padding: "10px" }}>
            <div class="col-sm-4 py-3 py-sm-0">
              <div class="card box-shadow ">
                <img
                  alt="testimg"
                  style={{ height: "200px" }}
                  class="card-img-top"
                  src={beds}
                />
                <div class="card-body">
                  <h5 class="card-title">Bed Data</h5>
                  <Link to="/datadashboard" class="btn btn-primary">
                    Check
                  </Link>
                </div>
              </div>
            </div>

            <div class="col-sm-4 py-3 py-sm-0">
              <div class="card box-shadow ">
                <img
                  alt="testimg"
                  style={{ height: "200px" }}
                  class="card-img-top"
                  src={oxygen}
                />
                <div class="card-body">
                  <h5 class="card-title">Oxygen Cylinder Availablity</h5>
                  <Link to="/datadashboard" class="btn btn-primary">
                    Check
                  </Link>
                </div>
              </div>
            </div>

            <div class="col-sm-4 py-3 py-sm-0">
              <div class="card box-shadow ">
                <img
                  alt="testimg"
                  style={{ height: "200px" }}
                  class="card-img-top"
                  src={hospital}
                />
                <div class="card-body">
                  <h5 class="card-title">Hospital contact</h5>
                  <Link to="/datadashboard" class="btn btn-primary">
                    Check
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div class="row">
            <div class="col-sm-4 py-3 py-sm-0">
              <div class="card box-shadow ">
                <img
                  alt="testimg"
                  style={{ height: "200px" }}
                  class="card-img-top"
                  src={volunteer}
                />
                <div class="card-body">
                  <h5 class="card-title">Volunteer Resources</h5>
                  <Link to="/datadashboard" class="btn btn-primary">
                    Check
                  </Link>
                </div>
              </div>
            </div>

            <div class="col-sm-4 py-3 py-sm-0">
              <div class="card box-shadow ">
                <img
                  alt="testimg"
                  style={{ height: "200px" }}
                  class="card-img-top"
                  src={plasma}
                />
                <div class="card-body">
                  <h5 class="card-title">Blood</h5>
                  <Link to="/datadashboard" class="btn btn-primary">
                    Check
                  </Link>
                </div>
              </div>
            </div>

            <div class="col-sm-4 py-3 py-sm-0">
              <div class="card box-shadow ">
                <img
                  alt="testimg"
                  style={{ height: "200px" }}
                  class="card-img-top"
                  src={medicine}
                />
                <div class="card-body">
                  <h5 class="card-title">Medicine</h5>
                  <Link to="/datadashboard" class="btn btn-primary">
                    Check
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    );
  else
    return (
      <>
        <h1>You have been logged out,Please Log in...</h1>
        <input
          onClick={() => history.push("/login")}
          type="submit"
          style={{
            backgroundColor: "purple",
            width: "auto",
            padding: "5px 20px",
            color: "white",
          }}
          value="Login"
          title="Login"
        />
      </>
    );
};

export default Mainservice;
