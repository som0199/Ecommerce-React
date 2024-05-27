import React from "react";

const WomenCarousel = () => {
  return (
    <div
      id="carouselExampleAutoplaying"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-220224-MAINBANNER-Z1-P7-INDIEPICKS-NYRIKA-MIN70.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-220224-MAINBANNER-Z1-P5-STYLI-USPA-MIN50.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-220224-MAINBANNER-Z1-P3-AVAASA-FUSION-MIN60.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default WomenCarousel;
