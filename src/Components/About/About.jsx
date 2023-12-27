import React from 'react';
import './About.css';
import aboutME from '../../assets/main3.png';
import { FaAward } from "react-icons/fa";  
const About = () => {
  return (
    <section id='About'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={aboutME} alt="aboutME" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon' /> 
              <h5>Experience</h5>
              <small>2+ Years of Experience</small>
            </article>
            <article className='about_card'>
              <FaAward className='about_icon' /> 
              <h5>Skills</h5>
              <small>React, JavaScript, HTML, CSS, SQL, Power BI, Excel, Power Apps</small>
            </article>
            <article className='about_card'>
              <FaAward className='about_icon' /> 
              <h5>Education</h5>
              <small>Master's in Business Administration</small>
            </article>
          </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus repellat accusantium numquam et necessitatibus suscipit velit ipsa id dolor quas voluptates dolores ex consequuntur, minima, veniam eum est repudiandae hic?
            </p>
            <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
