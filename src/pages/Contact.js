import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Contact.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_65soir4',
      'template_xr7e6ih',
      form.current,
      'MlQGMWIlmV76uUODd'
    )
      .then(() => {
        alert('Message sent successfully!');
        form.current.reset();
      }, (error) => {
        alert('Failed to send message. Please try again later.');
        console.error('EmailJS Error:', error);
      });
  };

  return (
    <>
      <div className="wrapper">
        <nav className="navbar">
          <Link to="/" className="logo">My Portfolio</Link>
          <div className="menu-items">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>
      </div>

      <div className="wrapper contact-container">
        <motion.section
          className="contact-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Contact Me
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            If you'd like to get in touch, feel free to reach out through the following:
          </motion.p>

          {/* Contact Methods */}
          <motion.div
            className="contact-method"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <strong>Email:</strong>
            <a href="mailto:manvitha3626@gmail.com">manvitha3626@gmail.com</a>
          </motion.div>

          <motion.div
            className="contact-method"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <strong>LinkedIn:</strong>
            <a
              href="https://www.linkedin.com/in/manvitha-dungi-8a8040211/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn Profile
            </a>
          </motion.div>

          <motion.div
            className="contact-method"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <strong>GitHub:</strong>
            <a
              href="https://github.com/ManvithaDungi"
              target="_blank"
              rel="noreferrer"
            >
              github.com/ManvithaDungi
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.section>
      </div>
    </>
  );
}

export default Contact;
