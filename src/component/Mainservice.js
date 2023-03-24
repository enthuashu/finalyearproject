import React from "react";
import { Link } from "react-router-dom";
import beds from "../images/beds.png";
import food from "../images/food.png";
import medicine from "../images/medicine.png";
import hospital from "../images/hospital.png";
import oxygen from "../images/oxygen.png";
import plasma from "../images/plasma.png";
import volunteer from "../images/7.jpg";

const Mainservice = () => {
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
                <Link to="/beds" class="btn btn-primary">
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
                <Link to="/oxygen" class="btn btn-primary">
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
                <Link to="/hospital" class="btn btn-primary">
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
                <Link to="/volunteer" class="btn btn-primary">
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
                <h5 class="card-title">Plasma</h5>
                <Link to="/plasma" class="btn btn-primary">
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
                <Link to="/medicine" class="btn btn-primary">
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
                src={food}
              />
              <div class="card-body">
                <h5 class="card-title">Food Services</h5>
                <Link to="/food" class="btn btn-primary">
                  Check
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainservice;
