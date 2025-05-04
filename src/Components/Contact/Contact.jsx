import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e81c6f86-201a-49b8-85e7-b68f543f0260");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      event.target.reset(); // ✅ Reset form after successful submission
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000); // Optional: hide thank-you after 4 sec
    }
  };

  return (
    <div className='contact'>
      <div className='contact-title'>
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt='' />
      </div>
      <div id='contact' className='contact-section'>
        <div className='contact-left'>
          <h1>Let's talk</h1>
          <p>Whether you have a question, want to work together on a project, or just want to say hi, feel free to reach out!</p>
          <div className='contact-details'>
            <div className='contact-detail'>
              <img src={mail_icon} alt='email icon' /> <p>mattialavai@gmail.com</p>
            </div>
            <div className='contact-detail'>
              <img src={call_icon} alt='phone icon' /> <p>+232 76 877-246</p>
            </div>
            <div className='contact-detail'>
              <img src={location_icon} alt='location icon' /> <p>Western Area Freetown - Sierra Leone</p>
            </div>
          </div>
        </div>

        {!submitted ? (
          <form onSubmit={onSubmit} className='contact-right'>
            <label>Your Name</label>
            <input type='text' placeholder='Enter your name' name='name' required />
            <label>Your Email</label>
            <input type='email' placeholder='Enter your email' name='email' required />
            <label>Write your message here!</label>
            <textarea name='message' rows='8' placeholder='Enter your message' required></textarea>
            <button type='submit' className='contact-submit'>Submit Now</button>
          </form>
        ) : (
          <div className='contact-thankyou'>
            <h3>🎉 Thank you for reaching out!</h3>
            <p>I’ll get back to you as soon as possible.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
