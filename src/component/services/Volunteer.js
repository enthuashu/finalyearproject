import React, { useState } from "react";

function Volunteer() {
  const [resrc, setresource] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    resource: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setresource({
      ...resrc,
      [name]: value,
    });
  };
  const PostData = async (e) => {
    e.preventDefault();
    const { name, phone, resource, email, message } = resrc;
    const res = await fetch("/addresource", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        resource,
        message,
      }),
    });

    if (res.status === 201) {
      window.alert("Thankyou! Your Resource has been Submitted Successfully!");
      setresource({
        name: "",
        phone: "",
        email: "",
        message: "",
        resource: "",
      });
    } else {
      window.alert("Please Enter Resources before Submitting!");
    }
  };
  return (
    <div className="container p-5">
      <section class="mb-4">
        <h2
          style={{
            backgroundColor: "#311b92",
            color: "#ffffff",
            padding: "8px",
            borderRadius: "0.5rem",
          }}
          class="h1-responsive font-weight-bold text-center my-4"
        >
          Volunteer Resources
        </h2>

        <p class="text-center w-responsive mx-auto mb-5">
          Do you have any verified Resources? We will be very grateful to you if
          you provide us with any of the verified Resources.
        </p>

        <div class="row">
          <div class="col-md-9 mb-md-0 mb-5">
            <form id="resource-form" name="resource-form" method="POST">
              <div class="row">
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <label for="name" class="">
                      Your name (Optional)
                    </label>
                    <input
                      type="text"
                      onChange={handleInputs}
                      value={resrc.name}
                      id="name"
                      name="name"
                      class="form-control"
                    />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <label for="email" class="">
                      Your email (Optional)
                    </label>
                    <input
                      type="email"
                      onChange={handleInputs}
                      value={resrc.email}
                      id="email"
                      name="email"
                      class="form-control"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <label for="email" class="">
                      Your Phone Number (Optional)
                    </label>
                    <input
                      type="number"
                      onChange={handleInputs}
                      value={resrc.phone}
                      id="email"
                      name="phone"
                      class="form-control"
                      required
                    />
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="md-form mb-0">
                  <label for="cars">Select Resource Type:</label>

                  <select
                    onChange={handleInputs}
                    className="form-select"
                    name="resource"
                    value={resrc.resource}
                    id="cars"
                  >
                    <option> Select Type </option>
                    <option value="Beds">Beds</option>
                    <option value="Oxygen">Oxygen</option>
                    <option value="Plasma">Plasma</option>
                    <option value="Medicine">Medicine</option>
                    <option value="Food">Food</option>
                    <option value="Others">
                      Others(Mention in box below){" "}
                    </option>
                  </select>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form">
                    <label for="message"> What/Where is the Resource? </label>
                    <textarea
                      type="text"
                      onChange={handleInputs}
                      value={resrc.message}
                      id="message"
                      name="message"
                      rows="2"
                      required
                      class="form-control md-textarea"
                    ></textarea>
                  </div>
                </div>
              </div>
            </form>

            <div class="text-center text-md-left">
              <input
                class="btn"
                onClick={PostData}
                placeholder="Submit Resource"
                type="submit"
              />
            </div>
            <div class="status"></div>
          </div>

          <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
              <li>
                <i class="fas fa-map-marker-alt fa-2x font__icon"></i>
                <p>Gorakhpur, Uttar Pradesh, India</p>
              </li>

              <li>
                <i class="fas fa-phone mt-4 fa-2x font__icon"></i>
                <p>+ 91 8957885798</p>
              </li>

              <li>
                <i class="fas fa-envelope mt-4 fa-2x font__icon"></i>
                <p>enthuashu@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Volunteer;
