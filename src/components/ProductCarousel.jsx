import React from "react";

const ProductContainer = () => {
  return (
    <div
      id="carouselExampleAutoplaying"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-15022024-MainBannerDailyChanging-Z1-P1-GFS-4080.gif"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-21022024-MainBannerDailyChanging-Z1-P4-accessoriesfest-Vincentchase-miraggio-casio-4080.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-04122023-MainBannerDailyChanging-Z1-P3-Clearance-Min75.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-21022024-MainBannerDailyChanging-Z1-P6-Ishin-Sojanya-flat55.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-04122023-MainBannerDailyChanging-Z1-P7-Mnsgap-upto50.jpg"
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

export default ProductContainer;
