import React, { useState } from "react";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.contactContainer}>
        <div>
            <h2>Contact Us</h2>
            <p>Have questions or feedback? We’d love to hear from you.</p>
        </div>

        {!submitted ? (
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        ) : (
          <p className={styles.thankYou}>🎉 Thank you! We’ll get back to you soon.</p>
        )}
      </div>
    </section>
  );
};

export default ContactUs;
