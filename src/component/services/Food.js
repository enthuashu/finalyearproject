import React from "react";
import hospitalPNG from "../../images/food.png";

const foodAPI = [
  {
    imgsrc: `${hospitalPNG}`,
    name: "Bobina Restaurant",
    available: 20,
    delivery: "Yes",
    address: "Gorakhpur",
    phone: "+918957258598",
  },
  {
    imgsrc: `${hospitalPNG}`,
    name: "Shahi Dhaba",
    available: 20,
    delivery: "No",
    address: "Gorakhpur",
    phone: "+918957258598",
  },
  {
    imgsrc: `${hospitalPNG}`,
    name: "Chaudhary Restaurant",
    available: 20,
    delivery: "Yes",
    address: "Gorakhpur",
    phone: "+918957258598",
  },
  {
    imgsrc: `${hospitalPNG}`,
    name: "Green Valley Restaurant",
    available: 20,
    delivery: "Yes",
    address: "Gorakhpur",
    phone: "+918957258598",
  },
  {
    imgsrc: `${hospitalPNG}`,
    name: "Royal Restaurant",
    available: 20,
    delivery: "No",
    address: "Gorakhpur",
    phone: "+918957258598",
  },
  {
    imgsrc: `${hospitalPNG}`,
    name: "Singh Restaurant",
    available: 20,
    delivery: "Yes",
    address: "Gorakhpur",
    phone: "+918957258598",
  },
  {
    imgsrc: `${hospitalPNG}`,
    name: "Shehenshah Restaurant",
    available: 20,
    delivery: "Yes",
    address: "Gorakhpur",
    phone: "+918957258598",
  },
];
function Food() {
  return (
    <div className="container">
      <h1
        style={{
          backgroundColor: "#311b92",
          color: "#ffffff",
          padding: "8px",
          borderRadius: "0.5rem",
        }}
        className="text-center p-5"
      >
        {" "}
        Food Availability Data
      </h1>
      {foodAPI.map((foodData, index) => {
        return (
          <div class="card mb-3 shadow p-3 mb-5 bg-body rounded">
            <div class="row g-0">
              <div class="col-4">
                <img
                  alt="testimg"
                  src={foodData.imgsrc}
                  class="img-fluid img-thumbnail data__image"
                />
              </div>
              <div class="col-8">
                <div class="card-body">
                  <h5 class="title card-title">{foodData.name}</h5>

                  <p class="card-text">
                    {" "}
                    <span> Availabile Food for :</span> {foodData.available}{" "}
                    patients
                  </p>
                  <p class="card-text">
                    {" "}
                    <span> Home delivery :</span> {foodData.delivery}
                  </p>
                  <p class="card-text">
                    {" "}
                    <span> Contact :</span> {foodData.phone}
                  </p>
                  <p class="card-text">
                    {" "}
                    <span> Address :</span> {foodData.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <p style={{ fontWeight: "bold" }}>
        Note: The Data being shown here are dummy right now, just to explain the
        working of the platform!
      </p>
    </div>
  );
}

export default Food;
