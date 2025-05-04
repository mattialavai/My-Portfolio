import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <div className="hero-content">
        <h1>Hi, <span>I'm Mattia Lavai</span> <br /> Frontend Developer & UI/UX Enthusiast</h1>
        <p>Crafting beautiful, responsive, and user-friendly web applications.</p>
        <div className="hero-action">
          <div className="hero-connect"><AnchorLink className='anchor-link'offset={50} href='#contact'>Let's Connect</AnchorLink></div>
          <a href="/Mattia_Lavai_Resume.pdf" target="_blank" rel="noopener noreferrer" className="hero-resume">
  My Resume
</a>

        </div>
      </div>
      <img src={profile_img} alt='Profile' className="profile-img" />
    </div>
  )
}

export default Hero
