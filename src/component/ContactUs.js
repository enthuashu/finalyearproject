import React, { useState } from "react";

function ContactUs() {
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setContact({
      ...contact,
      [name]: value,
    });
  };
  const PostData = async (e) => {
    e.preventDefault();
    const { name, phone, email, subject } = contact;
    try {
      const res = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          subject,
        }),
      });

      if (res.status === 201) {
        window.alert(
          "Your Details has been submitted! Someone from our team will contact you soon."
        );
        setContact({
          name: "",
          phone: "",
          email: "",
          subject: "",
        });
      } else {
        window.alert("Please Fill your details properly!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container p-5">
      <section class="mb-4">
        <h2 class="h1-responsive font-weight-bold text-center my-4">
          Contact Us
        </h2>

        <p class="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>

        <div class="row">
          <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" method="POST">
              <div class="row">
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <label for="name" class="">
                      Your name
                    </label>
                    <input
                      type="text"
                      onChange={handleInputs}
                      value={contact.name}
                      id="name"
                      name="name"
                      class="form-control"
                      required
                    />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <label for="email" class="">
                      Your email
                    </label>
                    <input
                      type="email"
                      onChange={handleInputs}
                      value={contact.email}
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
                      Your Phone Number
                    </label>
                    <input
                      type="number"
                      onChange={handleInputs}
                      value={contact.phone}
                      id="email"
                      name="phone"
                      class="form-control"
                      required
                    />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form">
                    <label for="message">Your message</label>
                    <textarea
                      type="text"
                      onChange={handleInputs}
                      value={contact.subject}
                      id="message"
                      name="subject"
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
                type="submit"
                class="btn"
                onClick={PostData}
                placeholder="Submit"
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

export default ContactUs;
