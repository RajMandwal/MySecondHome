import { Link } from "react-router-dom";
import pg_list from "./../images/list_pg.png";
import hotel_book from "./../images/hotel_book_customer.png";
import secure_payment from "./../images/secure_payment.png";
import Carousel from "./Carousel";
import "./HomePage.css";

const features = [
  {
    img: pg_list,
    title: "Easy Property Listing",
    text: "List rooms quickly and manage bookings effortlessly from one dashboard."
  },
  {
    img: hotel_book,
    title: "Instant Room Booking",
    text: "Search, compare and book PG rooms in just a few clicks."
  },
  {
    img: secure_payment,
    title: "100% Secure Payments",
    text: "Fast and protected transactions with wallet & gateway support."
  }
];

const testimonials = [
  { text: "Found my PG within minutes. Super smooth experience!", name: "Guest" },
  { text: "My rooms get booked regularly now. Love this platform!", name: "Owner" },
  { text: "Payments are quick and secure. Highly recommend!", name: "Guest" }
];

const HomePage = () => {
  return (
    <div className="home-wrapper">

      {/* HERO */}
      <Carousel />

      <div className="container text-center mt-5">
        <h1 className="display-4">Find Your Perfect PG Accommodation</h1>
        <p className="lead">
          A hassle-free platform to browse, book, and manage properties in just
          a few clicks.
        </p>
        <Link
          to="/property/explore"
          className="btn btn-lg bg-color custom-bg-text mt-4"
        >
          Explore Now
        </Link>
      </div>

      <section className="hero-text text-center">
        <h1>Find Your Perfect PG Accommodation</h1>
        <p>Browse, book and manage properties with ease</p>
        <Link to="/property/explore" className="btn hero-btn">Explore Rooms</Link>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="container">
          <div className="row">
            {features.map((f, i) => (
              <div className="col-md-4" key={i}>
                <div className="feature-card">
                  <img src={f.img} alt="feature" />
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="container">
          <div className="row">
            {testimonials.map((t, i) => (
              <div className="col-md-4" key={i}>
                <div className="testimonial-card">
                  <p>“{t.text}”</p>
                  <span>- {t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Find Your Next PG?</h2>
        <p>Join hundreds of happy customers today</p>
        <Link to="/user/guest/register" className="btn cta-btn">Get Started</Link>
      </section>

    </div>
  );
};

export default HomePage;
