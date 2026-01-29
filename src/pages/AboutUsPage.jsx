import React from "react";
import "./AboutUsPage.css";
import RajMandwal from "./../images/RajMandwal.jpg";
import Sapna from "./../images/SapnaK.jpg";
import Anishka from "./../images/Anishka.jpg";
import Devansh from "./../images/Devansh.jpg";

const teamMembers = [
  { name: "Raj Mandwal",  img:RajMandwal },
  { name: "Devansh Gupta",  img:Devansh},
  { name: "Sapna Kumari",  img: Sapna },
  { name: "Anishka Gupta",  img: Anishka }
];

const AboutUs = () => {
  return (
    <div className="about-container" style={{ minHeight: "100vh" }}>
      <h1 className="about-title">Meet Our Team</h1>
      <p className="about-subtitle">
        We are a passionate group of developers building MySecondHome to make PG and rental living simple, secure, and stress-free for everyone.
      </p>

      {/* Short description instead of group photo */}
      <div className="about-description">
        <p>
          MySecondHome connects property owners and guests through a smart digital platform. From easy room discovery to secure bookings and wallet payments, we focus on comfort, trust, and convenience.
        </p>
      </div>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.img} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>

      <div className="mission">
        <h2>Our Mission</h2>
        <p>
          To create a reliable digital home where finding and managing accommodation is fast, transparent, and hassle-free.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
