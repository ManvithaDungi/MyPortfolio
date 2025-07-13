import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';
import './Contact.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_65soir4', 'template_xr7e6ih', form.current, 'MlQGMWIlmV76uUODd')
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
        <nav>
          <Link to="/" className="logo">My Portfolio</Link>
          <div className="menu-items">
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>
      </div>

      <div className="wrapper contact-container">
        <section className="contact-section">
          <h1>Contact Me</h1>
          <p>If you'd like to get in touch, feel free to reach out through the following:</p>

          <div className="contact-method">
            <strong>Email:</strong>
            <a href="mailto:manvitha3626@gmail.com">manvitha3626@gmail.com</a>
          </div>
          <div className="contact-method">
            <strong>LinkedIn:</strong>
            <a href="https://www.linkedin.com/in/manvitha-dungi-8a8040211/" target="_blank" rel="noreferrer">LinkedIn Profile</a>
          </div>
          <div className="contact-method">
            <strong>GitHub:</strong>
            <a href="https://github.com/ManvithaDungi" target="_blank" rel="noreferrer">github.com/ManvithaDungi</a>
          </div>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input type="text" name="from_name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </div>
    </>
  );
}

export default Contact;
