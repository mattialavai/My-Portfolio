import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import about_profile from '../../assets/about_profile.png'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt=''/>
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={about_profile} alt=''/>
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I’m a passionate frontend developer with over two (2) years of experience building responsive and interactive web applications. My expertise lies in turning complex problems into intuitive designs, using HTML, CSS, JavaScript, and modern frameworks like React.js. I thrive on solving challenges and continuously improving my skills in both UI design and frontend development.</p>
                <p>I’m currently exploring backend development with Django and Firebase, and I’m always excited to learn new technologies that push the boundaries of web development.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML5, CSS3, JavaScript (ES6+)</p><hr style={{width: "80%"}}/></div>
                <div className="about-skill"><p>React.js, Redux</p><hr style={{width: "60%"}}/></div>
                <div className="about-skill"><p>UI/UX Design</p><hr style={{width: "70%"}}/></div>
                <div className="about-skill"><p>Git, Version Control</p><hr style={{width: "80%"}}/></div>
                <div className="about-skill"><p>Responsive Web Design</p><hr style={{width: "70%"}}/></div>
                <div className="about-skill"><p>Firebase, Django (Beginner)</p><hr style={{width: "40%"}}/></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>2+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>85+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
