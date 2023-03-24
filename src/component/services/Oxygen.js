import React from "react";
import medanta from "../../images/Medanta.jpg";
import aone from "../../images/aone.jpg";
import arpit from "../../images/arpit.jpg";
import rachit from "../../images/rachit.jpg";
import seva from "../../images/seva.jpg";
import shivay from "../../images/shivay.jpg";
import city from "../../images/city.jpg";

const bedAPI = [
  {
    imgsrc: `${medanta}`,
    name: "Medanta Hospital",
    available: 35,
    address: "Gorakhpur",
    icu: "No",
    phone: "+919856235647",
  },
  {
    imgsrc: `${aone}`,
    name: "A-One Hospital",
    available: 93,
    address: "Gorakhpur",
    icu: "Yes",
    phone: "+919856244539",
  },
  {
    imgsrc: `${arpit}`,
    name: "Arpit Hospital",
    available: 74,
    address: "Gorakhpur",
    icu: "Yes",
    phone: "+919586598547",
  },
  {
    imgsrc: `${rachit}`,
    name: "Rachit Hospital",
    available: 13,
    address: "Gorakhpur",
    icu: "No",
    phone: "+919856458798",
  },
  {
    imgsrc: `${seva}`,
    name: "Seva Hospital",
    available: 50,
    address: "Gorakhpur",
    icu: "Yes",
    phone: "+919658465795",
  },
  {
    imgsrc: `${shivay}`,
    name: "Shivaay Hospital",
    available: 20,
    address: "Gorakhpur",
    icu: "Yes",
    phone: "+919532146589",
  },
  {
    imgsrc: `${city}`,
    name: "City Hospital",
    available: 25,
    address: "Gorakhpur",
    icu: "No",
    phone: "+919568214578",
  },
];
function Bed() {
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
        Oxygen Cylinder Availability
      </h1>
      {bedAPI.map((bedData, index) => {
        return (
          <div class="card mb-3 shadow p-3 mb-5 bg-body rounded">
            <div class="row g-0">
              <div class="col-4">
                <img
                  alt="testimg"
                  src={bedData.imgsrc}
                  class="img-fluid img-thumbnail data__image"
                />
              </div>
              <div class="col-8">
                <div class="card-body">
                  <h5 class="title card-title">{bedData.name}</h5>

                  <p class="card-text">
                    {" "}
                    <span> Availabile Oxygen Cylinders :</span>{" "}
                    {bedData.available}
                  </p>
                  <p class="card-text">
                    {" "}
                    <span> Contact :</span> {bedData.phone}
                  </p>
                  <p class="card-text">
                    {" "}
                    <span> Address :</span> {bedData.address}
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

export default Bed;
