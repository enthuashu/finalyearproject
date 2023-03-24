import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import login from "../images/login.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const history = useHistory();
  const [user, setuser] = useState({
    email: "",
    password: "",
  });
  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setuser({
      ...user,
      [name]: value,
    });
  };
  const PostData = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    const data = {
      email,
      password,
    };
    if (email.length === 0 || password.length === 0)
      return toast.error("Empty fields");
    await axios
      .post(`/api/user/signin`, data)
      .then((res) => {
        if (res.data.success) {
          toast.success("Successfully registered");
          history.push("/welcome");
        }
      })
      .catch((err) => {
        toast.error(err.response.data.error, { position: "bottom-right" });
      });
  };

  return (
    <div>
      <ToastContainer />
      <div
        style={{ backgroundColor: "lightskyblue" }}
        class="container-fluid  px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto"
      >
        <div class="card card0 border-0">
          <div class="row d-flex justify-content-center align-items-center">
            <div class="col-lg-6">
              <div class="card1 pb-5">
                <div class="row px-3 justify-content-center mt-4 mb-5 border-line">
                  <img alt="testimg" src={login} class="image" />
                </div>
                <p
                  className="text-center"
                  style={{ color: "darkblue", fontWeight: "bolder" }}
                >
                  Medical Support Services Portal (MSSP)
                </p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="card2 card border-0 px-4 py-5">
                <h3
                  style={{
                    backgroundColor: "#311b92",
                    color: "#ffffff",
                    padding: "8px",
                    borderRadius: "0.5rem",
                  }}
                >
                  Login to Medical Support Services Portal (MSSP)
                </h3>

                <div class="row px-3 mb-4"></div>
                <div class="row px-3">
                  <label class="mb-1">
                    <h6 class="mb-0 text-sm">Email Address</h6>
                  </label>
                  <input
                    class="mb-4"
                    type="email"
                    name="email"
                    onChange={handleInputs}
                    value={user.name}
                    placeholder="Enter a valid email address"
                  />
                </div>
                <div class="row px-3">
                  <label class="mb-1">
                    <h6 class="mb-0 text-sm">Password</h6>
                  </label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleInputs}
                    value={user.password}
                    placeholder="Enter password"
                  />
                </div>

                <div class="row mb-3 px-3">
                  <button onClick={PostData} type="submit" class="btn">
                    Login
                  </button>
                </div>
                <div class="row mb-4 px-3">
                  <small class="font-weight-bold">
                    Don't have an account?
                    <Link to="/register" class="text-danger ">
                      Register
                    </Link>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
