import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <h1>
          Hi, I'm <span>Mattia Lavai</span>
        </h1>

        <h2 className="hero-role">
          Frontend Developer & UI/UX Designer
        </h2>

        <p className="hero-description">
          I build modern, responsive web applications using React, Next.js,
          and TypeScript with a focus on performance, clean design,
          and great user experience.
        </p>

        {/* Tech Stack */}
        <div className="hero-tech">
          <span>React</span>
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>Tailwind</span>
        </div>

        {/* Buttons */}
        <div className="hero-action">

          <AnchorLink
            className="hero-connect"
            offset={50}
            href="#contact"
          >
            Let's Connect
          </AnchorLink>

          <a
            href="/Mattia_Lavai_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-resume"
          >
            Download Resume
          </a>

        </div>

      </div>

      <div className="hero-image">
        <img src={profile_img} alt="Mattia Lavai" className="profile-img" />
      </div>

    </section>
  );
};

export default Hero;