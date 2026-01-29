// import { useState } from "react";
// import img1 from "../images/Pg1.jpg";
// import img2 from "../images/pg2.jpg";
// import img3 from "../images/pg3.jpg";
// import img4 from "../images/pg4.jpg";
// import img5 from "../images/pg5.jpg";
// import img6 from "../images/Pg6.jpg";
// import "./Carousel.css";

// const images = [img1, img2, img3, img4, img5, img6];

// const Carousel = () => {
//   const [current, setCurrent] = useState(0);

//   const next = () => setCurrent((current + 1) % images.length);
//   const prev = () => setCurrent((current - 1 + images.length) % images.length);

//   return (
//     <div className="carousel-container">
//       <img src={images[current]} className="carousel-image" alt="slide" />

//       <div className="hero-overlay">
//         <h1>Your Perfect PG Awaits</h1>
//         <p>Comfortable • Affordable • Secure Living</p>
//       </div>

//       <button className="nav-btn left" onClick={prev}>❮</button>
//       <button className="nav-btn right" onClick={next}>❯</button>
//     </div>
//   );
// };

// export default Carousel;

import carousel1 from "../images/carousel_1.png";
import carousel2 from "../images/Room1.png";
import carousel3 from "../images/Room2.png";
import carousel4 from "../images/Room3.png";

const Carousel = () => {
  return (
    <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        <button data-bs-target="#carouselExample" data-bs-slide-to="0" className="active"></button>
        <button data-bs-target="#carouselExample" data-bs-slide-to="1"></button>
        <button data-bs-target="#carouselExample" data-bs-slide-to="2"></button>
        <button data-bs-target="#carouselExample" data-bs-slide-to="3"></button>
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={carousel1} className="d-block w-100" alt="slide1" />
        </div>

        <div className="carousel-item">
          <img src={carousel2} className="d-block w-100" alt="slide2" />
        </div>

        <div className="carousel-item">
          <img src={carousel3} className="d-block w-100" alt="slide3" />
        </div>

        <div className="carousel-item">
          <img src={carousel4} className="d-block w-100" alt="slide4" />
        </div>
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default Carousel;