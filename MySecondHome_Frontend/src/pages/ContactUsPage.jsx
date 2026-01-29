import { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactUs.css";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_6zcqy6e",       // ✅ Service ID
        "template_g29zokt",      // ✅ Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        "mFXMml0TTrYs5LRAj"      // ✅ Public Key
      )
      .then(
        () => {
          setSuccessMsg("Thank you for contacting us! We will reach out soon.");
          setFormData({ name: "", email: "", message: "" });

          // auto-hide message after 5 seconds
          setTimeout(() => setSuccessMsg(""), 5000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-overlay">
        <div className="contact-card">
          <h1>Contact Us</h1>
          <p>Have questions or need help? Reach out and we’ll get back to you soon.</p>

          {successMsg && <p className="success-msg">{successMsg}</p>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                required
              />
            </div>

            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
