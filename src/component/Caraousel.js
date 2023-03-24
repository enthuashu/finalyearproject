import React from "react";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";

function Caraousel() {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel carousel-dark slide carousel-fade"
        data-bs-ride="carousel"
        data-interval="1000"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img alt="testimg" src={img1} className="d-block w-100" />
            <div className="carousel-caption d-none d-md-block">
              {/* <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p> */}
            </div>
          </div>
          <div className="carousel-item">
            <img alt="testimg" src={img2} className="d-block w-100" />
            <div className="carousel-caption d-none d-md-block">
              {/* <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p> */}
            </div>
          </div>
          <div className="carousel-item">
            <img alt="testimg" src={img3} className="d-block w-100" />
            <div className="carousel-caption d-none d-md-block">
              {/* <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p> */}
            </div>
          </div>
          <div className="carousel-item">
            <img alt="testimg" src={img4} className="d-block w-100" />
            <div className="carousel-caption d-none d-md-block">
              {/* <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p> */}
            </div>
          </div>
          <div className="carousel-item">
            <img alt="testimg" src={img5} className="d-block w-100" />
            <div className="carousel-caption d-none d-md-block">
              {/* <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p> */}
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Caraousel;
