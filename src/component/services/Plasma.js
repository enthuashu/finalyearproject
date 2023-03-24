import React from "react";
import hospitalPNG from "../../images/plasma.png";

const plasmaAPI = [
  {
    imgsrc: `${hospitalPNG}`,
    name: "Savitri Blood Bank",
    available: 20,
    address: "Gorakhpur",
    phone: "+919598652365",
  },
  {
    imgsrc: `${hospitalPNG}`,
    name: "Air Force Hospital Blood Bank",
    available: 25,
    address: "Gorakhpur",
    phone: "+919598652365",
  },
  {
    imgsrc: `${hospitalPNG}`,
    name: "Fatima Hospital Blood Bank",
    available: 15,
    address: "Gorakhpur",
    phone: "+919598652365",
  },
  {
    imgsrc: `${hospitalPNG}`,
    name: "Life Line Charitable Blood Bank",
    available: 35,
    address: "Gorakhpur",
    phone: "+919598652365",
  },
  {
    imgsrc: `${hospitalPNG}`,
    name: "City Blood Bank",
    available: 45,
    address: "Gorakhpur",
    phone: "+919598652365",
  },
  {
    imgsrc: `${hospitalPNG}`,
    name: "Blood Bank BRD Medical College",
    available: 35,
    address: "Gorakhpur",
    phone: "+919598652365",
  },
  {
    imgsrc: `${hospitalPNG}`,
    name: "Savitri Blood Bank",
    available: 50,
    address: "Gorakhpur",
    phone: "+919598652365",
  },
];
function Plasma() {
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
        Plasma Availability Data
      </h1>
      {plasmaAPI.map((plasmaData, index) => {
        return (
          <div class="card mb-3 shadow p-3 mb-5 bg-body rounded">
            <div class="row g-0">
              <div class="col-4">
                <img
                  alt="testimg"
                  src={plasmaData.imgsrc}
                  class="img-fluid img-thumbnail data__image"
                />
              </div>
              <div class="col-8">
                <div class="card-body">
                  <h5 class="title card-title">{plasmaData.name}</h5>
                  <p class="card-text">
                    {" "}
                    <span>Available Units:</span> {plasmaData.available}
                  </p>

                  <p class="card-text">
                    {" "}
                    <span> Contact :</span> {plasmaData.phone}
                  </p>
                  <p class="card-text">
                    {" "}
                    <span> Address :</span> {plasmaData.address}
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

export default Plasma;
