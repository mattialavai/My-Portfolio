import React, { useState } from 'react';
import './Footer.css';
import footer_logo2 from '../../assets/footer_logo2.svg';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "e81c6f86-201a-49b8-85e7-b68f543f0260");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      event.target.reset(); // ✅ Reset form after successful submission
      setSubscribed(true);
    }
  };

  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-top-left'>
          <img src={footer_logo2} alt='Mattia Lavai Logo' />
          <p>I’m a passionate frontend developer with over two (2) years of experience building responsive and interactive web applications.</p>
        </div>

        <div className='footer-top-right'>
          {!subscribed ? (
            <form onSubmit={handleSubscribe} className='footer-form'>
              <div className='footer-email-input'>
                <img src={user_icon} alt='User Icon' />
                <input type='email' name='email' placeholder='Enter your email' required />
              </div>
              <button type='submit' className='footer-subscribe'>Subscribe</button>
            </form>
          ) : (
            <div className='footer-thankyou'>
              <h4>🎉 Thank you for subscribing!</h4>
              <p>We'll keep you updated with exciting news.</p>
            </div>
          )}
        </div>
      </div>

      <hr />

      <div className='footer-bottom'>
        <p className='footer-bottom-left'>@2024 Mattia Lavai. All rights reserved</p>
        <div className='footer-bottom-right'>
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
