import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import './Contact.css';

const MotionDiv = ({ children, ...props }) => (
  <motion.div {...props}>{children}</motion.div>
);

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
    <div className="wrapper">
      <motion.header
        className="contact-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="contact-content">
          <MotionDiv
            className="contact-form-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1>Contact Me</h1>
            <p>If you'd like to get in touch, feel free to reach out through the following or use the form below:</p>

            <div className="contact-methods">
              <div>
                <strong>Email:</strong>
                <a href="mailto:manvitha3626@gmail.com">manvitha3626@gmail.com</a>
              </div>
              <div>
                <strong>LinkedIn:</strong>
                <a href="https://www.linkedin.com/in/manvitha-dungi-8a8040211/" target="_blank" rel="noreferrer">LinkedIn Profile</a>
              </div>
              <div>
                <strong>GitHub:</strong>
                <a href="https://github.com/ManvithaDungi" target="_blank" rel="noreferrer">github.com/ManvithaDungi</a>
              </div>
            </div>

            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <input type="text" name="from_name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </MotionDiv>
        </div>
      </motion.header>
    </div>
  );
}

export default Contact;
